export interface portfolioItemSettings {
  imageAspect: "squere";
  dir: "rtl" | "ltr";
}
export interface PortfolioItem {
  id: string;
  SKU: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  projectType: "Wood-Working" | "Web-Development" | "Design" | "Other";
  completionDate?: string;
  client?: string;
  githubLink?: string;
  liveLink?: string;
  image: string;
  imagePack: string[];
  additionalInfo: Array<{
    label: string;
    value: string;
  }>;
  featured: boolean;
  status: "completed" | "in-progress" | "concept";
  settings: portfolioItemSettings;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  linkedIn?: string;
  github?: string;
  website?: string;
  profileImage: string;
}
