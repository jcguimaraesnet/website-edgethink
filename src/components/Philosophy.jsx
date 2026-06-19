import { colors, fonts } from '../theme';
import { useLanguage } from '../LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 56px', background: colors.navy, color: '#fff' }}>
      <div style={{ position: 'absolute', top: -120, right: -80, width: 380, height: 380, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: -140, right: 120, width: 240, height: 240, border: '1px solid rgba(248,131,121,0.35)', borderRadius: '50%' }} />
      <div style={{ position: 'relative', maxWidth: '40em', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 0 }}>
        <div style={{ font: `600 13px/1 ${fonts.mono}`, letterSpacing: '0.16em', textTransform: 'uppercase', color: colors.salmon, marginBottom: 22 }}>
          {t.philoEyebrow}
        </div>
        <h2 style={{ margin: '0 0 28px', font: `700 42px/1.12 ${fonts.serif}`, color: '#fff' }}>{t.philoTitle}</h2>
        <p style={{ margin: '0 0 20px', font: `400 18px/1.65 ${fonts.sans}`, color: '#d4d5e8' }}>{t.philoP1}</p>
        <p style={{ margin: 0, font: `400 18px/1.65 ${fonts.sans}`, color: '#d4d5e8' }}>{t.philoP2}</p>
      </div>
    </section>
  );
}
