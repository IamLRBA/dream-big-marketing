import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiOutlineCalendar, 
  HiOutlineUser, 
  HiOutlineArrowRight 
} from 'react-icons/hi';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Digital Marketing Trends 2025',
      excerpt: 'Discover the key digital marketing trends that will shape 2025 and how businesses can leverage them for growth.',
      date: '2025-06-15',
      author: 'Marketing Team',
      image: '../assets/images/blog/post1.jpg',
      slug: 'digital-marketing-trends'
    },
    {
      id: 2,
      title: 'Brand Strategy Essentials',
      excerpt: 'Learn the essential components of a successful brand strategy in today\'s competitive marketplace.',
      date: '2025-05-28',
      author: 'Strategy Team',
      image: '../assets/images/blog/post2.jpg',
      slug: 'brand-strategy'
    },
    {
      id: 3,
      title: 'Social Media Engagement Tactics',
      excerpt: 'Proven tactics to boost engagement and build community on social media platforms.',
      date: '2025-05-10',
      author: 'Social Media Team',
      image: '../assets/images/blog/post3.jpg',
      slug: 'social-media-tactics'
    },
    {
      id: 4,
      title: 'Measuring Marketing ROI',
      excerpt: 'A comprehensive guide to accurately measure and improve your marketing return on investment.',
      date: '2025-04-22',
      author: 'Analytics Team',
      image: '../assets/images/blog/post4.jpg',
      slug: 'marketing-roi'
    }
  ];

  return (
    <div className="blog-page">
      <section className="blog-section blog-list-section">
        <div className="blog-container">
          <h2 className="blog-section-title">Marketing Insights</h2>
          <p className="blog-section-subtitle">
            Stay updated with the latest marketing strategies, industry news, and expert insights
          </p>
          
          <div className="blog-grid">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><HiOutlineCalendar className="blog-icon" /> {new Date(post.date).toLocaleDateString()}</span>
                    <span><HiOutlineUser className="blog-icon" /> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-read-more">
                    Read More <HiOutlineArrowRight className="blog-arrow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;