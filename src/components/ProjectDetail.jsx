import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, [projectId]);

  // Project data - you can move this to a separate file later
  const projectsData = {
    "flow-ai": {
      title: "Flow AI",
      category: "ai/ml",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "Zustand",
        "FastAPI",
        "Python",
        "SQLAlchemy",
        "PostgreSQL/SQLite",
        "Google Gemini",
      ],
      github: "",
      demo: "",
      overview:
        "An AI-powered learning roadmap builder that converts vague learning goals into structured, week-by-week curricula with curated resources, progress tracking, calendar-style planning, and adaptive adjustments based on user feedback. The core goal is to make self-directed learning measurable, structured, and personalized rather than random and inconsistent.",
      challenge:
        "The main challenges were generating consistent, high-quality curricula from open-ended user goals, maintaining predictable structure for downstream UI rendering (plans/tasks/timelines), and designing a full-stack system that supports authentication, persistence, and iterative plan updates without breaking previously generated artifacts.",
      solution:
        "Implemented a Next.js 14 (App Router) frontend with a FastAPI backend, using Clerk for authentication and a relational database via SQLAlchemy for persisted goals, plans, and tasks. AI generation is powered by Google Gemini (speed-optimized), and the product emphasizes schema-driven outputs that can be rendered as dashboards and calendar timelines. The system is structured into modular backend routes (goals/plans/tasks) and reusable frontend components to support rapid iteration and future extensions like RAG and user-specific memory.",
      features: [
        "Goal-based planning (timeline + hours/week) to scope curricula generation",
        "AI curriculum generation that outputs structured week-by-week learning plans with curated resources",
        "Progress tracking dashboards (completion rates / time invested) to keep accountability visible",
        "Calendar/timeline view to visualize tasks across weeks",
        "Adaptive learning loop: plans can adjust based on weekly feedback and pace",
        "Production-minded stack: Next.js + TypeScript frontend, FastAPI backend, SQLAlchemy + Postgres/SQLite persistence, Clerk auth",
      ],
      results: [
        "Delivered an end-to-end product that turns a high-level goal into a structured curriculum that is directly actionable (weeks → tasks → resources)",
        "Established a scalable architecture where goals, plans, and tasks are persisted and can be revisited/updated over time",
        "Reduced UI complexity by standardizing plan outputs into renderable “plan/task” primitives suitable for dashboards and calendar views",
        "Built a foundation for adding RAG, personalization, and analytics tooling without reworking core flows",
      ],
      limitations: [
        "Plan quality depends on generation prompting and resource curation strategy; some topics may require stronger domain-specific templates",
        "Adaptive learning currently relies on user feedback loops rather than learned personalization models",
        "Calendar and progress views can be expanded with deeper analytics (streaks, predicted completion dates, skill mastery)",
        "Future work: retrieval-augmented generation for higher-quality resources, long-term user preference memory, and stronger monitoring/analytics",
      ],
      media: [
        // { type: 'image', src: '/projects/flow-ai/goals.png', alt: 'Goal creation and configuration' },
      ],
    },

    "tennis-analyzer-system": {
      title: "Tennis Video Analysis System",
      category: "ai/ml",
      technologies: [
        "Python",
        "PyTorch",
        "OpenCV",
        "Ultralytics YOLO",
        "NumPy",
        "Pandas",
      ],
      github: "https://github.com/kzheng18/Tennis-Analyzer-System",
      demo: "",

      overview:
        "An AI-powered tennis analysis pipeline that processes match footage to detect players, track the ball, identify shot events and shot types, estimate ball speed, and visualize tactical shot locations on a virtual mini-court. The goal was to turn raw video into structured performance insights using a modular CV/ML architecture.",

      challenge:
        "Key challenges included reliable ball tracking under motion blur and occlusions, stabilizing player identities when detector IDs drift across frames, mapping screen coordinates to court coordinates using predicted court keypoints, and ensuring downstream analytics (speed, bounce calls, shot type) remain robust despite detection noise.",

      solution:
        "The system combines fast object detection with geometry-aware post-processing. YOLO is used for real-time player/ball detection, while a ResNet50 model predicts 14 court keypoints to enable perspective correction and mini-court projection. Player IDs are normalized using position-based logic, trajectories are smoothed with gap interpolation, and higher-level analytics are derived from kinematics (velocity/trajectory) rather than end-to-end classification to keep the pipeline interpretable and tunable.",

      features: [
        "YOLO-based real-time player and ball detection",
        "ResNet50 court keypoint detection (14 points) for court geometry",
        "Position-based player ID normalization for tracking stability",
        "Trajectory smoothing with gap interpolation",
        "Shot detection via velocity analysis",
        "Ball speed estimation with perspective correction",
        "Shot type classification (Topspin, Flat, Slice) from trajectory dynamics",
        "Bounce detection with in/out determination",
        "Mini-court tactical visualization of shot locations",
      ],

      results: [
        "Produced an end-to-end pipeline that converts match video into annotated output with detections, trajectories, and derived metrics",
        "Enabled tactical visualization via mini-court mapping to summarize shot placement patterns",
        "Created a modular system where thresholds and transforms can be tuned independently (tracking stability, bounce calls, speed calibration, shot-type sensitivity)",
        "Established a foundation for iterative improvements (better calibration, improved ball tracking, learned shot classifiers)",
      ],

      limitations: [
        "Mini-court coordinate mapping can show positional offsets and requires calibration/tuning of transforms",
        "Bounce in/out calls can produce false positives/negatives and benefit from tighter boundary modeling",
        "Player tracking can drop IDs or swap during rallies under occlusion; thresholds and normalization parameters need tuning",
        "Ball speed estimates can be inconsistent without robust perspective calibration",
        "Shot type classification is threshold-sensitive and may over/under-detect certain categories",
      ],
    },

    "gorilla-type": {
      title: "Gorilla Type",
      category: "web",
      technologies: [
        "React",
        "Tailwind",
        "Vite",
        "Node.js",
        "Express",
        "Zustand",
        "Lucide React",
      ],
      github: "",
      demo: "https://gorillatype1.vercel.app/",

      overview:
        "A speed typing game focused on measurable improvement through real-time feedback. The app delivers live WPM tracking (including per-second fluctuations), accuracy and error statistics, and configurable test lengths, with a minimal dark UI optimized for repeat practice sessions.",

      challenge:
        "The key challenges were implementing low-latency real-time metric computation (WPM, raw WPM, accuracy, consistency) while maintaining predictable state updates, generating realistic practice content with a weighted word distribution, and designing a clean client/server split where the frontend stays responsive and the backend reliably serves randomized test data.",

      solution:
        "The system uses a React + Vite frontend for fast UI iteration and Tailwind for consistent styling, with Zustand to keep typing state and metrics updates lightweight. An Express backend serves randomized word sets via an API endpoint, using a curated word bank weighted toward common vocabulary (60% easy, 30% medium, 10% hard) to better match real typing patterns. Metrics are computed client-side for responsiveness, while the backend isolates word generation and provides a foundation for persisting results later.",

      features: [
        "Real-time WPM tracking with a per-second fluctuation chart",
        "Comprehensive stats: accuracy, raw WPM, consistency, and error tracking",
        "Smart word bank using the 1K most common English words with weighted difficulty sampling",
        "Customizable tests: 10, 25, 40, 60, or 100 words",
        "Minimal dark theme UI with clear correct/incorrect word highlighting",
        "Keyboard-first controls (ESC/TAB restart) to keep practice flow uninterrupted",
        "API-driven word fetching: GET /api/words?count=40",
      ],

      results: [
        "Delivered a smooth typing experience with immediate visual feedback and continuously updating performance metrics",
        "Improved practice realism through weighted word selection rather than uniform random sampling",
        "Created a scalable architecture that supports future result persistence and user dashboards (results endpoint planned)",
      ],

      limitations: [
        "Saving results is scaffolded but not fully implemented yet (POST /api/results planned)",
        "Consistency scoring depends on variance heuristics; future work could offer multiple scoring modes",
        "Backend hosting on free tiers can introduce cold-start latency; production deployment would benefit from always-on hosting and caching",
      ],
    },
    "cnn-visual-recognition-models": {
      title: "CNN Visual Recognition Models",
      category: "ai",
      technologies: [
        "Python",
        "PyTorch",
        "Torchvision",
        "NumPy",
        "Matplotlib",
        "scikit-learn",
        "Jupyter Notebook",
      ],
      github: "https://github.com/kzheng18/cnn-visual-recognition-models",
      demo: "",
      overview:
        "End-to-end development and evaluation of convolutional neural networks (CNNs) for visual recognition tasks. The project focuses on training baseline and improved models for image classification, experimenting with transfer learning, and understanding limitations of CNNs for localization and real-world vision tasks.",
      challenge:
        "Core challenges included building models that generalize across visual categories, managing data preprocessing and augmentation for robust training, and evaluating model weaknesses through quantitative and qualitative error analysis. Extending simple classifiers toward localization without detection architectures further emphasized inherent limitations of CNNs in certain vision tasks.",
      solution:
        "Started with baseline CNN architectures and progressively introduced transfer learning with pretrained backbones to improve performance. Prioritized modular experimentation in Jupyter notebooks to isolate effects of data augmentation, normalization, and regularization. Chose PyTorch/Torchvision for flexibility in model definition and efficient GPU-accelerated training.",
      features: [
        "Baseline and enhanced CNN architectures for image classification",
        "Transfer learning using pretrained backbones with feature extraction and fine-tuning",
        "Data augmentation, normalization, and regularization to combat overfitting",
        "Quantitative evaluation with metrics and learning curves",
        "Error analysis and investigation of failure cases beyond classification",
      ],
      results: [
        "Successfully trained multiple CNN variants and observed performance tradeoffs across architectures",
        "Achieved significant improvements using transfer learning over baseline models",
        "Gained insight into model generalization patterns and the effects of training strategies",
        "Developed a structured workflow for experimentation that can extend to object detection and interpretability research",
      ],
      limitations: [
        "Localization was explored with sliding-window inference, highlighting the limitations of classification-only models",
        "No dedicated object detection or segmentation heads included (models limited to classification)",
        "Notebook-centric code is not production-ready without refactoring into reusable modules",
        "Future work includes adding Grad-CAM interpretability, YOLO/Faster-R-CNN integration, and packaging training/evaluation as reusable Python modules",
      ],
    },
    "pokemon-wordle": {
      title: "Pokemon Wordle",
      category: "fullstack",
      technologies: ["JavaScript", "Node.js", "Express", "SQLite", "HTML/CSS"],
      github: "https://github.com/dkzhang01/COMP426Project",
      demo: "",
      overview:
        "Built a Wordle-inspired Pokémon guessing game that goes beyond a static mini-game by supporting user accounts and persistent progress. The goal was to deliver an interactive full-stack experience where gameplay, authentication, and saved state work together in a cohesive product.",
      challenge:
        "Key challenges included implementing secure authentication in a lightweight Node/Express stack, designing game logic that evaluates guesses across multiple Pokémon attributes, and persisting per-user progression (e.g., guessed Pokémon / Pokédex-style history) in a relational database.",
      solution:
        "Implemented an Express backend with a SQLite persistence layer to keep development fast and the architecture approachable. The backend exposes API routes for auth and game state, while the frontend provides immediate feedback on guesses without page reloads. Chose SQLite for simplicity and portability, accepting concurrency limitations for a course-project scale deployment.",
      features: [
        "User registration/login with persisted accounts",
        "Per-user progress tracking (guesses and saved history)",
        "Wordle-style feedback loop based on Pokémon attribute matching",
        "Express API routes for gameplay + user data retrieval",
        "Clear separation between routing, game logic, and data access for maintainability",
      ],
      results: [
        "Delivered a fully functional full-stack game experience with persistent user progression",
        "Supported multiple users with isolated saved state (each user has their own history)",
        "Enabled fast iteration via modular backend structure (routes/logic/db separated)",
        "Provided an end-to-end demo showcasing gameplay + persistence + authentication",
      ],
      limitations: [
        "SQLite is not ideal for high-concurrency production traffic without migration",
        "Gameplay modes are limited to the core guessing loop; additional modes would require new UI + API logic",
        "UI/UX could be improved with a modern component system and stronger accessibility support",
        "Deployment and production hardening (rate limiting, monitoring, etc.) are not the primary focus of the project",
      ],
      media: [
        // Add screenshots like this once you place them in /public/projects/comp426-pokemon-wordle/
        // { type: 'image', src: '/projects/comp426-pokemon-wordle/gameplay.png', alt: 'Gameplay screen' },
        // { type: 'image', src: '/projects/comp426-pokemon-wordle/login.png', alt: 'Login screen' },
      ],
    },
    "modern-restaurant-design": {
      title: "Modern Restaurant Design",
      category: "web",
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/kzheng18/Modern-Restaurant-Design",
      demo: "https://kzheng18.github.io/Modern-Restaurant-Design/",
      overview:
        "A modern restaurant landing page designed to showcase clean visual hierarchy, strong typography, and a polished user experience. The goal was to build a production-style frontend layout using vanilla HTML/CSS/JavaScript—focused on responsiveness, section-based storytelling, and lightweight interactions.",
      challenge:
        "The main challenge was achieving a modern, high-end landing page feel without a framework. This required careful CSS architecture for consistent spacing/typography, responsive layout behavior across breakpoints, and JavaScript that enhances UX without introducing complexity.",
      solution:
        "Implemented a section-driven layout with reusable styling patterns and responsive rules. JavaScript is used selectively for UI behaviors (navigation interactions and dynamic page feel), while CSS handles the majority of responsiveness and visual polish. The design keeps dependencies minimal for fast load times and easy portability.",
      features: [
        "Modern landing-page layout with clear section hierarchy (hero → content → CTA)",
        "Responsive styling using breakpoint-aware CSS to maintain structure across devices",
        "Lightweight JavaScript interactions to improve navigation and page usability",
        "Asset-driven visuals using a dedicated image folder for consistent branding",
        "Clean project structure (separate css/js/img directories for maintainability)",
      ],
      results: [
        "Delivered a complete restaurant-style landing page with modern UI composition and responsive behavior",
        "Maintained fast performance and minimal complexity by avoiding heavy frontend frameworks",
        "Created a reusable template structure that can be adapted to other brand landing pages",
      ],
      limitations: [
        "No backend or CMS integration; content is static and requires code changes to update",
        "No formal accessibility audit (ARIA, contrast checks, keyboard navigation)",
        "Could be enhanced with performance optimizations (image compression, lazy-loading, critical CSS)",
        "Could be extended with form handling (reservations/contact) and deployment as a live site",
      ],
    },
    flowers: {
      title: "Flowers Animation Design",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/kzheng18/Flowers",
      demo: "https://kzheng18.github.io/Flowers/",
      overview:
        "A lightweight interactive web experience showcasing animated flowers and navigable messages. This project demonstrates foundational frontend skills using vanilla HTML, CSS, and JavaScript to create an engaging, visually driven page suitable for personal content and simple storytelling.",
      challenge:
        "Creating a smooth animation and intuitive navigation with purely vanilla web technologies required careful orchestration between DOM manipulation, CSS animation performance, and data-driven text content. Ensuring cross-browser consistency with minimal dependencies was also a focus.",
      solution:
        "The design relies on modular CSS for styling and structure, with JavaScript driving navigation and animation logic. This approach emphasizes simplicity and performance: CSS handles the visual effects where possible, while JavaScript drives dynamic behavior such as message transitions and responsive layout adjustments.",
      features: [
        "Animated flower and heart visuals using CSS keyframes",
        "Vanilla JavaScript navigation for cycling through messages",
        "Data-driven animation content stored in a separate data structure",
        "Responsive layout that adapts to different screen sizes",
      ],
      results: [
        "Delivered a polished interactive page with fluid animations and simple navigation",
        "Demonstrated hands-on mastery of core frontend technologies without frameworks",
        "Created a template that can be reused for personalized message pages or simple microsites",
        "Achieved responsive behavior and visual engagement with minimal overhead",
      ],
      limitations: [
        "Static content with no CMS or backend integration",
        "Limited accessibility features (e.g., keyboard navigation and ARIA support)",
        "No automated build pipeline or asset optimization included",
        "Could be enhanced with deploy automation and responsive image handling",
      ],
    },
    "diabetes-risk-factor-analysis": {
      title: "Diabetes Risk Factor Analysis",
      category: "data",
      technologies: [
        "Python",
        "Pandas",
        "Numpy",
        "skikit-learn",
        "Seaborn",
        "Matplotlib",
      ],
      github: "https://github.com/kzheng18/diabetes-risk-factor-analysis",
      demo: "",
      overview:
        "Diabetes is a growing public health concern, where early identification of risk factors is critical for prevention and intervention. This project analyzes large-scale survey data from the Behavioral Risk Factor Surveillance System (BRFSS) to identify which health and lifestyle indicators are most strongly associated with diabetes classification (no diabetes, prediabetes, diabetes).",
      challenge:
        "The dataset is large (250k+ samples) and entirely self-reported, introducing noise, bias, and class imbalance. Key challenges included selecting meaningful predictors from many correlated variables, preventing overfitting in tree-based models, and interpreting model outputs in a way that is both statistically sound and practically meaningful.",
      solution:
        "I applied multiple supervised learning models—Decision Trees, Random Forests, and k-Nearest Neighbors—to balance interpretability and predictive performance. Tree-based models were prioritized for feature importance analysis, while k-NN served as a baseline for comparison. Feature scaling and controlled model depth were used to mitigate overfitting and improve generalization.",
      features: [
        "Cleaned and processed 253,680 survey responses with 22 health and behavioral features",
        "Trained and evaluated a Decision Tree classifier with controlled depth for interpretability",
        "Used Random Forests to compare feature importance stability across ensemble models",
        "Applied feature scaling and k-NN classification as a complementary modeling approach",
        "Visualized feature importances, accuracy trends, and decision boundaries",
      ],
      results: [
        "Decision Tree and Random Forest models achieved ~84% test accuracy on diabetes classification",
        "High blood pressure (HighBP), general health (GenHlth), and BMI emerged as the strongest predictors",
        "Random Forest analysis confirmed BMI and Age as dominant contributors alongside HighBP",
        "k-NN achieved ~83% accuracy, validating trends observed in tree-based models",
        "Results highlight actionable health indicators relevant to early diabetes risk screening",
      ],
      limitations: [
        "Data is self-reported, which may introduce recall bias and measurement error",
        "Models focus on correlation rather than causal inference",
        "Class imbalance (prediabetes vs diabetes) limits fine-grained prediction accuracy",
        "Future work could include logistic regression for interpretability, resampling methods, or longitudinal analysis",
      ],
    },
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <section className="min-h-screen pt-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-dark-text">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="btn-primary px-6 py-3 rounded mt-8"
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-30 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back command */}
        <button
          onClick={() => navigate("/projects")}
          className={`flex items-center gap-2 text-dark-muted hover:text-dark-text transition-all duration-300 mb-8 font-mono text-sm group ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <span>$</span>
          <span>cd ../projects</span>
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Terminal Window */}
        <div
          className={`glass-effect rounded overflow-hidden border border-dark-border transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Terminal Header */}
          <div className="border-b border-dark-border px-4 py-3 flex items-center justify-between bg-dark-surface/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-red-500 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-yellow-500 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-dark-border hover:bg-green-500 transition-colors cursor-pointer"></div>
            </div>
            <div className="text-xs font-mono text-dark-muted flex items-center gap-2">
              <span className="hidden sm:inline">kevin@portfolio:</span>
              <span className="text-dark-text">~/projects/{projectId}</span>
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
              <span className="text-dark-text">cat README.md</span>
              <span className="inline-block w-2 h-4 bg-dark-text animate-pulse ml-1"></span>
            </div>

            {/* Project header */}
            <div className="mb-8 pb-6 border-b border-dark-border/50">
              <div className="text-xs text-dark-muted mb-3">
                # {project.title}
              </div>
              <div className="text-xs text-dark-muted mb-4">
                Category: [{project.category}]
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-dark-surface border border-dark-border text-dark-muted rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links as commands */}
              <div className="flex gap-4 text-xs">
                {project.github && project.github.trim() !== "" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-dark-muted hover:text-dark-text transition-colors group/link"
                  >
                    <span>$</span>
                    <span>git</span>
                    <svg
                      className="w-3 h-3 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {project.demo && project.demo.trim() !== "" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-dark-muted hover:text-dark-text transition-colors group/link"
                  >
                    <span>$</span>
                    <span>open demo</span>
                    <svg
                      className="w-3 h-3 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Content sections */}
            <div className="space-y-6">
              {/* Overview */}
              <div>
                <div className="text-xs text-dark-muted mb-2">## Overview</div>
                <p className="text-xs text-dark-muted leading-relaxed pl-4">
                  {project.overview}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <div className="text-xs text-dark-muted mb-2">
                  ## The Challenge
                </div>
                <p className="text-xs text-dark-muted leading-relaxed pl-4">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <div className="text-xs text-dark-muted mb-2">
                  ## The Solution
                </div>
                <p className="text-xs text-dark-muted leading-relaxed pl-4">
                  {project.solution}
                </p>
              </div>

              {/* Features */}
              <div>
                <div className="text-xs text-dark-muted mb-3">
                  ## Key Features
                </div>
                <ul className="space-y-2 pl-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs text-dark-muted"
                    >
                      <span className="text-dark-text">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <div className="text-xs text-dark-muted mb-3">## Results </div>
                <ul className="space-y-2 pl-4">
                  {project.results.map((results, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs text-dark-muted"
                    >
                      <span className="text-dark-text">▸</span>
                      <span>{results}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Tuning/Limitations*/}
              <div>
                <div className="text-xs text-dark-muted mb-3">
                  ## Limitations / Future Tuning{" "}
                </div>
                <ul className="space-y-2 pl-4">
                  {project.limitations.map((limitations, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs text-dark-muted"
                    >
                      <span className="text-dark-text">▸</span>
                      <span>{limitations}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Media section */}
              {project.media && project.media.length > 0 && (
                <div>
                  <div className="text-xs text-dark-muted mb-3">
                    ## Project Media
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                    {project.media.map((item, index) => (
                      <div
                        key={index}
                        className="border border-dark-border rounded overflow-hidden hover:border-dark-text/40 transition-all"
                      >
                        {item.type === "image" && (
                          <img
                            src={item.src}
                            alt={
                              item.alt ||
                              `${project.title} screenshot ${index + 1}`
                            }
                            className="w-full h-auto"
                          />
                        )}
                        {item.type === "video" && (
                          <video
                            src={item.src}
                            poster={item.poster}
                            controls
                            className="w-full h-auto"
                          />
                        )}
                        {item.type === "embed" && (
                          <div className="aspect-video">
                            <iframe
                              src={item.src}
                              title={`${project.title} embed ${index + 1}`}
                              className="w-full h-full"
                              allowFullScreen
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
