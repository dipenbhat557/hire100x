export interface NavLink {
  href: string;
  key: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
  prefix: string;
}

export interface TalentCard {
  title: string;
  description: string;
  icon: string;
  link: {
    text: string;
    href: string;
  };
}

export interface Testimonial {
  id: number;
  title: string;
  description: string;
  company: {
    name: string;
    logo: string;
  };
}

export interface AboutInfo {
  title: string;
  description: string;
  image: string;
  link: {
    text: string;
    href: string;
  };
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface JoinSection {
  title: string;
  highlight: string;
  image: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface HiringFormData {
  companySize: string;
  projectType: string;
  duration: string;
  commitment: string;
  skills: string[];
  startDate: string;
  contactInfo: {
    email: string;
    companyName: string;
    contactName: string;
    phone?: string;
  };
}

export interface FormOption {
  label: string;
  value: string;
}

export interface SkillOption {
  label: string;
  value: string;
  category?: string;
}

export interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface SocialLoginButton {
  provider: 'google' | 'linkedin';
  icon: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}
