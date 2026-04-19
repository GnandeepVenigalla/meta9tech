'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Zap, Landmark, Stethoscope, ShoppingCart, Factory, Plane, Monitor, School } from 'lucide-react';

export default function Expertise() {
  const industries = [
    {
      title: "Energy & Utilities",
      desc: "Smart grid, renewable energy management, predictive asset maintenance, and energy consumption analytics.",
      impact: "Optimized energy distribution, enhanced sustainability, and reduced operational risks.",
      icon: <Zap />
    },
    {
      title: "Banking & Financial Services",
      desc: "AI-driven risk analytics, intelligent process automation, digital onboarding, and core banking modernization.",
      impact: "Reduced operational costs, improved compliance, and faster time-to-market.",
      icon: <Landmark />
    },
    {
      title: "Healthcare & Life Sciences",
      desc: "AI-powered diagnostics, secure EHR platforms, telemedicine solutions, and automation for clinical trials.",
      impact: "Enhanced patient outcomes, streamlined operations, and secure decision-making.",
      icon: <Stethoscope />
    },
    {
      title: "Retail & E-Commerce",
      desc: "AI recommendation engines, unified commerce, intelligent inventory management, and omnichannel integration.",
      impact: "Increased sales, better inventory control, and enhanced customer loyalty.",
      icon: <ShoppingCart />
    },
    {
      title: "Manufacturing Industry",
      desc: "Industrial IoT integration, digital twins, supply chain visibility, and RPA for production efficiency.",
      impact: "Improved productivity, reduced downtime, and smarter production ecosystems.",
      icon: <Factory />
    },
    {
      title: "Travel, Transport & Logistics",
      desc: "AI logistics optimization, real-time tracking, digital booking, and capacity forecasting.",
      impact: "Lower costs, improved delivery timelines, and enhanced service reliability.",
      icon: <Plane />
    },
    {
      title: "Technology, Media & Telecom",
      desc: "Cloud transformation, SaaS enablement, content distribution optimization, and AI user analytics.",
      impact: "Accelerated innovation, scalable platforms, and superior customer engagement.",
      icon: <Monitor />
    },
    {
      title: "Public Sector & Education",
      desc: "E-governance platforms, smart campus solutions, data transparency frameworks, and administrative automation.",
      impact: "Greater efficiency, transparency, and accessibility for citizens and learners.",
      icon: <School />
    }
  ];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px', minHeight: '100vh', background: '#f8fafc' }}>
        <section className="section-padding">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
              <h1 style={{ marginBottom: '1.5rem' }}>Industry <span className="text-gradient">Expertise</span></h1>
              <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                We empower businesses across diverse industries with transformative technology solutions. Our domain expertise, combined with AI, automation, and data-driven innovation, enables organizations to reimagine operations and deliver exceptional value.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {industries.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-panel"
                  style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <div style={{ 
                    width: '48px', height: '48px', 
                    borderRadius: '10px',
                    background: '#eff6ff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)',
                    marginBottom: '1.5rem'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#0f172a' }}>{item.title}</h3>
                  <p style={{ fontSize: '1rem', marginBottom: '1.5rem', flexGrow: 1 }}>{item.desc}</p>
                  <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                    <p style={{ fontSize: '0.9rem', color: '#334155', margin: 0 }}>
                      <strong>Impact:</strong> {item.impact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ marginTop: '5rem', textAlign: 'center', padding: '3rem', background: '#ffffff', borderRadius: '16px', border: '1px solid var(--border)' }}
            >
              <h2 style={{ marginBottom: '1rem' }}>Preparing Businesses for Tomorrow</h2>
              <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                From enterprise modernization to AI-driven transformation, we partner with organizations to shape the future of industries. Our solutions don't just solve today's challenges — they prepare businesses for tomorrow's opportunities.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
