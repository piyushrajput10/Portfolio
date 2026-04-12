import { useEffect, useState } from 'react';
import { stats } from '../data';
import FadeUp from '../components/FadeUp';

const roles = ['Software Engineer', 'Full Stack Developer', 'React.js Specialist', 'UI/UX Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 38);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-12 pt-28 pb-20 overflow-hidden bg-gray-50 dark:bg-black "
    >
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] glow-accent rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] glow-blue rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">

        {/* Tag line */}
        <FadeUp>
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-8 h-px bg-accent" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent">
              Available for opportunities
            </span>
          </div>
        </FadeUp>

        {/* Name */}
        <FadeUp delay={100}>
          <h1 className="font-display font-extrabold leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: 'clamp(58px, 10vw, 120px)' }}>
            <span className="block text-black dark:text-text">Piyush</span>
            <span className="block  text-text-muted dark:text-outline">Rajput</span>
          </h1>
        </FadeUp>

        {/* Typewriter */}
        <FadeUp delay={200}>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xl md:text-2xl text-text-muted">
              {displayed}
              <span className="cursor" />
            </span>
          </div>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={300}>
          <p className="text-text-muted text-lg leading-relaxed max-w-xl mb-12">
            I build scalable, high-performance web applications — from interactive React frontends
            to robust Node.js backends. 5+ years crafting digital experiences across global
            e-commerce and enterprise platforms.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={400}>
          <div className="flex flex-wrap items-center gap-5 mb-20">
            <a href="#projects" className="btn-primary no-underline">
              View My Work <span>→</span>
            </a>
            <a href="#contact" className="btn-ghost no-underline">
              Let's Talk <span className="text-accent">↗</span>
            </a>
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={500}>
          <div className="flex flex-wrap gap-10 pt-10 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-extrabold text-accent leading-none mb-1"
                  style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
                  {stat.value}
                </div>
                <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-text-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-10 right-12 flex-col items-center gap-3">
        <span className="scroll-line" />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-text-dim [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>
    </section>
  );
}
