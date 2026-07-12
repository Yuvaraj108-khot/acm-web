export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'Workshop' | 'Hackathon' | 'Talk' | 'Social' | 'Competition';
  image: string;
  registrationUrl?: string;
  isPast: boolean;
  speakers?: string[];
  attendees?: number;
}

export const events: Event[] = [
  {
    id: 'e1',
    title: 'Full-Stack Bootcamp: Next.js & Supabase',
    description:
      'A hands-on two-day workshop covering modern full-stack development — from database schema design to deploying production-ready applications with Next.js and Supabase.',
    date: '2025-08-15',
    time: '10:00 AM – 5:00 PM',
    location: 'Tech Lab 301, Engineering Block',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    registrationUrl: '#',
    isPast: false,
    speakers: ['Dr. Priya Nair', 'Arjun Mehta'],
    attendees: 60,
  },
  {
    id: 'e2',
    title: '24-Hour Hackathon: Build for Impact',
    description:
      'Teams of 2–4 compete to build solutions addressing real-world challenges in education, health, and sustainability. Prizes, mentors, and non-stop energy.',
    date: '2025-09-06',
    time: '9:00 AM (24 hrs)',
    location: 'Main Auditorium',
    category: 'Hackathon',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    registrationUrl: '#',
    isPast: false,
    attendees: 120,
  },
  {
    id: 'e3',
    title: 'The Future of AI: Industry Panel',
    description:
      'Leading professionals from Google, Microsoft, and top startups discuss where AI is heading and what it means for the next generation of engineers.',
    date: '2025-09-22',
    time: '3:00 PM – 5:30 PM',
    location: 'Auditorium A',
    category: 'Talk',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    registrationUrl: '#',
    isPast: false,
    speakers: ['Raj Kumar — Google', 'Sanya Verma — Microsoft'],
  },
  {
    id: 'e4',
    title: 'Open Source Sprint Weekend',
    description:
      'Contribute to real open-source projects in a collaborative, guided setting. Perfect for beginners and experienced developers alike.',
    date: '2025-10-11',
    time: '9:00 AM – 6:00 PM',
    location: 'CS Seminar Hall',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80',
    registrationUrl: '#',
    isPast: false,
    attendees: 45,
  },
  {
    id: 'e5',
    title: 'Intro to Machine Learning with Python',
    description:
      'A beginner-friendly workshop covering ML fundamentals — linear regression, classification, and neural networks — using scikit-learn and PyTorch.',
    date: '2025-03-18',
    time: '11:00 AM – 3:00 PM',
    location: 'Lab 204',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    isPast: true,
    attendees: 80,
    speakers: ['Kavya Sharma'],
  },
  {
    id: 'e6',
    title: 'Spring Coding Contest 2025',
    description:
      'Our annual competitive programming contest — three hours, thirty problems, and the glory of the leaderboard. Open to all skill levels.',
    date: '2025-04-05',
    time: '2:00 PM – 5:00 PM',
    location: 'Computer Centre',
    category: 'Competition',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80',
    isPast: true,
    attendees: 95,
  },
  {
    id: 'e7',
    title: 'Resume & LinkedIn Workshop',
    description:
      'Craft a resume that stands out and a LinkedIn profile that attracts recruiters. Live feedback from industry mentors.',
    date: '2025-02-20',
    time: '4:00 PM – 6:00 PM',
    location: 'Room 105, Admin Block',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    isPast: true,
    attendees: 55,
  },
  {
    id: 'e8',
    title: 'Annual Tech Fest After-Party',
    description:
      'Celebrate the end of a packed semester with the ACM community — games, food, lightning talks, and award announcements.',
    date: '2025-05-12',
    time: '6:00 PM – 9:00 PM',
    location: 'Student Commons',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    isPast: true,
    attendees: 150,
  },
];
