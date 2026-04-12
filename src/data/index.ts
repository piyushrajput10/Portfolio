import type { NavItem, Stat, SkillGroup, Experience, Project, ContactLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { value: '5+', label: 'Years Experience' },
  { value: '4', label: 'Companies' },
  { value: '3', label: 'Global Brands' },
  { value: '∞', label: 'Lines of Code' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'SASS/SCSS', 'jQuery'],
    highlight: true,
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware Design'],
  },
  {
    title: 'E-Commerce / CMS',
    skills: ['Salesforce Commerce Cloud', 'ISML', 'Business Manager', 'SFMC'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'JIRA', 'Figma', 'Postman', 'VS Code', 'Agile/Scrum', 'CI/CD'],
  },
];

export const experiences: Experience[] = [
  {
    id: 'fossil',
    role: 'Software Engineer — Content & UI',
    company: 'Fossil Group, Inc.',
    period: 'Jun 2024 – Feb 2026',
    location: 'Bengaluru, India',
    bullets: [
      'Collaborated with Design, Merchandising, QA, and Engineering stakeholders to deliver e-commerce experiences for WatchStation, Skagen, and Fossil across APAC, NAM, EU, and Global markets.',
      'Created, implemented, and optimized UI components and content pages using HTML, CSS, ISML, and JavaScript on Salesforce Commerce Cloud (SFCC).',
      'Acted as Designated Responsible Individual (DRI) for BFCM deployments — monitored system status, coordinated stakeholders, and executed zero-downtime rollouts, earning formal appreciation from management.',
      'Diagnosed, debugged, and refactored UI/content issues to maintain optimal site performance across all brand storefronts.',
      'Drove end-to-end release planning and work item tracking ensuring zero missed deadlines across global regions.',
    ],
    tags: ['SFCC', 'JavaScript', 'HTML/CSS', 'ISML', 'React.js', 'Agile'],
  },
  {
    id: 'sapient',
    role: 'Senior Associate, Technology',
    company: 'Publicis Sapient',
    period: 'Apr 2022 – Jan 2024',
    location: 'Noida, India',
    bullets: [
      'Partnered with cross-functional teams to deliver SFCC migration and UI development for Langton\'s (Endeavour Group / Woolworths), one of Australia\'s largest wine retailers.',
      'Created and optimized reusable UI components using ISML, HTML5, CSS3, and Bootstrap 4, reducing code duplication and improving ROI.',
      'Joined as React.js Developer and UI Lead for SFMC, driving component-based front-end development for ASDA\'s large-scale retail platform.',
      'Implemented, refactored, and optimized React.js components improving UI consistency and reducing development time significantly.',
      'Built and consumed REST APIs using Node.js and Express.js, bridging frontend and backend for data-driven features.',
      'As SFMC UI Lead, authored HTML email templates, created customer journey automations with audience segmentation, and delivered push message campaigns.',
    ],
    tags: ['React.js', 'Node.js', 'SFCC', 'SFMC', 'Bootstrap', 'jQuery', 'REST APIs'],
  },
  {
    id: 'kudzu',
    role: 'Senior IT Consultant',
    company: 'Kudzu Infotech',
    period: 'May 2021 – Jan 2022',
    location: 'Bengaluru, India · Client: Deloitte',
    bullets: [
      'Collaborated with Deloitte to build a public-facing government portal for the Kingdom of Saudi Arabia using JavaScript and Bootstrap 5.',
      'Designed and implemented landing pages, multi-step forms, login/sign-up flows, and responsive layouts from Figma specifications.',
      'Drove design document reviews and conducted thorough UI testing to validate responsiveness and code clarity.',
    ],
    tags: ['JavaScript', 'Bootstrap 5', 'HTML5', 'CSS3', 'Figma', 'Responsive Design'],
  },
  {
    id: 'rajput',
    role: 'Full Stack Developer',
    company: 'Rajput and Sons Associates',
    period: 'May 2020 – May 2021',
    location: 'Remote',
    bullets: [
      'Designed and deployed full stack web applications using React.js and Node.js/Express.js for multiple clients.',
      'Built and integrated RESTful APIs with JWT-based authentication, managing routing and server-side logic.',
      'Converted Figma/PSD mockups into responsive, mobile-first websites using Tailwind CSS and SASS.',
      'Implemented SPA architecture with reusable component libraries to improve scalability.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'REST APIs', 'JWT'],
  },
  {
    id: 'wipro',
    role: 'Associate System Engineer',
    company: 'Wipro Limited',
    period: 'Jul 2014 – Jul 2015',
    location: 'Delhi, India',
    bullets: [
      'Supported the HP process within a cross-functional engineering team, gaining foundational experience in enterprise IT systems and operations.',
      'Collaborated with engineers to support system operations, troubleshoot technical issues, and ensure smooth delivery of IT services.',
    ],
    tags: ['Enterprise IT', 'System Operations', 'Technical Support'],
  },
];

export const projects: Project[] = [
  {
    num: '01',
    title: 'Full Stack E-Commerce Application',
    description:
      'A complete e-commerce platform built end-to-end — from a component-based React.js storefront to a secure Node.js/Express.js REST API backend, supporting the full shopping lifecycle.',
    features: [
      'JWT-based authentication & role-based access control',
      'Product management with full CRUD operations',
      'Cart system with quantity controls & order summary',
      'Protected API routes with middleware for auth & error handling',
    ],
    stack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'REST API', 'JWT', 'Tailwind CSS'],
  },
  {
    num: '02',
    title: 'BFCM Multi-Brand Deployment System',
    description:
      'Led Black Friday & Cyber Monday content deployments for Fossil, WatchStation, and Skagen simultaneously — zero-downtime rollouts across APAC, NAM, EU, and Global regions under aggressive timelines.',
    features: [
      'Multi-region zero-downtime content releases',
      'Cross-brand campaign pages & promotional banners',
      'Real-time stakeholder coordination & monitoring',
      'Earned formal appreciation from merchandisers & management',
    ],
    stack: ['SFCC', 'ISML', 'JavaScript', 'HTML/CSS', 'Business Manager'],
  },
  {
    num: '03',
    title: 'Saudi Arabia Government Portal',
    description:
      'A public-facing government information portal for the Kingdom of Saudi Arabia, built in partnership with Deloitte. Citizens and migrants could access government scheme info and job listings.',
    features: [
      'Mobile-first, fully responsive design',
      'Multi-step form flows & authentication pages',
      'Employer-employee job matching interface',
      'Cross-browser validated to strict government standards',
    ],
    stack: ['JavaScript', 'Bootstrap 5', 'HTML5', 'CSS3', 'Figma'],
  },
];

export const contactLinks: ContactLink[] = [
  { icon: '✉', label: 'Email', value: 'piyushrajput10@gmail.com', href: 'mailto:piyushrajput10@gmail.com' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/rajput-piyush', href: 'https://linkedin.com/in/rajput-piyush' },
  { icon: '📍', label: 'Location', value: 'Uttarakhand, India', href: '#' },
  { icon: '📞', label: 'Phone', value: '+91-7065337373', href: 'tel:+917065337373' },
];
