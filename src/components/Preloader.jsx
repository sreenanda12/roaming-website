import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [show, setShow] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const minTime = 3000; // 3 seconds for a cinematic feel
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minTime - elapsed);

      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => setShow(false), 1000);
      }, remaining);
    };

    if (document.readyState === 'complete') {
        handleLoad();
    } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!show) return null;

  return (
    <div className={`preloader ${isExiting ? 'preloader-exit' : ''}`}>
      <div className="preloader-content">
        <div className="animation-container">
          <div className="globe-container">
             <div className="globe">
               <div className="globe-lines"></div>
             </div>
             <div className="plane-path">
                <div className="airplane">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21,16L21,14L13,9L13,3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5L10,9L2,14L2,16L10,13.5L10,19L8,20.5L8,22L11.5,21L15,22L15,20.5L13,19L13,13.5L21,16Z" />
                  </svg>
                </div>
             </div>
          </div>
        </div>
        
        <div className="preloader-text">
          <h1 className="brand-name">
            <span className="word">Roaming</span>
            <span className="word">Direction</span>
          </h1>
          <div className="loading-bar-container">
            <div className="loading-bar"></div>
          </div>
          <p className="loading-status">Designing Your Journey...</p>
        </div>
      </div>
      
      <div className="preloader-bg">
        <div className="bg-shape circle-1"></div>
        <div className="bg-shape circle-2"></div>
        <div className="bg-shape circle-3"></div>
      </div>
    </div>
  );
};

export default Preloader;
