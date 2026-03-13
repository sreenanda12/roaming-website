import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Globe, Car, Home as HomeIcon, Star, MapPin, ArrowRight,
    Clock, Users, Wifi, Coffee, Zap, Shield
} from 'lucide-react';
import './Services.css';

const tabs = [
    { id: 'tourism', label: 'International Tourism', icon: <Globe size={18} /> },
    { id: 'cars', label: 'Car Rentals', icon: <Car size={18} /> },
    { id: 'property', label: 'Property Booking', icon: <HomeIcon size={18} /> },
];

const packages = [
    {
        id: 1,
        name: 'Santorini & Athens',
        country: 'Greece',
        price: '₹1,24,999',
        duration: '8 Days / 7 Nights',
        rating: 4.8,
        reviews: 642,
        tag: 'Best Seller',
        img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&q=80',
        highlights: ['Hotel Stay', 'Guided Tours', 'Airport Pick', 'Meals'],
    },
    {
        id: 2,
        name: 'Dubai Luxury Escape',
        country: 'UAE',
        price: '₹89,999',
        duration: '6 Days / 5 Nights',
        rating: 4.9,
        reviews: 1024,
        tag: 'Premium',
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=80',
        highlights: ['5-Star Hotel', 'Desert Safari', 'Burj Khalifa', 'Dhow Cruise'],
    },
    {
        id: 3,
        name: 'Bali Paradise',
        country: 'Indonesia',
        price: '₹64,999',
        duration: '7 Days / 6 Nights',
        rating: 4.9,
        reviews: 1580,
        tag: 'Popular',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=80',
        highlights: ['Villa Stay', 'Temple Tours', 'Ubud Trek', 'Beach Day'],
    },
    {
        id: 4,
        name: 'Thailand Explorer',
        country: 'Thailand',
        price: '₹44,999',
        duration: '5 Days / 4 Nights',
        rating: 4.7,
        reviews: 2100,
        tag: 'Value Pick',
        img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=700&q=80',
        highlights: ['Hotel Stay', 'Phi Phi Islands', 'Night Market', 'Spa'],
    },
    {
        id: 5,
        name: 'Europe Grand Tour',
        country: 'Multi-Country',
        price: '₹2,49,999',
        duration: '15 Days / 14 Nights',
        rating: 4.9,
        reviews: 380,
        tag: 'Signature',
        img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=700&q=80',
        highlights: ['5 Countries', 'Rail Pass', 'Guided Tours', 'Premium Hotels'],
    },
    {
        id: 6,
        name: 'Maldives Overwater',
        country: 'Maldives',
        price: '₹1,89,999',
        duration: '6 Days / 5 Nights',
        rating: 5.0,
        reviews: 284,
        tag: 'Ultra Luxury',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80',
        highlights: ['Water Bungalow', 'Snorkeling', 'Spa', 'Sunset Cruise'],
    },
];

const cars = [
    {
        id: 1,
        name: 'Mercedes-Benz E-Class',
        type: 'Luxury Sedan',
        price: '₹4,999/day',
        capacity: '4 Persons',
        features: ['AC', 'GPS', 'WiFi', 'Chauffeur'],
        img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
        tag: 'Luxury',
    },
    {
        id: 2,
        name: 'Toyota Fortuner',
        type: 'SUV / Family',
        price: '₹3,499/day',
        capacity: '7 Persons',
        features: ['AC', 'GPS', 'Spacious', 'Roof Rack'],
        img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
        tag: 'Family',
    },
    {
        id: 3,
        name: 'Hyundai Creta',
        type: 'Self Drive',
        price: '₹1,799/day',
        capacity: '5 Persons',
        features: ['AC', 'Fuel Efficient', 'Easy Drive', 'Music'],
        img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
        tag: 'Self Drive',
    },
    {
        id: 4,
        name: 'Airport Shuttle',
        type: 'Transfer Service',
        price: '₹999/trip',
        capacity: '8 Persons',
        features: ['Punctual', 'AC', 'Meet & Greet', 'Fixed Price'],
        img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80',
        tag: 'Transfer',
    },
];

