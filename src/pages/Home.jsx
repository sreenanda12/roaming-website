import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Globe, Car, Home as HomeIcon, ArrowRight, Star, MapPin,
    ChevronDown, Users, Award, Shield, Quote
} from 'lucide-react';
import './Home.css';
import LevitatingCarousel from '../components/LevitatingCarousel';
import HeroSlider from '../components/HeroSlider';

/* ---- Data ---- */

const services = [
    {
        icon: <Globe size={28} strokeWidth={1.5} />,
        title: 'International Tourism',
        desc: 'Curated tour packages across 50+ countries. Europe, Asia, Middle East and beyond — we plan every detail.',
        color: '#2d6a35',
        link: '/services',
    },
    {
        icon: <HomeIcon size={28} strokeWidth={1.5} />,
        title: 'Property Booking',
        desc: 'Luxury resorts, boutique hotels, holiday villas and vacation homes — handpicked for comfort and value.',
        color: '#c9a84c',
        link: '/services',
    },
    {
        icon: <Car size={28} strokeWidth={1.5} />,
        title: 'Premium Car Rentals',
        desc: 'Airport pickups, luxury rides, family vehicles, and self-drive options — travel your way, always in style.',
        color: '#3a8545',
        link: '/services',
    },
];

/* Removed testimonials data per user request */



const reasons = [
    { icon: <Shield size={22} />, title: 'Trusted & Secure', desc: 'IATA-certified agency with secure bookings and full insurance coverage.' },
    { icon: <Award size={22} />, title: 'Award Winning', desc: 'Recognized as Best Travel Agency for 5 consecutive years.' },
    { icon: <Users size={22} />, title: 'Expert Team', desc: '50+ travel experts with deep local knowledge across all destinations.' },
    { icon: <Globe size={22} />, title: 'Global Network', desc: 'Partnerships with 1000+ hotels, airlines, and local operators worldwide.' },
];

/* ---- Component ---- */
export default function Home() {
    const heroRef = useRef(null);

    // Parallax on scroll
    useEffect(() => {
        const hero = heroRef.current;
        const handleScroll = () => {
            if (!hero) return;
            const scrollY = window.scrollY;
            const heroBg = hero.querySelector('.hero-bg');
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Removed Testimonial auto-cycle

    // Re-trigger AOS on mount
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('aos-animate');
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        document.querySelectorAll('.aos, .aos-left, .aos-right, .aos-scale')
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-page">
            {/* ===== HERO ===== */}
            <section className="hero-section" ref={heroRef} id="hero">
                <HeroSlider />

                {/* Floating clouds */}
                <div className="cloud cloud-1" aria-hidden="true" />
                <div className="cloud cloud-2" aria-hidden="true" />
                <div className="cloud cloud-3" aria-hidden="true" />


                <div className="container hero-content-wrap">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Discover Your Next Destination
                        </h1>
                        <p className="hero-subtitle">
                            Explore breathtaking places, luxury stays, and unforgettable journeys designed for curious travelers.
                        </p>
                        <div className="hero-actions">
                            <NavLink to="/destinations" className="btn-gold hero-btn-primary">
                                <span>Explore Destinations</span>
                                <ArrowRight size={18} />
                            </NavLink>
                            <NavLink to="/contact" className="btn-outline">
                                <span>Book Now</span>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <a href="#services" className="hero-scroll-indicator" aria-label="Scroll down">
                    <span>Discover More</span>
                    <div className="scroll-icon"><ChevronDown size={18} /></div>
                </a>
            </section>


            {/* ===== SERVICES OVERVIEW ===== */}
            <section className="section services-section" id="services">
                <div className="container">
                    <div className="section-header aos">
                        <div className="section-badge">What We Offer</div>
                        <h2 className="heading-lg">Our Premium Services</h2>
                        <div className="section-divider" />
                        <p>From dream destinations to luxury rides — we handle every aspect of your travel.</p>
                    </div>
                    <div className="grid-3">
                        {services.map((svc, i) => (
                            <div key={svc.title} className={`service-card aos aos-delay-${i + 1}`}>
                                <div className="service-icon-wrap" style={{ color: svc.color }}>
                                    {svc.icon}
                                    <div className="service-icon-ring" style={{ borderColor: svc.color + '33' }} />
                                </div>
                                <h3 className="heading-sm service-card-title">{svc.title}</h3>
                                <p className="service-card-desc">{svc.desc}</p>
                                <NavLink to={svc.link} className="service-card-link">
                                    Explore <ArrowRight size={14} />
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FEATURED DESTINATIONS ===== */}
            <section className="section destinations-section" id="destinations" style={{ padding: '0', background: 'transparent' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '100px' }}>
                    <div className="section-header aos">
                        <div className="section-badge">Featured Packages</div>
                        <h2 className="heading-lg">Popular Destinations</h2>
                        <div className="section-divider" />
                        <p>Handpicked travel packages designed for unforgettable experiences.</p>
                    </div>
                </div>

                {/* Levitating Glassmorphism Carousel */}
                <LevitatingCarousel />

                <div className="container">
                    <div className="text-center" style={{ marginTop: '0', paddingBottom: '100px' }}>
                        <NavLink to="/services" className="btn-outline-green aos">
                            View All Packages <ArrowRight size={16} />
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="section why-section">
                <div className="container">
                    <div className="why-inner">
                        <div className="why-left aos-left aos">
                            <div className="section-badge">Why Us</div>
                            <h2 className="heading-lg">Why Choose<br />Roaming Direction?</h2>
                            <div className="section-divider" style={{ margin: '20px 0' }} />
                            <p className="body-lg" style={{ color: 'var(--text-secondary)', maxWidth: '440px' }}>
                                We don't just plan trips — we engineer extraordinary experiences with meticulous care and passion for travel.
                            </p>
                            <div className="why-reasons">
                                {reasons.map((r, i) => (
                                    <div key={r.title} className={`reason-item aos aos-delay-${i + 1}`}>
                                        <div className="reason-icon">{r.icon}</div>
                                        <div>
                                            <h4>{r.title}</h4>
                                            <p>{r.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <NavLink to="/about" className="btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}>
                                <span>Learn More About Us</span>
                                <ArrowRight size={16} />
                            </NavLink>
                        </div>
                        <div className="why-right aos-right aos">
                            <div className="why-img-mosaic">
                                <img
                                    src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80"
                                    alt="Travel planning"
                                    className="mosaic-main"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80"
                                    alt="Paris"
                                    className="mosaic-secondary"
                                />
                                <div className="mosaic-badge">
                                    <Award size={20} />
                                    <span>Award Winning<br />Travel Agency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Removed Testimonials Section */}

            {/* ===== CTA SECTION ===== */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-inner aos">
                        <div className="cta-content">
                            <div className="section-badge">Get Started</div>
                            <h2 className="heading-lg" style={{ color: 'var(--white)' }}>
                                Start Your Journey Today
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '520px' }}>
                                Ready to explore the world? Let our experts craft your perfect travel experience. No dream is too big.
                            </p>
                        </div>
                        <div className="cta-actions">
                            <NavLink to="/services" className="btn-gold">
                                <span>Explore Packages</span>
                                <ArrowRight size={18} />
                            </NavLink>
                            <NavLink to="/contact" className="btn-outline">
                                <span>Talk to Us</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
