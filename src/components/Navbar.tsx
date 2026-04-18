'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      background: isScrolled ? '#ffffff' : 'transparent',
      boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
      padding: isScrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a' }}>
          <div style={{
            width: '32px', height: '32px',
            background: 'var(--primary)',
            borderRadius: '6px',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            fontWeight: 'bold', color: 'white'
          }}>M</div>
          <span>Meta9<span style={{ color: 'var(--primary)' }}>Tech</span></span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', color: '#334155' }} className="desktop-nav">
          <Link href="/services/development" style={{ fontWeight: 500 }}>Development</Link>
          <Link href="/services/staffing" style={{ fontWeight: 500 }}>Staffing</Link>
          <Link href="/expertise" style={{ fontWeight: 500 }}>Expertise</Link>
          <Link href="/about" style={{ fontWeight: 500 }}>About Us</Link>
          <Link href="/careers" style={{ fontWeight: 500 }}>Careers</Link>
          <Link href="/#contact" className="btn btn-primary">
            Let&apos;s Talk <ArrowRight size={18} style={{ marginLeft: '8px' }}/>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: '#0f172a', cursor: 'pointer' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#ffffff',
          borderBottom: '1px solid var(--border)',
          padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <Link href="/services/development" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#334155', fontWeight: 500 }}>Development</Link>
          <Link href="/services/staffing" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#334155', fontWeight: 500 }}>Staffing</Link>
          <Link href="/expertise" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#334155', fontWeight: 500 }}>Expertise</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#334155', fontWeight: 500 }}>About Us</Link>
          <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#334155', fontWeight: 500 }}>Careers</Link>
          <Link href="/#contact" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setIsMobileMenuOpen(false)}>
            Let&apos;s Talk
          </Link>
        </div>
      )}
      
      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
