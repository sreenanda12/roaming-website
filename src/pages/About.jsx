import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Globe, Shield, Award, Users, Heart, Target, Eye, ArrowRight,
    CheckCircle, MapPin
} from 'lucide-react';
import './About.css';

const values = [
    { icon: <Shield size={20} />, title: 'Trust & Integrity', desc: 'Transparent pricing, honest advice, and reliable service every single time.' },
    { icon: <Heart size={20} />, title: 'Passion for Travel', desc: 'We are travelers ourselves. Every package is created with genuine love for exploration.' },
    { icon: <Award size={20} />, title: 'Excellence Always', desc: "Award-winning service standards that ensure you're never disappointed." },
    { icon: <Globe size={20} />, title: 'Global Reach', desc: 'Partnerships spanning 120+ destinations across 6 continents worldwide.' },
];

const team = [
    {
        name: 'Arjun Nair',
        role: 'Founder & CEO',
        img: 'https://i.pravatar.cc/300?img=68',
        exp: '18 yrs',
    },
    {
        name: 'Meera Patel',
        role: 'Head of Packages',
        img: 'https://i.pravatar.cc/300?img=47',
        exp: '12 yrs',
    },
    {
        name: 'Rahul Singh',
        role: 'Europe & Middle East',
        img: 'https://i.pravatar.cc/300?img=12',
        exp: '9 yrs',
    },
    {
        name: 'Priya Reddy',
        role: 'Southeast Asia Expert',
        img: 'https://i.pravatar.cc/300?img=32',
        exp: '11 yrs',
    },
];

const whyUs = [
    '50,000+ travelers served since 2010',
    'IATA certified travel agency',
    'Dedicated 24/7 customer support',
    'Affordable packages without compromising quality',
    'Curated local experiences in every destination',
    'Flexible cancellation and rescheduling policies',
    'Premium accommodation partners worldwide',
    'Visa assistance and travel insurance support',
];

