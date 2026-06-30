import aboutImage from '../assets/about-sportwear.png';
import type { Translation } from '../i18n';
import type { WebsiteSettings } from '../types/api';

type AboutPageProps = {
  settings: WebsiteSettings;
  t: Translation;
};

export function AboutPage({ settings, t }: AboutPageProps) {
  return (
    <main className="page-section content-page image-content-page">
      <div className="section-heading">
        <p className="eyebrow">{t.aboutEyebrow}</p>
        <h1>{settings.slogans?.[1] ?? 'Every Legacy Has An Origin'}</h1>
      </div>
      <div className="media-copy-grid">
        <div className="section-image-frame">
          <img src={aboutImage} alt="Aurigin sportwear fabric details" />
        </div>
        <div className="text-columns stacked-copy">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
        </div>
      </div>
    </main>
  );
}
