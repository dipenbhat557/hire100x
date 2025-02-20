import { developer, designer, manager, company1, company2, company3, company4, company5, company6, aboutImage, videoCallImage, joinImage, logo } from "../assets";

export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/hire-talent', key: 'hire_talent', label: 'Hire Talent' },
  { href: '/freelancers', key: 'freelancers', label: 'Freelancers' },
  { href: '/about-us', key: 'about_us', label: 'About Us' },
];

export const STATS = [
  { value: '550K', label: 'Jobs', prefix: '+' },
  { value: '10K', label: 'Startups', prefix: '+' },
  { value: '345K', label: 'Recruitment', prefix: '+' },
];

export const TALENT_CARDS = [
  {
    title: 'Developers',
    description: 'Expert developers, engineers, and architects with mastery in diverse technologies',
    icon: developer,
    link: {
      text: 'Hire a Developers',
      href: '/hire-developers'
    }
  },
  {
    title: 'UI/UX designer',
    description: 'Skilled UI/UX designers crafting intuitive and engaging digital experience',
    icon: designer,
    link: {
      text: 'Hire a Designer',
      href: '/hire-designer'
    }
  },
  {
    title: 'Products managers',
    description: 'Experienced product managers driving innovation and seamless user experiences',
    icon: manager,
    link: {
      text: 'Hire a Products Manager',
      href: '/hire-product-manager'
    }
  }
];

export const HIRING_STEPS = [
  {
    number: 1,
    title: 'Talk to One of Our Client Advisors',
    description: 'A senior client advisor will work with you to understand your goals, technical needs, and team dynamics.'
  },
  {
    number: 2,
    title: 'Work With Hand-Selected Talent',
    description: "Within days, we'll introduce you to the right developer for your project. Average time to match is under 24 hours."
  },
  {
    number: 3,
    title: 'The Right Fit, Guaranteed',
    description: "Work with your new IT developer for a trial period (pay only if satisfied), ensuring they're the right fit before starting the engagement."
  }
];

export const TRUSTED_COMPANIES = [
  { name: 'Disney', logo: company1 },
  { name: 'FedEx', logo: company2 },
  { name: 'Ford', logo: company3 },
  { name: 'Gap', logo: company4 },
  { name: 'Kroger', logo: company5 },
  { name: 'Uber', logo: company6 }
];

export const TESTIMONIALS = [
  {
    id: 1,
    title: 'Efficient and Effective Hiring Process!',
    description: 'The Hire100x platform hiring process is streamlined and efficient. We found the perfect developer for our project in record time. The quality of talent is exceptional.',
    company: {
      name: 'Ford',
      logo: company3
    }
  },
  {
    id: 2,
    title: 'Top-Notch Talent at Our Fingertips!',
    description: 'As a growing startup, finding the right talent is crucial. Hire100x made it simple with their pre-vetted pool of developers. The matching system efficiently matched our hiring needs.',
    company: {
      name: 'Disney',
      logo: company1
    }
  },
  {
    id: 3,
    title: 'A True Partner!',
    description: 'The platform not only helped us find talent but also provided ongoing support throughout the engagement. Their commitment to our success sets them apart.',
    company: {
      name: 'FedEx',
      logo: company2
    }
  }
];

export const ABOUT_INFO = {
  title: 'Get to Know Us Better',
  description: 'Hire100x was founded in 2020 to match the right talent globally with companies. Founded with a mission to redefine the way individuals connect with career paths and organizations build their dream teams, our journey began with a simple goal: to empower businesses that have found success through collaboration.',
  image: aboutImage,
  link: {
    text: 'Read More',
    href: '/about-us'
  }
};

export const VIDEO_RECRUITMENT = {
  title: 'Recruitment using',
  highlight: 'video calls',
  subHighlight: 'in real time',
  description: 'Our end-to-end recruitment through video calls lets time zones fade away. Hire talent in real time.',
  image: videoCallImage
};

export const JOIN_SECTION = {
  title: 'Come join us and enjoy our',
  highlight: 'interesting features',
  image: joinImage,
  cta: {
    text: 'Get Started',
    href: '/signup'
  }
};

export const FOOTER_COLUMNS = [
  {
    title: 'Features',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Hire a Talent', href: '/hire-talent' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/contact' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Help', href: '/help' },
      { label: 'Login', href: '/login' },
      { label: 'Integration', href: '/integration' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' }
    ]
  }
];

export const COMPANY_INFO = {
  description: 'Hire100x is an Recruitment and Talent Hiring WebApp enabling human resources departments and recruitment agencies to source and hire in the most effective way.',
  logo: logo
};

export const COMPANY_SIZE_OPTIONS = [
  { label: 'Less than 10', value: 'less_than_10' },
  { label: '11 - 50', value: '11_50' },
  { label: '51 - 200', value: '51_200' },
  { label: '201 - 1000', value: '201_1000' },
  { label: '1001 - 5000', value: '1001_5000' },
  { label: 'More than 5000', value: 'more_than_5000' }
];

export const PROJECT_TYPE_OPTIONS = [
  { label: 'New idea or project', value: 'new_project' },
  { label: 'Existing project that needs more resources', value: 'existing_project' },
  { label: "None of the above, I'm just looking to learn more about Hire100x", value: 'learn_more' }
];

export const DURATION_OPTIONS = [
  { label: 'Less than 1 week', value: 'less_than_1_week' },
  { label: '1 to 4 weeks', value: '1_4_weeks' },
  { label: '1 to 3 months', value: '1_3_months' },
  { label: '3 to 6 months', value: '3_6_months' },
  { label: 'Longer than 6 months', value: 'more_than_6_months' },
  { label: "I'll decide later", value: 'undecided' }
];

export const COMMITMENT_OPTIONS = [
  { label: 'Full time (40 or more hrs/week)', value: 'full_time' },
  { label: 'Part time (Less than 40 hrs/week)', value: 'part_time' },
  { label: 'Hourly', value: 'hourly' },
  { label: "I'll decide later", value: 'undecided' }
];

export const START_DATE_OPTIONS = [
  { label: 'Immediately', value: 'immediately' },
  { label: 'In 1 to 2 weeks', value: '1_2_weeks' },
  { label: 'More than 2 weeks from now', value: 'more_than_2_weeks' },
  { label: "I'll decide later", value: 'undecided' }
];

export const POPULAR_SKILLS = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'CSS', value: 'css' },
  { label: 'PHP', value: 'php' },
  { label: 'React', value: 'react' },
  { label: 'HTML', value: 'html' },
  { label: 'Node.js', value: 'nodejs' },
  { label: 'iOS', value: 'ios' },
  { label: 'MySQL', value: 'mysql' },
  { label: 'Python', value: 'python' },
  { label: 'HTML5', value: 'html5' }
];

export const SOCIAL_LOGIN_OPTIONS = [
  {
    provider: 'linkedin',
    label: 'Login with LinkedIn',
    icon: '/icons/linkedin.svg',
    bgColor: 'bg-[#0077B5]',
    hoverColor: 'hover:bg-[#006399]'
  },
  {
    provider: 'google',
    label: 'Login with Google',
    icon: '/icons/google.svg',
    bgColor: 'bg-white',
    hoverColor: 'hover:bg-gray-50'
  }
] as const;
