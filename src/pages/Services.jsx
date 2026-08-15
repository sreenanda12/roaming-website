import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    Globe, Car, Home as HomeIcon, Star, MapPin, ArrowRight,
    Clock, Users, Wifi, Coffee, Zap, Shield
} from 'lucide-react';
import './Services.css';
import CarRentalSection from '../components/cars/CarRentalSection';

const tabs = [
    { id: 'tourism', label: 'International Tourism', icon: <Globe size={18} /> },
    { id: 'cars', label: 'Car Rentals', icon: <Car size={18} /> },
    { id: 'property', label: 'Property Booking', icon: <HomeIcon size={18} /> },
];

const packages = [
    // ── AFRICA ──────────────────────────────────────────────────────────
    {
        id: 1,
        name: 'Kenya Safari',
        country: 'Kenya 🇰🇪',
        price: '₹2,58,000',
        duration: '6 Nights / 7 Days',
        rating: 4.8,
        reviews: 142,
        tag: 'POPULAR',
        category: 'Africa',
        img: '/images/destinations/kenya.webp',
        highlights: ['Nairobi', 'Amboseli', 'Lake Nakuru', 'Maasai Mara'],
    },
    // ── CIS COUNTRIES ────────────────────────────────────────────────────
    {
        id: 2,
        name: 'Armenia Discovery',
        country: 'Armenia 🇦🇲',
        price: '₹46,000',
        duration: '5 Nights / 6 Days',
        rating: 4.7,
        reviews: 98,
        tag: 'NEW',
        category: 'CIS Countries',
        img: '/images/destinations/armenia.webp',
        highlights: ['Yerevan', 'Geghard Monastery', 'Lake Sevan', 'Khor Virap'],
    },
    {
        id: 3,
        name: 'Azerbaijan Escape',
        country: 'Azerbaijan 🇦🇿',
        price: '₹36,000',
        duration: '6 Nights / 7 Days',
        rating: 4.7,
        reviews: 113,
        tag: 'NEW',
        category: 'CIS Countries',
        img: '/images/destinations/azerbaijan.webp',
        highlights: ['Baku Old City', 'Flame Towers', 'Gobustan', 'Mud Volcanoes'],
    },
    {
        id: 7,
        name: 'Enchanting Georgia Escape',
        country: 'Georgia 🇬🇪',
        price: 'Contact for Price',
        duration: '6 Days / 5 Nights',
        rating: 4.9,
        reviews: 184,
        tag: 'NEW',
        category: 'CIS Countries',
        img: '/images/destinations/georgia.webp',
        highlights: ['Tbilisi Tour', 'Mtskheta', 'Kazbegi', 'Wine Tasting', 'Kutaisi', 'Prometheus Cave'],
        isGeorgia: true,
    },
    {
        id: 8,
        name: 'Majestic Kazakhstan Adventure',
        country: 'Kazakhstan 🇰🇿',
        price: 'Choose Package',
        duration: '5 Days / 4 Nights',
        rating: 4.8,
        reviews: 216,
        tag: 'POPULAR',
        category: 'CIS Countries',
        img: '/images/destinations/kazakhstan.webp',
        highlights: ['Charyn Canyon', 'Kolsai Lake', 'Kaindy Lake', 'Shymbulak', 'Koktobe', 'Almarasan Gorge'],
        isKazakhstan: true,
    },
    {
        id: 6,
        name: 'Uzbekistan Heritage Tour',
        country: 'Uzbekistan 🇺🇿',
        price: '₹53,000',
        duration: '5 Nights / 6 Days',
        rating: 4.7,
        reviews: 87,
        tag: 'NEW',
        category: 'CIS Countries',
        img: '/images/destinations/uzbekistan.webp',
        highlights: ['Samarkand', 'Registan Square', 'Bukhara', 'Khiva'],
    },
    // ── EUROPE ───────────────────────────────────────────────────────────
    {
        id: 10,
        name: 'Austria Alpine Escape',
        country: 'Austria 🇦🇹',
        price: '₹98,000',
        duration: '7 Nights / 8 Days',
        rating: 4.8,
        reviews: 104,
        tag: 'POPULAR',
        category: 'Europe',
        img: '/images/destinations/austria.webp',
        highlights: ['Vienna', 'Salzburg', 'Hallstatt', 'Innsbruck'],
    },
    {
        id: 11,
        name: 'Belgium Highlights',
        country: 'Belgium 🇧🇪',
        price: '₹67,000',
        duration: '5 Nights / 6 Days',
        rating: 4.6,
        reviews: 76,
        tag: 'NEW',
        category: 'Europe',
        img: '/images/destinations/belgium.webp',
        highlights: ['Brussels', 'Bruges', 'Ghent', 'Antwerp'],
    },
    {
        id: 12,
        name: 'Czech Republic Explorer',
        country: 'Czech Republic 🇨🇿',
        price: '₹57,000',
        duration: '5 Nights / 6 Days',
        rating: 4.7,
        reviews: 91,
        tag: 'POPULAR',
        category: 'Europe',
        img: '/images/destinations/czech_republic.webp',
        highlights: ['Prague', 'Charles Bridge', 'Prague Castle', 'Cesky Krumlov'],
    },
    {
        id: 13,
        name: 'Denmark City Break',
        country: 'Denmark 🇩🇰',
        price: '₹66,000',
        duration: '4 Nights / 5 Days',
        rating: 4.6,
        reviews: 68,
        tag: 'NEW',
        category: 'Europe',
        img: '/images/destinations/denmark.webp',
        highlights: ['Copenhagen', 'Nyhavn', 'Tivoli Gardens', 'The Little Mermaid'],
    },
    {
        id: 14,
        name: 'Finland Arctic Adventure',
        country: 'Finland 🇫🇮',
        price: '₹2,39,500',
        duration: '9 Nights / 10 Days',
        rating: 4.9,
        reviews: 153,
        tag: 'POPULAR',
        category: 'Europe',
        img: '/images/destinations/finland.webp',
        highlights: ['Helsinki', 'Ivalo (Igloo)', 'Rovaniemi', 'Northern Lights'],
    },
    {
        id: 15,
        name: 'France Grand Tour',
        country: 'France 🇫🇷',
        price: '₹1,92,000',
        duration: '11 Nights / 12 Days',
        rating: 4.9,
        reviews: 201,
        tag: 'POPULAR',
        category: 'Europe',
        img: '/images/paris_night_4k.webp',
        highlights: ['Paris', 'Lyon', 'Marseille', 'Nice', 'Eiffel Tower'],
    },
    {
        id: 16,
        name: 'Hungary City Experience',
        country: 'Hungary 🇭🇺',
        price: '₹57,700',
        duration: '4 Nights / 5 Days',
        rating: 4.6,
        reviews: 72,
        tag: 'NEW',
        category: 'Europe',
        img: '/images/destinations/hungary.webp',
        highlights: ['Budapest', 'Buda Castle', 'Chain Bridge', 'Thermal Baths'],
    },
    {
        id: 17,
        name: 'Greece Island Escape',
        country: 'Greece 🇬🇷',
        price: '₹1,57,335',
        duration: '7 Nights / 8 Days',
        rating: 4.9,
        reviews: 189,
        tag: 'POPULAR',
        category: 'Europe',
        img: '/images/destinations/greece.webp',
        highlights: ['Athens', 'Mykonos', 'Santorini', 'Acropolis'],
    },
    {
        id: 18,
        name: 'Italy Grand Journey',
        country: 'Italy 🇮🇹',
        price: '₹1,46,000',
        duration: '9 Nights / 10 Days',
        rating: 4.9,
        reviews: 224,
        tag: 'POPULAR',
        category: 'Europe',
        img: '/images/destinations/italy.webp',
        highlights: ['Milan', 'Venice', 'Florence', 'Rome', 'Colosseum'],
    },
    {
        id: 19,
        name: 'Netherlands Discovery',
        country: 'Netherlands 🇳🇱',
        price: '₹59,000',
        duration: '4 Nights / 5 Days',
        rating: 4.7,
        reviews: 83,
        tag: 'NEW',
        category: 'Europe',
        img: '/images/destinations/netherlands.webp',
        highlights: ['Amsterdam', 'Keukenhof', 'Windmills', 'Anne Frank House'],
    },
    {
        id: 20,
        name: 'Norway Fjords Tour',
        country: 'Norway 🇳🇴',
        price: '₹89,000',
        duration: '6 Nights / 7 Days',
        rating: 4.8,
        reviews: 117,
        tag: 'POPULAR',
        category: 'Europe',
        img: '/images/destinations/norway.webp',
        highlights: ['Oslo', 'Bergen', 'Geirangerfjord', 'Northern Lights'],
    },
    {
        id: 21,
        name: 'Germany Grand Circuit',
        country: 'Germany 🇩🇪',
        price: '₹3,40,000',
        duration: '22 Nights / 23 Days',
        rating: 4.8,
        reviews: 145,
        tag: 'POPULAR',
        category: 'Europe',
        img: '/images/destinations/germany.webp',
        highlights: ['Berlin', 'Hamburg', 'Cologne', 'Munich', 'Dresden', 'Nuremberg'],
    },
];



