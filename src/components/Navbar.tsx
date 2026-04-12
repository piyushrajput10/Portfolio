import { useState, useEffect } from 'react';
import { navItems } from '../data';
import ThemeToggle from './Theme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 transition-all duration-300${
        scrolled
          ? 'py-4 bg-bg/90 backdrop-blur-2xl border-b border-border'
          : 'py-6 bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#home" className="font-mono text-sm text-accent tracking-wide no-underline">
        <span className="text-text-muted">./</span>piyush<span className="text-text-muted">.dev</span>
        
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="nav-link no-underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className='hidden md:flex gap-3 '>
        <ThemeToggle  />
 <a
        href="mailto:piyushrajput10@gmail.com"
        className=" md:inline-flex btn-outline text-xs no-underline"
      >
        Hire Me
      </a>
      </div>
      
     

      {/* Hamburger */}
       <div className='md:hidden flex gap-3 '>
        <ThemeToggle  />
  <button
        className=" flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-black dark:bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-px bg-black dark:bg-text  transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-px bg-black dark:bg-text  transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>
      </div>
     

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-50 dark:bg-bg-2/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-sm tracking-widest uppercase text-text-muted hover:text-accent transition-colors no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          
          <a
            href="mailto:piyushrajput10@gmail.com"
            className="btn-outline self-start no-underline mt-2"
          >
            Hire Me
          </a>

          
        </div>
      )}
    </nav>
  );
}
