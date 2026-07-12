export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'AI/ML' | 'Web' | 'Mobile' | 'Research' | 'Open Source' | 'Hardware';
  tags: string[];
  image: string;
  teamSize: number;
  year: number;
  award?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'CampusAI — Smart Study Assistant',
    description:
      'An AI-powered study companion that generates personalized quizzes, summarizes lecture notes, and adapts to each student\'s learning pace.',
    longDescription:
      'Built with Next.js, FastAPI, and Gemini Pro, CampusAI integrates with university LMS platforms to surface the most relevant study material before exams. It uses RAG to answer questions directly from uploaded PDFs.',
    category: 'AI/ML',
    tags: ['Next.js', 'Python', 'LangChain', 'Gemini', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    teamSize: 5,
    year: 2025,
    award: '🏆 Best AI Project — State Tech Fest 2025',
    githubUrl: '#',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'p2',
    title: 'EcoRoute — Sustainable Commute Planner',
    description:
      'A mobile app that calculates the lowest-carbon commute routes between campus buildings and nearby areas using real-time transit data.',
    longDescription:
      'EcoRoute aggregates public transit APIs, cycling paths, and walking routes to surface the most eco-friendly option. It gamifies sustainable commuting with streaks, badges, and a community leaderboard.',
    category: 'Mobile',
    tags: ['React Native', 'Node.js', 'Google Maps API', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    teamSize: 4,
    year: 2025,
    award: '🥈 Runner-Up — Green Tech Hackathon',
    githubUrl: '#',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'p3',
    title: 'OpenNotes — Community Lecture Archive',
    description:
      'A crowdsourced platform where students upload, organize, and rate lecture notes, past papers, and study guides.',
    longDescription:
      'OpenNotes uses semantic search to surface the most relevant resources for any subject. Notes are peer-reviewed and voted on, ensuring quality. Built as an open-source project with contributions from 20+ students.',
    category: 'Open Source',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Algolia'],
    image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&q=80',
    teamSize: 8,
    year: 2024,
    githubUrl: '#',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'p4',
    title: 'NeuralDraw — Real-time Sketch Recognition',
    description:
      'A web app that recognizes hand-drawn sketches in real-time using a convolutional neural network trained on the Quick, Draw! dataset.',
    longDescription:
      'Trained on 50M+ sketches, NeuralDraw achieves 94% top-5 accuracy across 345 categories. The model runs in-browser via TensorFlow.js for instant, private inference with no server roundtrips.',
    category: 'AI/ML',
    tags: ['TensorFlow.js', 'Canvas API', 'Python', 'React'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    teamSize: 3,
    year: 2024,
    award: '🏅 Best ML Demo — ACM Tech Expo',
    githubUrl: '#',
    demoUrl: '#',
    featured: false,
  },
  {
    id: 'p5',
    title: 'Peerwise — Peer Tutoring Marketplace',
    description:
      'Connects students who need help with peers offering tutoring, with verified ratings, scheduling, and in-app video sessions.',
    longDescription:
      'Peerwise uses a matching algorithm to pair tutors and learners based on subject, availability, and learning style. Integrated with Calendly and Zoom APIs for frictionless scheduling.',
    category: 'Web',
    tags: ['React', 'Express', 'MongoDB', 'WebRTC', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    teamSize: 6,
    year: 2024,
    githubUrl: '#',
    demoUrl: '#',
    featured: false,
  },
  {
    id: 'p6',
    title: 'SmartAttend — BLE Attendance System',
    description:
      'An IoT attendance system using Bluetooth Low Energy beacons and a mobile app to automate roll-call for large lectures.',
    longDescription:
      'Raspberry Pi beacons broadcast unique signals; the student app picks them up and logs attendance to a Firebase backend. Faculty get a real-time dashboard with attendance analytics.',
    category: 'Hardware',
    tags: ['Raspberry Pi', 'BLE', 'Flutter', 'Firebase', 'Python'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    teamSize: 4,
    year: 2024,
    award: '🥇 Best Hardware Hack — InnovateFest 2024',
    githubUrl: '#',
    demoUrl: '#',
    featured: false,
  },
];
