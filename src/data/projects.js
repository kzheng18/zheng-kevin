// Single source of truth for projects — used by the Selected Work grid
// and (in the unified view) the roadmap timeline.
//
// `date`   = display string shown on the project branch (PLACEHOLDER — replace with real dates)
// `sort`   = numeric YYYYMM used to place the project chronologically on the timeline
export const projects = [
  {
    id: 2,
    slug: 'tennis-analyzer-system',
    title: 'Tennis Video Analysis System',
    description: 'AI pipeline for player/ball tracking, shot type detection, ball speed estimation, and mini-court visualization.',
    category: 'ai/ml',
    date: 'Jun 2025 – Present',
    sort: 202608, // ongoing → pinned to top
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Ultralytics YOLO', 'NumPy', 'Pandas'],
    github: 'https://github.com/kzheng18/Tennis-Analyzer-System',
    demo: '',
  },
  {
    id: 1,
    slug: 'flow-ai',
    title: 'Flow AI',
    description: 'AI-powered platform that transforms high-level learning goals into structured, progress tracking and adaptive planning.',
    category: 'ai/ml',
    date: 'Dec 2025',
    sort: 202512,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zustand', 'FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL/SQLite', 'Google Gemini'],
    github: '',
    demo: '',
  },
  {
    id: 3,
    slug: 'gorilla-type',
    title: 'Gorilla Type',
    description: 'A modern typing-speed game with real-time WPM charting, accuracy + consistency analytics.',
    category: 'web',
    date: 'Jan 2026',
    sort: 202601,
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Zustand', 'Lucide'],
    github: '',
    demo: 'https://gorillatype1.vercel.app/',
  },
  {
    id: 5,
    slug: 'pokemon-wordle',
    title: 'Pokémon Wordle',
    description: 'A full-stack web game inspired by Wordle where users guess a hidden Pokémon using type, generation, height, weight, and evolution hints. Features real-time feedback, a structured Pokémon dataset, and persistent game logic.',
    category: 'fullstack',
    date: 'Dec 2024',
    sort: 202412,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'SQL', 'Pokémon API'],
    github: 'https://github.com/dkzhang01/COMP426Project',
    demo: '',
  },
  {
    id: 6,
    slug: 'modern-restaurant-design',
    title: 'Modern Restaurant Design',
    description: 'Modern restaurant landing page with polished layout, interactive UI behaviors, and responsive styling.',
    category: 'web',
    date: 'Dec 2024',
    sort: 202412,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kzheng18/Modern-Restaurant-Design',
    demo: 'https://kzheng18.github.io/Modern-Restaurant-Design/',
  },
];
