import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      category: 'Strategic Marketing & Brand Development',
      services: [
        'Marketing strategy planning (short- and long-term)',
        'Brand identity creation & positioning',
        'Competitor & market research'
      ]
    },
    {
      id: 2,
      category: 'Digital Marketing & Online Campaigns',
      services: [
        'Social media marketing (Facebook, Instagram, LinkedIn, TikTok)',
        'Google Ads & SEO (Search Engine Optimization)',
        'Email marketing & digital funnels'
      ]
    },
    {
      id: 3,
      category: 'Content Creation & Creative Design',
      services: [
        'Visual campaigns (graphics, video, animation)',
        'Copywriting (ads, taglines, brand messaging)',
        'Photography & promotional materials'
      ]
    },
    {
      id: 4,
      category: 'Corporate Communications & PR',
      services: [
        'Brand storytelling & reputation management',
        'Media engagement & press releases',
        'Event marketing & community outreach'
      ]
    },
    {
      id: 5,
      category: 'Marketing for Startups & SMEs',
      services: [
        'Go-to-market strategy for new businesses',
        'Sales and promotion support',
        'Affordable growth packages for small businesses'
      ]
    },
    {
      id: 6,
      category: 'Market Research & Consumer Insights',
      services: [
        'Product testing & market entry evaluations',
        'Industry trend reports'
      ]
    },
    {
      id: 7,
      category: 'Training & Capacity Building',
      services: [
        'Corporate training on marketing, branding, and digital tools',
        'One-on-one coaching for entrepreneurs and marketing teams'
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <motion.h1
            className="services-hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="services-hero-highlight"
              initial={{ color: 'var(--primary-color)' }}
              animate={{
                color: [
                  'var(--primary-color)',
                  'var(--secondary-color)',
                  'var(--tertiary-color)',
                  'var(--secondary-color)',
                  'var(--primary-color)'
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              Our
            </motion.span> Services
          </motion.h1>
          <motion.div
            className="services-hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/about" className="services-about-link">
              About Our Company
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="services-intro">
        <div className="services-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="services-intro-content"
          >
            <h2 className="services-intro-title">Dream Big Marketing Consultancy</h2>
            <p className="services-intro-text">
              At Dream Big Marketing Consultancy, we help businesses unlock their full potential through powerful, results-driven marketing strategies. Our services are designed to turn bold ideas into measurable success by combining local insights with modern marketing expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-container">
          <motion.div
            className="services-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="services-bottom-cta">
        <div className="services-container">
          <motion.div
            className="services-cta-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="services-cta-title">Ready to grow your business?</h3>
            <div className="services-cta-buttons">
              <Link to="/culturez/featured" className="services-cta-button">
                View Our Featured Works
              </Link>
              <Link to="/contact" className="services-cta-button primary">
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;