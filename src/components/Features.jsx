import { useState } from 'react';
import { colors, fonts } from '../theme';
import { useLanguage } from '../LanguageContext';

function FeatureCard({ feature }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hover ? colors.red : colors.borderCard}`,
        borderRadius: 14,
        padding: '34px 30px',
        boxShadow: hover ? '0 12px 30px rgba(47,47,65,0.07)' : 'none',
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}
    >
      <div style={{ font: `700 30px/1 ${fonts.serif}`, color: colors.red, marginBottom: 24 }}>{feature.n}</div>
      <h3 style={{ margin: '0 0 12px', font: `700 21px/1.2 ${fonts.serif}`, color: colors.dark }}>{feature.title}</h3>
      <p style={{ margin: 0, font: `400 15px/1.6 ${fonts.sans}`, color: colors.steel }}>{feature.desc}</p>
    </div>
  );
}

export default function Features() {
  const { t } = useLanguage();
  return (
    <section id="features" style={{ padding: '90px 56px', background: colors.bgAlt, borderTop: `1px solid #f1eef0`, scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: '48em', marginBottom: 52 }}>
          <div style={{ font: `600 13px/1 ${fonts.mono}`, letterSpacing: '0.16em', textTransform: 'uppercase', color: colors.red, marginBottom: 18 }}>
            {t.nav.features}
          </div>
          <h2 style={{ margin: '0 0 14px', font: `700 38px/1.12 ${fonts.serif}`, color: colors.dark }}>{t.featuresTitle}</h2>
          <p style={{ margin: 0, font: `400 17px/1.55 ${fonts.sans}`, color: colors.steel }}>{t.featuresIntro}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {t.features.map((f) => (
            <FeatureCard key={f.n} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
