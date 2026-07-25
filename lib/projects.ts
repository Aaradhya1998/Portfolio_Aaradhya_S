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
  }
];
