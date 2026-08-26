export type ExperienceEntry = {
  label: string;
  role: string;
  company: string;
  period: string;
  type: string;
  detail: string[];
  certificateLink?: string | null;
  currentlyWorking?: boolean;
};

export type HackathonEntry = {
  title: string;
  subtitle: string;
  detail: string;
  certificateLink?: string | null;
};

export type CertificationEntry = {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  skillsGained?: string[];
  certificateLink?: string | null;
  previewImage?: string | null;
  previewVariant?: 'outskill-masterclass';
};

export const experiences: ExperienceEntry[] = [
  {
    label: 'Internship 1',
    role: 'QA Engineering Intern',
    company: 'Cosmolix Private Limited',
    period: 'July 2026 - October 2026',
    type: 'Quality Assurance & Testing',
    detail: [
      'Write comprehensive test cases and suites',
      'Perform manual and regression testing',
      'Execute API validation using Postman',
      'Report and track software bugs in Jira',
      'Collaborate with developers on issue resolution',
      'Document QA test summaries and validation logs'
    ],
    certificateLink: '',
    currentlyWorking: true
  },
  {
    label: 'Internship 2',
    role: 'Machine Learning Intern',
    company: 'Suvidha Foundation',
    period: 'June 2026 - August 2026',
    type: 'Machine Learning',
    detail: [
      'Contributed to an AI-powered dental health diagnostic initiative (with Code Karo Yaaro)',
      'Curated and labelled dental image datasets to train classification models',
      'Reviewed relevant research literature to inform model design and classification approach'
    ],
    certificateLink: '/internships/SuvidhaFoundationCertificate.jpg'
  },
  {
    label: 'Internship 3',
    role: 'Python Development Intern',
    company: 'QSkill',
    period: 'April 2026 - July 2026',
    type: 'Python Development',
    detail: [
      'Built a House Price Prediction model using regression with 87% accuracy',
      'Developed a Gemini-powered chatbot with real-time Bitcoin price and weather API integration',
      'Completed 3 of 6 Python projects covering automation, scripting, and ML deployment'
    ],
    certificateLink: '/internships/QSKILL_Certificate.jpeg'
  },
  {
    label: 'Internship 4',
    role: 'Data Analysis Intern',
    company: 'Thiranex',
    period: 'May 2026',
    type: 'Data Analysis',
    detail: [
      'Performed EDA on a student performance dataset',
      'Built supervised ML models',
      'Created dashboards using Pandas, Matplotlib, and Seaborn'
    ],
    certificateLink: '/internships/Thiranx_Internship_Certificate.png'
  },
  {
    label: 'Internship 5',
    role: 'Web Development Intern',
    company: 'InAmigos Foundation',
    period: 'May 2026',
    type: 'Web Development',
    detail: [
      'Designed NGO website prototype in Figma and HTML',
      'Audited the live website and documented usability improvements'
    ],
    certificateLink: '/internships/InAmigos_Internship_Certificate.png'
  }
];

export const hackathons: HackathonEntry[] = [
  {
    title: 'Smart India Hackathon (SIH) 2025',
    subtitle: 'Selected at college level',
    detail: 'Built a Kolam Design Generator using generative AI for the traditional arts domain.',
    certificateLink: ''
  },
  {
    title: 'UIDAI Government Data Hackathon',
    subtitle: 'National level',
    detail: 'Built the UIDAI Campaign Predictor machine learning pipeline.',
    certificateLink: ''
  },
  {
    title: 'Idea 2.0 - Union Bank Hackathon',
    subtitle: 'Hackathon proposal',
    detail: 'Proposed an AI chatbot integrated with SMS Banking and an accessible ATM UI for financial inclusion.',
    certificateLink: ''
  },
  {
    title: 'University Hackathon',
    subtitle: 'Prototype to product journey',
    detail: 'Built an AI-driven civic complaint system that was later upgraded into CivicSolve.',
    certificateLink: 'https://drive.google.com/file/d/1kl6Z4E-5wVy_48RErdx0BH-AFuwQwZIe/view?usp=drive_link'
  }
];

export const certifications: CertificationEntry[] = [
  {
    name: '2-Day Cloud and Generative AI Masterclass',
    issuer: 'OutSkill',
    date: '25-26 July 2026',
    description:
      'A hands-on, intensive workshop focused on practical AI application and system-building, led by Vaibhav Sisinty (Founder, Outskill). The program covered building custom AI assistants for targeted use cases, core AI foundations and generalist thinking, AI-assisted coding practices, and workflow automation using n8n. The focus stayed on applied, project-based learning by moving from AI tool usage to designing functional AI-driven systems and workflows.',
    skillsGained: [
      'Custom AI assistant design',
      'AI-assisted development',
      'Workflow automation (n8n)',
      'Prompt engineering',
      'AI systems thinking'
    ],
    certificateLink: '',
    previewImage: '',
    previewVariant: 'outskill-masterclass'
  },
  {
    name: 'Designing Scalable RAG Pipelines',
    issuer: 'Scaler Masterclass',
    date: '11 August 2026',
    description:
      'Participated in Scaler Masterclass on designing scalable Retrieval-Augmented Generation (RAG) pipelines, focused on approaches for building reliable, knowledge-grounded AI systems.',
    certificateLink: '',
    previewImage: '/certificates/scaler-designing-scalable-rag-pipelines.png'
  },
  {
    name: '30 Days Python Micro Course',
    issuer: 'SkillCourse',
    date: '16 August 2026',
    description:
      'A day-by-day Python course progressing from core fundamentals (variables, data types, operators, control flow, loops) through data structures (lists, tuples, dicts, sets) and functions, into file handling and CSV I/O, then NumPy and Pandas for data cleaning, analysis, grouping, and filtering — finishing with AI-assisted automation, AI-generated pipeline automation, and a capstone AI-powered Python data analysis project.',
    skillsGained: [
      'Python Fundamentals',
      'Data Structures',
      'File Handling & CSV I/O',
      'NumPy & Pandas',
      'Data Cleaning & Analysis',
      'AI-Assisted Automation'
    ],
    certificateLink: '',
    previewImage: '/certificates/skillcourse-python-micro-course.png'
  },
  {
    name: 'Generative AI Mastermind',
    issuer: 'Outskill',
    date: '',
    description: 'Certificate of Completion',
    certificateLink: '',
    previewImage: ''
  }
];
