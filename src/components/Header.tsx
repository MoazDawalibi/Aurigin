import { Languages, Moon, Sun } from 'lucide-react';
import logo from '../assets/logo_rbg.png';
import type { Language, Translation } from '../i18n';
import type { WebsiteSettings } from '../types/api';

type HeaderProps = {
  settings: WebsiteSettings;
  activePage: string;
  theme: 'dark' | 'light';
  language: Language;
  t: Translation;
  onNavigate: (page: string) => void;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
};

const navItems: Array<{ id: string; labelKey: keyof Translation }> = [
  { id: 'home', labelKey: 'navHome' },
  { id: 'about', labelKey: 'navAbout' },
  { id: 'products', labelKey: 'navProducts' },
  { id: 'contact', labelKey: 'navContact' },
  { id: 'cart', labelKey: 'navCart' },
];

export function Header({ settings, activePage, theme, language, t, onNavigate, onToggleTheme, onToggleLanguage }: HeaderProps) {
  const brandName = settings.brand_name ?? 'Aurigin';

  return (
    <header className="site-header">
      <button className="brand-mark" onClick={() => onNavigate('home')} aria-label={`${brandName} home`}>
        <img src={logo} alt={brandName} />
        <span>{brandName}</span>
      </button>
      <div className="header-actions">
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.id} className={activePage === item.id ? 'active' : ''} onClick={() => onNavigate(item.id)} type="button">
              {t[item.labelKey]}
            </button>
          ))}
        </nav>
        <button className="tool-button" type="button" onClick={onToggleTheme} title={theme === 'dark' ? t.themeLight : t.themeDark}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          <span>{theme === 'dark' ? t.themeLight : t.themeDark}</span>
        </button>
        <button className="tool-button" type="button" onClick={onToggleLanguage} title={t.language}>
          <Languages size={18} />
          <span>{language === 'en' ? 'AR' : 'EN'}</span>
        </button>
      </div>
    </header>
  );
}
