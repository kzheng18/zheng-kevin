import { projects } from '../data/projects';

// ---- Static data, built once at module load (no per-render recompute) ----

// Roadmap / experience timeline
const roadmap = [
    {
      icon: '🎓',
      role: 'Computer Science & Data Science',
      org: 'UNC Chapel Hill',
      kind: 'Education',
      period: 'Aug 2022 – May 2026',
      sort: 202605,
    },
    {
      icon: '💻',
      role: 'Software Engineer',
      org: 'AfterQuery Experts',
      kind: 'Internship',
      period: 'Sep 2025 – Jan 2026',
      duration: '5 mos',
      location: 'Remote',
      sort: 202601,
      desc: 'Built and deployed containerized coding challenges with automated test suites to evaluate engineering candidates. Wrote Bash and CLI tooling to speed up testing in Linux environments.',
      skills: ['Bash', 'Linux'],
      more: 6,
    },
    {
      icon: '📱',
      role: 'iOS Apprentice Developer',
      org: 'App Team Carolina',
      kind: 'Apprenticeship',
      period: 'Sep 2024 – Dec 2025',
      duration: '1 yr 4 mos',
      sort: 202512,
      desc: 'Built iOS apps with Swift and SwiftUI in Xcode. Completed learning projects connecting frontend to backend to practice full-stack development.',
      skills: ['iOS Development', 'Xcode'],
      more: 4,
    },
    {
      icon: '🛠️',
      role: 'Full Stack Engineer',
      org: 'UNC Computer Science Experience Lab (CSXL)',
      kind: 'Internship',
      period: 'Aug 2023 – Dec 2023',
      duration: '5 mos',
      location: 'On-site',
      sort: 202312,
      desc: 'Built the Friends feature end-to-end: friend requests, accept/decline, friend lists, and "who\'s in CSXL" presence. Designed the data model and backend APIs, added real-time presence, and shipped the UI. Developed in a containerized environment (Docker, Postgres, Caddy) with unit tests in pytest.',
      skills: ['FastAPI', 'Software Infrastructure'],
      more: 9,
    },
    {
      icon: '🍜',
      role: 'Server',
      org: 'Golden City Chinese Restaurant',
      kind: 'Part-time',
      period: 'Jan 2019 – May 2021',
      duration: '2 yrs 5 mos',
      sort: 202105,
      skills: ['Customer Service', 'Cooking'],
      more: 2,
    },
  ];

  // Projects as timeline branches (for the unified view)
  const projectIcons = { 'ai/ml': '🧠', web: '🌐', fullstack: '🧩', data: '📊', backend: '⚙️' };
  const projectNodes = projects.map((p) => ({
    icon: projectIcons[p.category] || '💡',
    role: p.title,
    kind: p.category,
    project: true,
    date: p.date,
    sort: p.sort,
    desc: p.description,
    github: p.github,
    demo: p.demo,
    skills: p.technologies.slice(0, 5),
    more: Math.max(0, p.technologies.length - 5),
  }));

  // Single merged timeline: roles + projects, most recent first (projects branch off the rail)
  const timelineItems = [...roadmap, ...projectNodes].sort((a, b) => (b.sort || 0) - (a.sort || 0));

  // Contact methods
  const contactMethods = [
    {
      name: 'Email',
      value: 'kwzheng18@gmail.com',
      href: 'mailto:kwzheng18@gmail.com',
      external: false,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      value: '@kzheng18',
      href: 'https://github.com/kzheng18',
      external: true,
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      value: 'Kevin Zheng',
      href: 'https://www.linkedin.com/in/kzheng18/',
      external: true,
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
  ];

const About = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Minimal grid background */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232, 232, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 232, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center pt-24 px-4">
        <div className="relative max-w-3xl mx-auto w-full text-center animate-slide-up">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-dark-border bg-dark-surface/50 text-xs font-mono uppercase tracking-[0.2em] text-dark-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Software Engineer
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="gradient-text inline-block">Kevin Zheng</span>
          </h1>

          <div className="text-sm font-mono text-dark-muted mb-6">
            unc chapel hill grad · cs + data science
          </div>

          <p className="text-xl md:text-2xl text-dark-text leading-relaxed max-w-2xl mx-auto mb-8">
            I build full-stack web apps and applied AI/ML systems — focused on shipping real products, not demos.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['Full Stack', 'AI/ML', 'Backend', 'Cloud'].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm font-mono rounded-full bg-dark-surface border border-dark-border text-dark-muted hover:border-dark-text hover:text-dark-text transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            <button
              onClick={() => scrollTo('work')}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-text text-dark-bg font-mono text-sm font-semibold hover:bg-white transition-all hover:scale-105"
            >
              View my work
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-dark-border text-dark-text font-mono text-sm hover:border-dark-text hover:bg-dark-surface/40 transition-all"
            >
              Get in touch
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: '3+', label: 'Years' },
              { value: '5', label: 'Projects' },
              { value: '15+', label: 'Tech' },
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-4xl font-bold font-mono mb-1 text-dark-text group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-mono text-dark-muted tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-sm font-mono text-dark-muted tracking-wider">scroll</span>
            <svg className="w-5 h-5 text-dark-muted animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Experience + Projects Timeline */}
      <section id="work" className="relative pt-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="text-sm font-mono text-dark-muted mb-2">// timeline</div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Experience &amp; Projects</h2>
            <p className="text-base text-dark-muted mt-3 max-w-xl">
              Roles and education on the line; projects branch off where they happened.
            </p>
          </div>

          <div className="relative">
            {/* Timeline rail */}
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-dark-border via-dark-border to-transparent"></div>

            <div className="space-y-6">
              {timelineItems.map((item, i) =>
                item.project ? (
                  /* PROJECT — branches off the rail with a horizontal dashed connector */
                  <div
                    key={i}
                    className="relative flex items-center group"
                    style={{
                      animation: 'slideInFromRight 0.5s ease-out',
                      animationDelay: `${i * 70}ms`,
                      animationFillMode: 'backwards'
                    }}
                  >
                    {/* Horizontal dashed branch from the rail (rail sits at 24px) */}
                    <div className="shrink-0 flex items-center" style={{ paddingLeft: '24px' }}>
                      <div className="w-6 md:w-10 border-t-2 border-dashed border-dark-muted/40 group-hover:border-dark-text/40 transition-colors"></div>
                    </div>

                    {/* Small branch node */}
                    <div className="relative z-10 shrink-0 w-9 h-9 rounded-lg bg-dark-surface border border-dashed border-dark-muted/50 flex items-center justify-center text-lg transition-all duration-300 group-hover:border-dark-text/50 group-hover:scale-110">
                      {item.icon}
                    </div>

                    {/* Compact project card */}
                    <div className="ml-3 flex-1 glass-effect rounded-xl p-4 md:p-5 transition-all duration-300 group-hover:border-dark-text/25 group-hover:-translate-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3">
                        <h3 className="text-base md:text-lg font-bold text-dark-text group-hover:text-white transition-colors">
                          {item.role}
                        </h3>
                        <span className="shrink-0 text-xs font-mono text-dark-muted whitespace-nowrap sm:mt-0.5">{item.date}</span>
                      </div>

                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="px-2 py-0.5 text-xs font-mono uppercase tracking-wider rounded-full border border-dark-border text-dark-muted">
                          {item.kind}
                        </span>
                        <span className="text-xs font-mono text-dark-muted">project</span>
                      </div>

                      <p className="text-sm md:text-base text-dark-muted leading-relaxed mt-2.5">{item.desc}</p>

                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        {item.skills.map((s) => (
                          <span key={s} className="px-2 py-0.5 text-xs bg-dark-surface border border-dark-border text-dark-muted rounded">
                            {s}
                          </span>
                        ))}
                        {item.more ? <span className="text-xs text-dark-muted">+{item.more}</span> : null}
                      </div>

                      {/* Links — only when the project is live / has a repo */}
                      {(item.github || item.demo) && (
                        <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-dark-border/50">
                          {item.github && (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-dark-muted hover:text-dark-text transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              Code
                            </a>
                          )}
                          {item.demo && (
                            <a
                              href={item.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link inline-flex items-center gap-1.5 text-xs font-mono text-dark-text hover:text-white transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                              Live demo
                              <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* ROLE / EDUCATION — sits on the rail */
                  <div
                    key={i}
                    className="relative flex gap-5 md:gap-6 group"
                    style={{
                      animation: 'slideInFromRight 0.5s ease-out',
                      animationDelay: `${i * 70}ms`,
                      animationFillMode: 'backwards'
                    }}
                  >
                    {/* Emoji avatar node */}
                    <div className="relative z-10 shrink-0 w-12 h-12 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-center text-2xl transition-all duration-300 group-hover:border-dark-text/50 group-hover:scale-110 group-hover:-rotate-6">
                      {item.icon}
                    </div>

                    {/* Card */}
                    <div className="flex-1 glass-effect rounded-xl p-5 md:p-6 transition-all duration-300 group-hover:border-dark-text/25 group-hover:-translate-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg md:text-xl text-dark-text font-bold group-hover:text-white transition-colors">
                            {item.role}
                          </h3>
                          <div className="text-base text-dark-muted mt-0.5">{item.org}</div>
                        </div>
                        {item.period && (
                          <div className="text-sm font-mono text-dark-muted sm:text-right shrink-0 whitespace-nowrap">
                            <div>{item.period}</div>
                            {item.duration && <div className="text-dark-muted/60 mt-0.5">{item.duration}</div>}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span className="px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider rounded-full border border-dark-border text-dark-muted">
                          {item.kind}
                        </span>
                        {item.location && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono rounded-full border border-dark-border text-dark-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-dark-muted"></span>
                            {item.location}
                          </span>
                        )}
                      </div>

                      {item.desc && (
                        <p className="text-base text-dark-muted leading-relaxed mt-4">{item.desc}</p>
                      )}

                      {item.skills && (
                        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-dark-border/50">
                          {item.skills.map((s) => (
                            <span
                              key={s}
                              className="px-2 py-0.5 text-sm bg-dark-surface border border-dark-border text-dark-text rounded"
                            >
                              {s}
                            </span>
                          ))}
                          {item.more ? (
                            <span className="text-sm text-dark-muted">+{item.more} more</span>
                          ) : null}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative pt-24 px-4 pb-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="text-sm font-mono text-dark-muted mb-2">// contact</div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Get in Touch</h2>
            <p className="text-base text-dark-muted mt-3 max-w-xl">
              Open to new opportunities and collaborations — reach out through any channel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="group glass-effect rounded-2xl p-6 flex flex-col gap-4 border border-dark-border hover:-translate-y-1 hover:border-dark-text/30 transition-all duration-300"
              >
                <div className="text-dark-text group-hover:text-white transition-colors">
                  {method.icon}
                </div>
                <div>
                  <div className="text-lg font-bold text-dark-text group-hover:text-white transition-colors">
                    {method.name}
                  </div>
                  <div className="text-base text-dark-muted mt-0.5 break-all">{method.value}</div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-mono text-dark-muted group-hover:text-dark-text transition-colors mt-auto">
                  open
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
