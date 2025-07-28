import React, { useState, useEffect, useRef } from 'react';
import { 
  HiOutlinePlay, 
  HiOutlinePhotograph, 
  HiOutlineVideoCamera, 
  HiOutlineX,
  HiOutlineArrowsExpand,
  HiOutlineVolumeUp,
  HiOutlineVolumeOff,
  HiOutlinePause,
  HiOutlineRefresh
} from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [floatingIcons, setFloatingIcons] = useState([]);
  const [photoFullscreen, setPhotoFullscreen] = useState(false);
  
  const videoRef = useRef(null);
  const photoModalRef = useRef(null);

  const photos = [
    { 
      id: 1, 
      src: '/images/studio/gallery1.jpg', 
      alt: 'Team Strategy Meeting',
      description: 'Our marketing team brainstorming innovative strategies for client campaigns',
      date: '2023-05-15',
      event: 'Quarterly Planning Session'
    },
    { 
      id: 2, 
      src: '/images/studio/gallery2.jpg', 
      alt: 'Client Presentation',
      description: 'Presenting campaign results to our valued clients',
      date: '2023-05-20',
      event: 'Client Review Meeting'
    },
    { 
      id: 3, 
      src: '/images/studio/gallery3.jpg', 
      alt: 'Team Building Event',
      description: 'Annual team retreat to foster collaboration and creativity',
      date: '2023-06-02',
      event: 'Company Retreat'
    },
    { 
      id: 4, 
      src: '/images/studio/gallery4.jpg', 
      alt: 'Workshop Session',
      description: 'Training session on the latest digital marketing trends',
      date: '2023-06-10',
      event: 'Professional Development Workshop'
    },
    { 
      id: 5, 
      src: '/images/studio/gallery5.jpg', 
      alt: 'Award Celebration',
      description: 'Celebrating our team winning the Marketing Excellence Award',
      date: '2023-06-15',
      event: 'Industry Awards Ceremony'
    },
    { 
      id: 6, 
      src: '/images/studio/gallery6.jpg', 
      alt: 'Office Environment',
      description: 'Our creative workspace designed for collaboration and innovation',
      date: '2023-06-20',
      event: 'Office Open House'
    }
  ];

  const videos = [
    { 
      id: 1, 
      title: 'Meet Our Team', 
      src: '/videos/team-introduction.mp4', 
      thumbnail: '/images/studio/video1.jpg',
      description: 'Get to know the talented individuals behind DreamBIG Marketing',
      date: '2023-07-01',
      duration: '2:45'
    },
    { 
      id: 2, 
      title: 'Company Culture', 
      src: '/videos/company-culture.mp4', 
      thumbnail: '/images/studio/video2.jpg',
      description: 'A day in the life at DreamBIG Marketing Consultancy',
      date: '2023-07-15',
      duration: '4:20'
    },
    { 
      id: 3, 
      title: 'Client Testimonials', 
      src: '/videos/client-feedback.mp4', 
      thumbnail: '/images/studio/video3.jpg',
      description: 'Hear what our clients say about working with us',
      date: '2023-08-05',
      duration: '3:15'
    }
  ];

  useEffect(() => {
    const icons = ['HiOutlinePhotograph', 'HiOutlineVideoCamera', 'HiOutlinePlay', 
                  'HiOutlineCamera', 'HiOutlineMusicNote', 'HiOutlineMicrophone'];
    const newIcons = [];
    
    for (let i = 0; i < 12; i++) {
      newIcons.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        size: Math.random() * 40 + 20,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 20 + 10,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    
    setFloatingIcons(newIcons);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume;
      } else {
        videoRef.current.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      videoRef.current.parentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);
  };

  const handleProgressClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const replayVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const togglePhotoFullscreen = () => {
    setPhotoFullscreen(!photoFullscreen);
  };

  const handlePhotoClick = (e) => {
    if (photoFullscreen) {
      e.stopPropagation();
      togglePhotoFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!photoFullscreen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        togglePhotoFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photoFullscreen]);

  return (
    <div className="studio-gallery-page">
      <div className="studio-gallery-background"></div>
      
      {floatingIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className="studio-gallery-floating-icon"
          style={{
            fontSize: `${icon.size}px`,
            left: `${icon.left}%`,
            opacity: icon.opacity
          }}
          initial={{ top: '-10%' }}
          animate={{ top: '110%' }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}
        >
          {icon.icon === 'HiOutlinePhotograph' && <HiOutlinePhotograph />}
          {icon.icon === 'HiOutlineVideoCamera' && <HiOutlineVideoCamera />}
          {icon.icon === 'HiOutlinePlay' && <HiOutlinePlay />}
          {icon.icon === 'HiOutlineCamera' && <HiOutlinePhotograph />}
          {icon.icon === 'HiOutlineMusicNote' && <HiOutlinePlay />}
          {icon.icon === 'HiOutlineMicrophone' && <HiOutlineVolumeUp />}
        </motion.div>
      ))}

      <motion.section 
        className="studio-gallery-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="studio-gallery-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="studio-gallery-hero-title"
          >
            <motion.span 
              initial={{ color: 'var(--white)' }}
              animate={{ color: ['var(--white)', 'var(--primary-color)', 'var(--white)'] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
              className="highlight-word"
            >
              DreamBIG
            </motion.span>{' '}
            <motion.span
              initial={{ color: 'var(--white)' }}
              animate={{ color: ['var(--white)', 'var(--secondary-color)', 'var(--white)'] }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', delay: 2 }}
            >
              Gallery
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="studio-gallery-hero-subtitle"
          >
            Capturing our team, culture, and journey at DreamBIG Marketing
          </motion.p>
        </div>
      </motion.section>

      <section className="studio-gallery-section">
        <div className="studio-gallery-container">
          <div className="studio-gallery-tabs">
            <motion.button 
              className={`studio-gallery-tab ${activeTab === 'photos' ? 'active' : ''}`}
              onClick={() => setActiveTab('photos')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlinePhotograph className="tab-icon" /> Photos
            </motion.button>
            <motion.button 
              className={`studio-gallery-tab ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlineVideoCamera className="tab-icon" /> Videos
            </motion.button>
          </div>
          
          <AnimatePresence mode="wait">
            {activeTab === 'photos' && (
              <motion.div
                key="photos"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="studio-gallery-photos-grid"
              >
                {photos.map(photo => (
                  <motion.div
                    key={photo.id}
                    className="studio-gallery-photo-card"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedPhoto(photo)}
                    layoutId={`photo-${photo.id}`}
                  >
                    <img src={photo.src} alt={photo.alt} />
                    <div className="studio-gallery-photo-overlay">
                      <h3>{photo.alt}</h3>
                      <p>{photo.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {activeTab === 'videos' && (
              <motion.div
                key="videos"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="studio-gallery-videos-grid"
              >
                {videos.map(video => (
                  <motion.div
                    key={video.id}
                    className="studio-gallery-video-card"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedVideo(video)}
                    layoutId={`video-${video.id}`}
                  >
                    <div className="studio-gallery-video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <button className="studio-gallery-video-play-button">
                        <HiOutlinePlay />
                      </button>
                    </div>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            className="studio-gallery-photo-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (!photoFullscreen) {
                setSelectedPhoto(null);
              }
            }}
            ref={photoModalRef}
          >
            <div className="studio-gallery-photo-modal-background"></div>
            <motion.div 
              className={`studio-gallery-photo-modal-content ${photoFullscreen ? 'fullscreen' : ''}`}
              layoutId={`photo-${selectedPhoto.id}`}
            >
              <button 
                className="studio-gallery-photo-modal-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(null);
                  setPhotoFullscreen(false);
                }}
              >
                <HiOutlineX />
              </button>
              
              <div className="studio-gallery-photo-container">
                <img 
                  src={selectedPhoto.src} 
                  alt={selectedPhoto.alt} 
                  className="studio-gallery-photo"
                />
                <button 
                  className="studio-gallery-photo-fullscreen-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePhotoFullscreen();
                  }}
                >
                  {photoFullscreen ? <HiOutlineArrowsExpand /> : <HiOutlineArrowsExpand />}
                </button>
              </div>
              
              {!photoFullscreen && (
                <div className="studio-gallery-photo-modal-info">
                  <h3>{selectedPhoto.alt}</h3>
                  <p>{selectedPhoto.description}</p>
                  <div className="studio-gallery-photo-modal-meta">
                    <span>Date: {selectedPhoto.date}</span>
                    <span>Event: {selectedPhoto.event}</span>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className="studio-gallery-video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="studio-gallery-video-modal-background" onClick={() => {
              setSelectedVideo(null);
              setIsPlaying(false);
            }}></div>
            <motion.div 
              className="studio-gallery-video-modal-content"
              layoutId={`video-${selectedVideo.id}`}
            >
              <button 
                className="studio-gallery-video-modal-close"
                onClick={() => {
                  setSelectedVideo(null);
                  setIsPlaying(false);
                }}
              >
                <HiOutlineX />
              </button>
              <div className="studio-gallery-video-player">
                <video
                  ref={videoRef}
                  src={selectedVideo.src}
                  onClick={togglePlay}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  volume={volume}
                />
                <div className="studio-gallery-video-controls">
                  <button onClick={togglePlay} className="play-pause">
                    {isPlaying ? <HiOutlinePause /> : <HiOutlinePlay />}
                  </button>
                  
                  <button onClick={toggleMute} className="volume-button">
                    {isMuted ? <HiOutlineVolumeOff /> : <HiOutlineVolumeUp />}
                  </button>
                  
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="volume-slider"
                  />
                  
                  <div className="studio-gallery-video-progress" onClick={handleProgressClick}>
                    <div 
                      className="studio-gallery-video-progress-bar" 
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                  </div>
                  
                  <span className="time-display">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                  
                  <button onClick={toggleFullscreen} className="fullscreen-button">
                    {isFullscreen ? <HiOutlineArrowsExpand /> : <HiOutlineArrowsExpand />}
                  </button>
                </div>
                
                {!isPlaying && currentTime >= duration && duration > 0 && (
                  <button className="replay-button" onClick={replayVideo}>
                    <HiOutlineRefresh /> Play Again
                  </button>
                )}
              </div>
              
              {isFullscreen && (
                <button 
                  className="studio-gallery-video-fullscreen-close"
                  onClick={() => {
                    setSelectedVideo(null);
                    setIsPlaying(false);
                  }}
                >
                  <HiOutlineX />
                </button>
              )}
              
              <div className="studio-gallery-video-modal-info">
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.description}</p>
                <div className="studio-gallery-video-modal-meta">
                  <span>Date: {selectedVideo.date}</span>
                  <span>Duration: {selectedVideo.duration}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;