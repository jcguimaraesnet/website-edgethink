import { colors, fonts } from '../theme';
import { useLanguage } from '../LanguageContext';

/** Brand wordmark: "Edge" (dark) + "Think" (red), Playfair Display. */
export function Logo({ size = 24 }) {
  return (
    <div style={{ font: `800 ${size}px/1 ${fonts.serif}`, letterSpacing: '-0.01em' }}>
      <span style={{ color: colors.dark }}>Edge</span>{' '}
      <span style={{ color: colors.red }}>Think</span>
    </div>
  );
}

/** PT / EN segmented toggle. Reads + writes the language context. */
export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  // Fixed button size + centered text so swapping the active state (which
  // changes font-weight) never reflows widths — i.e. no horizontal sliding.
  const base = {
    cursor: 'pointer',
    border: 'none',
    borderRadius: 999,
    letterSpacing: '0.04em',
    width: 46,
    height: 30,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.15s, color 0.15s',
  };
  const on = { ...base, font: `700 13px/1 ${fonts.sans}`, background: colors.navy, color: '#fff' };
  const off = { ...base, font: `600 13px/1 ${fonts.sans}`, background: 'transparent', color: colors.muted };
  return (
    <div style={{ display: 'inline-flex', gap: 2, padding: 3, background: '#f4f3f6', borderRadius: 999 }}>
      <button aria-pressed={lang === 'pt'} onClick={() => setLang('pt')} style={lang === 'pt' ? on : off}>PT</button>
      <button aria-pressed={lang === 'en'} onClick={() => setLang('en')} style={lang === 'en' ? on : off}>EN</button>
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const navLinks = [
    { label: t.nav.home, href: '#top' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.cases, href: '#use-cases' },
    { label: t.nav.philosophy, href: '#philosophy' },
  ];
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '22px 56px',
        borderBottom: `1px solid ${colors.border}`,
        position: 'sticky',
        top: 0,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(8px)',
        zIndex: 10,
      }}
    >
      <Logo />
      <nav style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
        {navLinks.map((link, i) => (
          <a key={i} href={link.href} style={{ font: `500 14px ${fonts.sans}`, color: colors.steel, textDecoration: 'none' }}>
            {link.label}
          </a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <a
          href="#contato"
          style={{
            background: colors.red,
            color: '#fff',
            font: `600 13px ${fonts.sans}`,
            padding: '11px 18px',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          {t.nav.cta}
        </a>
        <LanguageToggle />
      </div>
    </header>
  );
}
