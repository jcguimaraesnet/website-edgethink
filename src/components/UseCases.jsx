import { colors, fonts } from '../theme';
import { useLanguage } from '../LanguageContext';

export default function UseCases() {
  const { t } = useLanguage();
  return (
    <section id="use-cases" style={{ padding: '90px 56px', scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: '48em', marginBottom: 48 }}>
          <div style={{ font: `600 13px/1 ${fonts.mono}`, letterSpacing: '0.16em', textTransform: 'uppercase', color: colors.red, marginBottom: 18 }}>
            {t.nav.cases}
          </div>
          <h2 style={{ margin: '0 0 14px', font: `700 38px/1.12 ${fonts.serif}`, color: colors.dark }}>{t.casesTitle}</h2>
          <p style={{ margin: 0, font: `400 17px/1.55 ${fonts.sans}`, color: colors.steel }}>{t.casesIntro}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {t.cases.map((c, i) => (
            <div key={i} style={{ border: `1px solid ${colors.borderCard}`, borderRadius: 14, padding: '32px 34px', display: 'flex', gap: 22, alignItems: 'flex-start' }}>
              <div style={{ flex: 'none', width: 14, height: 14, marginTop: 6, background: colors.red, transform: 'rotate(45deg)' }} />
              <div>
                <div style={{ font: `600 12px/1 ${fonts.mono}`, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.navy, marginBottom: 12 }}>{c.tag}</div>
                <h3 style={{ margin: '0 0 10px', font: `700 22px/1.2 ${fonts.serif}`, color: colors.dark }}>{c.title}</h3>
                <p style={{ margin: 0, font: `400 15px/1.6 ${fonts.sans}`, color: colors.steel }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
