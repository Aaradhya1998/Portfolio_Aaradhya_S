export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  projectUrl: string;
  demoUrl: string;
  details: string[];
}

export const projects: ProjectItem[] = [
  {
    slug: 'astra-commerce',
    title: 'Astra Commerce',
    description: 'A high-conversion e-commerce storefront with custom checkout flows, product personalization, and motion-rich interactions.',
    tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'Framer Motion'],
    projectUrl: '/projects/astra-commerce',
    demoUrl: 'https://astra-commerce.example.com',
    details: [
      'Designed a modular checkout experience with rich animation and micro-interactions to increase conversions.',
      'Implemented performance budgets and lazy loading to achieve sub-1.2s largest contentful paint.',
      'Collaborated closely with product and marketing to align branding, messaging, and SEO strategy.'
    ]
  },
  {
    slug: 'pulse-analytics',
    title: 'Pulse Analytics',
    description: 'Real-time business intelligence dashboard with custom charts, event tracking, and secure team collaboration.',
    tech: ['TypeScript', 'React', 'D3.js', 'Vercel'],
    projectUrl: '/projects/pulse-analytics',
    demoUrl: 'https://pulse-analytics.example.com',
    details: [
      'Built dynamic chart components and credentialed dashboards for secure stakeholder reporting.',
      'Optimized data visualization rendering for real-time updates at scale.',
      'Delivered a polished onboarding flow and admin controls for enterprise teams.'
    ]
  },
  {
    slug: 'launchpad-studio',
    title: 'LaunchPad Studio',
    description: 'Agency portfolio and client onboarding platform featuring polished transitions, flexible theming and speed-first performance.',
    tech: ['Next.js', 'Motion', 'Contentful', 'Stripe'],
    projectUrl: '/projects/launchpad-studio',
    demoUrl: 'https://launchpad-studio.example.com',
    details: [
      'Created a brand-forward portfolio with immersive visual motion and onsite case studies.',
      'Built a custom client onboarding dashboard with secure payments and content workflows.',
      'Improved site performance and accessibility across desktop and mobile breakpoints.'
    ]
  }
];
