import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
    MapPin, Phone, Mail, Clock, Send, CheckCircle,
    Instagram, Facebook, Twitter, ArrowRight
} from 'lucide-react';
import InfiniteMenu from '../components/InfiniteMenu';
import './Contact.css';

const WhatsAppIcon = ({ size = 20, ...props }) => (
    <svg 
        viewBox="0 0 24 24" 
        width={size} 
        height={size} 
        fill="currentColor" 
        style={{ display: 'inline-block', verticalAlign: 'middle', ...props.style }}
        {...props}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const contactInfo = [
    {
        icon: <MapPin size={22} strokeWidth={1.5} />,
        title: 'Our Office',
        lines: [
            { text: 'Muse Hub Co-Working Space', href: null },
            { text: 'Marathahalli, Bangalore', href: null }
        ],
    },
    {
        icon: <WhatsAppIcon size={22} style={{ color: '#25D366' }} />,
        title: 'WhatsApp & Call',
        lines: [
            { 
                text: '+91 72043 70369', 
                href: 'https://wa.me/917204370369', 
                icon: <WhatsAppIcon size={14} style={{ color: '#25D366' }} />,
                target: '_blank', 
                rel: 'noopener noreferrer' 
            },
            { 
                text: '+91 72043 70369', 
                href: 'tel:+917204370369',
                icon: <Phone size={12} style={{ color: 'var(--forest-600)' }} />
            }
        ],
    },
    {
        icon: <Mail size={22} strokeWidth={1.5} />,
        title: 'Email Us',
        lines: [
            { text: 'hello@roamingdirection.com', href: 'mailto:hello@roamingdirection.com' },
            { text: 'bookings@roamingdirection.com', href: 'mailto:bookings@roamingdirection.com' }
        ],
    },
    {
        icon: <Clock size={22} strokeWidth={1.5} />,
        title: 'Office Hours',
        lines: [
            { text: 'Mon – Sat: 9:00 AM – 7:00 PM', href: null },
            { text: 'Sunday: 10:00 AM – 4:00 PM', href: null }
        ],
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
                                            {info.lines.map((line, li) => {
                                                const isObj = typeof line === 'object' && line !== null;
                                                const text = isObj ? line.text : line;
                                                const href = isObj ? line.href : null;
                                                const lineIcon = isObj ? line.icon : null;
                                                const target = isObj ? line.target : null;
                                                const rel = isObj ? line.rel : null;

                                                return href ? (
                                                    <a
                                                        key={li}
                                                        href={href}
                                                        className="contact-card-line link"
                                                        target={target}
                                                        rel={rel}
                                                        style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                                    >
                                                        {lineIcon}
                                                        <span>{text}</span>
                                                    </a>
                                                ) : (
                                                    <div
                                                        key={li}
                                                        className="contact-card-line"
                                                        style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                                    >
                                                        {lineIcon}
                                                        <span>{text}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social */}
                            <div className="contact-social-wrap">
                                <div className="contact-social-label">Follow Our Journey</div>
                                <div className="contact-socials">
                                    {[
                                        { icon: <Instagram size={20} />, href: 'https://www.instagram.com/roamingdirections?igsh=MWhkd294aHd4cGMweg==', label: 'Instagram' },
                                        { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
                                        { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
                                    ].map((s) => (
                                        <a 
                                            key={s.label} 
                                            href={s.href} 
                                            className="contact-social-btn" 
                                            aria-label={s.label}
                                            target={s.href !== '#' ? "_blank" : undefined}
                                            rel={s.href !== '#' ? "noopener noreferrer" : undefined}
                                        >
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
                        src="https://maps.google.com/maps?q=Muse%20Hub%20Co-Working%20Space%20Marathahalli%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
                                <a href="https://wa.me/917204370369" target="_blank" rel="noopener noreferrer" className="btn-outline whatsapp-btn">
                                    <WhatsAppIcon size={16} />
                                    <span>WhatsApp Us</span>
                                </a>
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
