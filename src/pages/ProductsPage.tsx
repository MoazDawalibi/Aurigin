import type { Translation } from '../i18n';
import type { Product, WebsiteSettings } from '../types/api';
import { ProductCard } from '../components/ProductCard';
import { LoadingState } from '../components/LoadingState';

type ProductsPageProps = {
  settings: WebsiteSettings;
  products: Product[];
  loading: boolean;
  t: Translation;
};

export function ProductsPage({ settings, products, loading, t }: ProductsPageProps) {
  return (
    <main className="page-section">
      <div className="section-heading with-copy">
        <div>
          <p className="eyebrow">{t.productsEyebrow}</p>
          <h1>{t.collectionTitle}</h1>
        </div>
        <p>{t.productsCopy}</p>
      </div>
      {loading ? <LoadingState /> : null}
      {!loading && products.length === 0 ? <div className="empty-state">{t.noProducts}</div> : null}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} cartMessage={settings.cart_status_message ?? 'Cart sharing will be available soon'} t={t} />
        ))}
      </div>
    </main>
  );
}
