import { Lock, ShoppingBag } from 'lucide-react';
import type { Translation } from '../i18n';
import type { WebsiteSettings } from '../types/api';

type CartPageProps = {
  settings: WebsiteSettings;
  t: Translation;
};

export function CartPage({ settings, t }: CartPageProps) {
  return (
    <main className="page-section content-page">
      <div className="cart-shell">
        <ShoppingBag size={34} />
        <div>
          <p className="eyebrow">{t.cartEyebrow}</p>
          <h1>{settings.cart_status_message ?? 'Cart sharing will be available soon'}</h1>
          <p>{t.cartCopy}</p>
        </div>
        <button type="button" disabled>
          <Lock size={18} />
          {t.checkoutDisabled}
        </button>
      </div>
    </main>
  );
}
