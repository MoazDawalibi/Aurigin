import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import type { WebsiteSettings } from '../types/api';

type FooterProps = {
  settings: WebsiteSettings;
};

function getInstagram(settings: WebsiteSettings) {
  const handle = !settings.instagram || settings.instagram.toLowerCase() === 'aurigin' ? 'aurigin.fit' : settings.instagram;
  const url = !settings.instagram_url || /instagram\.com\/Aurigin\/?$/i.test(settings.instagram_url) ? 'https://www.instagram.com/aurigin.fit' : settings.instagram_url;
  return { handle, url };
}

export function Footer({ settings }: FooterProps) {
  const brandName = settings.brand_name ?? 'Aurigin';
  const phone = settings.whatsapp_phone ?? '+963958261912';
  const instagram = getInstagram(settings);
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span>{brandName}</span>
        <small>{settings.slogans?.[0] ?? 'Build your Legacy'}</small>
      </div>
      <div className="footer-links">
        <a href={instagram.url} target="_blank" rel="noreferrer">
          <InstagramIcon size={18} />
          @{instagram.handle}
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={18} />
          {phone}
        </a>
      </div>
      <span className="footer-copy">Copyright 2026 {brandName}. All rights reserved.</span>
    </footer>
  );
}
