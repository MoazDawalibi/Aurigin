import { useEffect, useMemo, useState } from 'react';
import { ApiNotice } from './components/ApiNotice';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { fallbackProducts, fallbackSettings } from './api/fallbacks';
import { getProducts, getWebsiteSettings } from './api/auriginApi';
import { translations, type Language } from './i18n';
import { AboutPage } from './pages/AboutPage';
import { CartPage } from './pages/CartPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import type { Product, WebsiteSettings } from './types/api';
import './styles.css';

type PublicPage = 'home' | 'about' | 'products' | 'contact' | 'cart';
type Theme = 'dark' | 'light';

const publicPages: PublicPage[] = ['home', 'about', 'products', 'contact', 'cart'];

function getInitialPage(): PublicPage {
  const hash = window.location.hash.replace('#', '') as PublicPage;
  return publicPages.includes(hash) ? hash : 'home';
}

function getStoredTheme(): Theme {
  return localStorage.getItem('aurigin-theme') === 'light' ? 'light' : 'dark';
}

function getStoredLanguage(): Language {
  return localStorage.getItem('aurigin-language') === 'ar' ? 'ar' : 'en';
}

export default function App() {
  const [page, setPage] = useState<PublicPage>(getInitialPage);
  const [theme, setTheme] = useState<Theme>(getStoredTheme);
  const [language, setLanguage] = useState<Language>(getStoredLanguage);
  const [settings, setSettings] = useState<WebsiteSettings>(fallbackSettings);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const t = translations[language];

  useEffect(() => {
    function onHashChange() {
      setPage(getInitialPage());
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    let active = true;
    async function loadData() {
      setLoading(true);
      try {
        const [settingsResponse, productsResponse] = await Promise.all([getWebsiteSettings(), getProducts()]);
        if (!active) return;
        setSettings({ ...fallbackSettings, ...settingsResponse });
        setProducts(productsResponse);
        setApiMessage(null);
      } catch (error) {
        if (!active) return;
        setSettings(fallbackSettings);
        setProducts(fallbackProducts);
        setApiMessage(t.apiFallback);
      } finally {
        if (active) setLoading(false);
      }
    }
    loadData();
    return () => {
      active = false;
    };
  }, [t.apiFallback]);

  useEffect(() => {
    document.documentElement.style.setProperty('--aurigin-primary', settings.primary_color ?? '#75723d');
    document.title = settings.brand_name ?? 'Aurigin';
  }, [settings]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('aurigin-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('aurigin-language', language);
    if (apiMessage) setApiMessage(t.apiFallback);
  }, [language, apiMessage, t.apiFallback]);

  const sortedProducts = useMemo(
    () => [...products].sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name)),
    [products],
  );

  function navigate(nextPage: string) {
    if (!publicPages.includes(nextPage as PublicPage)) return;
    window.location.hash = nextPage;
    setPage(nextPage as PublicPage);
  }

  return (
    <div className="app-shell">
      <Header
        settings={settings}
        activePage={page}
        theme={theme}
        language={language}
        t={t}
        onNavigate={navigate}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        onToggleLanguage={() => setLanguage((current) => (current === 'en' ? 'ar' : 'en'))}
      />
      <ApiNotice message={apiMessage} />
      {page === 'home' ? <HomePage settings={settings} products={sortedProducts} t={t} onNavigate={navigate} /> : null}
      {page === 'about' ? <AboutPage settings={settings} t={t} /> : null}
      {page === 'products' ? <ProductsPage settings={settings} products={sortedProducts} loading={loading} t={t} /> : null}
      {page === 'contact' ? <ContactPage settings={settings} t={t} /> : null}
      {page === 'cart' ? <CartPage settings={settings} t={t} /> : null}
      <Footer settings={settings} />
    </div>
  );
}
