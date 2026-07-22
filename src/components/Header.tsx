import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'projects' },
];

const mobileNavItems = [
  ...navItems,
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

        const ids = ['home', ...mobileNavItems.map((n) => n.id)];
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
      document.documentElement.classList.add('section-navigation-ready');
      requestAnimationFrame(() => {
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    }
    setMenuOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-paper/90 backdrop-blur-sm border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page">
        <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
          {/* Wordmark */}
          <button onClick={() => goTo('home')} className="justify-self-start text-left leading-none group" aria-label="Back to top">
            <span className="block font-serif text-lg tracking-tight">Sultan Faturahman</span>
            <span className="block eyebrow mt-1">Full-Stack Web Developer</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center justify-self-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`font-sans text-sm transition-colors duration-300 ${
                  active === item.id ? 'text-accent' : 'text-ink-soft hover:text-ink'
                }`}
              >
                <span className="link-retract">{item.label}</span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => goTo('contact')}
            className="hidden md:inline-flex justify-self-end items-center justify-center rounded-full bg-accent px-6 py-2.5 font-sans text-sm tracking-wide text-paper transition-[background-color,transform] duration-300 hover:bg-accent-dark active:scale-[0.98]"
          >
            Get in touch
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden col-start-3 justify-self-end flex flex-col gap-1.5 p-2 -mr-2"
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
          {mobileNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="py-3 text-left border-b border-line"
            >
              <span className="font-serif text-4xl">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
