import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { InteractiveTerminal } from '@/components/ui/InteractiveTerminal';

export const metadata: Metadata = {
  title: {
    template: '%s | ACM Student Chapter',
    default: 'ACM Student Chapter — Technology. Community. Impact.',
  },
  description:
    'The ACM Student Chapter is a vibrant community of passionate technologists, builders, and innovators. Join us for workshops, hackathons, projects, and more.',
  keywords: ['ACM', 'student chapter', 'technology', 'programming', 'computer science', 'community'],
  openGraph: {
    type: 'website',
    siteName: 'ACM Student Chapter',
    title: 'ACM Student Chapter — Technology. Community. Impact.',
    description:
      'A vibrant community of passionate technologists, builders, and innovators.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="root-layout-card">
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <InteractiveTerminal />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
