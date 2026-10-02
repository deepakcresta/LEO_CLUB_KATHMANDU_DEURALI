import React, { useEffect, useState } from 'react';
import { siteData } from '../content/site';
import { Button } from '../components/Button';

import logoImg from '../assets/leo_club_images/club_members/club_logo.png';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync menu state with lenis (if needed) by toggling a class on html, handled in App.tsx or a provider ideally.
  // For now, simple state.

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center ${
        scrolled ? 'bg-ink h-[60px] shadow-lg shadow-black/10' : 'bg-transparent h-[76px]'
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 overflow-hidden">
            <img src={logoImg} alt="Leo Club Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-mono text-[11px] tracking-[0.06em] text-paper hidden md:block">
            {siteData.wordmark.full}
          </span>
          <span className="font-mono text-[11px] tracking-[0.06em] text-paper block md:hidden">
            {siteData.wordmark.short}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-mono text-[11px] tracking-[0.06em] uppercase">
            {siteData.nav.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-paper hover:text-accent relative group inline-block py-2">
                  {link.label}
                  <span className="absolute bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <Button href="#join">{siteData.nav.button}</Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <Button href="#join" className="scale-90 origin-right">{siteData.nav.button}</Button>
          <button 
            className="text-paper font-mono text-[11px] tracking-[0.06em] uppercase uppercase"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-ink border-t border-line h-[100dvh] p-5 md:hidden">
          <ul className="flex flex-col gap-6 font-display text-4xl">
            {siteData.nav.links.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-paper"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
