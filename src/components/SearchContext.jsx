import React, { createContext, useContext, useState, useMemo } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Helper function to convert category to URL-friendly format
  const toKebabCase = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/-+/g, '-'); // Replace multiple - with single -
  };

  // Services data from Services page
  const searchData = useMemo(() => {
    // Service categories and offerings
    const servicesData = [
      {
        id: 1,
        category: 'Strategic Marketing & Brand Development',
        services: [
          'Marketing strategy planning (short- and long-term)',
          'Brand identity creation & positioning',
          'Competitor & market research'
        ]
      },
      {
        id: 2,
        category: 'Digital Marketing & Online Campaigns',
        services: [
          'Social media marketing (Facebook, Instagram, LinkedIn, TikTok)',
          'Google Ads & SEO (Search Engine Optimization)',
          'Email marketing & digital funnels'
        ]
      },
      {
        id: 3,
        category: 'Content Creation & Creative Design',
        services: [
          'Visual campaigns (graphics, video, animation)',
          'Copywriting (ads, taglines, brand messaging)',
          'Photography & promotional materials'
        ]
      },
      {
        id: 4,
        category: 'Corporate Communications & PR',
        services: [
          'Brand storytelling & reputation management',
          'Media engagement & press releases',
          'Event marketing & community outreach'
        ]
      },
      {
        id: 5,
        category: 'Marketing for Startups & SMEs',
        services: [
          'Go-to-market strategy for new businesses',
          'Sales and promotion support',
          'Affordable growth packages for small businesses'
        ]
      },
      {
        id: 6,
        category: 'Market Research & Consumer Insights',
        services: [
          'Product testing & market entry evaluations',
          'Industry trend reports'
        ]
      },
      {
        id: 7,
        category: 'Training & Capacity Building',
        services: [
          'Corporate training on marketing, branding, and digital tools',
          'One-on-one coaching for entrepreneurs and marketing teams'
        ]
      }
    ];

    // Convert services data to searchable items
    const serviceItems = servicesData.flatMap(category => {
      return category.services.map((service, index) => ({
        id: `${category.id}-${index}`,
        title: service,
        type: 'service',
        path: `/Services#${toKebabCase(category.category)}`,
        category: category.category
      }));
    });

    // Pages data
    const pages = [
      {
        id: 1,
        title: 'About Culturez',
        type: 'page',
        path: '/about',
        category: 'Pages',
        description: 'Learn about our collective'
      },
      {
        id: 2,
        title: 'Services',
        type: 'page',
        path: '/Services',
        category: 'Pages',
        description: 'Explore our service offerings'
      },
      {
        id: 3,
        title: 'Gallery',
        type: 'page',
        path: '/Gallery',
        category: 'Pages',
        description: 'View our photo gallery'
      },
      {
        id: 4,
        title: 'Contact',
        type: 'page',
        path: '/contact',
        category: 'Pages',
        description: 'Get in touch with us'
      }
    ];

    return [...serviceItems, ...pages];
  }, []);

  const updateSuggestions = (query) => {
    if (!query) {
      setSearchSuggestions([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
    );
    
    setSearchSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      searchSuggestions,
      showSuggestions,
      setShowSuggestions,
      updateSuggestions,
      searchData
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);