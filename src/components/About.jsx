import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showAllSkills, setShowAllSkills] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const lines = [
      '> initializing portfolio ...',
      '> loading profile ...',
      '> importing projects ...',
      '> compiling ...',
      '> rendering ...',
      '> [██████████████████] 100% ✓',
      '> ready to explore'
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, index * 350);
    });

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // All skills in a single array with categories
  const allSkills = [
    // Programming Languages
    { name: 'Python', level: 88, category: 'Programming Languages' },
    { name: 'TypeScript', level: 82, category: 'Programming Languages' },
    { name: 'JavaScript', level: 84, category: 'Programming Languages' },
    { name: 'SQL', level: 78, category: 'Programming Languages' },

    // Frontend (Modern Web)
    { name: 'React', level: 86, category: 'Frontend' },
    { name: 'Next.js', level: 80, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'Frontend' },

    // Backend & APIs
    { name: 'FastAPI', level: 84, category: 'Backend & APIs' },
    { name: 'Node.js', level: 80, category: 'Backend & APIs' },
    { name: 'Express', level: 78, category: 'Backend & APIs' },
    { name: 'REST API Design', level: 82, category: 'Backend & APIs' },

    // Databases
    { name: 'PostgreSQL', level: 78, category: 'Databases' },
    { name: 'MongoDB', level: 75, category: 'Databases' },
    { name: 'Redis', level: 65, category: 'Databases' },

    // AI / ML (Applied, Product-Oriented)
    { name: 'OpenAI API', level: 84, category: 'AI/ML & LLMs' },
    { name: 'LLM Application Development (RAG basics)', level: 70, category: 'AI/ML & LLMs' },
    { name: 'PyTorch', level: 72, category: 'AI/ML' },
    { name: 'Scikit-learn', level: 74, category: 'AI/ML' },
    { name: 'OpenCV', level: 78, category: 'Computer Vision' },
    { name: 'NumPy', level: 80, category: 'Data' },
    { name: 'Pandas', level: 78, category: 'Data' },

    // Cloud & DevOps
    { name: 'Docker', level: 75, category: 'DevOps' },
    { name: 'Kubernetes', level: 68, category: 'DevOps' },
    { name: 'AWS (core services)', level: 70, category: 'Cloud' },
    { name: 'Firebase', level: 76, category: 'Cloud' },
    { name: 'CI/CD (GitHub Actions)', level: 62, category: 'DevOps' },

    // Engineering Practices
    { name: 'Git', level: 82, category: 'Engineering Practices' },
    { name: 'Testing (Pytest / Jest)', level: 68, category: 'Engineering Practices' },
    { name: 'System Design Fundamentals', level: 68, category: 'Engineering Practices' },
    { name: 'Performance Optimization (baseline)', level: 60, category: 'Engineering Practices' },
  ];


  // Sort all skills by level (highest to lowest)
  const sortedSkills = [...allSkills].sort((a, b) => b.level - a.level);

  // Get top 10 or all skills based on state
  const displayedSkills = showAllSkills ? sortedSkills : sortedSkills.slice(0, 10);

  const experience = [
    // add this later on
  ];

  const interests = [
    { icon: '🤖', title: 'AI & Machine Learning', desc: 'Exploring neural networks and computer vision' },
    { icon: '🎯', title: 'Open Source', desc: 'Contributing to open source projects' },
    { icon: '📚', title: 'Continuous Learning', desc: 'Always picking up new technologies' },
    { icon: '🎾', title: 'Sports Analytics', desc: 'Building tools for performance analysis' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
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
      <section className="min-h-screen relative flex items-center justify-center pt-30 px-4">
        <div className="relative max-w-5xl mx-auto w-full">
          {/* Terminal header - centered */}
          <div className={`glass-effect max-w-5xl mx-auto mb-8 rounded overflow-hidden transition-all duration-700 hover:border-dark-text/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="border-b border-dark-border px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-red-500 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-yellow-500 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-green-500 transition-colors cursor-pointer"></div>
            </div>
            <div className="p-4 font-mono text-sm">
              {terminalLines.map((line, index) => (
                <div key={index} className="mb-1 text-dark-muted animate-fade-in" style={{ animationDelay: `${index * 2}s` + .2}}>
                  {line}
                </div>
              ))}
              <div className="flex items-center mt-2">
                <span className={`text-dark-muted transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>
              </div>
            </div>
          </div>

          {/* Main content - grid layout */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all pt-10 duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left: Information */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="text-sm font-mono text-dark-muted opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                  // developer & creator
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight opacity-0 animate-slide-up" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                  <span className="gradient-text inline-block hover:scale-105 transition-transform duration-500">Kevin Zheng</span>
                </h1>
              </div>

              <div className="opacity-0 animate-slide-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                <div className="h-px w-20 bg-dark-border"></div>
              </div>

              <p className="text-dark-text leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                I recently graduated from the University of North Carolina at Chapel Hill with majors in Computer Science and Data Science. I'm a passionate developer focusing on software engineering, with hand-ons experience building web applications and optimizing AI/ML pipelines and technologies.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Full Stack', 'AI/ML', 'Cloud', 'DevOps', 'Open Source', 'MLOps', 'Backend Engineering', 'System Design' ].map((tag, i) => (
                  <span
                    key={i}
                    className="stagger-item px-3 py-1 text-xs font-mono bg-dark-surface border border-dark-border text-dark-muted rounded hover:border-dark-text hover:text-dark-text transition-all cursor-default"
                    style={{ animationDelay: `${2 + i * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: '3+', label: 'Years Exp' },
                  { value: '5+', label: 'Projects' },
                  { value: '10+', label: 'Technologies' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center group cursor-default opacity-0 animate-scale-in"
                    style={{ animationDelay: `${2 + i * 0.1}s`, animationFillMode: 'forwards' }}
                  >
                    <div className="text-3xl font-bold font-mono mb-1 text-dark-text group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-dark-muted tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
              <div className="relative group flex justify-center">
                <div className="relative">
                  <img
                    src="./zkw_headshot.jpg"
                    alt="Kevin Zheng"
                    className="w-64 h-64 md:w-90 md:h-90 object-cover rounded-full border-4 border-dark-border group-hover:border-dark-text/40 transition-all duration-500 group-hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="relative py-15 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            <span className="text-xs font-mono text-dark-muted tracking-wider">Scroll to explore</span>
            <svg className="w-5 h-5 text-dark-muted animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="relative pt-50 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm font-mono text-dark-muted mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '2.2s'}}>// skills</div>
          {/* Terminal Window */}
          <div className="glass-effect rounded overflow-hidden border border-dark-border opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '2.2s'}}>
            {/* Terminal Header */}
            <div className="border-b border-dark-border px-4 py-3 flex items-center justify-between bg-dark-surface/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-red-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-green-500 transition-colors cursor-pointer"></div>
              </div>
              <div className="text-xs font-mono text-dark-muted flex items-center gap-2">
                <span className="hidden sm:inline">kevin@portfolio:</span>
                <span className="text-dark-text">~/skills</span>
              </div>
              <div className="flex items-center gap-2 text-dark-muted text-xs font-mono">
                <span className="hidden md:inline">zsh</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm bg-dark-bg/50">
              {/* Command prompt */}
              <div className="mb-4 flex items-center gap-2">
                <span className="text-dark-muted">$</span>
                <span className="text-dark-text">cat skills.txt | sort -rn | head -{showAllSkills ? sortedSkills.length : 10}</span>
                <span className="inline-block w-2 h-4 bg-dark-text animate-pulse ml-1"></span>
              </div>

              {/* Output header */}
              <div className="mb-3 pb-2 border-b border-dark-border/50">
                <div className="grid grid-cols-12 gap-2 text-xs text-dark-muted uppercase tracking-wider">
                  <div className="col-span-1">#</div>
                  <div className="col-span-7 md:col-span-8">skill</div>
                  <div className="col-span-4 md:col-span-3 text-right">level</div>
                </div>
              </div>

              {/* Skills list */}
              <div className="space-y-2">
                {displayedSkills.map((skill, index) => {
                  const globalIndex = sortedSkills.findIndex(s => s.name === skill.name);
                  const barWidth = Math.round((skill.level / 100) * 30); // 30 chars max width
                  const bar = '█'.repeat(barWidth) + '░'.repeat(30 - barWidth);

                  return (
                    <div
                      key={skill.name}
                      className="group hover:bg-dark-surface/30 p-2 rounded transition-all duration-200"
                      style={{
                        animation: 'slideInFromRight 0.5s ease-out',
                        animationDelay: `${index * 40}ms`,
                        animationFillMode: 'backwards'
                      }}
                    >
                      <div className="grid grid-cols-12 gap-2 items-center">
                        {/* Rank */}
                        <div className="col-span-1">
                          <span className="text-dark-muted group-hover:text-dark-text transition-colors">
                            {String(globalIndex + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Skill name and category */}
                        <div className="col-span-7 md:col-span-8">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              {globalIndex < 3 && (
                                <span className="text-dark-text">★</span>
                              )}
                              <span className="text-dark-text group-hover:text-white transition-colors font-semibold">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs text-dark-muted mt-0.5">
                              [{skill.category}]
                            </span>
                          </div>
                        </div>

                        {/* Progress bar and percentage */}
                        <div className="col-span-4 md:col-span-3">
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-dark-text group-hover:text-white font-bold tabular-nums">
                              {skill.level}%
                            </span>
                            <div className="hidden lg:block text-xs text-dark-muted group-hover:text-dark-text transition-colors whitespace-nowrap overflow-hidden">
                              {bar}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile progress bar */}
                      <div className="lg:hidden mt-2 text-xs text-dark-muted group-hover:text-dark-text transition-colors overflow-x-auto">
                        <div className="whitespace-nowrap">{bar}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Command output footer */}
              <div className="mt-6 pt-4 border-t border-dark-border/50">
                <div className="flex items-center justify-between text-xs text-dark-muted mb-3">
                  <span>
                    Showing {displayedSkills.length} of {sortedSkills.length} entries
                  </span>
                  <span>
                    Avg: {Math.round(sortedSkills.reduce((acc, s) => acc + s.level, 0) / sortedSkills.length)}%
                  </span>
                </div>

                {/* Toggle command */}
                <button
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  className="group flex items-center gap-2 text-dark-muted hover:text-dark-text transition-colors"
                >
                  <span className="text-dark-muted">$</span>
                  <span className="group-hover:text-dark-text">
                    {showAllSkills ? 'head -10 skills.txt' : `cat skills.txt # show all ${sortedSkills.length}`}
                  </span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${showAllSkills ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
          <div className="relative py-15 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            <span className="text-xs font-mono text-dark-muted tracking-wider">Scroll to explore</span>
            <svg className="w-5 h-5 text-dark-muted animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
      </section>

      {/* add this later on*/}
      {/* Experience Section */}
      {/* <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="text-sm font-mono text-dark-muted mb-2">// professional journey</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text">Experience</span>
            </h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="glass-effect rounded p-6 hover:shadow-xl transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-dark-text mb-1">{exp.role}</h3>
                    <p className="text-base font-mono text-dark-muted">{exp.company}</p>
                  </div>
                  <div className="text-sm font-mono text-dark-muted mt-2 md:mt-0">{exp.period}</div>
                </div>
                <p className="text-dark-muted mb-3">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark-muted text-sm">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Interests & Hobbies Section - Terminal Style */}
      <section className="relative pt-50 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm font-mono text-dark-muted mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '2s' }}> // beyond the code</div>
          {/* Terminal Window */}
          <div className="glass-effect rounded overflow-hidden border border-dark-border opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '2s' }}>
            {/* Terminal Header */}
            <div className="border-b border-dark-border px-4 py-3 flex items-center justify-between bg-dark-surface/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-red-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-green-500 transition-colors cursor-pointer"></div>
              </div>
              <div className="text-xs font-mono text-dark-muted flex items-center gap-2">
                <span className="hidden sm:inline">kevin@portfolio:</span>
                <span className="text-dark-text">~/interests</span>
              </div>
              <div className="flex items-center gap-2 text-dark-muted text-xs font-mono">
                <span className="hidden md:inline">zsh</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-mono text-sm bg-dark-bg/50">
              {/* Command prompt */}
              <div className="mb-6 flex items-center gap-2">
                <span className="text-dark-muted">$</span>
                <span className="text-dark-text">cat interests.md</span>
                <span className="inline-block w-2 h-4 bg-dark-text animate-pulse ml-1"></span>
              </div>

              {/* Content sections */}
              <div className="space-y-6">
                {/* Tennis */}
                <div>
                  <div className="text-xs text-dark-muted mb-2">## 🎾 Tennis</div>
                  <div className="text-xs text-dark-muted mb-3 pl-4">
                    consistency • decision-making • performance loops
                  </div>
                  <p className="text-xs text-dark-muted leading-relaxed pl-4 mb-3">
                    I play tennis weekly and treat it like a craft: deliberate practice, measurable goals, and constant adjustment.
                    It's a fast feedback environment—reading patterns, choosing high-percentage options under pressure, and improving one habit at a time.
                    That same loop (observe → test → refine) is how I approach engineering work.
                  </p>
                  <div className="pl-4 flex flex-wrap gap-2">
                    <span className="text-xs text-dark-muted">▸ Weekly Matches</span>
                    <span className="text-xs text-dark-muted">▸ Structured Practice</span>
                    <span className="text-xs text-dark-muted">▸ Competitive Play</span>
                    <span className="text-xs text-dark-muted">▸ Performance Notes</span>
                  </div>
                </div>

                {/* AI Research */}
                <div>
                  <div className="text-xs text-dark-muted mb-2">## 🤖 AI Research & Prototyping</div>
                  <p className="text-xs text-dark-muted leading-relaxed pl-4 mb-3">
                    I like turning papers and ideas into working demos: LLM apps, RAG experiments, and computer vision prototypes.
                    My focus is pragmatic—latency, evaluation, and real product constraints—not just "cool outputs".
                  </p>
                  <div className="pl-4 flex flex-wrap gap-2">
                    <span className="text-xs text-dark-muted">▸ RAG & Eval</span>
                    <span className="text-xs text-dark-muted">▸ Computer Vision</span>
                    <span className="text-xs text-dark-muted">▸ Rapid Prototypes</span>
                  </div>
                </div>

                {/* Learning */}
                <div>
                  <div className="text-xs text-dark-muted mb-2">## 📚 Deliberate Learning</div>
                  <p className="text-xs text-dark-muted leading-relaxed pl-4 mb-3">
                    I keep a "build-to-learn" habit: pick a topic, implement something small, and write down what broke and why.
                    It's how I level up quickly without collecting surface-level buzzwords.
                  </p>
                  <div className="pl-4 flex flex-wrap gap-2">
                    <span className="text-xs text-dark-muted">▸ Build Notes</span>
                    <span className="text-xs text-dark-muted">▸ Small Experiments</span>
                  </div>
                </div>

                {/* Open Source */}
                <div>
                  <div className="text-xs text-dark-muted mb-2">## 🎯 Open Source & Tooling</div>
                  <p className="text-xs text-dark-muted leading-relaxed pl-4 mb-3">
                    I enjoy building developer-friendly utilities and contributing improvements where I can—docs, bug fixes,
                    and incremental features that make tools easier to use in the real world.
                  </p>
                  <div className="pl-4 flex flex-wrap gap-2">
                    <span className="text-xs text-dark-muted">▸ Docs & Fixes</span>
                    <span className="text-xs text-dark-muted">▸ Developer UX</span>
                  </div>
                </div>

                {/* Fitness */}
                <div>
                  <div className="text-xs text-dark-muted mb-2">## 🏃 Training & Recovery</div>
                  <p className="text-xs text-dark-muted leading-relaxed pl-4 mb-3">
                    I train consistently (running + strength work) to stay sharp for deep focus sessions. Good energy, better sleep,
                    and fewer "burnout cycles" makes me a more reliable builder.
                  </p>
                  <div className="pl-4 flex flex-wrap gap-2">
                    <span className="text-xs text-dark-muted">▸ Running</span>
                    <span className="text-xs text-dark-muted">▸ Strength</span>
                    <span className="text-xs text-dark-muted">▸ Consistency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
