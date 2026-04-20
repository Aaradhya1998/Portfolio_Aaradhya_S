export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  typeLabel: string;
  featured?: boolean;
  projectUrl: string;
  demoUrl: string;
  details: string[];
}

export const projects: ProjectItem[] = [
  {
    slug: 'civicsolve',
    title: 'CivicSolve',
    description:
      'A civic issue reporting platform where users can submit, track, and analyze public problems with structured workflows.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    typeLabel: 'Web App',
    featured: true,
    projectUrl: 'https://github.com/Aaradhya1998/CivicSolve',
    demoUrl: 'https://civic-solve.vercel.app/',
    details: [
      'Built a clean reporting flow for issue submission, status updates, and problem tracking.',
      'Used structured data handling to organize complaints and make issue progress transparent.',
      'Deployed the app on Vercel and iterated UI for clarity and ease of use.'
    ]
  },
  {
    slug: 'qr-code-generator',
    title: 'QR Code Generator',
    description:
      'A lightweight web tool that generates QR codes instantly from user input with fast rendering and a clean interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    typeLabel: 'Web Tool',
    projectUrl: 'https://github.com/Aaradhya1998/qr-code-generator',
    demoUrl: 'https://asqrgenrator.netlify.app/',
    details: [
      'Implemented live QR generation to convert text input into scannable codes in real time.',
      'Focused on fast interactions and a minimal interface for everyday usability.',
      'Strengthened frontend fundamentals through DOM handling and lightweight client logic.'
    ]
  },
  {
    slug: 'uidai-campaign-predictor',
    title: 'UIDAI Campaign Predictor',
    description:
      'A machine learning project that predicts campaign outcomes using structured data, preprocessing, and classification models.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Google Colab'],
    typeLabel: 'Machine Learning Project',
    projectUrl: 'https://github.com/Aaradhya1998/uidai-campaign-predictor',
    demoUrl: 'https://colab.research.google.com/drive/1wCgeuJ7YhgSCcragcpSFtxb1k9NgN5Xk',
    details: [
      'Prepared and cleaned structured data in Python to build reliable model inputs.',
      'Trained and evaluated baseline classification models to understand prediction accuracy.',
      'Developed the workflow in Google Colab to experiment quickly and document results.'
    ]
  }
];
