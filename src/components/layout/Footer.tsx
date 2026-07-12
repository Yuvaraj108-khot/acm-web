import Link from 'next/link';
import { Globe, Share2, X, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = {
  Chapter: [
    { href: '/about',    label: 'About Us' },
    { href: '/team',     label: 'Team' },
    { href: '/projects', label: 'Projects' },
    { href: '/gallery',  label: 'Gallery' },
  ],
  Community: [
    { href: '/events',        label: 'Events' },
    { href: '/announcements', label: 'Announcements' },
    { href: '/resources',     label: 'Resources' },
    { href: '/contact#join',  label: 'Join Us' },
  ],
  Connect: [
    { href: '/contact',  label: 'Contact' },
    { href: '#',         label: 'Newsletter' },
    { href: '#',         label: 'Sponsor Us' },
    { href: '#',         label: 'Alumni Network' },
  ],
};

const socials = [
  { icon: Globe,  href: '#', label: 'GitHub' },
  { icon: Share2, href: '#', label: 'Instagram' },
  { icon: X,      href: '#', label: 'X / Twitter' },
  { icon: Mail,   href: 'mailto:acm@university.edu', label: 'Email' },
];

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="ACM Student Chapter home">
            <span className={styles.logoMark}>ACM</span>
            <span className={styles.logoSub}>Student Chapter</span>
          </Link>
          <p className={styles.tagline}>
            Technology. Community. Impact.<br />
            Building the engineers of tomorrow.
          </p>
          <div className={styles.meta}>
            <span><MapPin size={13} aria-hidden="true" /> Campus, University</span>
            <a href="mailto:acm@university.edu"><Mail size={13} aria-hidden="true" /> acm@university.edu</a>
          </div>
          <div className={styles.socials}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={styles.socialLink}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>{group}</h3>
            <ul>
              {links.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className={styles.link}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>
            © {new Date().getFullYear()} ACM Student Chapter. All rights reserved.
          </p>
          <p className={styles.acmNote}>
            A registered student chapter of the{' '}
            <a
              href="https://www.acm.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.acmLink}
            >
              Association for Computing Machinery
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
