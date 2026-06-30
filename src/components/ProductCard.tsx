import { useMemo, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import type { Translation } from '../i18n';
import type { Product } from '../types/api';

type ProductCardProps = {
  product: Product;
  cartMessage: string;
  t: Translation;
};

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export function ProductCard({ product, cartMessage, t }: ProductCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const image = product.images?.find((item) => item.is_primary) ?? product.images?.[0];
  const showImage = image && !imageFailed;
  const variantPreview = useMemo(() => (product.variants ?? []).filter((variant) => variant.stock_quantity > 0).slice(0, 4), [product.variants]);

  return (
    <article className="product-card">
      <div className="product-media">
        {showImage ? (
          <img src={image.url} alt={image.alt_text ?? product.name} onError={() => setImageFailed(true)} />
        ) : (
          <div className="product-placeholder">Aurigin</div>
        )}
        {product.featured && <span className="product-badge">{t.featured}</span>}
      </div>
      <div className="product-body">
        <div>
          <p className="category-label">{product.product_type ?? product.category?.name ?? 'Aurigin Collection'}</p>
          <h3>{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </div>
        <div className="product-meta-row">
          <span className="price">{formatPrice(product.selling_price)}</span>
          <span className={product.stock_quantity > 0 ? 'stock in' : 'stock out'}>
            {product.stock_quantity > 0 ? `${product.stock_quantity} ${t.inStock}` : t.stockPending}
          </span>
        </div>
        <div className="option-group" aria-label={`${product.name} colors`}>
          {(product.colors ?? []).slice(0, 5).map((color) => (
            <span className="color-swatch" key={color.id} title={color.name}>
              <span style={{ backgroundColor: color.hex_code ?? '#75723d' }} />
              {color.name}
            </span>
          ))}
        </div>
        <div className="size-row" aria-label={`${product.name} sizes`}>
          {(product.sizes ?? []).slice(0, 6).map((size) => (
            <span key={size.id}>{size.name}</span>
          ))}
        </div>
        {variantPreview.length > 0 ? (
          <div className="variant-stock-row" aria-label={`${product.name} variant quantities`}>
            {variantPreview.map((variant) => (
              <span key={variant.id}>
                {variant.color?.name ?? 'Color'} / {variant.size?.name ?? 'Size'}: {variant.stock_quantity}
              </span>
            ))}
          </div>
        ) : null}
        <button className="disabled-cart-button" type="button" disabled title={cartMessage}>
          <ShoppingBag size={17} aria-hidden="true" />
          <span>{cartMessage}</span>
        </button>
      </div>
    </article>
  );
}
