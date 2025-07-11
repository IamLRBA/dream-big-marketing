import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/ServiceCard.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>
      <div className="service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link to={`/services/service${service.id}`} className="learn-more">
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;