export interface WithLinkItem {
  name: string;
  link: string;
}

export interface WithLinkImageItem extends WithLinkItem {
  img: string;
}

export interface DatePeriod {
  from: string | number;
  to: string | number;
}

interface TechItem {
  title: string;
  description: string;
  techStack: string[];
}

export interface EducationItem {
  year: number;
  titulation: WithLinkItem;
  institution: WithLinkItem;
}

export interface Position extends TechItem {
  location: string;
  site: WithLinkImageItem;
  date: DatePeriod;
}

export interface DevProject extends TechItem {
  resources?: WithLinkItem[];
}

export interface DevCompany {
  title: string;
  projects: DevProject[];
}

export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  volume?: number | string | null;
  pages?: string | null;
  year: number;
  link: string;
}

export interface TeachingSubject {
  period: DatePeriod;
  course: WithLinkItem;
  degree: WithLinkItem;
  university: WithLinkItem;
}

export interface Conference {
  title: string;
  month: string;
  year: number;
  location: string;
  role: string;
}

export interface Contact {
  /** Contains markup (invisible decoy spans) to discourage e-mail scraping. */
  email: string;
  web: string;
  profiles: Record<string, WithLinkItem>;
}

export interface Description {
  fullName: string;
  img: string;
  jobTitle: string;
  text: string[];
}
