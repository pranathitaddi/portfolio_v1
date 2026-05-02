export interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  githubUrl: string;
  technologies: string[];
  goals: string;
  challenges: string;
  outcomes: string;
  highlights: string[];
}
