import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#f1f5f9',
      borderTop: '1px solid var(--border)',
      padding: '4rem 0 2rem 0',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Image src="/images/meta9-logo.png" alt="Meta9Tech Logo" width={140} height={60} style={{ objectFit: 'contain' }} />
            </Link>
            <p style={{ marginBottom: '1.5rem', maxWidth: '300px' }}>
              A global technology conglomerate driving innovation, digital transformation, and delivery excellence across industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#0f172a', marginBottom: '1.5rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/services/development" style={{ color: 'var(--muted)' }}>Development</Link>
              <Link href="/services/staffing" style={{ color: 'var(--muted)' }}>Staffing</Link>
              <Link href="/expertise" style={{ color: 'var(--muted)' }}>Expertise</Link>
              <Link href="/about" style={{ color: 'var(--muted)' }}>About Us</Link>
              <Link href="/careers" style={{ color: 'var(--muted)' }}>Careers</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#0f172a', marginBottom: '1.5rem' }}>Core Solutions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ color: 'var(--muted)' }}>Digital Transformation</span>
              <span style={{ color: 'var(--muted)' }}>Cloud & Infrastructure</span>
              <span style={{ color: 'var(--muted)' }}>Agentic AI & Automation</span>
              <span style={{ color: 'var(--muted)' }}>IT Staffing Solutions</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#0f172a', marginBottom: '1.5rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--muted)' }}>
                <Phone size={18} style={{ color: 'var(--primary)' }} />
                <span>(512) 596-5550</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--muted)' }}>
                <Mail size={18} style={{ color: 'var(--primary)' }} />
                <span>info@meta9tech.com</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--muted)' }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '4px' }} />
                <span>Austin, Texas<br/>United States</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          color: 'var(--muted)',
          fontSize: '0.9rem'
        }}>
          <p>© {new Date().getFullYear()} Meta9Tech. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
