import { colors, fonts } from '../theme';
import { useLanguage } from '../LanguageContext';
import { contact } from '../i18n';

export default function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section style={{ padding: '96px 56px', textAlign: 'center', background: colors.bgPink }}>
      <h2 style={{ margin: '0 auto 18px', font: `700 40px/1.15 ${fonts.serif}`, color: colors.dark, maxWidth: '18em' }}>
        {t.finalTitle}
      </h2>
      <p style={{ margin: '0 auto 32px', font: `400 18px/1.6 ${fonts.sans}`, color: colors.steel, maxWidth: '34em' }}>
        {t.finalSub}
      </p>
      <button style={{ background: colors.red, color: '#fff', font: `600 16px ${fonts.sans}`, padding: '16px 32px', border: 'none', borderRadius: 10, cursor: 'pointer' }}>
        {t.finalCta}
      </button>
      <div style={{ marginTop: 26, font: `500 15px ${fonts.sans}`, color: colors.navy }}>
        <a href={`mailto:${contact.email}`} style={{ textDecoration: 'none', color: colors.navy }}>{contact.email}</a>
        {'  ·  '}
        <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`} style={{ textDecoration: 'none', color: colors.navy }}>{contact.phone}</a>
      </div>
    </section>
  );
}
