import { useState } from 'react';
import FadeUp from '../components/FadeUp';
import { experiences } from '../data';

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="bg-gray-50  dark:bg-black  py-28 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
       
          <h2 className="section-title mb-4 text-text-muted dark:text-text">Where I've Worked</h2>
          <p className="text-text-muted text-base max-w-lg mb-16">
            A timeline of companies and roles that shaped my engineering career.
          </p>
        </FadeUp>

        <FadeUp delay={150}>
          <div className="flex flex-col md:flex-row gap-0">

            {/* Tabs — vertical on desktop, horizontal scroll on mobile */}
            <div className="md:w-52 flex-shrink-0 border-b md:border-b-0 md:border-r border-border overflow-x-auto md:overflow-visible flex md:flex-col">
              {experiences.map((e, i) => (
                <button
                  key={e.id}
                  onClick={() => setActive(i)}
                  className={`exp-tab whitespace-nowrap md:whitespace-normal ${i === active ? 'active' : ''}`}
                >
                  {e.company.split(' ')[0]}
                  {e.company.split(' ')[1] ? ` ${e.company.split(' ')[1]}` : ''}
                </button>
              ))}
            </div>

            {/* Panel */}
            <div className="md:pl-14 pt-8 md:pt-0 flex-1 min-h-[420px]">
              <div key={exp.id} className="animate-[fadeIn_0.3s_ease]">

                {/* Role */}
                <h3 className="font-display font-bold text-xl text-text-muted dark:text-text mb-1">
                  {exp.role}
                  <span className="text-accent"> @ </span>
                  <span className="text-accent">{exp.company}</span>
                </h3>

                {/* Period + location */}
                <p className="font-mono text-xs tracking-widest uppercase text-text-dim mb-1">
                  {exp.period}
                </p>
                <p className="font-mono text-xs text-text-dim mb-8">
                  📍 {exp.location}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-8">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                      <span className="text-accent text-xs mt-1 flex-shrink-0">▹</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 rounded bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Timeline strip */}
        <FadeUp delay={300}>
          <div className="mt-20 relative">
            <div className="absolute left-0 right-0 top-3 h-px bg-border" />
            <div className="flex justify-between relative">
              {experiences.map((e, i) => (
                <button
                  key={e.id}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    i === active
                      ? 'bg-accent border-accent scale-125'
                      : 'bg-bg border-text-dim group-hover:border-accent'
                  }`} />
                  <span className="font-mono text-[10px] tracking-wide text-text-dim group-hover:text-accent transition-colors hidden md:block text-center max-w-[80px] leading-tight">
                    {e.period.split(' – ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
