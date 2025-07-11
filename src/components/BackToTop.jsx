import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../assets/styles/components/BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
      <span className="tooltip">Back to Top</span>
    </div>
  );
};

export default BackToTop;