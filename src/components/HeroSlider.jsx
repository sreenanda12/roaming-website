import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const images = [
    '/images/pni1.png',
    '/images/pni2.png',
    '/images/pni3.png',
    '/images/pni4.png'
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // Faster rotation (3 seconds)
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero-slider-container">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`slider-image ${index === current ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}
            <div className="hero-overlay-dark" />
        </div>
    );
};

export default HeroSlider;
