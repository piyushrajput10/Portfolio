export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-whiteborder-t border-border px-8 md:px-12 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-text-dim tracking-wide">
          © {year} <span className="text-accent">Piyush Rajput</span> — Designed & Built with React + TypeScript + Tailwind
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
          <span className="font-mono text-xs text-text-dim">Open to opportunities</span>
        </div>
        <div className="flex gap-6">
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/rajput-piyush' },
            { label: 'Email', href: 'mailto:piyushrajput10@gmail.com' },
            { label: 'Top ↑', href: '#home' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-xs text-text-dim hover:text-accent transition-colors no-underline"
            >
              {l.label}
            </a>
            
          ))}
        </div>
      </div>
    </footer>
  );
}
