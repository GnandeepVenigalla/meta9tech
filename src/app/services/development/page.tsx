'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Database, Cloud, Code, BarChart, Settings, ShieldCheck } from 'lucide-react';

export default function Development() {
  const services = [
    {
      title: "BI Development & Implementation",
      desc: "Implement scalable, enterprise-wide BI systems (SAP, Cognos, Power BI, Oracle) to deliver data insights for on-premise, web, cloud, and hybrid platforms.",
      icon: <BarChart />
    },
    {
      title: "Data Warehouse & Integrity",
      desc: "Engineer central repository systems to ETL information from disparate sources. Migrate legacy data, integrate silos, and modernize infrastructure.",
      icon: <Database />
    },
    {
      title: "Cloud Computing Solutions",
      desc: "Design, deploy, migrate, and secure cloud solutions across SaaS, PaaS, and IaaS. Expertise in AWS, Google Cloud, Azure, and OpenStack.",
      icon: <Cloud />
    },
    {
      title: "Custom ERP Solutions",
      desc: "Develop scalable ERP systems to automate processes. We provide ERP consulting, integration, implementation, and legacy migration.",
      icon: <Settings />
    },
    {
      title: "IT Service Management (ITSM)",
      desc: "Program web-based service desk platforms, SLA management systems, CMMS, and enterprise IT lifecycle services with Asset Management Systems.",
      icon: <ShieldCheck />
    },
    {
      title: "Database Development",
      desc: "Develop DBMS for data manipulation, DBaaS, and security encryption using IBM DB2, MS SQL, PostgreSQL, and more.",
      icon: <Code />
    }
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
                Development Services
              </div>
              <h1 style={{ marginBottom: '1.5rem' }}>Software <span className="text-gradient">Development</span></h1>
              <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                At Meta9 Technologies, we provide custom software development services for businesses of every size. We optimize development lifecycles by offering dedicated developers with specialized technology and industry expertise as a seamless back-end technology partner.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {services.map((service, idx) => (
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
                    background: 'rgba(59, 130, 246, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)',
                    marginBottom: '1.5rem'
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{service.title}</h3>
                  <p style={{ fontSize: '1rem' }}>{service.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ marginTop: '4rem', padding: '3rem', background: '#ffffff', borderRadius: '16px', border: '1px solid var(--border)' }}
            >
              <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Explore Relevant Solutions</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                {['Cloud', 'Enterprise Resource Planning', 'Digital Asset Management', 'Document Management', 'Business Intelligence', 'Legacy Modernization'].map((tag, i) => (
                  <span key={i} style={{ padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '50px', border: '1px solid var(--border)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Detailed Information Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ marginTop: '5rem' }}
            >
              <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Comprehensive <span className="text-gradient">Capabilities</span></h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                <div className="glass-panel" style={{ padding: '3rem' }}>
                  <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Business Intelligence (BI) & Analytics</h3>
                  <p style={{ marginBottom: '1.5rem' }}>We help you manage your mission-critical data for optimal insights. Our BI developers design Service Oriented Architectures (SOA) and program robust platforms for data discovery, real-time reporting, big data processing, predictive analytics, and executive dashboards.</p>
                  <ul style={{ listStylePosition: 'inside', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li><strong>Data Warehouse:</strong> Extract, Transform, and Load (ETL) information from disparate sources.</li>
                    <li><strong>Data Integrity:</strong> Migrate legacy data, integrate raw data silos, and modernize data infrastructure.</li>
                    <li><strong>Custom Dashboards:</strong> KPIs tracking, performance scorecards, and decision support platforms.</li>
                    <li><strong>Powerful Reporting:</strong> Real-time queries with advanced data visualization.</li>
                  </ul>
                </div>

                <div className="glass-panel" style={{ padding: '3rem' }}>
                  <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>End-to-End Cloud Computing</h3>
                  <p style={{ marginBottom: '1.5rem' }}>Our cloud experts design, deploy, migrate, secure, and customize cloud computing solutions across the entire stack.</p>
                  <ul style={{ listStylePosition: 'inside', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>Public, private, hybrid, and multicloud platform development (AWS, Google Cloud, Azure).</li>
                    <li>SaaS, PaaS, IaaS, and DBaaS service platform programming.</li>
                    <li>Security features: SSL/TLS encryption, IAM, RBAC, and Single Sign-On (SSO).</li>
                    <li>Virtualization of networks, servers, clients, and storage components.</li>
                  </ul>
                </div>

                <div className="glass-panel" style={{ padding: '3rem' }}>
                  <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Custom ERP Solutions</h3>
                  <p style={{ marginBottom: '1.5rem' }}>We develop scalable, enterprise-wide ERP systems to automate critical processes and give key data insights.</p>
                  <ul style={{ listStylePosition: 'inside', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li><strong>ERP Consulting & Integration:</strong> Centralized architectures to facilitate real-time data automation.</li>
                    <li><strong>ERP Implementation:</strong> Deployment with maintained data integrity and zero downtime.</li>
                    <li><strong>ERP Migration:</strong> Seamlessly integrating raw silos and updating legacy systems.</li>
                  </ul>
                </div>

                <div className="glass-panel" style={{ padding: '3rem' }}>
                  <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>IT Service Management (ITSM)</h3>
                  <p style={{ marginBottom: '1.5rem' }}>We program web-based service desk platforms for ITSM systems with secured Customer Service Request portals.</p>
                  <ul style={{ listStylePosition: 'inside', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>SLA management systems and automated assignment based on priority.</li>
                    <li>Computerized Maintenance Management Systems (CMMS) for automated workflows and hardware inventory.</li>
                    <li>Mobile Device Management (MDM) platforms for securing data across multiple OS devices.</li>
                    <li>Preventative maintenance application development and Enterprise Feedback Management (EFM).</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
