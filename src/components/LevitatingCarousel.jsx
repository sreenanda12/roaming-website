import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import './LevitatingCarousel.css';

const destinations = [
    {
        id: 1,
        name: 'Dubai, UAE',
        tag: 'Luxury Getaway',
        price: '₹89,999',
        duration: '5 Nights / 6 Days',
        rating: 4.9,
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    },
    {
        id: 2,
        name: 'Santorini, Greece',
        tag: 'Europe Collection',
        price: '₹1,24,999',
        duration: '7 Nights / 8 Days',
        rating: 4.8,
        img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    },
    {
        id: 3,
        name: 'Bali, Indonesia',
        tag: 'Tropical Paradise',
        price: '₹64,999',
        duration: '6 Nights / 7 Days',
        rating: 4.9,
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    },
    {
        id: 4,
        name: 'Kyoto, Japan',
        tag: 'Heritage Tour',
        price: '₹1,45,000',
        duration: '6 Nights / 7 Days',
        rating: 4.9,
        img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    },
    {
        id: 5,
        name: 'Maldives',
        tag: 'Island Luxury',
        price: '₹1,10,000',
        duration: '4 Nights / 5 Days',
        rating: 4.9,
        img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    }
];

const LevitatingCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % destinations.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % destinations.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);

    // Calculate indices for display
    const visibleIndices = [
        (currentIndex - 1 + destinations.length) % destinations.length,
        currentIndex,
        (currentIndex + 1) % destinations.length
    ];

    return (
        <div className="levitating-container">
            <div className="levitating-bg">
                <div className="bg-overlay" />
            </div>
            
            <div className="carousel-wrapper">
                <AnimatePresence mode="popLayout">
                    {visibleIndices.map((index, i) => {
                        const dest = destinations[index];
                        const isCenter = i === 1;
                        
                        return (
                            <motion.div
                                key={`${dest.id}-${index}`}
                                className={`glass-card ${isCenter ? 'center' : 'side'}`}
                                layout
                                initial={{ opacity: 0, scale: 0.8, x: i === 0 ? -100 : i === 2 ? 100 : 0 }}
                                animate={{ 
                                    opacity: isCenter ? 1 : 0.6, 
                                    scale: isCenter ? 1 : 0.8,
                                    x: 0,
                                    y: isCenter ? [0, -20, 0] : [0, -10, 0], // Levitation
                                    boxShadow: isCenter 
                                        ? [
                                            "0 20px 50px rgba(0,0,0,0.3)", 
                                            "0 40px 80px rgba(0,0,0,0.15)", 
                                            "0 20px 50px rgba(0,0,0,0.3)"
                                          ] 
                                        : "0 10px 30px rgba(0,0,0,0.2)"
                                }}
                                transition={{ 
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.5
                                    },
                                    boxShadow: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.5
                                    },
                                    opacity: { duration: 0.5 },
                                    scale: { duration: 0.5 },
                                    x: { duration: 0.5 }
                                }}
                                onClick={() => isCenter ? null : setCurrentIndex(index)}
                            >
                                <div className="card-image-wrap">
                                    <img src={dest.img} alt={dest.name} className="card-image" />
                                    <div className="card-tag">{dest.tag}</div>
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <div className="location">
                                            <MapPin size={16} />
                                            <span>{dest.name}</span>
                                        </div>
                                        <div className="rating">
                                            <Star size={14} fill="#FFD700" color="#FFD700" />
                                            <span>{dest.rating}</span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="details">
                                            <span className="duration">{dest.duration}</span>
                                            <span className="price">{dest.price}</span>
                                        </div>
                                        <button className="book-btn">
                                            Book Now <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <div className="carousel-controls">
                <button onClick={prevSlide} className="control-btn prev-btn">
                    <ArrowRight size={24} style={{ transform: 'rotate(180deg)' }} />
                </button>
                <div className="dot-indicators">
                    {destinations.map((_, i) => (
                        <div 
                            key={i} 
                            className={`dot ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
                <button onClick={nextSlide} className="control-btn next-btn">
                    <ArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default LevitatingCarousel;
