import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HiOutlineChartBar,
  HiOutlineGlobeAlt,
  HiOutlinePencil,
  HiOutlineMegaphone,
  HiOutlineLightBulb,
  HiOutlineDocumentText,
  HiOutlineAcademicCap
} from 'react-icons/hi2';
import './ServiceCard.css';

const ServiceCard = ({ service, anchorId }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getServiceIcon = () => {
    switch(service.category) {
      case 'Strategic Marketing & Brand Development':
        return <HiOutlineChartBar className="service-card-icon" />;
      case 'Digital Marketing & Online Campaigns':
        return <HiOutlineGlobeAlt className="service-card-icon" />;
      case 'Content Creation & Creative Design':
        return <HiOutlinePencil className="service-card-icon" />;
      case 'Corporate Communications & PR':
        return <HiOutlineMegaphone className="service-card-icon" />;
      case 'Marketing for Startups & SMEs':
        return <HiOutlineLightBulb className="service-card-icon" />;
      case 'Market Research & Consumer Insights':
        return <HiOutlineDocumentText className="service-card-icon" />;
      case 'Training & Capacity Building':
        return <HiOutlineAcademicCap className="service-card-icon" />;
      default:
        return <HiOutlineLightBulb className="service-card-icon" />;
    }
  };

  const getPlaceholderImage = () => {
    switch(service.id) {
      case 1: return '../assets/images/services/strategy-placeholder.jpg';
      case 2: return '../assets/images/services/digital-placeholder.jpg';
      case 3: return '../assets/images/services/content-placeholder.jpg';
      case 4: return '../assets/images/services/pr-placeholder.jpg';
      case 5: return '../assets/images/services/startups-placeholder.jpg';
      case 6: return '../assets/images/services/research-placeholder.jpg';
      case 7: return '../assets/images/services/training-placeholder.jpg';
      default: return '../assets/images/services/placeholder.jpg';
    }
  };

  return (
    <motion.div 
      id={anchorId}  // Added anchor ID here
      className={`service-card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
    >
      {!isExpanded ? (
        <div className="service-card-content">
          <div className="service-card-icon-container">
            {getServiceIcon()}
          </div>
          <h3 className="service-card-title">{service.category}</h3>
        </div>
      ) : (
        <motion.div 
          className="service-card-expanded-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="service-card-header">
            <div className="service-card-expanded-icon">
              {getServiceIcon()}
            </div>
            <h3 className="service-card-expanded-title">{service.category}</h3>
          </div>
          
          <div className="service-card-image-container">
            <img 
              className="service-card-image"
              src={`/images/services/${service.id}.jpg`} 
              alt={service.category}
              onError={(e) => {
                e.target.src = getPlaceholderImage();
              }}
            />
          </div>
          
          <ul className="service-card-details">
            {service.services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <Link 
            to="/contact" 
            className="service-card-cta"
            onClick={(e) => e.stopPropagation()}
          >
            Book Service Now
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceCard;