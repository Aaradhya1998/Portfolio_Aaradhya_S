export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  typeLabel: string;
  featured?: boolean;
  projectUrl: string;
  demoUrl?: string;
  details: string[];
}

export const projects: ProjectItem[] = [
  {
    slug: 'civicsolve',
    title: 'CivicSolve',
    description:
      'Full-stack civic issue-reporting platform with real-time status tracking, AI complaint drafting, multilingual UI, live map, and OTP authentication.',
    tech: ['Full-Stack Development', 'REST APIs', 'OTP Auth', 'AI Integration', 'Multilingual UI'],
    typeLabel: 'Civic Tech Platform',
    featured: true,
    projectUrl: 'https://github.com/Aaradhya1998/CivicSolve',
    details: [
      'Started as a university hackathon build and independently extended it into a more production-ready civic tech app.',
      'Implemented structured complaint tracking with live status updates, map-based issue context, and multilingual accessibility.',
      'Added AI-assisted complaint drafting to help users describe civic issues faster and more clearly.'
    ]
  },
  {
    slug: 'autostream-agent',
    title: 'AutoStream Agent',
    description:
      'AI automation platform using LLMs, RAG, and API integrations to automate content generation and workflow execution.',
    tech: ['LLMs', 'RAG', 'API Integration', 'Automation', 'Prompt Engineering'],
    typeLabel: 'AI Automation Platform',
    featured: true,
    projectUrl: 'https://github.com/Aaradhya1998/AutoStream-Agent',
    details: [
      'Designed automated flows that combine large language models with retrieval and external APIs.',
      'Built the project to reduce repetitive manual work in content creation and digital workflows.',
      'Focused on extensibility so the agent can support multiple automation use cases.'
    ]
  },
  {
    slug: 'uidai-campaign-predictor',
    title: 'UIDAI Campaign Predictor',
    description:
      'ML pipeline predicting Aadhaar campaign effectiveness by age demographics with preprocessing, feature engineering, predictive modeling, and explainability.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering', 'Explainability'],
    typeLabel: 'Government Data Hackathon Project',
    projectUrl: 'https://github.com/Aaradhya1998/uidai-campaign-predictor',
    details: [
      'Built for the UIDAI Government Data Hackathon using structured public-sector campaign data.',
      'Created a complete pipeline covering preprocessing, feature engineering, training, and interpretation.',
      'Used model outputs to understand which demographic patterns most influenced campaign performance.'
    ]
  },
  {
    slug: 'university-complaint-management-system',
    title: 'University Complaint Management System',
    description:
      'Full-stack platform for students to log and track complaints with authentication, CRUD workflows, live status updates, and a role-based admin dashboard.',
    tech: ['Flask', 'SQLite', 'REST APIs', 'Authentication', 'CRUD'],
    typeLabel: 'Full-Stack Web App',
    projectUrl: 'https://github.com/Aaradhya1998/university-complaint-system',
    details: [
      'Built a student-focused complaint workflow that makes issue reporting and resolution tracking more transparent.',
      'Implemented role-based admin controls for reviewing, updating, and managing complaint records.',
      'Focused on reliable CRUD operations and clear status communication across the platform.'
    ]
  },
  {
    slug: 'gemini-chatbot-assistant',
    title: 'Gemini Chatbot Assistant',
    description:
      'Conversational AI assistant using the Google Gemini API with real-time Bitcoin and weather data through live API chaining.',
    tech: ['Google Gemini API', 'Prompt Engineering', 'API Chaining', 'Python'],
    typeLabel: 'AI Assistant',
    projectUrl: 'https://github.com/Aaradhya1998/Gemini-Chatbot-Assistant',
    details: [
      'Built a chatbot that combines Gemini responses with live external data sources.',
      'Integrated Bitcoin price and weather APIs to demonstrate real-time conversational utility.',
      'Used prompt engineering patterns to improve response quality and tool usage flow.'
    ]
  },
  {
    slug: 'yatrasense',
    title: 'YatraSense — Crowd Intelligence Platform for Heritage Tourism',
    description:
      'Dual-interface system helping tourists find the best time to visit a monument and helping site authorities monitor crowd density in real time — piloted at Shaniwarwada Fort, Pune.',
    tech: ['OpenCV', 'YOLOv8', 'Scikit-learn', 'FastAPI', 'Streamlit'],
    typeLabel: 'Smart India Hackathon Project',
    featured: true,
    projectUrl: 'https://github.com/Aaradhya1998/YatraSense',
    details: [
      'Built solo for an internal Smart India Hackathon round under a 10-day timeline.',
      'Real-time crowd density detection via OpenCV + YOLOv8, with a scikit-learn predictive layer for forecasting best visit times.',
      'FastAPI backend serving a Streamlit dashboard for site authorities, piloted at Shaniwarwada Fort.'
    ]
  },
  {
    slug: 'bingeaaradhya',
    title: 'BingeAaradhya',
    description:
      'Personal watch tracker for logging, ranking, and showcasing movies and shows, with a public media shelf and a private admin panel.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TMDB API'],
    typeLabel: 'Personal Full-Stack App',
    projectUrl: 'https://github.com/Aaradhya1998/BingeAaradhya',
    details: [
      'Public homepage with currently-watching, Top 10 all-time, and Top 5 recommendation lists.',
      'Stats dashboard covering totals, genre breakdown, ratings distribution, and estimated hours watched.',
      'TMDB-powered search/metadata autofill with manual overrides, and JWT-secured admin session for private entry management.'
    ]
  },
  {
    slug: 'task-manager',
    title: 'Smart Task Management System',
    description:
      'Flask-based task manager with authentication, CRUD workflows, PostgreSQL storage, real-time updates, and built-in analytics.',
    tech: ['Flask', 'PostgreSQL', 'SQLAlchemy', 'Flask-SocketIO', 'Pandas'],
    typeLabel: 'Full-Stack Web App',
    projectUrl: 'https://github.com/Aaradhya1998/task_manager',
    details: [
      'User registration/login and full task CRUD with a responsive frontend.',
      'Real-time updates via Flask-SocketIO instead of polling.',
      'Built-in analytics — total/completed/pending tasks and completion percentage — using Pandas.'
    ]
  },
  {
    slug: 'roll-call',
    title: 'Roll Call — Offline Attendance Tracker',
    description:
      'Installable, privacy-first attendance tracker that runs entirely offline with no account, no server, and no backend cost.',
    tech: ['JavaScript', 'IndexedDB', 'Service Worker', 'PWA'],
    typeLabel: 'Offline-First PWA',
    projectUrl: 'https://github.com/Aaradhya1998/Roll-call-',
    details: [
      'Built with no framework and no build step — plain HTML/CSS/JS.',
      'All data stored locally in IndexedDB; nothing is ever sent to a server.',
      'Installable as a PWA with offline Excel export and full offline functionality after first load.'
    ]
  }
];
