import React, { useState, useEffect } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaComment } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ImSpinner8 } from 'react-icons/im';
import { IoCheckmarkDone } from 'react-icons/io5';
import { MdErrorOutline } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import emailjs from 'emailjs-com';
import TestimonialCard from '../../components/TestimonialCard';
import './Home.css';

const Home = () => {
  const [expandedRelease, setExpandedRelease] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const [galleryBubbles] = useState(() => {
    const bubbles = [];
    for (let i = 0; i < 5; i++) {
      bubbles.push({
        id: i,
        size: Math.random() * 200 + 100,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDuration: Math.random() * 60 + 30,
        animationDelay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    return bubbles;
  });

  const handleImageClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate('/gallery');
    }, 400);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (formData.contactMethod === 'whatsapp') {
      const phoneNumber = '255657125229';
      const message = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      setIsLoading(false);
      return;
    }

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactMethod: 'email'
      });
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setError('Failed to send message. Please try again later or use WhatsApp.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  const featuredWorks = [
    {
      id: 'posta-campaign',
      name: 'POSTa Popote',
      titleImage: '../assets/images/portfolio/posta/posta-title.jpg',
      description: 'Increasing awareness and business adoption for Costa Tanzania postal services',
      details: "Implemented nationwide campaign targeting SMEs with tailored messaging across radio, TV, and digital platforms. Increased service adoption by 35% in first quarter."
    },
    {
      id: 'startimes-burudani',
      name: 'Burudani Bila Kikomo',
      titleImage: '../assets/images/portfolio/startimes/startimes-title.jpg',
      description: 'Reshaping marketing strategies with new pricing models and segmented programming like cartoons for kids',
      details: "Developed family-focused programming packages with tiered pricing. Campaign resulted in 22% subscriber growth and 40% increase in family plan signups."
    },
    {
      id: 'dse-inuka',
      name: 'Inuka na Hisa!',
      titleImage: '../assets/images/portfolio/dse/dse-title.jpg',
      description: 'Campaign to educate and encourage investment in the Dar es Salaam Stock Exchange',
      details: "Created financial literacy program targeting young professionals. Workshops, digital content, and simplified investment tools led to 15,000 new investor accounts in 6 months."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Peter Johnson Michael',
      role: 'Marketing Director',
      image: '../assets/images/testimonials/client1.jpg',
      text: 'DreamBIG transformed our brand strategy with innovative campaigns that doubled our engagement metrics.'
    },
    {
      id: 2,
      name: 'Gloria Chenwo',
      role: 'CEO, TechStart',
      image: '../assets/images/testimonials/client2.jpg',
      text: 'Their data-driven approach helped us penetrate new markets with 40% less acquisition costs.'
    },
    {
      id: 3,
      name: 'David Miller Towongo',
      role: 'CMO, RetailCorp',
      image: '../assets/images/testimonials/client3.jpg',
      text: 'The digital transformation they implemented increased our conversion rate by 78% in just 3 months.'
    },
    {
      id: 4,
      name: 'Emily Mubarak',
      role: 'Brand Manager',
      image: '../assets/images/testimonials/client4.jpg',
      text: 'Their creative campaigns consistently outperform industry benchmarks and deliver measurable ROI.'
    },
    {
      id: 5,
      name: 'Abdul Wilson',
      role: 'Startup Founder',
      image: '../assets/images/testimonials/client5.jpg',
      text: 'DreamBIG helped us establish brand identity and market positioning that attracted key investors.'
    }
  ];

  const handleCardClick = (id) => {
    setExpandedRelease(expandedRelease === id ? null : id);
  };

  return (
    <div className="home-page">
      <section className={`home-hero-section ${heroLoaded ? 'loaded' : ''}`}>
        <div className="home-hero-background"></div>
        <div className="home-hero-content">
          <motion.h1 
            className="home-hero-title"
            initial={{ opacity: 0, y: -50, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            <span className="home-color-changing">DreamBIG Marketing Consultancy</span>
          </motion.h1>
          <motion.p 
            className="home-hero-subtitle"
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 80,
              damping: 10
            }}
          >
            Where innovative marketing strategies meet measurable business growth
          </motion.p>
          <motion.div 
            className="home-hero-buttons"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              type: "spring",
              stiffness: 90,
              damping: 10
            }}
          >
            <NavLink to="/services" className="home-shop-btn home-pulse-animate">Our Services</NavLink>
            <NavLink to="/about" className="home-about-btn home-btn-outline home-pulse-animate">About Us</NavLink>
          </motion.div>
        </div>
        
        <motion.div 
          className="home-culturez-pivot-image"
          animate={{
            rotateY: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <img src="../assets/images/services/logo.png" alt="DreamBIG Marketing" />
        </motion.div>
      </section>

      <section className="home-section home-culturez-section">
        <div className="home-container">
          <h2 className="home-section-title">
            <span className="home-highlighted-border">Featured</span> Works
          </h2>
          <div className="home-releases-grid">
            {featuredWorks.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                className={`home-release-card ${expandedRelease === item.id ? 'expanded' : ''}`}
                onClick={() => handleCardClick(item.id)}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div 
                  className="home-release-card-image"
                  style={{ 
                    backgroundImage: `url(${item.titleImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="home-release-category">{item.name}</div>
                </div>
                <div className={`home-release-card-details ${expandedRelease === item.id ? 'expanded' : ''}`}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  {expandedRelease === item.id && (
                    <div className="home-release-expanded-details">
                      <p>{item.details}</p>
                      <Link 
                        to={`/portfolio#${item.id}`} 
                        className="home-release-learn-more"
                      >
                        View Case Study ⇒
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="home-section-footer">
            <NavLink to="/portfolio" className="home-release-btn">
              View Full Portfolio ⇒
            </NavLink>
          </div>
        </div>
      </section>

      <section className="home-section home-gallery-section">
        {galleryBubbles.map((bubble) => (
          <div 
            key={bubble.id}
            className="home-gallery-bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              animationDuration: `${bubble.animationDuration}s`,
              animationDelay: `${bubble.animationDelay}s`,
              opacity: bubble.opacity
            }}
          />
        ))}
        <div className="home-container">
          <motion.h2 
            className="home-animated-float-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="home-float-word">Tap To View</span>
            <span className="home-float-word home-highlight-border">Gallery</span>
          </motion.h2>

          <div className="home-pointer-illustration">
            <div
              onClick={handleImageClick}
              aria-label="Go to Gallery Page"
              className="home-pointer-link"
              style={{ cursor: 'pointer' }}
            >
              <motion.img
                src="../assets/images/pointing-down.jpg"
                alt="Pointing down"
                className={`home-pointer-img ${clicked ? 'clicked' : ''}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-testimonials-section">
        <div className="home-container">
          <h2 className="home-section-title"><span className="home-highlighted-border">Client</span> Testimonials</h2>
          <div className="home-testimonials-slider-container">
            <div className="home-testimonials-slider">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="home-section home-message-section">
        <div className="home-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="home-message-wrapper"
          >
            <div className="home-message-image-container">
              <div className="home-message-image">
                <img src="../assets/images/contact-image1.jpg" alt="Contact Us" />
              </div>
              <div className="home-support-badge">
                <RiCustomerService2Fill />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="home-message-form">
              <h2 className="home-message-title">Message Us</h2>
              <p className="home-message-subtitle">Fill out the form below and select your preferred contact method</p>
              
              <div className="home-form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Full Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="home-form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email Address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required={formData.contactMethod === 'email'}
                />
              </div>
              
              <div className="home-form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone Number" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required={formData.contactMethod === 'whatsapp' || formData.contactMethod === 'text'}
                />
              </div>
              
              <div className="home-form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="home-form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Detailed Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <div className="home-contact-method-selector">
                <h4>Preferred Contact Method:</h4>
                <div className="home-contact-method-options">
                  <label className={`home-contact-method-label ${formData.contactMethod === 'email' ? 'home-contact-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="email" 
                      checked={formData.contactMethod === 'email'}
                      onChange={handleInputChange}
                    />
                    <span> Email</span>
                  </label>
                  <label className={`home-contact-method-label ${formData.contactMethod === 'whatsapp' ? 'home-contact-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="whatsapp" 
                      checked={formData.contactMethod === 'whatsapp'}
                      onChange={handleInputChange}
                    />
                    <span><FaWhatsapp style={{ marginRight: '8px' }} /> WhatsApp</span>
                  </label>
                  <label className={`home-contact-method-label ${formData.contactMethod === 'text' ? 'home-contact-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="text" 
                      checked={formData.contactMethod === 'text'}
                      onChange={handleInputChange}
                    />
                    <span> Text Message</span>
                  </label>
                </div>
              </div>
              
              {error && <p className="home-error-message">{error}</p>}
              
              <button 
                type="submit" 
                className={`home-submit-button ${formData.contactMethod === 'whatsapp' ? 'home-whatsapp-btn' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <ImSpinner8 className="home-spinner" /> 
                    {formData.contactMethod === 'whatsapp' ? 'Opening WhatsApp...' : 'Sending Message...'}
                  </>
                ) : (
                  <>
                    {formData.contactMethod === 'email' && 'Send Email'}
                    {formData.contactMethod === 'whatsapp' && (
                      <>
                        <FaWhatsapp /> Send via WhatsApp
                      </>
                    )}
                    {formData.contactMethod === 'text' && 'Send Text Message'}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {(isSuccess || error) && (
        <div className={`home-status-modal ${isSuccess ? 'home-success' : 'home-error'}`}>
          <div className="home-status-content">
            {isSuccess ? (
              <>
                <IoCheckmarkDone className="home-status-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>We'll get back to you soon. Thank you for reaching out.</p>
              </>
            ) : (
              <>
                <MdErrorOutline className="home-status-icon" />
                <h3>Message Failed to Send</h3>
                <p>{error}</p>
                <button 
                  className="home-submit-button home-whatsapp-btn"
                  onClick={() => {
                    setError(null);
                    setFormData(prev => ({ ...prev, contactMethod: 'whatsapp' }));
                  }}
                >
                  <FaWhatsapp /> Try WhatsApp Instead
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;