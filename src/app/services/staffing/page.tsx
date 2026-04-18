'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe, Users, Building, Laptop, CheckCircle2 } from 'lucide-react';

export default function Staffing() {
  const staffingModels = [
    {
      title: "Onshore Staffing",
      desc: "Avail the benefits of flexible staffing services. We provide IT staffing solutions in the US and Canada with an in-house dedicated team of developers experienced in onsite deployment.",
      icon: <Building />
    },
    {
      title: "Nearshore Staffing",
      desc: "Hire a dedicated development team within the same time zone. We provide nearshore services sending our team right to your place for regular review meetings and deployment.",
      icon: <Globe />
    },
    {
      title: "Offshore Staffing",
      desc: "ODC allows management to focus on core business. We provide offshore staffing solutions with dedicated resources exclusively for your project, 24/7 support, and complete transparency.",
      icon: <Users />
    },
    {
      title: "Remote Staffing",
      desc: "Opt for an offsite team for auxiliary practices to save costs. We help you meet deadlines with precision via remote staffing, complete with controlled monitoring and daily reports.",
      icon: <Laptop />
    }
  ];

  const industries = [
    "Retail", "E-commerce", "Home Service and Utilities", "Finance",
    "Health and Fitness", "Education", "Travel and Hospitality",
    "Food and Beverage", "Sports", "Real Estate", "Enterprise and B2B", "Information Technology"
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
              <div style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '50px',
                color: 'var(--primary)',
                fontWeight: 600,
                marginBottom: '1.5rem',
                fontSize: '0.9rem'
              }}>
                Staff Augmentation
              </div>
              <h1 style={{ marginBottom: '1.5rem' }}>IT <span className="text-gradient">Staffing Solutions</span></h1>
              <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                We understand the importance of technical team members for the seamless flow of work. We assist and provide professional staff ensuring fastest deliveries and optimal costs.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              {staffingModels.map((model, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel"
                  style={{ padding: '2.5rem' }}
                >
                  <div style={{ 
                    width: '50px', height: '50px', 
                    borderRadius: '12px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--secondary)',
                    marginBottom: '1.5rem'
                  }}>
                    {model.icon}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{model.title}</h3>
                  <p style={{ fontSize: '1rem' }}>{model.desc}</p>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 style={{ marginBottom: '1.5rem' }}>Benefits of Our Staffing</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    "Hire world-class professionals",
                    "Development at a faster pace",
                    "Save time with less training expenditure",
                    "Attract more business with quality assurance",
                    "Reduce administrative responsibilities",
                    "Dedicated Development Teams to Hire"
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <CheckCircle2 style={{ color: 'var(--accent)', flexShrink: 0 }} size={20} />
                      <span style={{ color: 'var(--foreground)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel"
                style={{ padding: '2.5rem' }}
              >
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Leading Industries We Serve</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {industries.map((industry, i) => (
                    <span key={i} style={{ padding: '0.5rem 1rem', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', fontSize: '0.9rem', color: '#1e293b' }}>
                      {industry}
                    </span>
                  ))}
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
