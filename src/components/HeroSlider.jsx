import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './HeroSlider.css';

const slides = [
    { image: '/images/pni1.png', animation: 'kb-zoom-in' },
    { image: '/images/pni2.png', animation: 'kb-pan-right' },
    { image: '/images/pni3.png', animation: 'kb-zoom-out' },
    { image: '/images/pni4.png', animation: 'kb-parallax-push' }
];

const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(-1);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        // Preload images immediately
        slides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });

        const interval = setInterval(() => {
            setPrevIndex(activeIndex);
            setActiveIndex((current) => (current + 1) % slides.length);
            setIsFirstLoad(false);
        }, 3000); // 3-second cycle

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="hero-slider-container">
            {/* Film Grain Effect */}
            <div className="film-grain" />
            
            {slides.map((slide, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === prevIndex;
                
                return (
                    <div
                        key={index}
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
