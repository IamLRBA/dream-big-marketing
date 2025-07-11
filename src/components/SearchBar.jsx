import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../assets/styles/components/SearchBar.css';

const SearchBar = ({ closeSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // This would be replaced with actual search logic
  const searchItems = [
    { title: 'Digital Marketing', path: '/services/service1' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact Information', path: '/contact' },
    { title: 'SEO Services', path: '/services/service2' },
    { title: 'Our Team', path: '/about#team' },
    { title: 'Client Testimonials', path: '/#testimonials' },
  ];

  useEffect(() => {
    if (query.length > 2) {
      const results = searchItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real app, you would implement proper search functionality
      const result = searchItems.find(item =>
        item.title.toLowerCase() === query.toLowerCase()
      );
      if (result) {
        navigate(result.path);
        closeSearch();
      }
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    closeSearch();
    setQuery('');
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search for services, information..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </div>
      </form>

      {suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(item.path)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;