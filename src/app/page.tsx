import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { EventsPreview } from '@/components/home/EventsPreview';
import { ProjectsPreview } from '@/components/home/ProjectsPreview';
import { TeamPreview } from '@/components/home/TeamPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { JoinCTA } from '@/components/home/JoinCTA';

export const metadata: Metadata = {
  title: 'ACM Student Chapter — Technology. Community. Impact.',
  description:
    'The ACM Student Chapter is a vibrant community of technologists, builders, and innovators. Workshops, hackathons, projects, and more.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <EventsPreview />
      <ProjectsPreview />
      <TeamPreview />
      <Testimonials />
      <JoinCTA />
    </>
  );
}
