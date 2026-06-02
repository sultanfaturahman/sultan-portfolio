import React, { useState, useEffect, useCallback } from 'react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);

        const ids = ['home', ...navItems.map((n) => n.id)];
        const pos = window.scrollY + 120;
        for (let i = ids.length - 1; i >= 0; i--) {
          const el = document.getElementById(ids[i]);
          if (el && pos >= el.offsetTop) {
            setActive(ids[i]);
            break;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const goTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-paper/90 backdrop-blur-sm border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex h-20 items-center justify-between">
          {/* Wordmark */}
          <button onClick={() => goTo('home')} className="text-left leading-none group" aria-label="Back to top">
            <span className="block font-serif text-lg tracking-tight">Sultan Faturahman</span>
            <span className="block eyebrow mt-1">Web Developer — ID</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`font-sans text-sm transition-colors duration-300 ${
                  active === item.id ? 'text-accent' : 'text-ink-soft hover:text-ink'
                }`}
              >
                <span className="font-mono text-[0.65rem] text-muted mr-1.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="link-retract">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span className={`block h-px w-6 bg-ink transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 bg-paper transition-[opacity,transform] duration-400 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-4'
        }`}
      >
        <div className="container-page flex h-full flex-col justify-center gap-2 pt-20">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="flex items-baseline gap-4 py-3 text-left border-b border-line"
            >
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-serif text-4xl">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
