import React, { useState, useEffect } from 'react';
import { 
  HiOutlineMapPin, 
  HiOutlinePhone,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineLockClosed,
  HiArrowPath,
  HiCheckCircle,
  HiExclamationCircle
} from 'react-icons/hi2';
import { HiOutlineMail } from 'react-icons/hi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [cardColors, setCardColors] = useState({
    location: 'primary',
    phone: 'secondary',
    email: 'primary'
  });

  // Create floating bubbles
  useEffect(() => {
    const newBubbles = [];
    const icons = ['HiOutlinePhone', 'HiOutlineMail', 'HiOutlineMapPin'];
    
    for (let i = 0; i < 15; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 30 + 10,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 15 + 10,
        icon: icons[Math.floor(Math.random() * icons.length)]
      });
    }
    
    setBubbles(newBubbles);
  }, []);

  const toggleCardColor = (card) => {
    setCardColors(prev => ({
      ...prev,
      [card]: prev[card] === 'primary' ? 'secondary' : 'primary'
    }));
  };

  const handleChange = (e) => {
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
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
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
        service: '',
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

  // Service options
  const serviceOptions = [
    "Strategic Marketing & Brand Development",
    "Digital Marketing & Online Campaigns",
    "Content Creation & Creative Design",
    "Corporate Communications & PR",
    "Marketing for Startups & SMEs",
    "Market Research & Consumer Insights",
    "Training & Capacity Building"
  ];

  // Social media platforms with image paths
  const socialMedia = [
    { name: 'TikTok', icon: '/images/social/tiktok.png', url: 'https://www.tiktok.com/@dbigmkwww.tiktok.com/@dbigmkt' },
    { name: 'Instagram', icon: '/images/social/instagram.png', url: 'https://www.instagram.com/dbigmkt/' },
    { name: 'Facebook', icon: '/images/social/facebook.png', url: 'https://www.facebook.com/share/1WWcyXB7qR/' },
    { name: 'LinkedIn', icon: '/images/social/linkedin.png', url: 'https://www.linkedin.com/in/dream-big-marketing-consultancy-a70b15374' },
    { name: 'YouTube', icon: '/images/social/youtube.png', url: 'https://www.youtube.com/@DbigMkt' },
    { name: 'X', icon: '/images/social/x.png', url: 'https://x.com/dbigmkt' },
    { name: 'Email', icon: '/images/social/email.png', url: 'mailto:dbigmkt@gmail.com' },
    { name: 'WhatsApp', icon: '/images/social/whatsapp.png', url: 'https://wa.me/255657125229' }
  ];

  const handleSocialClick = (e, url) => {
    e.preventDefault();
    // Popping effect animation
    e.currentTarget.classList.add('contact-social-pop');
    setTimeout(() => {
      window.open(url, '_blank');
      e.currentTarget.classList.remove('contact-social-pop');
    }, 300);
  };

  return (
    <div className="contact-page">
      {/* Animated Background Elements */}
      <div className="contact-background-container">
        <motion.div 
          className="contact-blurred-bg"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        ></motion.div>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className={`contact-bubble contact-${bubble.icon}`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
            }}
            initial={{ bottom: -100 }}
            animate={{ bottom: '100%' }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear'
            }}
          >
            {bubble.icon === 'HiOutlinePhone' && <HiOutlinePhone />}
            {bubble.icon === 'HiOutlineMail' && <HiOutlineMail />}
            {bubble.icon === 'HiOutlineMapPin' && <HiOutlineMapPin />}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content"
          >
            <h1 className="contact-hero-title">Contact DreamBIG</h1>
            <p className="contact-hero-subtitle">We're here to help and answer any questions you might have.</p>
            <div className="contact-scrolling-text">
              <motion.div
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <span>Contact Us • Get Support • Book a Session • Inquire About Services • Contact Us • Get Support • Book a Session • Inquire About Services</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success/Error Modal */}
      {(isSuccess || error) && (
        <div className={`contact-status-modal ${isSuccess ? 'contact-success' : 'contact-error'}`}>
          <div className="contact-status-content">
            {isSuccess ? (
              <>
                <HiCheckCircle className="contact-status-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>We'll get back to you soon. Thank you for reaching out.</p>
              </>
            ) : (
              <>
                <HiExclamationCircle className="contact-status-icon" />
                <h3>Message Failed to Send</h3>
                <p>{error}</p>
                <button 
                  className="contact-btn contact-whatsapp-btn"
                  onClick={() => {
                    setError(null);
                    setFormData(prev => ({ ...prev, contactMethod: 'whatsapp' }));
                  }}
                >
                  Try WhatsApp Instead
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Contact Info Section */}
      <section className="contact-section contact-info-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info-wrapper"
          >
            <h2 className="contact-section-title">Our Contact Info</h2>
            <p className="contact-section-subtitle">Reach out through any of these channels for quick response</p>
            
            <div className="contact-info-grid">
              <motion.div 
                className={`contact-info-card contact-location-card contact-${cardColors.location}-card`}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleCardColor('location')}
              >
                <div className={`contact-info-icon contact-${cardColors.location}-icon`}>
                  <HiOutlineMapPin />
                </div>
                <h3>Location</h3>
                <p>Magomeni Mapipa, Dar es Salaam, Tanzania</p>
                <a 
                  href="https://www.google.com/maps/place/6%C2%B048'22.2%22S+39%C2%B015'43.8%22E/@-6.8056325,39.2611998,291m/data=!3m1!1e3!4m4!3m3!8m2!3d-6.8061768!4d39.2621723?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`contact-map-link contact-${cardColors.location}-link`}
                >
                  View on Map
                </a>
              </motion.div>
              
              <motion.div 
                className={`contact-info-card contact-phone-card contact-${cardColors.phone}-card`}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleCardColor('phone')}
              >
                <div className={`contact-info-icon contact-${cardColors.phone}-icon`}>
                  <HiOutlinePhone />
                </div>
                <h3>Phones</h3>
                <p>+255 745 600 270</p>
                <p>+255 620 144 900</p>
                <a 
                  href="tel:+255745600270" 
                  className={`contact-call-link contact-${cardColors.phone}-link`}
                >
                  Call Now
                </a>
              </motion.div>
              
              <motion.div 
                className={`contact-info-card contact-email-card contact-${cardColors.email}-card`}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleCardColor('email')}
              >
                <div className={`contact-info-icon contact-${cardColors.email}-icon`}>
                  <HiOutlineMail />
                </div>
                <h3>Email</h3>
                <p>dbigmkt@gmail.com</p>
                <a 
                  href="mailto:dbigmkt@gmail.com" 
                  className={`contact-email-link contact-${cardColors.email}-link`}
                >
                  Send Email
                </a>
              </motion.div>
              
              <motion.div 
                className="contact-info-card contact-whatsapp-card"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href="https://wa.me/255657125229" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-whatsapp-link"
                >
                  <div className="contact-info-icon contact-whatsapp-icon">
                    <FaWhatsapp />
                  </div>
                  <h3>WhatsApp</h3>
                  <p>+255 657 125229</p>
                  <span className="contact-whatsapp-cta">Message Us</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="contact-section contact-social-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-social-wrapper"
          >
            <h2 className="contact-section-title">Connect With Us</h2>
            <p className="contact-section-subtitle">Follow us on social media for updates and more</p>
            
            <div className="contact-social-grid">
              {socialMedia.map((platform, index) => (
                <motion.a 
                  key={platform.name}
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-social-card"
                  whileHover={{ y: -10, scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  onClick={(e) => handleSocialClick(e, platform.url)}
                >
                  <img 
                    src={platform.icon} 
                    alt={platform.name} 
                    className="contact-social-image"
                  />
                  <span>{platform.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-section contact-map-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-map-wrapper"
          >
            <h2 className="contact-section-title">Our Location</h2>
            <p className="contact-section-subtitle">Find us easily with this interactive map</p>
            <div className="contact-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198.19220582310863!2d39.2611998!3d-6.8056325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c2b7dbe7fbf%3A0x1f4d61e73c7b6a18!2s6%C2%B048'22.2%22S%2039%C2%B015'43.8%22E!5e1!3m2!1sen!2sug!4v1721993456000!5m2!1sen!2sug"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="DreamBIG Marketing Consultancy Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section contact-form-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form-wrapper"
          >
            <div className="contact-form-image-container">
              <div className="contact-form-image">
                <img src="/images/contact-image1.jpg" alt="Contact Us" />
              </div>
              <div className="contact-support-badge">
                <RiCustomerService2Fill />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <h2 className="contact-section-title">Book a Service</h2>
              <p className="contact-form-subtitle">Fill out the form below and select your preferred contact method</p>
              
              <div className="contact-form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Full Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact-form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required={formData.contactMethod === 'email'}
                />
              </div>
              
              <div className="contact-form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required={formData.contactMethod === 'whatsapp' || formData.contactMethod === 'text'}
                />
              </div>
              
              {/* Service Selection Field */}
              <div className="contact-form-group">
                <select 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="contact-service-select"
                >
                  <option value="" disabled>Select a Service</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="contact-form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact-form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Detailed Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="contact-method-selector">
                <h4>Preferred Contact Method:</h4>
                <div className="contact-method-options">
                  <label className={`contact-method-label ${formData.contactMethod === 'email' ? 'contact-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="email" 
                      checked={formData.contactMethod === 'email'}
                      onChange={handleChange}
                    />
                    <span>Email</span>
                  </label>
                  <label className={`contact-method-label ${formData.contactMethod === 'whatsapp' ? 'contact-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="whatsapp" 
                      checked={formData.contactMethod === 'whatsapp'}
                      onChange={handleChange}
                    />
                    <span>WhatsApp</span>
                  </label>
                  <label className={`contact-method-label ${formData.contactMethod === 'text' ? 'contact-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="text" 
                      checked={formData.contactMethod === 'text'}
                      onChange={handleChange}
                    />
                    <span>Text Message</span>
                  </label>
                </div>
              </div>
              
              {error && <p className="contact-error-message">{error}</p>}
              
              <button 
                type="submit" 
                className={`contact-btn ${formData.contactMethod === 'whatsapp' ? 'contact-whatsapp-btn' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <HiArrowPath className="contact-spinner" /> 
                    {formData.contactMethod === 'whatsapp' ? 'Opening WhatsApp...' : 'Sending Message...'}
                  </>
                ) : (
                  <>
                    {formData.contactMethod === 'email' && 'Send Email'}
                    {formData.contactMethod === 'whatsapp' && 'Send via WhatsApp'}
                    {formData.contactMethod === 'text' && 'Send Text Message'}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="contact-section contact-hours-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-hours-wrapper"
          >
            <h2 className="contact-section-title">Business Hours</h2>
            <div className="contact-hours-grid">
              <div className="contact-day">
                <HiOutlineBriefcase className="contact-day-icon" />
                <span>Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="contact-day">
                <HiOutlineClock className="contact-day-icon" />
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="contact-day">
                <HiOutlineLockClosed className="contact-day-icon" />
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="contact-emergency-note">For urgent matters outside business hours, please call or WhatsApp us.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;