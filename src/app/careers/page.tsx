'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function Careers() {
  const jobs = [
    { title: "Software Developer", type: "Full-Time", location: "Onsite / Remote" },
    { title: "Java Developer", type: "Full-Time", location: "Onsite" }
  ];

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
              <h1 style={{ marginBottom: '1.5rem' }}>Join the <span className="text-gradient">Meta9 Team</span></h1>
              <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                We are always looking for talented individuals to join our growing team. Explore our open positions and take the next step in your career.
              </p>
            </motion.div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: '2rem' }}>Open Positions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {jobs.map((job, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-panel"
                    style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <div style={{ 
                        width: '48px', height: '48px', 
                        borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)'
                      }}>
                        <Briefcase />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{job.title}</h3>
                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                          <span>{job.type}</span>
                          <span>&bull;</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
