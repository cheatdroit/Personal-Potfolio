export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  image: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}