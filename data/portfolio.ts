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
  certificateLink?: string | null;
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
    role: 'Python Development Intern',
    company: 'QSkill',
    period: 'April 2026 - July 2026',
    type: 'Python Development',
    detail: [
      'Built a House Price Prediction model using regression with 87% accuracy',
      'Developed a Gemini-powered chatbot with real-time Bitcoin price and weather API integration',
      'Completed 3 of 6 Python projects covering automation, scripting, and ML deployment'
    ],
    certificateLink: 'https://drive.google.com/file/d/1kttlwf4ANvWKSZUhxhVid5nXjEUGBC2r/view?usp=drive_link'
  },
  {
    label: 'Internship 3',
    role: 'Data Analysis Intern',
    company: 'Thiranex',
    period: 'May 2026',
    type: 'Data Analysis',
    detail: [
      'Performed EDA on a student performance dataset',
      'Built supervised ML models',
      'Created dashboards using Pandas, Matplotlib, and Seaborn'
    ],
    certificateLink: 'https://drive.google.com/file/d/1brWefSEBbGOsKYxL1jisLRNc4PVc7azS/view?usp=drive_link'
  },
  {
    label: 'Internship 4',
    role: 'Web Development Intern',
    company: 'InAmigos Foundation',
    period: 'May 2026',
    type: 'Web Development',
    detail: [
      'Designed NGO website prototype in Figma and HTML',
      'Audited the live website and documented usability improvements'
    ],
    certificateLink: 'https://drive.google.com/file/d/1KjSi98cRqiwHImh7ZElF9RIlJ4rifaw2/view?usp=drive_link'
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
    name: '[YOUR WORKSHOP NAME]',
    issuer: '[ORGANIZER]',
    date: '[DATE]',
    certificateLink: '[PASTE DRIVE LINK]'
  }
];
