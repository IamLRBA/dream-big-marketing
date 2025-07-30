import React, { useState, useEffect } from 'react';
import { 
  HiOutlineUserCircle as HiCrown,  
  HiOutlineCalculator,
  HiOutlineChartBar,               
  HiOutlineGlobeAlt,
  HiOutlineUsers,                  
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineHeart
} from 'react-icons/hi2';
import CountUp from 'react-countup';
import TeamMemberCard from '../../components/TeamMemberCard';
import './About.css';

const About = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedValue, setExpandedValue] = useState(null);

  const [floatingElements] = useState(() => {
    const elements = [];
    const types = ['note', 'note', 'note', 'bubble', 'bubble'];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        size: Math.random() * 20 + 10,
        left: Math.random() * 100,
        animationDuration: Math.random() * 30 + 20,
        animationDelay: Math.random() * 10,
        opacity: Math.random() * 0.7 + 0.3
      });
    }
    return elements;
  });

  const toggleCard = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  const toggleValue = (id) => {
    if (expandedValue === id) {
      setExpandedValue(null);
    } else {
      setExpandedValue(id);
    }
  };

  // Sample data
  const teamMembers = [
    {
      id: 1,
      name: 'Swaleh Kellah Liban',
      role: 'Founder & CEO',
      icon: <HiCrown />,  
      image: '/images/team/ceo.jpg',
      extendedBio: 'With his visionary mindset and hands-on expertise in brand strategy and business development, our CEO leads DreamBig Marketing Consultancy with passion and purpose. He drives innovation, nurtures client relationships, and inspires the team to deliver bold, results-driven marketing solutions that make an impact.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: 'https://www.instagram.com/herithliban',
        linkedin: 'https://www.linkedin.com/in/swaleh-liban-6714b8234'
      }
    },
    {
      id: 2,
      name: 'Shamsa Ally Liban (CPA-T)',
      role: 'Head of Accounts',
      icon: <HiOutlineCalculator />,
      image: '/images/team/shamsa.jpg',
      extendedBio: 'With years of  experience in financial leadership in the marketing industry, our Head of Accounts brings strategic insight and precision to every project. She ensures budgets are aligned with client goals, oversees financial planning, and collaborates closely with departments to drive sustainable growth and accountability.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Mohammed Amiry Charity',
      role: 'Marketing Director',
      icon: <HiOutlineChartBar />,  
      image: '/images/team/Mohammed.jpg',
      extendedBio: 'With a sharp eye for market trends and over a decade of campaign experience, our Marketing Director crafts compelling strategies that connect brands with their audiences. She leads the creative and digital teams to deliver innovative, data-driven marketing that drives engagement and elevates brand presence.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: 'https://www.linkedin.com/in/mohamed-charity-25893a307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      }
    },
    {
      id: 4,
      name: 'Nasra Harith Mohammed',
      role: 'Digital Marketer',
      icon: <HiOutlineGlobeAlt />,
      image: '/images/team/Nasra.jpg',
      extendedBio: 'Equipped with a flair for analytics and creativity, our Digital Marketer specializes in turning clicks into conversions. With 7+ years of experience across SEO, social media, and paid campaigns, he ensures our clients stay ahead in the digital space through targeted strategies and continuous optimization.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'LRBA',
      role: ' Head of Technology',
      icon: <HiOutlineLightBulb />,  
      image: '/images/team/LRBA.jpg',
      extendedBio: 'With experience at the intersection of marketing and engineering, our Head of Technology turns ambitious ideas into scalable digital platforms. He leads the adoption of emerging tech—from AI‑driven analytics to cloud‑native infrastructure—ensuring every campaign is powered by speed, security, and seamless user experience.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  const values = [
    {
      id: 1,
      title: 'Integrity',
      icon: <HiOutlineShieldCheck />,
      summary: 'We conduct business with honesty and transparency.',
      details: 'Every campaign we craft and every client partnership we nurture is rooted in integrity. At DreamBig Marketing Consultancy, we believe lasting success comes from doing what’s right—not just what drives immediate results.'
    },
    {
      id: 2,
      title: 'Innovation',
      icon: <HiOutlineLightBulb />,
      summary: 'We embrace creativity and forward-thinking marketing.',
      details: 'In an ever-evolving marketing landscape, we stay ahead by constantly exploring fresh ideas, emerging trends, and innovative strategies. We challenge our team to think boldly, push creative boundaries, and redefine what impactful marketing looks like.'
    },
    {
      id: 3,
      title: 'Excellence',
      icon: <HiOutlineStar />,
      summary: 'We strive for the highest quality in everything we do.',
      details: 'From initial concept to final execution, we uphold the highest standards. We invest in top-tier tools, talent, and strategy to ensure every campaign delivers exceptional quality and measurable impact.'
    },
    {
      id: 4,
      title: 'Community',
      icon: <HiOutlineHeart />,
      summary: 'We celebrate the power of culture and its influence on marketing.',
      details: 'Marketing thrives in community. We collaborate with local creators, influencers, and changemakers to craft campaigns that authentically reflect the voices and values of the audiences we serve.'
    }
  ];

  return (
    <div className="about-page">
      {/* Floating background elements */}
      {floatingElements.map((element) => (
        <div 
          key={element.id}
          className={`about-floating-element about-floating-${element.type}`}
          style={{
            left: `${element.left}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDuration: `${element.animationDuration}s`,
            animationDelay: `${element.animationDelay}s`,
            opacity: element.opacity
          }}
        />
      ))}
      
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            <span className="about-title-part">About</span>
            <span className="about-title-part">DreamBIG</span>
          </h1>
          <p className="about-hero-subtitle">Where Bold Ideas Meet Impactful Marketing</p>
        </div>
      </section>

      {/* History Section */}
      <section className="about-section about-history-section">
        <div className="about-container">
          <h2 className="about-section-title">
            <span>Our Story</span>
          </h2>
          <div className="about-history-content">
            <div className="about-history-text about-slide-in-left">
  <h3>The Beginning</h3>
  <p>
    DreamBIG Marketing Consultancy was founded in 2015 with a clear vision: to empower brands through bold, innovative marketing that blends creativity with strategy. What started as a small team has grown into a trusted partner for businesses aiming to make a lasting impact.
  </p>
  <h3>Our Mission</h3>
  <p>
    To empower businesses with innovative, data-driven marketing solutions that inspire growth, amplify brand presence, and connect meaningfully with their audiences. We strive to be the trusted partner for every ambitious brand ready to dream big and achieve bigger.
  </p>
  <h3>Our Vision</h3>
  <p>
    To become Africa’s leading creative marketing consultancy — known for bold ideas, impactful campaigns, and transforming businesses into powerful brands that thrive locally and compete globally.
  </p>
</div>

            <div className="about-history-image about-slide-in-right">
              <img src="/images/about-image1.jpg" alt="Culturez History" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section about-stats-section">
        <div className="about-container">
          <h2 className="about-section-title">
            <span>By The Numbers</span>
          </h2>
          <div className="about-stats-grid">
  <div className="about-stat-card">
    <CountUp end={20} duration={3} suffix="+" className="about-stat-number" />
    <p className="about-stat-label">Campaigns Delivered</p>
  </div>
  <div className="about-stat-card">
    <CountUp end={35} duration={3} suffix="+" className="about-stat-number" />
    <p className="about-stat-label">Brands Partnered</p>
  </div>
  <div className="about-stat-card">
    <CountUp end={50} duration={3} suffix="K+" className="about-stat-number" />
    <p className="about-stat-label">Satisfied Clients</p>
  </div>
  <div className="about-stat-card">
    <CountUp end={6} duration={3} suffix="+" className="about-stat-number" />
    <p className="about-stat-label">Years in Marketing</p>
  </div>
</div>
        </div>
      </section>

      {/* Values Section */}
<section className="about-section about-values-section">
  <div className="about-container">
    <h2 className="about-section-title">
      <span>Our Values</span>
    </h2>
    <div className="about-values-grid">
      {values.map((value) => (
        <div 
          key={value.id}
          className={`about-value-card ${expandedValue === value.id ? 'about-expanded' : ''}`}
          onClick={() => toggleValue(value.id)}
        >
          <div className="about-value-icon-container">
            {value.icon}
          </div>
          <h3>{value.title}</h3>
          <p className="about-value-summary">{value.summary}</p>
          {expandedValue === value.id && (
            <div className="about-value-details">
              <p>{value.details}</p>
            </div>
          )}
          <div className="about-value-indicator">
            {expandedValue === value.id ? '−' : '+'}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Team Section */}
      <section className="about-section about-team-section">
        <div className="about-container">
          <h2 className="about-section-title">
            <span>Meet The Team</span>
          </h2>
          
          {/* CEO Card */}
          <div className="about-ceo-card-container">
            {teamMembers.slice(0, 1).map((member) => (
              <TeamMemberCard 
                key={member.id}
                member={member}
                isExpanded={expandedCard === member.id}
                isCeo={true}
                toggleCard={() => toggleCard(member.id)}
              />
            ))}
          </div>
          
          {/* Team Members */}
          <div className="about-team-members-slider">
            {teamMembers.slice(1).map((member) => (
              <TeamMemberCard 
                key={member.id}
                member={member}
                isExpanded={expandedCard === member.id}
                isCeo={false}
                toggleCard={() => toggleCard(member.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;