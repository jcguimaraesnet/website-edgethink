import { colors } from '../theme';

/**
 * Hero geometric abstraction — concentric rings, a solid red core,
 * a floating navy diamond and scattered dots. Pure CSS primitives.
 */
export default function HeroGraphic() {
  const ring = (size, border, extra = {}) => ({
    position: 'absolute',
    width: size,
    height: size,
    border,
    borderRadius: '50%',
    ...extra,
  });
  return (
    <div style={{ position: 'relative', height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={ring(340, `1px solid #e6dfe0`)} />
      <div style={ring(250, `1.5px solid #f1c9c6`, { animation: 'etPulse 5s ease-in-out infinite' })} />
      <div style={ring(160, `1px solid #c9cae0`)} />
      <div style={{ position: 'absolute', width: 74, height: 74, borderRadius: '50%', background: colors.red, boxShadow: '0 14px 40px rgba(229,38,31,0.32)' }} />
      <div style={{ position: 'absolute', top: 36, right: 60, width: 46, height: 46, background: colors.navy, transform: 'rotate(45deg)', animation: 'etFloat 6s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: 48, left: 46, width: 26, height: 26, borderRadius: '50%', background: colors.navy }} />
      <div style={{ position: 'absolute', bottom: 96, left: 120, width: 12, height: 12, borderRadius: '50%', background: colors.salmon }} />
      <div style={{ position: 'absolute', top: 90, left: 30, width: 14, height: 14, borderRadius: '50%', background: colors.red, animation: 'etFloat 5s ease-in-out infinite 0.5s' }} />
    </div>
  );
}