const properties = [
    {
        id: 1,
        name: 'The Green Valley Resort',
        location: 'Coorg, India',
        type: 'Luxury Resort',
        price: '₹12,999/night',
        rating: 4.9,
        reviews: 328,
        amenities: [<Wifi size={14} />, <Coffee size={14} />, <Shield size={14} />, <Users size={14} />],
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80',
        tag: 'Top Rated',
    },
    {
        id: 2,
        name: 'Santorini Cliffside Villa',
        location: 'Oia, Greece',
        type: 'Holiday Villa',
        price: '₹28,999/night',
        rating: 5.0,
        reviews: 142,
        amenities: [<Wifi size={14} />, <Zap size={14} />, <Coffee size={14} />, <Users size={14} />],
        img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&q=80',
        tag: 'Premium',
    },
    {
        id: 3,
        name: 'Palm Villas Bali',
        location: 'Seminyak, Bali',
        type: 'Private Villa',
        price: '₹8,999/night',
        rating: 4.8,
        reviews: 416,
        amenities: [<Wifi size={14} />, <Coffee size={14} />, <Users size={14} />, <Zap size={14} />],
        img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=700&q=80',
        tag: 'Best Value',
    },
    {
        id: 4,
        name: 'Grand Hyatt Dubai',
        location: 'Dubai, UAE',
        type: '5-Star Hotel',
        price: '₹18,999/night',
        rating: 4.9,
        reviews: 892,
        amenities: [<Wifi size={14} />, <Coffee size={14} />, <Shield size={14} />, <Zap size={14} />],
        img: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=700&q=80',
        tag: '5-Star',
    },
];

const tagColors = {
    'Best Seller': '#2d6a35',
    'Premium': '#c9a84c',
    'Popular': '#3a8545',
    'Value Pick': '#5a7352',
    'Signature': '#6b4a36',
    'Ultra Luxury': '#a07550',
    'Luxury': '#c9a84c',
    'Family': '#3a8545',
    'Self Drive': '#2d6a35',
    'Transfer': '#5a7352',
    'Top Rated': '#2d6a35',
    'Best Value': '#3a8545',
    '5-Star': '#c9a84c',
};



