import React, { useState, useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [bubbles, setBubbles] = useState([]);
  const [backgroundIcons, setBackgroundIcons] = useState([]);
  const [navHistory, setNavHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [expandedImage, setExpandedImage] = useState(null);
  const pageRef = useRef(null);
  const carouselRefs = useRef({});

  // Navigation history functions
  const addToHistory = (item) => {
    const newHistory = [...navHistory.slice(0, historyIndex + 1), item];
    setNavHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const prevItem = navHistory[historyIndex - 1];
      navigateToHistoryItem(prevItem);
      setHistoryIndex(historyIndex - 1);
    }
  };

  const goForward = () => {
    if (historyIndex < navHistory.length - 1) {
      const nextItem = navHistory[historyIndex + 1];
      navigateToHistoryItem(nextItem);
      setHistoryIndex(historyIndex + 1);
    }
  };

  const navigateToHistoryItem = (item) => {
    if (item.type === 'category') {
      setActiveFilter(item.id);
    }
  };

  // Portfolio data organized by company and campaigns
  const allCompanies = {
    'StarTimes': [
      {
        id: 'startimes-burudani',
        name: 'Burudani Bila Kikomo',
        titleImage: '../assets/images/portfolio/startimes/startimes-title.jpg',
        description: 'Reshaping marketing strategies with new pricing models and segmented programming like cartoons for kids',
        images: Array(14).fill().map((_, i) => `../assets/images/portfolio/startimes/startimes-${i+1}.jpg`)
      }
    ],
    'KFC & YANGA SC': [
      {
        id: 'kfc-yanga-ladha',
        name: 'Ladha ya Ushindi',
        titleImage: '../assets/images/portfolio/kfc-yanga/kfc-yanga-title.jpg',
        description: 'Merging with YANGA SC to tap into their 10M+ fanbase, increasing customer engagement and sales',
        images: Array(8).fill().map((_, i) => `../assets/images/portfolio/kfc-yanga/kfc-yanga-${i+1}.jpg`)
      },
      {
        id: 'yanga-hatushikiki',
        name: 'Hatushikiki Campaign',
        titleImage: '../assets/images/portfolio/yanga-hatushikiki/yanga-hatushikiki-title.jpg',
        description: 'Celebrating 4 premier league titles and 5 derby wins, bringing partnerships with KFC, DTB and Puma',
        images: Array(5).fill().map((_, i) => `../assets/images/portfolio/yanga-hatushikiki/yanga-hatushikiki-${i+1}.jpg`)
      }
    ],
    'Posta': [
      {
        id: 'posta-campaign',
        name: 'POSTa Popote',
        titleImage: '../assets/images/portfolio/posta/posta-title.jpg',
        description: 'Increasing awareness and business adoption for Costa Tanzania postal services',
        images: Array(21).fill().map((_, i) => `../assets/images/portfolio/posta/posta-${i+1}.jpg`)
      }
    ],
    'DSE': [
      {
        id: 'dse-inuka',
        name: 'Inuka na Hisa!',
        titleImage: '../assets/images/portfolio/dse/dse-title.jpg',
        description: 'Campaign to educate and encourage investment in the Dar es Salaam Stock Exchange',
        images: Array(7).fill().map((_, i) => `../assets/images/portfolio/dse/dse-${i+1}.jpg`)
      }
    ],
    'DTB & YANGA SC': [
      {
        id: 'dtb-yanga-green',
        name: 'In the Green & Yellow',
        titleImage: '../assets/images/portfolio/dtb-yanga/dtb-yanga-title.jpg',
        description: 'Launching a podcast and branding campaign for YANGA SC with Diamond Trust Bank',
        images: Array(10).fill().map((_, i) => `../assets/images/portfolio/dtb-yanga/dtb-yanga-${i+1}.jpg`)
      }
    ]
  };

  useEffect(() => {
    // Create bubbles
    const newBubbles = [];
    for (let i = 0; i < 15; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 40 + 10,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 20 + 10
      });
    }
    setBubbles(newBubbles);

    // Create background icons
    const icons = [];
    const newIcons = [];
    for (let i = 0; i < 20; i++) {
      newIcons.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        size: Math.random() * 40 + 20,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 30 + 20,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    setBackgroundIcons(newIcons);
  }, []);

  const companies = ['all', ...Object.keys(allCompanies)];

  const renderSectionTitle = (title) => {
    const words = title.split(' ');
    if (words.length === 1) {
      return <span className="portfolio-highlight-text">{title}</span>;
    } else if (words.length === 3 && words[1] === 'and') {
      return (
        <>
          <span className="portfolio-highlight-text">{words[0]}</span> {words[1]} <span className="portfolio-highlight-box">{words[2]}</span>
        </>
      );
    } else {
      return (
        <>
          {words.map((word, index) => (
            index % 2 === 0 ? 
              <span key={index} className="portfolio-highlight-text">{word} </span> : 
              <span key={index} className="portfolio-highlight-box">{word} </span>
          ))}
        </>
      );
    }
  };

  const handleCompanyPreviewClick = (company, campaignId) => {
    addToHistory({ type: 'category', id: company });
    setActiveFilter(company);
  };

  const handleFilterChange = (company) => {
    setActiveFilter(company);
    addToHistory({ type: 'category', id: company });
  };

  const openExpandedImage = (imageUrl) => {
    setExpandedImage(imageUrl);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  return (
    <div className="portfolio-page" ref={pageRef}>
      <div className="portfolio-background"></div>
      
      {bubbles.map((bubble) => (
        <motion.div
          key={`bubble-${bubble.id}`}
          className="portfolio-bubble"
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
            repeatType: "loop",
            ease: "linear"
          }}
        />
      ))}

      {backgroundIcons.map((icon) => (
        <motion.div
          key={`icon-${icon.id}`}
          className="portfolio-background-icon"
          style={{
            fontSize: `${icon.size}px`,
            left: `${icon.left}%`,
            top: `${icon.top}%`,
            transform: `rotate(${icon.rotation}deg)`,
            opacity: icon.opacity
          }}
          initial={{ y: -100 }}
          animate={{ y: '100vh' }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {icon.icon}
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <div className="portfolio-navigation-buttons">
        <button 
          className="portfolio-nav-button back" 
          onClick={goBack}
          disabled={historyIndex <= 0}
          title="Go back"
        >
          ←
        </button>
        <button 
          className="portfolio-nav-button forward" 
          onClick={goForward}
          disabled={historyIndex >= navHistory.length - 1}
          title="Go forward"
        >
          →
        </button>
      </div>

      <section className="portfolio-section">
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="portfolio-header"
          >
            <h2 className="portfolio-title">
              <span className="portfolio-highlight-border">Explore</span> Our{' '}
              Marketing Portfolio
            </h2>
            <motion.p 
              className="portfolio-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover our successful campaigns and creative solutions for diverse clients
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="portfolio-company-filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {companies.map(company => (
              <button
                key={company}
                className={`portfolio-company-filter ${activeFilter === company ? 'active' : ''}`}
                onClick={() => handleFilterChange(company)}
              >
                {company === 'all' ? 'All Companies' : company}
              </button>
            ))}
          </motion.div>
          
          <div className="portfolio-content">
            {activeFilter === 'all' ? (
              Object.entries(allCompanies).map(([company, campaigns]) => (
                <motion.div 
                  key={company}
                  className="portfolio-company-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="portfolio-company-title">
                    {renderSectionTitle(company)}
                  </h3>
                  <div className="portfolio-campaigns-grid">
                    {campaigns.map(campaign => (
                      <div 
                        key={campaign.id} 
                        className="portfolio-campaign-preview"
                        onClick={() => handleCompanyPreviewClick(company, campaign.id)}
                      >
                        <div className="portfolio-preview-image-container">
                          <img 
                            src={campaign.titleImage} 
                            alt={campaign.name} 
                            className="portfolio-preview-image"
                          />
                        </div>
                        <h4>{campaign.name}</h4>
                        <p className="portfolio-preview-description">{campaign.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="portfolio-company-title">
                  {renderSectionTitle(activeFilter)}
                </h3>
                <div className="portfolio-campaigns">
                  {allCompanies[activeFilter]?.map(campaign => (
                    <div key={campaign.id} className="portfolio-campaign">
                      <div className="portfolio-campaign-header">
                        <div className="portfolio-campaign-title-container">
                          <h4 className="portfolio-campaign-title">{campaign.name}</h4>
                          <p className="portfolio-campaign-description">{campaign.description}</p>
                        </div>
                      </div>

                      <div className="portfolio-campaign-content">
                        <div className="portfolio-carousel-container">
                          <div className="portfolio-carousel">
                            {campaign.images.map((image, index) => (
                              <div 
                                key={index}
                                className="portfolio-carousel-item"
                                onClick={() => openExpandedImage(image)}
                              >
                                <div className="portfolio-carousel-image-container">
                                  <img 
                                    src={image} 
                                    alt={`${campaign.name} ${index + 1}`} 
                                    className="portfolio-carousel-image"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      <AnimatePresence>
        {expandedImage && (
          <motion.div 
            className="portfolio-expanded-image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="portfolio-expanded-image-content">
              <button 
                className="portfolio-expanded-image-close"
                onClick={closeExpandedImage}
              >
                <FaTimes />
              </button>
              <img 
                src={expandedImage} 
                alt="Expanded campaign" 
                className="portfolio-expanded-image"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="portfolio-cta-section">
        <div className="portfolio-container">
          <div className="portfolio-cta-content">
            <h3>Ready to Elevate Your Brand?</h3>
            <p>Our team at DreamBIG Marketing Consultancy is ready to create impactful campaigns for your business.</p>
            <div className="portfolio-cta-buttons">
              <Link to="/contact" className="portfolio-cta-button">
                Contact Us
              </Link>
              <Link to="/#message-section" className="portfolio-cta-button secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;