import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaLightbulb, FaUsers, FaCheck } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import '../../assets/styles/pages/ServiceDetails.css';

const Service1 = () => {
  return (
    <div className="service-detail-page">
      <Navbar />
      <BackToTop />

      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1>Digital Marketing Strategy</h1>
          <p>Comprehensive digital marketing plans tailored to your business goals</p>
        </div>
      </section>

      {/* Service Detail Section */}
      <section className="section service-detail-section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-content">
              <h2>About This Service</h2>
              <p>
                Our Digital Marketing Strategy service is designed to help businesses establish a strong online presence through targeted campaigns, SEO optimization, and data-driven decision making. We create customized strategies that align with your business objectives and target audience.
              </p>
              <p>
                In today's digital landscape, having a well-defined marketing strategy is crucial for success. Our team of experts will analyze your current digital footprint, identify opportunities for growth, and develop a comprehensive plan to maximize your online visibility and conversions.
              </p>

              <h3>Key Features</h3>
              <ul className="feature-list">
                <li>
                  <FaCheck className="feature-icon" />
                  <span>Comprehensive market and competitor analysis</span>
                </li>
                <li>
                  <FaCheck className="feature-icon" />
                  <span>Customized strategy development</span>
                </li>
                <li>
                  <FaCheck className="feature-icon" />
                  <span>Multi-channel approach (SEO, PPC, Social, Email)</span>
                </li>
                <li>
                  <FaCheck className="feature-icon" />
                  <span>Content strategy and calendar</span>
                </li>
                <li>
                  <FaCheck className="feature-icon" />
                  <span>Performance tracking and analytics</span>
                </li>
                <li>
                  <FaCheck className="feature-icon" />
                  <span>Regular reporting and optimization</span>
                </li>
              </ul>

              <h3>Our Approach</h3>
              <p>
                We follow a proven 5-step process to develop and implement effective digital marketing strategies:
              </p>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Discovery & Research</h4>
                    <p>We analyze your business, competitors, and target audience to identify opportunities.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Strategy Development</h4>
                    <p>We create a customized plan with clear objectives, tactics, and KPIs.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Implementation</h4>
                    <p>Our team executes the strategy across all selected channels.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Monitoring</h4>
                    <p>We track performance and gather data for continuous improvement.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4>Optimization</h4>
                    <p>We refine the strategy based on data insights to maximize results.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-sidebar">
              <div className="sidebar-card">
                <h3>Service Details</h3>
                <ul className="service-meta">
                  <li>
                    <span className="meta-label">Category:</span>
                    <span className="meta-value">Digital Marketing</span>
                  </li>
                  <li>
                    <span className="meta-label">Delivery Time:</span>
                    <span className="meta-value">4-6 weeks</span>
                  </li>
                  <li>
                    <span className="meta-label">Pricing:</span>
                    <span className="meta-value">Custom Quote</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn">
                  Get a Free Consultation
                </Link>
              </div>

              <div className="sidebar-card">
                <h3>Related Services</h3>
                <ul className="related-services">
                  <li>
                    <Link to="/services/service2">SEO Optimization</Link>
                  </li>
                  <li>
                    <Link to="/services/service3">Social Media Management</Link>
                  </li>
                  <li>
                    <Link to="/services/service4">Content Marketing</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="diagonal-section benefits-section">
        <div className="container">
          <h2 className="section-title">Benefits of Our Digital Marketing Strategy</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaChartLine />
              </div>
              <h3>Increased Visibility</h3>
              <p>Improve your online presence and reach more potential customers across multiple channels.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaLightbulb />
              </div>
              <h3>Data-Driven Decisions</h3>
              <p>Make informed marketing decisions based on real data and performance metrics.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaUsers />
              </div>
              <h3>Targeted Audience</h3>
              <p>Reach the right people at the right time with personalized messaging and targeting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>
              Contact us today to discuss how our Digital Marketing Strategy service can help your business grow and achieve its online goals.
            </p>
            <Link to="/contact" className="btn">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service1;