export default function Services() {
    const [activeTab, setActiveTab] = useState('tourism');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add('aos-animate');
            }),
            { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        );
        document.querySelectorAll('.aos, .aos-left, .aos-right, .aos-scale')
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [activeTab]);

    return (
        <div className="services-page">
            {/* Hero */}
            <section className="page-hero services-hero">
                <div className="page-hero-overlay" />
                <div className="container page-hero-content">
                    <div className="breadcrumb">
                        <NavLink to="/">Home</NavLink>
                        <span>›</span>
                        <span>Services</span>
                    </div>
                    <div className="section-badge light">What We Offer</div>
                    <h1>Our Premium Services</h1>
                    <p>
                        International tourism, luxury car rentals, and premium property bookings —
                        all in one place, all crafted to perfection.
                    </p>
                </div>
            </section>

            {/* ===== TABS ===== */}
            <section className="tabs-section">
                <div className="container">
                    <div className="tabs-wrap">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab-btn ${activeTab === tab.id ? 'tab-active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TOURISM ===== */}
            {activeTab === 'tourism' && (
                <section className="section content-section" key="tourism">
                    <div className="container">
                        <div className="section-header aos">
                            <div className="section-badge">Travel Packages</div>
                            <h2 className="heading-lg">International Tourism Packages</h2>
                            <div className="section-divider" />
                            <p>
                                Curated holiday experiences across the world's most stunning destinations.
                                Every detail handled — you just pack and go.
                            </p>
                        </div>
                        <div className="packages-grid">
                            {packages.map((pkg, i) => (
                                <div key={pkg.id} className={`pkg-card aos aos-scale aos-delay-${(i % 3) + 1}`}>
                                    <div className="pkg-img-wrap">
                                        <img src={pkg.img} alt={pkg.name} className="pkg-img" loading="lazy" />
                                        <div className="pkg-overlay" />
                                        <div
                                            className="pkg-tag"
                                            style={{ background: tagColors[pkg.tag] || '#2d6a35' }}
                                        >
                                            {pkg.tag}
                                        </div>
                                        <div className="pkg-rating">
                                            <Star size={12} fill="#c9a84c" color="#c9a84c" />
                                            <span>{pkg.rating}</span>
                                            <span style={{ opacity: 0.65 }}>({pkg.reviews})</span>
                                        </div>
                                    </div>
                                    <div className="pkg-body">
                                        <div className="pkg-meta-top">
                                            <div className="pkg-location">
                                                <MapPin size={13} />
                                                <span>{pkg.country}</span>
                                            </div>
                                            <div className="pkg-duration">
                                                <Clock size={13} />
                                                <span>{pkg.duration}</span>
                                            </div>
                                        </div>
                                        <h3 className="pkg-name">{pkg.name}</h3>
                                        <div className="pkg-highlights">
                                            {pkg.highlights.map((h) => (
                                                <span key={h} className="pkg-highlight-tag">{h}</span>
                                            ))}
                                        </div>
                                        <div className="pkg-footer">
                                            <div>
                                                <div className="pkg-from">Starting from</div>
                                                <div className="pkg-price">{pkg.price}</div>
                                            </div>
                                            <NavLink to="/contact" className="btn-primary pkg-book-btn">
                                                <span>Book Now</span>
                                                <ArrowRight size={14} />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ===== CARS ===== */}
            {activeTab === 'cars' && (
                <section className="section content-section" key="cars">
                    <div className="container">
                        <div className="section-header aos">
                            <div className="section-badge">Fleet</div>
                            <h2 className="heading-lg">Premium Car Rentals</h2>
                            <div className="section-divider" />
                            <p>
                                Airport pickups, luxury chauffeur rides, family SUVs, and self-drive options.
                                Every car serviced to the highest standard.
                            </p>
                        </div>
                        <div className="cars-grid">
                            {cars.map((car, i) => (
                                <div key={car.id} className={`car-card aos aos-scale aos-delay-${(i % 2) + 1}`}>
                                    <div className="car-img-wrap">
                                        <img src={car.img} alt={car.name} className="car-img" loading="lazy" />
                                        <div
                                            className="car-tag"
                                            style={{ background: tagColors[car.tag] || '#2d6a35' }}
                                        >
                                            {car.tag}
                                        </div>
                                    </div>
                                    <div className="car-body">
                                        <div className="car-type">{car.type}</div>
                                        <h3 className="car-name">{car.name}</h3>
                                        <div className="car-features">
                                            {car.features.map((f) => (
                                                <span key={f} className="car-feature">{f}</span>
                                            ))}
                                        </div>
                                        <div className="car-footer">
                                            <div className="car-capacity">
                                                <Users size={15} />
                                                <span>{car.capacity}</span>
                                            </div>
                                            <div className="car-price-wrap">
                                                <div className="car-price">{car.price}</div>
                                                <NavLink to="/contact" className="btn-primary car-book-btn">
                                                    Book <ArrowRight size={13} />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ===== PROPERTY ===== */}
            {activeTab === 'property' && (
                <section className="section content-section" key="property">
                    <div className="container">
                        <div className="section-header aos">
                            <div className="section-badge">Accommodations</div>
                            <h2 className="heading-lg">Property Booking</h2>
                            <div className="section-divider" />
                            <p>
                                Curated stays from boutique resorts and luxury villas to 5-star hotels
                                and private vacation homes worldwide.
                            </p>
                        </div>
                        <div className="property-grid">
                            {properties.map((prop, i) => (
                                <div key={prop.id} className={`property-card aos aos-scale aos-delay-${(i % 2) + 1}`}>
                                    <div className="property-img-wrap">
                                        <img src={prop.img} alt={prop.name} className="property-img" loading="lazy" />
                                        <div className="property-overlay" />
                                        <div
                                            className="property-tag"
                                            style={{ background: tagColors[prop.tag] || '#2d6a35' }}
                                        >
                                            {prop.tag}
                                        </div>
                                        <div className="property-rating">
                                            <Star size={12} fill="#c9a84c" color="#c9a84c" />
                                            <span>{prop.rating}</span>
                                            <span style={{ opacity: 0.65 }}>({prop.reviews} reviews)</span>
                                        </div>
                                    </div>
                                    <div className="property-body">
                                        <div className="property-type">{prop.type}</div>
                                        <h3 className="property-name">{prop.name}</h3>
                                        <div className="property-location">
                                            <MapPin size={13} />
                                            <span>{prop.location}</span>
                                        </div>
                                        <div className="property-amenities">
                                            {prop.amenities.map((a, ai) => (
                                                <span key={ai} className="property-amenity">{a}</span>
                                            ))}
                                        </div>
                                        <div className="property-footer">
                                            <div>
                                                <div className="property-from">From</div>
                                                <div className="property-price">{prop.price}</div>
                                            </div>
                                            <NavLink to="/contact" className="btn-primary property-book-btn">
                                                <span>Reserve</span>
                                                <ArrowRight size={14} />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Bottom CTA */}
            <section className="services-bottom-cta section-sm">
                <div className="container">
                    <div className="svc-cta-inner aos">
                        <div>
                            <h3 className="heading-md" style={{ color: 'var(--white)' }}>
                                Need a Custom Package?
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '8px' }}>
                                Tell us your dream destination and budget — we'll craft the perfect plan.
                            </p>
                        </div>
                        <NavLink to="/contact" className="btn-gold">
                            <span>Get Custom Quote</span>
                            <ArrowRight size={18} />
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}
