import FadeUp from '../components/FadeUp';
import { skillGroups } from '../data';

const details = [
  { key: 'Name', val: 'Piyush Rajput' },
  { key: 'Based in', val: 'Uttarakhand, India' },
  { key: 'Experience', val: '5+ Years' },
  { key: 'Availability', val: 'Open to Work' },
  { key: 'Email', val: 'piyushrajput10@gmail.com' },
  { key: 'Phone', val: '+91-7065337373' },
];

export default function About() {
  return (
    <section id="about" className="bg-gray-50  dark:bg-black py-28 px-8 md:px-12 ">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <h2 className="section-title mb-4 text-text-muted dark:text-text">Who I Am</h2>  
          <p className="text-text-muted text-base max-w-lg mb-16">
            A little about my background, approach, and what drives me.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — bio + details */}
          <FadeUp delay={100}>
            <div className="space-y-5 text-text-muted leading-relaxed mb-10">
              <p>
                I'm a <strong className="text-text-muted dark:text-text">Full Stack Software Engineer</strong> passionate
                about crafting seamless digital experiences that are as performant as they are
                beautiful. My expertise spans the full stack — React.js on the frontend, Node.js
                on the backend, and deep experience with Salesforce Commerce Cloud.
              </p>
              <p>
                Over 5+ years I've shipped products for{' '}
                <strong className="text-text-muted dark:text-text">global brands</strong> like Fossil, Skagen, WatchStation,
                and ASDA — managing multi-region deployments, leading UI teams, and acting as a
                Designated Responsible Individual (DRI) for critical release cycles.
              </p>
              <p>
                I believe great software is built at the intersection of{' '}
                <strong className="text-text-muted dark:text-text">engineering discipline</strong> and{' '}
                <strong className="text-text-muted dark:text-text">design sensibility</strong>. I care deeply about
                clean code, maintainability, and the user experience that results from both.
              </p>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-3">
              {details.map((d) => (
                <div
                  key={d.key}
                  className=" bg-gray-200 dark:bg-bg-surface border border-border rounded-xl px-5 py-4"
                >
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-slate-800 dark:text-text-dim mb-1">
                    {d.key}
                  </div>
                  <div className="text-sm text-slate-800 dark:text-text font-medium truncate">{d.val}</div>
                </div>
              ))}
            </div>

            {/* Resume download */}
            <div className="mt-8">
              <a
                href="#contact"
                className="btn-outline no-underline inline-flex"
              >
                Get In Touch ↗
              </a>
            </div>
          </FadeUp>

          {/* Right — skill groups */}
          <FadeUp delay={200}>
            <div className="space-y-8">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-text-dim mb-3">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`chip ${group.highlight ? 'active' : ''}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Certs callout */}
              <div className="bg-gray-200 dark:bg-bg-surface border border-border rounded-xl p-6 mt-4">
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-text-dim mb-3">
                  Certifications
                </p>
                <ul className="space-y-2">
                  {[
                    'Web Programming Foundations',
                    'HTML Essential Training',
                    'Introduction to Programming Using Python',
                    'User Experience for Web Design',
                    'Full Stack and Front End Development',
                    'Prompt Engineering: How to Talk to the AIs',
                  ].map((cert) => (
                    <li key={cert} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-accent mt-0.5 text-xs">▹</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
