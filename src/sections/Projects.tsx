import FadeUp from '../components/FadeUp';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50  dark:bg-black py-28 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
          
              <h2 className="text-text-muted dark:text-text section-title">Things I've Built</h2>
            </div>
            <p className="text-text-muted text-sm max-w-xs md:text-right leading-relaxed">
              A selection of projects spanning full-stack apps, global e-commerce, and government portals.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeUp key={project.num} delay={i * 100}>
              <div className="card h-full flex flex-col group">

                {/* Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-text-dim tracking-widest">
                    {project.num}
                  </span>
                  {/* Icon placeholder — folder icon via CSS */}
                  <svg
                    className="w-9 h-9 text-accent/40 group-hover:text-accent transition-colors duration-300"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3 7a2 2 0 012-2h3.586a1 1 0 01.707.293L10.414 6.5A1 1 0 0011.121 6.793H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-text mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-mono text-xs text-text-muted">
                      <span className="text-accent mt-0.5">→</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {project.stack.map((s) => (
                    <span key={s} className="font-mono text-[11px] text-text-dim px-2 py-0.5 bg-gray-100 dark:bg-bg rounded border border-border">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom note */}
        <FadeUp delay={400}>
          <div className="mt-16 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <p className="font-mono text-xs text-text-dim tracking-widest text-center">
              More projects available on request
            </p>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
