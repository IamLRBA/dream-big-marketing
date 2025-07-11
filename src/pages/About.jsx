import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHistory, FaBullseye, FaChartBar, FaUserTie } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import TeamCard from '../components/TeamCard';
import { TEAM } from '../constants.js';
import '../assets/styles/pages/About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      <BackToTop />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Dream Big Marketing</h1>
          <p>We're more than just a marketing agency - we're your growth partners.</p>
        </div>
      </section>

      {/* History Section */}
      <section className="section history-section">
        <div className="container">
          <div className="section-header">
            <FaHistory className="section-icon" />
            <h2 className="section-title">Our History</h2>
          </div>
          <div className="history-content">
            <div className="history-text">
              <p>
                Founded in 2010, Dream Big Marketing started as a small team of passionate marketers with a vision to help businesses achieve their full potential through innovative strategies.
              </p>
              <p>
                Over the years, we've grown into a full-service marketing consultancy, serving clients across various industries and helping them navigate the ever-changing marketing landscape.
              </p>
            </div>
            <div className="history-image">
              <img src="/images/about-history.jpg" alt="Our History" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="diagonal-section mission-section">
        <div className="container">
          <div className="section-header">
            <FaBullseye className="section-icon" />
            <h2 className="section-title">Mission & Values</h2>
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To empower businesses of all sizes with data-driven marketing strategies that deliver measurable results and sustainable growth.
              </p>
            </div>
            <div className="values-card">
              <h3>Our Values</h3>
              <ul className="values-list">
                <li>
                  <span>Integrity</span> - We believe in transparency and ethical practices.
                </li>
                <li>
                  <span>Innovation</span> - We constantly seek creative solutions.
                </li>
                <li>
                  <span>Excellence</span> - We strive for the highest standards.
                </li>
                <li>
                  <span>Collaboration</span> - We work as partners with our clients.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="section-header">
            <FaChartBar className="section-icon" />
            <h2 className="section-title">By The Numbers</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>12+</h3>
              <p>Years in Business</p>
            </div>
            <div className="stat-card">
              <h3>500+</h3>
              <p>Clients Served</p>
            </div>
            <div className="stat-card">
              <h3>95%</h3>
              <p>Client Retention</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section" id="team">
        <div className="container">
          <div className="section-header">
            <FaUserTie className="section-icon" />
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <p className="section-subtitle">
            Our team of experienced professionals is dedicated to helping your business succeed.
          </p>

          {/* CEO Card */}
          <div className="ceo-container">
            <TeamCard member={TEAM[0]} isCeo={true} />
          </div>

          {/* Team Members */}
          <div className="team-container">
            <div className="team-scroll">
              {TEAM.slice(1).map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="diagonal-section about-cta">
        <div className="container">
          <h2>Ready to work with us?</h2>
          <p>
            Get in touch today to discuss how we can help your business grow through strategic marketing.
          </p>
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;