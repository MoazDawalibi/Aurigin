import { ArrowRight } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons';
import type { Translation } from '../i18n';
import type { Product, WebsiteSettings } from '../types/api';
import { ProductCard } from '../components/ProductCard';

type HomePageProps = {
  settings: WebsiteSettings;
  products: Product[];
  t: Translation;
  onNavigate: (page: string) => void;
};

export function HomePage({ settings, products, t, onNavigate }: HomePageProps) {
  const featured = products.filter((product) => product.featured).slice(0, 3);
  const slogans = settings.slogans?.length ? settings.slogans : ['Build your Legacy', 'Every Legacy Has An Origin'];

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{settings.brand_name ?? 'Aurigin'}</h1>
          <p className="hero-copy">{slogans[1] ?? slogans[0]}</p>
          <div className="hero-actions">
            <button className="primary-action" onClick={() => onNavigate('products')} type="button">
              {t.shopCollection}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <a className="icon-link" href={settings.instagram_url ?? 'https://www.instagram.com/Aurigin'} target="_blank" rel="noreferrer" aria-label="Aurigin Instagram">
              <InstagramIcon size={20} />
            </a>
            <a className="icon-link" href={`https://wa.me/${(settings.whatsapp_phone ?? '+963958261912').replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" aria-label="Aurigin WhatsApp">
              <WhatsAppIcon size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="collection-strip">
        <div>
          <span>{t.straightFit}</span>
          <span>{t.oversized}</span>
          <span>{t.pants}</span>
        </div>
      </section>

      <section className="page-section home-products-section">
        <div className="section-heading">
          <p className="eyebrow">{t.featured}</p>
          <h2>{slogans[0] ?? 'Build your Legacy'}</h2>
        </div>
        <div className="product-grid compact-grid">
          {(featured.length ? featured : products.slice(0, 3)).map((product) => (
            <ProductCard key={product.id} product={product} cartMessage={settings.cart_status_message ?? 'Cart sharing will be available soon'} t={t} />
          ))}
        </div>
      </section>
    </main>
  );
}