const properties = [
    {
        id: 5,
        name: 'Élam Munnar',
        location: 'Letchmi Estate, Munnar, Kerala',
        type: 'LUXURY MOUNTAIN RETREAT',
        price: 'Contact for Price',
        rating: '4.9+',
        amenities: [<Wifi size={14} />, <Coffee size={14} />, <Shield size={14} />, <Users size={14} />],
        img: '/images/elam/p1.jpeg',
        tag: 'FEATURED',
        link: '/properties/elam-munnar',
        exploreText: 'Explore Retreat',
        isElam: true,
    },
    {
        id: 6,
        name: 'Old Kent Estates & Spa Coorg',
        location: 'Madikeri, Coorg, Karnataka',
        type: 'HERITAGE PLANTATION RESORT',
        price: 'Contact for Price',
        rating: '4.9+',
        amenities: [<Wifi size={14} />, <Coffee size={14} />, <Shield size={14} />, <Users size={14} />],
        img: '/images/oldkent/oldkentestates.webp',
        tag: 'HERITAGE LUXURY',
        link: '/properties/old-kent-estates-coorg',
        exploreText: 'Explore Estate',
        isOldKent: true,
    },
    {
        id: 9,
        name: 'Jungle Park Resort',
        location: 'Wayanad, Kerala',
        type: 'LUXURY RAINFOREST EXPERIENCE',
        price: 'Contact for Price',
        rating: '4.9+',
        amenities: [<Wifi size={14} />, <Coffee size={14} />, <Shield size={14} />, <Users size={14} />],
        img: '/images/junglepark/p20.webp',
        tag: 'RAINFOREST LUXURY',
        link: '/properties/jungle-park-wayanad',
        exploreText: 'Explore Resort',
        isJunglePark: true,
    },
];

