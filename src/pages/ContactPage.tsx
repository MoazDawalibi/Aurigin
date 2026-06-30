import { Phone } from 'lucide-react';
import contactImage from '../assets/contact-sportwear.png';
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons';
import type { Translation } from '../i18n';
import type { WebsiteSettings } from '../types/api';

type ContactPageProps = {
  settings: WebsiteSettings;
  t: Translation;
};

export function ContactPage({ settings, t }: ContactPageProps) {
  const phone = settings.whatsapp_phone ?? '+963958261912';
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;

  return (
    <main className="page-section content-page image-content-page">
      <div className="section-heading">
        <p className="eyebrow">{t.contactEyebrow}</p>
        <h1>{t.contactTitle}</h1>
      </div>
      <div className="media-copy-grid contact-grid">
        <div className="section-image-frame">
          <img src={contactImage} alt="Aurigin sportwear contact and order details" />
        </div>
        <div className="contact-actions">
          <a href={settings.instagram_url ?? 'https://www.instagram.com/Aurigin'} target="_blank" rel="noreferrer">
            <InstagramIcon size={22} />
            <span>@{settings.instagram ?? 'Aurigin'}</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={22} />
            <span>WhatsApp {phone}</span>
          </a>
          <a href={`tel:${phone}`}>
            <Phone size={22} />
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </main>
  );
}
