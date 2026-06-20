import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
    MapPin, Phone, Mail, Clock, Send, CheckCircle,
    Instagram, Facebook, Twitter, ArrowRight
} from 'lucide-react';
import InfiniteMenu from '../components/InfiniteMenu';
import './Contact.css';

const contactInfo = [
    {
        icon: <MapPin size={22} strokeWidth={1.5} />,
        title: 'Our Office',
        lines: ['123 Travel Lane, Connaught Place', 'New Delhi, Delhi 110001, India'],
    },
    {
        icon: <Phone size={22} strokeWidth={1.5} />,
        title: 'Call Us',
        lines: ['+91 72043 70369', '+91 11 2345 6789'],
        href: 'tel:+917204370369',
    },
    {
        icon: <Mail size={22} strokeWidth={1.5} />,
        title: 'Email Us',
        lines: ['hello@roamingdirection.com', 'bookings@roamingdirection.com'],
        href: 'mailto:hello@roamingdirection.com',
    },
    {
        icon: <Clock size={22} strokeWidth={1.5} />,
        title: 'Office Hours',
        lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: 10:00 AM – 4:00 PM'],
    },
];

const travelInterests = [
    'International Tourism',
    'Car Rental',
    'Property Booking',
    'Custom Package',
    'Visa Assistance',
    'Group Travel',
];

const travelImages = [
    { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', title: 'Maldives', description: 'Beaches' },
    { image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', title: 'Swiss Alps', description: 'Mountains' },
    { image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', title: 'Amalfi Coast', description: 'Resorts' },
    { image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80', title: 'Paris', description: 'Cities' },
    { image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&q=80', title: 'Kyoto', description: 'Nature' },
    { image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&q=80', title: 'Sahara', description: 'Deserts' },
    { image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80', title: 'Taj Mahal', description: 'Heritage' },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80', title: 'Yosemite', description: 'Valleys' }
];

export default function Contact() {
    const heroRef = useRef(null);
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeroVisible(entry.isIntersecting);
            },
            { threshold: 0.05 }
        );
        if (heroRef.current) {
            observer.observe(heroRef.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add('aos-animate');
            }),
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        document.querySelectorAll('.aos, .aos-left, .aos-right, .aos-scale')
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate submission
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1800);
    };

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="page-hero contact-hero" ref={heroRef}>
                <div className="page-hero-overlay" />
                <div className="container page-hero-content">
                    <div className="section-badge light">Get In Touch</div>
                    <h1>Plan Your Next Adventure</h1>
                    <p>
                        Ready to explore the world? Get in touch and let our travel experts craft
                        the perfect journey for you.
                    </p>
                </div>
                {/* Small floating 3D travel gallery in the bottom right corner */}
                <div className="floating-gallery-wrap">
                    <InfiniteMenu items={travelImages} scale={0.95} isPlaying={isHeroVisible} />
                </div>
            </section>

            {/* ===== MAIN CONTACT SECTION ===== */}
            <section className="section contact-main">
                <div className="container">
                    <div className="contact-grid">

                        {/* LEFT — Info */}
                        <div className="contact-info-col aos-left aos">
                            <div className="section-badge">Reach Us</div>
                            <h2 className="heading-lg" style={{ color: 'var(--forest-800)', marginBottom: '12px' }}>
                                We'd Love to Hear From You
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.8' }}>
                                Whether you're planning a dream honeymoon, a family holiday, or a solo adventure —
                                we're here to make every detail perfect.
                            </p>

                            <div className="contact-cards">
                                {contactInfo.map((info, i) => (
                                    <div key={info.title} className={`contact-card aos aos-delay-${i + 1}`}>
                                        <div className="contact-card-icon">{info.icon}</div>
                                        <div>
                                            <div className="contact-card-title">{info.title}</div>
                                            {info.lines.map((line, li) => (
                                                info.href && li === 0 ? (
                                                    <a key={li} href={info.href} className="contact-card-line link">
                                                        {line}
                                                    </a>
                                                ) : (
                                                    <div key={li} className="contact-card-line">{line}</div>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social */}
                            <div className="contact-social-wrap">
                                <div className="contact-social-label">Follow Our Journey</div>
                                <div className="contact-socials">
                                    {[
                                        { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
                                        { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
                                        { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
                                    ].map((s) => (
                                        <a key={s.label} href={s.href} className="contact-social-btn" aria-label={s.label}>
                                            {s.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — Form */}
                        <div className="contact-form-col aos-right aos">
                            {submitted ? (
                                <div className="form-success">
                                    <div className="success-icon">
                                        <CheckCircle size={40} strokeWidth={1.5} />
                                    </div>
                                    <h3>Thank You, {form.name}!</h3>
                                    <p>
                                        Your enquiry has been received. Our travel expert will get back to
                                        you within 24 hours.
                                    </p>
                                    <button
                                        className="btn-primary"
                                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', interest: '', message: '' }); }}
                                    >
                                        <span>Send Another</span>
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                    <div className="form-header">
                                        <h3>Send Us a Message</h3>
                                        <p>Fill in the details and we'll get back to you soon.</p>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Rajesh Kumar"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="rajesh@example.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 72043 70369"
                                                value={form.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="interest">I'm Interested In</label>
                                            <select
                                                id="interest"
                                                name="interest"
                                                value={form.interest}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select a service...</option>
                                                {travelInterests.map((t) => (
                                                    <option key={t} value={t}>{t}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Your Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            placeholder="Tell us about your dream trip — destination, dates, group size, budget..."
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={`btn-primary form-submit-btn ${loading ? 'loading' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <div className="spinner" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send size={16} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MAP ===== */}
            <section className="map-section">
                <div className="map-container">
                    <iframe
                        title="Roaming Direction Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0953898025356!2d77.21540091508238!3d28.629505082417255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1621439567123!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

            {/* ===== ADVENTURE CTA ===== */}
            <section className="adventure-cta-section section">
                <div className="container">
                    <div className="adventure-cta-inner aos">
                        <div className="adv-cta-bg" />
                        <div className="adv-cta-content">
                            <div className="section-badge">Let's Go</div>
                            <h2 className="heading-lg">
                                Plan Your Next Adventure<br />with Roaming Direction
                            </h2>
                            <p>
                                Your next extraordinary journey is just one message away.
                                Let us turn your travel dreams into beautiful memories.
                            </p>
                            <div className="adv-cta-btns">
                                <NavLink to="/services" className="btn-gold">
                                    <span>Explore Packages</span>
                                    <ArrowRight size={18} />
                                </NavLink>
                                <a href="tel:+917204370369" className="btn-outline">
                                    <Phone size={16} />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
