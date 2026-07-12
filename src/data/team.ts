export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  year: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
  tier: 'leadership' | 'core' | 'member';
}

export const team: TeamMember[] = [
  {
    id: 't1',
    name: 'Aryan Kapoor',
    role: 'President',
    department: 'Computer Science',
    year: 'Final Year',
    bio: 'Driving the vision of ACM with a focus on building an inclusive, impact-driven tech community. Full-stack developer and open-source advocate.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    linkedin: '#',
    github: '#',
    email: 'president@acm.edu',
    tier: 'leadership',
  },
  {
    id: 't2',
    name: 'Riya Sharma',
    role: 'Vice President',
    department: 'Computer Science',
    year: 'Third Year',
    bio: 'Coordinating events, outreach, and partnerships. Passionate about accessible technology and community-led learning.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    linkedin: '#',
    github: '#',
    tier: 'leadership',
  },
  {
    id: 't3',
    name: 'Dev Patel',
    role: 'Technical Lead',
    department: 'Information Technology',
    year: 'Third Year',
    bio: 'Architecting ACM\'s digital infrastructure and leading project teams. Loves systems programming and distributed systems.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    linkedin: '#',
    github: '#',
    tier: 'leadership',
  },
  {
    id: 't4',
    name: 'Anika Joshi',
    role: 'Events Coordinator',
    department: 'Computer Science',
    year: 'Second Year',
    bio: 'Orchestrating workshops, hackathons, and speaker series that bring the community together. Detail-oriented and endlessly creative.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    linkedin: '#',
    tier: 'leadership',
  },
  {
    id: 't5',
    name: 'Samir Khan',
    role: 'Design Lead',
    department: 'Computer Science',
    year: 'Third Year',
    bio: 'Crafting the visual identity of ACM — from event posters to this website. Deeply passionate about design systems and UI engineering.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    linkedin: '#',
    github: '#',
    tier: 'core',
  },
  {
    id: 't6',
    name: 'Priya Menon',
    role: 'Research Coordinator',
    department: 'Computer Science',
    year: 'Final Year',
    bio: 'Connecting students with research opportunities, reading groups, and paper discussions. ML researcher at heart.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    linkedin: '#',
    tier: 'core',
  },
  {
    id: 't7',
    name: 'Karan Singh',
    role: 'Outreach & Partnerships',
    department: 'Information Technology',
    year: 'Second Year',
    bio: 'Building relationships with industry partners and alumni to create opportunities for ACM members.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80',
    linkedin: '#',
    tier: 'core',
  },
  {
    id: 't8',
    name: 'Meera Nair',
    role: 'Content & Media',
    department: 'Computer Science',
    year: 'Second Year',
    bio: 'Documenting the chapter\'s journey through photography, video, and written content. Telling our story with craft.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    linkedin: '#',
    tier: 'core',
  },
];