const tagColors = {
    'Best Seller': '#19351c',
    'Premium': '#c9a84c',
    'Popular': '#19351c',
    'Value Pick': '#19351c',
    'Signature': '#6b4a36',
    'Ultra Luxury': '#a07550',
    'Luxury': '#c9a84c',
    'Family': '#19351c',
    'Self Drive': '#19351c',
    'Transfer': '#19351c',
    'Top Rated': '#19351c',
    'Best Value': '#19351c',
    '5-Star': '#c9a84c',
    'NEW': '#19351c',
    'POPULAR': '#19351c',
    'FEATURED': '#c9a84c',
    'HERITAGE LUXURY': '#8f6835',
    'RAINFOREST LUXURY': '#2e5d32',
};



export default function Services() {
    const [activeTab, setActiveTab] = useState('tourism');
    const [activeCat, setActiveCat] = useState('All');
    const navigate = useNavigate();

    const handlePropertyClick = (e, prop) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        if (prop.link) {
            navigate(prop.link);
        } else if (prop.isElam) {
            navigate('/properties/elam-munnar');
        } else if (prop.isOldKent) {
            navigate('/properties/old-kent-estates-coorg');
        }
    };

    const handleCardClick = (e, pkg) => {
        // Prevent click if we clicked a link or button
        if (e.target.closest('a') || e.target.closest('button')) return;
        
        if (pkg.isGeorgia) {
            window.open('/international/georgia', '_blank');
        }
    };

    const handleTabClick = (id) => {
        setActiveTab(id);
        const el = document.getElementById(id);
        if (el) {
            const offset = window.innerWidth <= 768 ? 140 : 130;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const sections = ['tourism', 'cars', 'property'];
        const handleScroll = () => {
            // Force property active if near the bottom of the page
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
                setActiveTab('property');
                return;
            }
            const scrollPosition = window.scrollY + 180;
            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveTab(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // General AOS observer — runs once for static elements (headers, filter bar, etc.)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add('aos-animate');
            }),
            { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
        );
        document.querySelectorAll('.aos, .aos-left, .aos-right, .aos-scale')
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Re-observe pkg-cards after filter change so newly rendered cards
    // get aos-animate added (they start at opacity:0 from .aos-scale CSS).
    useEffect(() => {
        // Use rAF to wait for React to flush the DOM with new cards.
        const raf = requestAnimationFrame(() => {
            const cardObserver = new IntersectionObserver(
                (entries) => entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add('aos-animate');
                }),
                { threshold: 0, rootMargin: '0px 0px 0px 0px' }
            );
            document.querySelectorAll('.pkg-card')
                .forEach((el) => {
                    // If already animated, skip (keeps existing visible cards stable)
                    if (!el.classList.contains('aos-animate')) {
                        cardObserver.observe(el);
                    }
                });
            // Also immediately animate any card that is already in viewport
            document.querySelectorAll('.pkg-card').forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('aos-animate');
                }
            });
            return () => cardObserver.disconnect();
        });
        return () => cancelAnimationFrame(raf);
    }, [activeCat]);

    return (
        <div className="services-page">
            {/* Hero */}
            <section className="page-hero services-hero">
                <div className="page-hero-overlay" />
                <div className="container page-hero-content">
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
                                onClick={() => handleTabClick(tab.id)}
                            >
                                <span className="tab-icon">{tab.icon}</span>
                                <span className="tab-label">
                                    <span className="desktop-only">{tab.label}</span>
                                    <span className="mobile-only">
                                        {tab.id === 'tourism' ? 'Tourism' : tab.id === 'cars' ? 'Cars' : tab.id === 'property' ? 'Property' : tab.label}
                                    </span>
                                </span>
                            </button>
                        ))}
                        <div className={`tab-indicator indicator-${activeTab}`} />
                    </div>
                </div>
            </section>

             {/* ===== TOURISM ===== */}
            <section id="tourism" className="section content-section scroll-section">
                <div className="container">
                    <div className="section-header aos">
                        <div className="section-badge">🌍 Signature International Experiences</div>
                        <h2 className="heading-lg">International Tourism Packages</h2>
                        <div className="section-divider" />
                        <p className="pkg-subtitle-main">Explore the World &bull; Discover New Experiences &bull; Create Unforgettable Memories</p>
                        <p className="pkg-subtitle-sub">
                            Discover extraordinary journeys across breathtaking destinations with our handpicked international travel packages.
                        </p>
                    </div>

                    {/* ── Category Filter ── */}
                    <div className="pkg-filter-bar aos">
                        {['All', 'Africa', 'CIS Countries', 'Europe'].map((cat) => (
                            <button
                                key={cat}
                                className={`pkg-filter-btn${activeCat === cat ? ' pkg-filter-active' : ''}`}
                                onClick={() => setActiveCat(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="packages-grid">
                        {packages
                            .filter((pkg) => activeCat === 'All' || pkg.category === activeCat)
                            .map((pkg, i) => (
                            <div
                                key={pkg.id}
                                className={`pkg-card aos aos-scale aos-delay-${(i % 4) + 1}`}
                                onClick={(e) => handleCardClick(e, pkg)}
                                style={{ cursor: pkg.isGeorgia ? 'pointer' : 'default' }}
                            >
                                <div className="pkg-img-wrap">
                                    <img src={pkg.img} alt={pkg.name} className="pkg-img" loading="lazy" />
                                    <div className="pkg-overlay" />
                                    <div
                                        className="pkg-tag"
                                        style={{ background: tagColors[pkg.tag] || '#19351c' }}
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

                                    {/* Dynamic Footer / Buttons */}
                                    {pkg.isKazakhstan ? (
                                        <div className="pkg-footer" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div className="pkg-from" style={{ fontWeight: 600 }}>Choose Package</div>
                                            </div>
                                            <div className="pkg-kazakhstan-btns" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                                                <NavLink to="/international/kazakhstan-family" target="_blank" className="btn-primary" style={{ padding: '10px 14px', fontSize: '0.82rem', justifyContent: 'center', fontWeight: '700' }}>
                                                    Kazakhstan 2 Adult + 1 Kid
                                                </NavLink>
                                                <NavLink to="/international/kazakhstan-group" target="_blank" className="btn-outline-green" style={{ padding: '9px 14px', fontSize: '0.82rem', justifyContent: 'center', fontWeight: '700', borderColor: 'var(--forest-600)', color: 'var(--forest-600)', background: 'transparent' }}>
                                                    Kazakhstan 4 Adult + 3 Kids
                                                </NavLink>
                                                <a
                                                    href={`https://wa.me/917204370369?text=${encodeURIComponent('Hello, I am interested in the Majestic Kazakhstan Adventure international tourism package. Could you please share more details?')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="pkg-wa-standalone-btn"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                                    ENQUIRE ON WHATSAPP
                                                </a>
                                            </div>
                                        </div>
                                    ) : pkg.isGeorgia ? (
                                        <div className="pkg-footer" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <div className="pkg-from">Starting from</div>
                                                    <div className="pkg-price">{pkg.price}</div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                                                <NavLink to="/contact" className="btn-primary" style={{ flex: 1, padding: '10px', fontSize: '0.8rem', justifyContent: 'center', fontWeight: '700' }}>
                                                    Book Now
                                                </NavLink>
                                                <NavLink to="/international/georgia" target="_blank" className="btn-outline-green" style={{ flex: 1, padding: '9px', fontSize: '0.8rem', justifyContent: 'center', fontWeight: '700', borderColor: 'var(--forest-600)', color: 'var(--forest-600)', background: 'transparent' }}>
                                                    View Details
                                                </NavLink>
                                            </div>
                                            <a
                                                href={`https://wa.me/917204370369?text=${encodeURIComponent('Hello, I am interested in the Enchanting Georgia Escape international tourism package. Could you please share more details?')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="pkg-wa-standalone-btn"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                                ENQUIRE ON WHATSAPP
                                            </a>
                                        </div>
                                    ) : (
                                        <div className="pkg-footer pkg-footer-wa">
                                            <div>
                                                <div className="pkg-from">Starting from</div>
                                                <div className="pkg-price">{pkg.price}</div>
                                            </div>
                                            <a
                                                href={`https://wa.me/917204370369?text=${encodeURIComponent(`Hello, I am interested in the ${pkg.name} international tourism package. Could you please share more details?`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary pkg-book-btn pkg-wa-btn"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <span>ENQUIRE ON WHATSAPP</span>
                                                <ArrowRight size={14} />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CARS ===== */}
            <section id="cars" className="section content-section scroll-section">
                <div className="container">
                    <CarRentalSection />
                </div>
            </section>

            {/* ===== PROPERTY ===== */}
            <section id="property" className="section content-section scroll-section">
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
                            <div 
                                key={prop.id} 
                                className={`property-card aos aos-scale aos-delay-${(i % 2) + 1}`}
                                onClick={(e) => handlePropertyClick(e, prop)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="property-img-wrap">
                                    <img src={prop.img} alt={prop.name} className="property-img" loading="lazy" />
                                    <div className="property-overlay" />
                                    <div
                                        className="property-tag"
                                        style={{ background: tagColors[prop.tag] || '#19351c' }}
                                    >
                                        {prop.tag}
                                    </div>
                                    <div className="property-rating">
                                        <Star size={12} fill="#c9a84c" color="#c9a84c" />
                                        <span>{prop.rating}</span>
                                        <span style={{ opacity: 0.65 }}>
                                            {prop.reviews !== undefined ? ` (${prop.reviews} reviews)` : ''}
                                        </span>
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
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                                            <NavLink 
                                                to={prop.link || (prop.isElam ? "/properties/elam-munnar" : "/properties/old-kent-estates-coorg")} 
                                                className="btn-primary property-book-btn"
                                            >
                                                <span>{prop.exploreText || (prop.isElam ? "Explore Retreat" : "Explore Estate")}</span>
                                                <ArrowRight size={14} />
                                            </NavLink>
                                            <NavLink to={prop.link || (prop.isElam ? "/properties/elam-munnar" : "/properties/old-kent-estates-coorg")} style={{ fontSize: '0.78rem', color: 'var(--gold-400)', textDecoration: 'underline', marginTop: '2px', fontWeight: 600 }}>
                                                View Details
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="services-bottom-cta section-sm">
                <div className="container">
                    <div className="svc-cta-inner aos">
                        <div>
                            <h3 className="heading-md">
                                Need a Custom Package?
                            </h3>
                            <p>
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
