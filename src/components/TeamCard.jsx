import React, { useState } from 'react';
import '../assets/styles/components/TeamCard.css';

const TeamCard = ({ member, isCeo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`team-card ${isCeo ? 'ceo' : ''} ${expanded ? 'expanded' : ''}`}>
      <div className="team-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="team-info">
        <h3>{member.name}</h3>
        <p className="position">{member.position}</p>
      </div>
      <div className="team-description">
        <p>{member.description}</p>
        <button
          className="toggle-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default TeamCard;