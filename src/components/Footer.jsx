import { NavLink } from 'react-router-dom';
import {
    Compass, MapPin, Phone, Mail, Instagram, Facebook,
    Twitter, Youtube, ArrowRight, Globe, Car, Home as HomeIcon
} from 'lucide-react';
import './Footer.css';

const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
];

const services = [
    { icon: <Globe size={14} />, label: 'International Tourism' },
    { icon: <Car size={14} />, label: 'Car Rentals' },
    { icon: <HomeIcon size={14} />, label: 'Property Booking' },
];

const socials = [
    { icon: <Instagram size={18} />, href: 'https://instagram.com/roamingdirection', label: 'Instagram' },
    { icon: <Facebook size={18} />, href: 'https://facebook.com/roamingdirection', label: 'Facebook' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com/roamingdir', label: 'Twitter' },
    { icon: <Youtube size={18} />, href: 'https://youtube.com/@roamingdirection', label: 'Youtube' },
];

export default function Footer() {
    return (
        <footer className="footer">
            {/* CTA Banner */}
            <div className="footer-cta-banner">
                <div className="container">
                    <div className="footer-cta-inner">
                        <div className="footer-cta-text">
                            <h3>Ready to Explore the World?</h3>
                            <p>Let Roaming Direction craft your perfect travel experience.</p>
                        </div>
                        <NavLink to="/contact" className="btn-gold footer-cta-btn">
                            <span>Plan My Trip</span>
                            <ArrowRight size={18} />
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <div className="logo-icon">
                                    <Compass size={22} strokeWidth={1.5} />
                                </div>
                                <div className="logo-text">
                                    <span className="logo-main">Roaming</span>
                                    <span className="logo-sub">Direction</span>
                                </div>
                            </div>
                            <p className="footer-brand-desc">
                                Your trusted partner for international tourism, premium property booking, and luxury car rentals. We make every journey unforgettable.
                            </p>
                            <div className="footer-socials">
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <NavLink to={link.path} className="footer-link">
                                            <ArrowRight size={13} />
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4 className="footer-heading">Our Services</h4>
                            <ul className="footer-links">
                                {services.map((s) => (
                                    <li key={s.label}>
                                        <NavLink to="/services" className="footer-link">
                                            {s.icon}
                                            {s.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-col">
                            <h4 className="footer-heading">Contact Us</h4>
                            <div className="footer-contact-list">
                                <div className="footer-contact-item">
                                    <MapPin size={16} />
                                    <span>123 Travel Lane, New Delhi, India 110001</span>
                                </div>
                                <div className="footer-contact-item">
                                    <Phone size={16} />
                                    <a href="tel:+919876543210">+91 98765 43210</a>
                                </div>
                                <div className="footer-contact-item">
                                    <Mail size={16} />
                                    <a href="mailto:hello@roamingdirection.com">hello@roamingdirection.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-inner">
                        <p>© {new Date().getFullYear()} Roaming Direction. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
