import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaChartLine, FaLightbulb, FaUsers, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import TestimonialCard from '../components/TestimonialCard';
import { TESTIMONIALS } from '../constants.js';
import '../assets/styles/pages/Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Text animation for hero section
    const heroText = heroRef.current.querySelectorAll('.hero-text span');
    heroText.forEach((span, idx) => {
      span.style.animationDelay = `${idx * 0.1}s`;
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section, .diagonal-section').forEach((section) => {
      observer.observe(section);
    });
  }, []);

  const handleVideoPlay = () => {
    videoRef.current.play();
    videoRef.current.controls = true;
  };

  return (
    <div className="home-page">
      <Navbar />
      <BackToTop />

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-text">
                <span>Grow Your Business</span>
              </span>
              <span className="hero-text">
                <span>With Our</span>
              </span>
              <span className="hero-text">
                <span className="highlight">Marketing Expertise</span>
              </span>
            </h1>
            <p className="hero-subtitle">
              We help brands achieve their marketing goals through innovative strategies and data-driven solutions.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content slide-in-left">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Dream Big Marketing Consultancy is a full-service marketing agency dedicated to helping businesses of all sizes achieve their growth objectives. Our team of experts combines creativity with analytics to deliver measurable results.
              </p>
              <ul className="about-features">
                <li>
                  <FaChartLine className="feature-icon" />
                  <span>Data-Driven Strategies</span>
                </li>
                <li>
                  <FaLightbulb className="feature-icon" />
                  <span>Creative Solutions</span>
                </li>
                <li>
                  <FaUsers className="feature-icon" />
                  <span>Client-Centric Approach</span>
                </li>
              </ul>
              <Link to="/about" className="btn">
                Learn More About Us <FaArrowRight />
              </Link>
            </div>
            <div className="about-image slide-in-right">
              <div className="video-container">
                <video
                  ref={videoRef}
                  poster="/images/hero-bg.jpg"
                  loop
                  muted
                >
                  <source src="/videos/marketing.mp4" type="video/mp4" />
                </video>
                <button className="play-button" onClick={handleVideoPlay}>
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="diagonal-section services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of marketing services tailored to your business needs.
          </p>
          <div className="services-grid">
            <div className="service-preview fade-in">
              <div className="service-icon">
                <FaChartLine />
              </div>
              <h3>Digital Marketing</h3>
              <p>
                Comprehensive digital strategies to increase your online presence and drive conversions.
              </p>
              <Link to="/services/service1">Learn More →</Link>
            </div>
            {/* Add more service previews */}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section" id="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
          <div className="testimonials-container">
            <div className="testimonials-scroll">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="diagonal-section cta-section">
        <div className="container">
          <h2>Ready to Transform Your Marketing Strategy?</h2>
          <p>
            Contact us today to discuss how we can help your business grow and achieve its marketing goals.
          </p>
          <Link to="/contact" className="btn">
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;