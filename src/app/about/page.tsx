'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <section className="section-padding">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
              <h1 style={{ marginBottom: '1.5rem' }}>About <span className="text-gradient">Meta9 Technologies</span></h1>
              <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
                Meta9 Technologies has been serving companies to build strong foundations and staffing solutions gaining long-lasting reputation. Our primary focus is to connect companies with right skilled candidates, thus benefiting several commercial companies and enterprises both in public and private sectors.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-panel"
                style={{ padding: '3rem' }}
              >
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>End-to-End Solutions</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  At Meta9, we offer end-to-end solutions based on your predefined requirements. With just a call, we can help you with cost-effective development services and reliable IT staffing and digital media services.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['Cost-effective development', 'Reliable IT staffing', 'Digital media services', 'Public and private sector expertise'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <CheckCircle2 style={{ color: 'var(--accent)', flexShrink: 0 }} size={20} />
                      <span style={{ color: 'var(--foreground)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div style={{ 
                  background: '#eff6ff',
                  borderRadius: '16px',
                  padding: '4rem 2rem',
                  textAlign: 'center',
                  border: '1px solid var(--border)'
                }}>
                  <h2 style={{ marginBottom: '1rem' }}>Global Presence</h2>
                  <p style={{ marginBottom: '2rem' }}>Operating across 10 global locations ensuring seamless delivery and round-the-clock collaboration.</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div>
                      <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>600+</h3>
                      <span style={{ color: 'var(--muted)' }}>Professionals</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>10+</h3>
                      <span style={{ color: 'var(--muted)' }}>Locations</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
