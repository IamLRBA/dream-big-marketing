import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaSearch, FaBullhorn, FaPenFancy, FaUsers, FaGlobe } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants.js';
import '../assets/styles/pages/Services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <Navbar />
      <BackToTop />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Marketing Services</h1>
          <p>Comprehensive solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="section services-list-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            We provide a full range of marketing services to help your business grow and succeed in today's competitive landscape.
          </p>
          <div className="services-container">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="diagonal-section process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We learn about your business, goals, and challenges.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategy</h3>
              <p>We develop a customized marketing plan tailored to your needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>We execute the strategy with precision and creativity.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Optimization</h3>
              <p>We continuously analyze and improve performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Not sure which service is right for you?</h2>
            <p>
              Schedule a free consultation with our experts to discuss your needs and find the best solution for your business.
            </p>
            <Link to="/contact" className="btn">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;