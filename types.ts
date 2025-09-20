
export interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
}

export interface Education {
  dates: string;
  location: string;
  degree: string;
  institution: string;
  details: string;
}

export interface WorkExperience {
  dates: string;
  location: string;
  role: string;
  company: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  text: string;
}

export interface Hobby {
  name: string;
  icon: 'plane' | 'book' | 'camera' | 'music' | 'cricket';
}

export interface SocialMedia {
  platform: 'linkedin';
  handle: string;
  url: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  profile: string;
  education: Education[];
  workExperience: WorkExperience[];
  skills: SkillCategory[];
  achievements: Achievement[];
  hobbies: Hobby[];
  socialMedia: SocialMedia[];
  goal: string;
}
