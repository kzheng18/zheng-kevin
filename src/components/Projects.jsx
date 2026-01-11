import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      slug: 'flow-ai',
      title: 'Flow AI',
      description: 'AI-powered platform that transforms high-level learning goals into structured, progress tracking and adaptive planning.',
      category: 'ai/ml',
      technologies: ['Next.js',
    'TypeScript',
    'Tailwind CSS',
    'React Query',
    'Zustand',
    'FastAPI',
    'Python',
    'SQLAlchemy',
    'PostgreSQL/SQLite',
    'Google Gemini'
],
      github: '', 
      demo: '',
    },
    {
      id: 2,
      slug: 'tennis-analyzer-system',
      title: 'Tennis Video Analysis System',
      description: 'AI pipeline for player/ball tracking, shot type detection, ball speed estimation, and mini-court visualization.',
      category: 'ai/ml',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Ultralytics YOLO', 'NumPy', 'Pandas'],
      github: 'https://github.com/kzheng18/Tennis-Analyzer-System',
      demo: '',
    },
    // {
    //   id: 3,
    //   slug: 'rate-my-courts',
    //   title: 'RateMyCourts',
    //   description: 'Crowdsourced court ratings with reviews, photos, and real-time updates.',
    //   category: 'fullstack',
    //   technologies: ['React', 'Tailwind', 'Firebase', 'Firestore'],
    //   github: 'https://github.com/kzheng18/rate-my-courts', 
    // },
    {
  id: 3,
  slug: 'speed-type',
  title: 'Speed Type',
  description:
    'A modern typing-speed game with real-time WPM charting, accuracy + consistency analytics.',
  category: 'web',
  technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Zustand', 'Lucide'],
  github: '',
  demo: 'https://speed-type-six.vercel.app/',
},
    {
      id: 4,
      slug: 'cnn-visual-recognition-models',
      title: 'CNN Visual Recognition: Models + CV Pipeline',
      description:'Deep learning computer vision pipeline featuring CNN baselines on CIFAR-10, transfer learning on Dogs vs. Cats, and a sliding-window localization pipeline with training curves, evaluation, and error analysis.',
      category: 'ai/ml',
      technologies: [
        'Python',
        'PyTorch',
        'Torchvision',
        'NumPy',
        'Matplotlib',
        'CUDA (optional)',
        'scikit-learn (metrics)',
      ],
      github: 'https://github.com/kzheng18/cnn-visual-recognition-models',
    },
    {
      id: 5,
      slug: 'pokemon-wordle',
      title: 'Pokémon Wordle',
      description:
        'A full-stack web game inspired by Wordle where users guess a hidden Pokémon using type, generation, height, weight, and evolution hints. Features real-time feedback, a structured Pokémon dataset, and persistent game logic.',
      category: 'fullstack',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Node.js',
        'Express',
        'SQL',
        'Pokémon API',
      ],
      github: 'https://github.com/dkzhang01/COMP426Project',
    },
    {
      id: 6,
      slug: 'modern-restaurant-design',
      title: 'Modern Restaurant Design',
      description: 'Modern restaurant landing page with polished layout, interactive UI behaviors, and responsive styling.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/kzheng18/Modern-Restaurant-Design',
      demo: 'https://kzheng18.github.io/Modern-Restaurant-Design/',
    },
    {
      id: 7,
      slug: 'diabetes-risk-factor-analysis',
      title: 'Diabetes Risk Factor Analysis',
      description: 'Large-scale analysis of BRFSS survey data using tree-based and k-NN models to identify key predictors of diabetes.',
      category: 'data',
      technologies:['Python', 'Pandas', 'Numpy', 'skikit-learn', 'Seaborn', 'Matplotlib'],
      github: 'https://github.com/kzheng18/diabetes-risk-factor-analysis',
      demo: '',
    },
    {
      id: 10,
      slug: 'flowers',
      title: 'Flowers Animation Design',
      description: 'Interactive page with animated flowers and message.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/kzheng18/Flowers',
      demo: 'https://kzheng18.github.io/Flowers/',
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai/ml', label: 'AI/ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'web', label: 'Web' },
    { id: 'data', label: 'Data' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="min-h-screen relative py-30">
      <div className="max-w-5xl mx-auto w-full">
        {/* Terminal Window */}
        <div className={`glass-effect rounded overflow-hidden border border-dark-border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Terminal Header */}
          <div className="border-b border-dark-border px-4 py-3 flex items-center justify-between bg-dark-surface/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-red-500 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-yellow-500 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-green-500 transition-colors cursor-pointer"></div>
            </div>
            <div className="text-xs font-mono text-dark-muted flex items-center gap-2">
              <span className="hidden sm:inline">kevin@portfolio:</span>
              <span className="text-dark-text">~/projects</span>
            </div>
            <div className="flex items-center gap-2 text-dark-muted text-xs font-mono">
              <span className="hidden md:inline">zsh</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm bg-dark-bg/50">
            {/* Command prompt */}
            <div className="mb-6 flex items-center gap-2">
              <span className="text-dark-muted">$</span>
              <span className="text-dark-text">ls -la projects/{activeFilter === 'all' ? '*' : activeFilter}</span>
              <span className="inline-block w-2 h-4 bg-dark-text animate-pulse ml-1"></span>
            </div>

            {/* Output header */}
            <div className="mb-8 pb-4 border-b border-dark-border/50">
              <div className="text-xs text-dark-muted mb-2"># Available contact projects</div>
            </div>

            {/* Filter tabs */}
            <div className="mb-6 flex flex-wrap gap-2 pb-4 border-b border-dark-border/50">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-3 py-1.5 font-mono text-xs transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-dark-surface text-dark-text border border-dark-text'
                      : 'text-dark-muted hover:text-dark-text hover:bg-dark-surface/30'
                  }`}
                >
                  [{category.label}]
                </button>
              ))}
            </div>

            {/* Output: project count */}
            <div className="mb-4 text-xs text-dark-muted">
              Found {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </div>

            {/* Projects list */}
            <div className="space-y-4">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="group p-4 hover:bg-dark-surface/30 rounded transition-all duration-300 cursor-pointer border border-transparent hover:border-dark-border"
                  style={{
                    animation: 'slideInFromRight 0.5s ease-out',
                    animationDelay: `${index * 80}ms`,
                    animationFillMode: 'backwards'
                  }}
                >
                  {/* Project header line */}
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-dark-muted shrink-0">▸</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-dark-text group-hover:text-white font-semibold transition-colors">
                          {project.title}
                        </span>
                        <span className="text-xs text-dark-muted">
                          [{project.category}]
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="ml-6 mb-3">
                    <p className="text-xs text-dark-muted group-hover:text-dark-text transition-colors leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="ml-6 flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs bg-dark-surface border border-dark-border text-dark-muted rounded group-hover:border-dark-text/30 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links as commands */}
                  <div className="ml-6 flex gap-4 text-xs">
                    {project.github && project.github.trim !== '' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-dark-muted hover:text-dark-text transition-colors group/link"
                      >
                        <span>$</span>
                        <span>git</span>
                        <svg className="w-3 h-3 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.demo && project.demo.trim() !== '' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-dark-muted hover:text-dark-text transition-colors group/link"
                      >
                        <span>$</span>
                        <span>open demo</span>
                        <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer command */}
            <div className="mt-6 pt-4 border-t border-dark-border/50">
              <div className="flex items-center gap-2 text-xs text-dark-muted">
                <span>$</span>
                <span>Click any project to view details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