export default function About() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add('aos-animate');
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        document.querySelectorAll('.aos, .aos-left, .aos-right, .aos-scale')
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page">
            {/* Page Hero */}
            <section className="page-hero about-hero">
                <div className="page-hero-overlay" />
                <div className="container page-hero-content">
                    <div className="breadcrumb">
                        <NavLink to="/">Home</NavLink>
                        <span>›</span>
                        <span>About Us</span>
                    </div>
                    <div className="section-badge light">Our Story</div>
                    <h1>About Roaming Direction</h1>
                    <p>
                        Born from a passion for exploration, Roaming Direction has been crafting
                        extraordinary travel experiences since 2010. We are not just a travel agency
                        — we are your journey architects.
                    </p>
                </div>
            </section>

            {/* ===== STORY ===== */}
            <section className="section about-story">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-images aos-left aos">
                            <div className="story-img-wrap">
                                <img
                                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80"
                                    alt="Travelers on adventure"
                                    className="story-img-main"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400&q=80"
                                    alt="World map planning"
                                    className="story-img-secondary"
                                />
                                <div className="story-exp-badge">
                                    <div className="exp-number">15+</div>
                                    <div className="exp-label">Years of Excellence</div>
                                </div>
                            </div>
                        </div>
                        <div className="story-text aos-right aos">
                            <div className="section-badge">Who We Are</div>
                            <h2 className="heading-lg" style={{ color: 'var(--forest-800)' }}>
                                Your Trusted Travel & Booking Partner
                            </h2>
                            <div className="section-divider" style={{ margin: '20px 0' }} />
                            <p className="body-lg" style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                Founded in 2010, Roaming Direction was built on a simple belief — that every
                                person deserves to experience the magic of the world without the stress of planning.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: '1.8' }}>
                                What started as a small team of passionate travelers has grown into one of
                                India's most trusted travel agencies, serving over 50,000 adventurers across
                                120+ destinations on every continent. From budget-friendly backpacking tours
                                to ultra-luxury private getaways, we craft experiences that resonate for a lifetime.
                            </p>
                            <NavLink to="/services" className="btn-primary" style={{ display: 'inline-flex' }}>
                                <span>Explore Our Services</span>
                                <ArrowRight size={16} />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MISSION & VISION ===== */}
            <section className="section mv-section">
                <div className="container">
                    <div className="mv-grid">
                        <div className="mv-card mission-card aos aos-delay-1">
                            <div className="mv-icon">
                                <Target size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="heading-md">Our Mission</h3>
                            <p>
                                To make international travel simple, accessible, and unforgettable for every
                                traveler — regardless of budget or experience level. We handle the complexities
                                so you can focus entirely on creating memories.
                            </p>
                        </div>
                        <div className="mv-card vision-card aos aos-delay-2">
                            <div className="mv-icon vision-icon">
                                <Eye size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="heading-md">Our Vision</h3>
                            <p>
                                To become the most trusted global travel and tourism partner — a name synonymous
                                with reliability, adventure, and extraordinary service across all corners of the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== VALUES ===== */}
            <section className="section values-section">
                <div className="container">
                    <div className="section-header aos">
                        <div className="section-badge">What Drives Us</div>
                        <h2 className="heading-lg" style={{ color: 'var(--white)' }}>Our Core Values</h2>
                        <div className="section-divider" />
                        <p style={{ color: 'var(--moss-400)' }}>
                            The principles that guide every journey we plan and every experience we create.
                        </p>
                    </div>
                    <div className="values-grid">
                        {values.map((v, i) => (
                            <div key={v.title} className={`value-card glass-card aos aos-scale aos-delay-${i + 1}`}>
                                <div className="value-icon">{v.icon}</div>
                                <h4>{v.title}</h4>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY US ===== */}
            <section className="section why-about-section">
                <div className="container">
                    <div className="why-about-grid">
                        <div className="aos-left aos">
                            <div className="section-badge">Why Choose Us</div>
                            <h2 className="heading-lg" style={{ color: 'var(--forest-800)', marginBottom: '8px' }}>
                                Everything You Need for the Perfect Journey
                            </h2>
                            <div className="section-divider" style={{ margin: '20px 0' }} />
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.05rem', lineHeight: '1.8' }}>
                                We go beyond booking — we become your travel partner, handling every detail
                                from planning to landing back home.
                            </p>
                            <ul className="why-list">
                                {whyUs.map((item, i) => (
                                    <li key={i} className={`why-list-item aos aos-delay-${(i % 4) + 1}`}>
                                        <CheckCircle size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="why-about-img-wrap aos-right aos">
                            <img
                                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=700&q=80"
                                alt="Travel experience"
                                className="why-about-img"
                            />
                            <div className="why-float-card">
                                <MapPin size={20} color="var(--gold-400)" />
                                <div>
                                    <div className="float-num">120+</div>
                                    <div className="float-lbl">Global Destinations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TEAM ===== */}
            <section className="section team-section">
                <div className="container">
                    <div className="section-header aos">
                        <div className="section-badge">The Experts</div>
                        <h2 className="heading-lg" style={{ color: 'var(--forest-800)' }}>Meet Our Team</h2>
                        <div className="section-divider" />
                        <p>Passionate travel experts dedicated to making your journey extraordinary.</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, i) => (
                            <div key={member.name} className={`team-card aos aos-scale aos-delay-${i + 1}`}>
                                <div className="team-img-wrap">
                                    <img src={member.img} alt={member.name} className="team-img" />
                                    <div className="team-exp-badge">{member.exp}</div>
                                </div>
                                <div className="team-info">
                                    <h4 className="team-name">{member.name}</h4>
                                    <p className="team-role">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="about-cta-section">
                <div className="container">
                    <div className="about-cta-inner aos">
                        <h2 className="heading-lg" style={{ color: 'var(--white)' }}>
                            Ready to Start Your Adventure?
                        </h2>
                        <p>Join 50,000+ travelers who trust Roaming Direction with their journeys.</p>
                        <div className="about-cta-btns">
                            <NavLink to="/services" className="btn-gold">
                                <span>View Packages</span>
                                <ArrowRight size={18} />
                            </NavLink>
                            <NavLink to="/contact" className="btn-outline">
                                <span>Contact Us</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
