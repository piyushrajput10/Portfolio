export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
  highlight?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  num: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  link?: string;
  github?: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

