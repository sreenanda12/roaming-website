import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './HeroSlider.css';

const desktopSlides = [
    { image: '/images/pni1.png', animation: 'kb-zoom-in' },
    { image: '/images/pni2.png', animation: 'kb-pan-right' },
    { image: '/images/pni3.png', animation: 'kb-zoom-out' },
    { image: '/images/pni4.png', animation: 'kb-parallax-push' }
];

const mobileSlides = [
    { image: '/images/pnih1.jpg', animation: 'kb-mobile-zoom-in' },
    { image: '/images/pnih2.webp', animation: 'kb-mobile-pan-right' },
    { image: '/images/pnih3.webp', animation: 'kb-mobile-zoom-out' },
    { image: '/images/pnih4.webp', animation: 'kb-mobile-parallax-push' }
];

const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(-1);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        
        // Preload relevant images
        const activeSlides = isMobile ? mobileSlides : desktopSlides;
        activeSlides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });

        const duration = isMobile ? 3000 : 6000;
        const interval = setInterval(() => {
            setPrevIndex(activeIndex);
            setActiveIndex((current) => (current + 1) % activeSlides.length);
            setIsFirstLoad(false);
        }, duration);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [activeIndex, isMobile]);

    const currentSlides = isMobile ? mobileSlides : desktopSlides;

    return (
        <div className={`hero-slider-container ${isMobile ? 'mobile-view' : 'desktop-view'}`}>
            {/* Optimized Layer Stack */}
            <div className="film-grain" />
            
            {currentSlides.map((slide, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === prevIndex;
                
                // PERFORMANCE: Only render active and previous to save GPU memory
                if (!isActive && !isPrev && !(isFirstLoad && index === 0)) return null;

                return (
                    <div
                        key={`${isMobile ? 'm' : 'd'}-${index}`}
                        className={`hero-slide 
                            ${isActive ? 'active' : ''} 
                            ${isPrev ? 'previous' : ''}
                            ${isFirstLoad && index === 0 ? 'first-load' : ''}
                        `}
                    >
                        <div 
                            className={`hero-slide-bg ${slide.animation}`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                    </div>
                );
            })}
            
            <div className="hero-overlay-cinematic" />
            
            <div className="hero-content-fixed">
                <div className="container">
                    <div className="hero-text-content">
                        <h1 className="hero-main-title">
                            Discover Your Next Destination
                        </h1>
                        <p className="hero-main-subtitle">
                            Explore breathtaking places, luxury stays, and unforgettable journeys designed for curious travelers.
                        </p>
                        
                        <div className="hero-main-actions">
                            <NavLink to="/destinations" className="btn-cinematic-primary">
                                <span>Explore Destinations</span>
                                <ArrowRight size={22} />
                            </NavLink>
                            <NavLink to="/contact" className="btn-cinematic-secondary">
                                <span>Plan Your Trip</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
