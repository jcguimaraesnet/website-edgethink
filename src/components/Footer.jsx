import { colors, fonts } from '../theme';
import { useLanguage } from '../LanguageContext';
import { Logo } from './Header';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '34px 56px', borderTop: `1px solid ${colors.border}` }}>
      <div>
        <Logo size={20} />
        <div style={{ marginTop: 8, font: `italic 600 14px/1.4 ${fonts.serif}`, color: colors.navy }}>{t.slogan}</div>
        <div style={{ marginTop: 4, font: `400 13px ${fonts.sans}`, color: colors.muted }}>{t.footerTagline}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ display: 'flex', gap: 18, justifyContent: 'flex-end', marginBottom: 8 }}>
          <a href="mailto:jcguimaraes@gmail.com" style={{ font: `500 13px ${fonts.sans}`, color: colors.steel, textDecoration: 'none' }}>Email</a>
          <a href="https://instagram.com/jcguimaraes" style={{ font: `500 13px ${fonts.sans}`, color: colors.steel, textDecoration: 'none' }}>Instagram</a>
        </div>
        <div style={{ font: `400 12px ${fonts.sans}`, color: '#b3b2ba' }}>{t.rights}</div>
      </div>
    </footer>
  );
}
