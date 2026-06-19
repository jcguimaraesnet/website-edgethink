import { colors, fonts } from '../theme';
import { useLanguage } from '../LanguageContext';
import { integrations } from '../i18n';
import HeroGraphic from './HeroGraphic';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="top"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 48,
        alignItems: 'center',
        padding: '84px 56px',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <div>
        <div style={{ font: `600 13px/1 ${fonts.mono}`, letterSpacing: '0.18em', textTransform: 'uppercase', color: colors.red, marginBottom: 22 }}>
          {t.hero.eyebrow}
        </div>
        <h1 style={{ margin: '0 0 24px', font: `700 56px/1.06 ${fonts.serif}`, color: colors.dark, letterSpacing: '-0.01em' }}>
          {t.hero.title1}
          <br />
          <span style={{ color: colors.red }}>{t.hero.title2}</span>
        </h1>
        <p style={{ margin: '0 0 32px', font: `400 18px/1.6 ${fonts.sans}`, color: colors.steel, maxWidth: '34em' }}>
          {t.hero.sub}
        </p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 44 }}>
          <a href="#contato" style={{ background: colors.red, color: '#fff', font: `600 15px ${fonts.sans}`, padding: '15px 26px', border: 'none', borderRadius: 9, cursor: 'pointer', textDecoration: 'none' }}>
            {t.hero.cta}
          </a>
          <a href="#use-cases" style={{ background: 'transparent', color: colors.navy, font: `600 15px ${fonts.sans}`, padding: '15px 22px', border: `1px solid ${colors.borderBtn}`, borderRadius: 9, cursor: 'pointer', textDecoration: 'none' }}>
            {t.hero.secondary} →
          </a>
        </div>
        <div>
          <div style={{ font: `500 12px/1 ${fonts.mono}`, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.muted, marginBottom: 14 }}>
            {t.trust}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {integrations.map((name) => (
              <span key={name} style={{ font: `600 13px ${fonts.sans}`, color: colors.navy, padding: '7px 14px', background: colors.chipBg, border: `1px solid ${colors.chipBorder}`, borderRadius: 7 }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <HeroGraphic />
    </section>
  );
}
