'use client';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Cloud, Shield, Database, Code, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section style={{ 
          minHeight: '90vh', 
          display: 'flex', 
          alignItems: 'center',
          position: 'relative',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          overflow: 'hidden'
        }}>
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute', top: '10%', right: '-5%',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute', bottom: '-10%', left: '-5%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '80px' }}>
            <div className="grid-2-cols" style={{ alignItems: 'center' }}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: '800px' }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  borderRadius: '50px',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  marginBottom: '2rem',
                  fontSize: '0.9rem'
                }}>
                  Redefining Possibilities
                </div>
                <h1 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>
                  Engineering <span className="text-gradient">Excellence</span> for the Future
                </h1>
                <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', color: '#475569' }}>
                  We are a global technology conglomerate driving innovation, digital transformation, and delivery excellence across industries. We build solutions that redefine possibilities.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="#services" className="btn btn-primary" style={{ padding: '0.875rem 2rem' }}>
                    Explore Solutions <ChevronRight size={20} style={{ marginLeft: '8px' }}/>
                  </a>
                  <a href="#contact" className="btn btn-outline" style={{ padding: '0.875rem 2rem' }}>
                    Contact Us
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ position: 'relative' }}
              >
                <img 
                  src="/images/hero.png" 
                  alt="Modern IT Consulting Office" 
                  style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }} 
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
              <h2 style={{ marginBottom: '1rem' }}>Our Core <span className="text-gradient">Services</span></h2>
              <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                End-to-end technology solutions that align innovation with business goals.
              </p>
            </motion.div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem' 
            }}>
              {[
                { icon: <Code />, title: 'Digital Transformation', desc: 'Reimagine legacy systems with cloud-native, API-first, and data-driven solutions. Design modern digital experiences.' },
                { icon: <Cloud />, title: 'Cloud & Infrastructure', desc: 'Hybrid and multi-cloud strategies, DevOps automation, containerized deployments, and FinOps optimization.' },
                { icon: <Database />, title: 'Data & Intelligence', desc: 'Data engineering, AI/ML applications, and predictive insights for business decision-making.' },
                { icon: <Shield />, title: 'Cybersecurity', desc: 'Threat intelligence, risk assessment, and end-to-end enterprise security and compliance solutions.' },
                { icon: <Cpu />, title: 'Agentic AI & Automation', desc: 'Agentic AI applications, RPA, Intelligent Automation, and Generative AI solutions.' },
                { icon: <Users />, title: 'IT Staffing Solutions', desc: 'Flexible contract staffing ensuring business continuity while prioritizing engaging methodologies.' },
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel"
                  style={{ padding: '2.5rem', background: '#ffffff' }}
                >
                  <div style={{ 
                    width: '60px', height: '60px', 
                    borderRadius: '12px',
                    background: '#eff6ff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)',
                    marginBottom: '1.5rem'
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a' }}>{service.title}</h3>
                  <p style={{ fontSize: '1rem' }}>{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <div className="grid-2-cols" style={{ alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 style={{ marginBottom: '1.5rem' }}>A Trusted Global <span className="text-gradient">Technology Partner</span></h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  We combine technology expertise, industry experience, and delivery excellence to create lasting value for our clients. We are proud to serve some of the world's most respected organizations, empowering businesses to scale, innovate, and lead in the digital era.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Our solutions don't just solve today's challenges — they prepare businesses for tomorrow's opportunities.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['Driving innovation and digital transformation', 'Global network of excellence', 'Data-driven and API-first solutions'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--foreground)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ position: 'relative', textAlign: 'center' }}
              >
                <img 
                  src="/images/global.png" 
                  alt="Global Technology Network" 
                  style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' }} 
                />
                <div className="grid-3-stats">
                  <div className="glass-panel" style={{ padding: '1.5rem', background: '#ffffff' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>600+</h3>
                    <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>Professionals</p>
                  </div>
                  <div className="glass-panel" style={{ padding: '1.5rem', background: '#ffffff' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>10+</h3>
                    <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>Global Locations</p>
                  </div>
                  <div className="glass-panel" style={{ padding: '1.5rem', background: '#ffffff' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>24/7</h3>
                    <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>Seamless Delivery</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </section>

        {/* CTA Section */}
        <section id="contact" className="section-padding">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ 
                padding: '8rem 2rem', 
                textAlign: 'center',
                background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url("/images/digital.png") center/cover no-repeat',
                color: 'white',
                border: 'none',
                borderRadius: '24px'
              }}
            >
              <h2 style={{ marginBottom: '1.5rem', color: 'white' }}>Ready to Scale Your Business?</h2>
              <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: '#cbd5e1' }}>
                Let's collaborate to build solutions that redefine possibilities — empowering your business to innovate and lead in the digital era.
              </p>
              <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', background: '#3b82f6' }}>
                Start a Conversation <ArrowUpRight style={{ marginLeft: '8px' }} />
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
