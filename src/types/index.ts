export interface Project {
  id: string;
  title: string;
  location: string;
  type: 'Commercial' | 'Residential' | 'Retail' | 'Resort';
  size: string;
  lotSize?: string;
  floorArea?: string;
  buildCost?: string;
  ffeCost?: string;
  totalCost?: string;
  description: string;
  image: string;
  gallery?: string[];
  gallery?: string[];
  features: string[];
  year: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
}

export interface ContactForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budgetRange: string;
  targetStart: string;
  message: string;
  files?: File[];
}

export interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}