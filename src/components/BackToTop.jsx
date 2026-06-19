import { useEffect, useState } from 'react';
import { colors, fonts } from '../theme';

/**
 * Floating "back to top" button. Appears once the user has scrolled down
 * past ~400px; clicking it smoothly scrolls back to the top of the page.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      aria-label="Voltar ao topo"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        right: 28,
        bottom: 28,
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: 'none',
        background: colors.red,
        color: '#fff',
        font: `700 20px/1 ${fonts.sans}`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(47,47,65,0.22)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
        zIndex: 20,
      }}
    >
      ↑
    </button>
  );
}
