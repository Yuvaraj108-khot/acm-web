export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  year: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'q1',
    quote:
      'ACM completely changed how I approach learning. The workshops pushed me to build things I never thought I could, and the community always had my back.',
    name: 'Tanvi Reddy',
    role: 'Software Engineer, Google',
    year: 'Alumni — Class of 2024',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    id: 'q2',
    quote:
      'The hackathon last semester was one of the best weekends of my life. We shipped a real product, got real feedback, and made real friends. I\'ve been hooked ever since.',
    name: 'Rohan Desai',
    role: 'Third Year, CS',
    year: 'Member since 2023',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
  },
  {
    id: 'q3',
    quote:
      'I joined knowing very little. Within three months, I had contributed to an open-source project, attended two workshops, and landed my first internship — all through ACM connections.',
    name: 'Shreya Pillai',
    role: 'Second Year, IT',
    year: 'Member since 2024',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80',
  },
  {
    id: 'q4',
    quote:
      'What sets ACM apart is the quality of the people. Everyone genuinely wants to help each other grow. It feels less like a club and more like a tight-knit lab.',
    name: 'Arjun Mehta',
    role: 'Research Lead',
    year: 'Member since 2022',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80',
  },
  {
    id: 'q5',
    quote:
      'The speaker events alone are worth joining for. Hearing from engineers at top companies gave me a completely different perspective on where the industry is heading.',
    name: 'Keerthana Iyer',
    role: 'Final Year, CS',
    year: 'Member since 2022',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80',
  },
];

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'News' | 'Opportunity' | 'Achievement' | 'Notice';
  pinned: boolean;
  link?: string;
  linkLabel?: string;
}

export const announcements: Announcement[] = [
  {
    id: 'a1',
    title: 'Registrations Open: Full-Stack Bootcamp Aug 15–16',
    content:
      'Sign up now for our most popular workshop of the year. Limited to 60 seats. Prior programming knowledge required. Certificate of completion provided.',
    date: '2025-07-28',
    category: 'News',
    pinned: true,
    link: '#',
    linkLabel: 'Register Now',
  },
  {
    id: 'a2',
    title: 'ACM wins Best Technical Club 2024–25',
    content:
      'We are thrilled to announce that ACM has been awarded the Best Technical Club award at our university\'s annual recognition ceremony. This belongs to every member who contributed this year.',
    date: '2025-07-10',
    category: 'Achievement',
    pinned: true,
  },
  {
    id: 'a3',
    title: 'Call for Project Team Applications — Batch 3',
    content:
      'We are forming new project teams for the upcoming semester. Apply to join an existing project or pitch your own idea. All skill levels welcome.',
    date: '2025-07-05',
    category: 'Opportunity',
    pinned: false,
    link: '#',
    linkLabel: 'Apply Here',
  },
  {
    id: 'a4',
    title: 'New Study Group: Competitive Programming',
    content:
      'A weekly competitive programming group is starting this month. Sessions every Saturday, 2–4 PM. Focused on LeetCode, Codeforces, and interview prep.',
    date: '2025-06-28',
    category: 'News',
    pinned: false,
    link: '#',
    linkLabel: 'Join Group',
  },
  {
    id: 'a5',
    title: 'Membership Renewals for 2025–26 are Open',
    content:
      'Renew your membership before August 31 to lock in the early-bird rate and secure priority registration for all events this academic year.',
    date: '2025-06-20',
    category: 'Notice',
    pinned: false,
    link: '#',
    linkLabel: 'Renew Membership',
  },
  {
    id: 'a6',
    title: 'Student Spotlight: Riya Sharma at Google STEP',
    content:
      'Congratulations to our VP Riya Sharma on securing the Google STEP Internship for Summer 2025! A testament to what the ACM community can accomplish together.',
    date: '2025-06-12',
    category: 'Achievement',
    pinned: false,
  },
];

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'Workshop' | 'Guide' | 'Roadmap' | 'Template' | 'Tool';
  tags: string[];
  link: string;
  date: string;
  fileType?: 'PDF' | 'Notion' | 'GitHub' | 'Slides' | 'Video';
  featured: boolean;
}

export const resources: Resource[] = [
  {
    id: 'r1',
    title: 'Full-Stack Development Roadmap 2025',
    description:
      'A curated, opinionated roadmap for becoming a production-ready full-stack developer — from HTML basics to deploying scalable apps.',
    category: 'Roadmap',
    tags: ['Web', 'React', 'Node.js', 'Career'],
    link: '#',
    date: '2025-06-01',
    fileType: 'Notion',
    featured: true,
  },
  {
    id: 'r2',
    title: 'Machine Learning Workshop Slides — Batch 4',
    description:
      'Complete slide deck from our ML workshop series covering linear regression, SVM, neural networks, and model evaluation.',
    category: 'Workshop',
    tags: ['ML', 'Python', 'scikit-learn'],
    link: '#',
    date: '2025-05-15',
    fileType: 'Slides',
    featured: true,
  },
  {
    id: 'r3',
    title: 'Competitive Programming Starter Pack',
    description:
      'Problem lists, strategy guides, and template code for getting started with competitive programming on Codeforces and LeetCode.',
    category: 'Guide',
    tags: ['CP', 'Algorithms', 'Data Structures'],
    link: '#',
    date: '2025-04-20',
    fileType: 'GitHub',
    featured: false,
  },
  {
    id: 'r4',
    title: 'Tech Interview Preparation Guide',
    description:
      'ACM\'s comprehensive guide to cracking technical interviews at top companies — DSA, system design, behavioral, and offer negotiation.',
    category: 'Guide',
    tags: ['Career', 'DSA', 'System Design'],
    link: '#',
    date: '2025-03-10',
    fileType: 'PDF',
    featured: true,
  },
  {
    id: 'r5',
    title: 'Open Source Contribution Guide',
    description:
      'Step-by-step guide to making your first open-source contribution — from finding a project to getting your PR merged.',
    category: 'Guide',
    tags: ['Open Source', 'Git', 'GitHub'],
    link: '#',
    date: '2025-02-18',
    fileType: 'Notion',
    featured: false,
  },
  {
    id: 'r6',
    title: 'ACM Project Proposal Template',
    description:
      'Use this template to pitch a new project idea to the ACM project committee. Includes scope, team structure, and milestones.',
    category: 'Template',
    tags: ['Projects', 'Planning'],
    link: '#',
    date: '2025-01-05',
    fileType: 'Notion',
    featured: false,
  },
];
