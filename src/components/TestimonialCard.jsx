import React, { useState } from 'react';
import '../assets/styles/components/TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`testimonial-card ${expanded ? 'expanded' : ''}`}>
      <div className="testimonial-content">
        <div className="testimonial-image">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="testimonial-info">
          <h4>{testimonial.name}</h4>
          <p className="position">{testimonial.position}</p>
        </div>
      </div>
      {expanded && (
        <div className="testimonial-text">
          <p>"{testimonial.testimonial}"</p>
        </div>
      )}
      <button
        className="read-more-btn"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Read Less' : 'Read Testimonial'}
      </button>
    </div>
  );
};

export default TestimonialCard;