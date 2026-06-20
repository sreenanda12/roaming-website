import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Compass, Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
                <div className="navbar-inner container-lg">
                    {/* Logo */}
                    <NavLink to="/" className="navbar-logo">
                        <img src="/images/roaminglogo_transparent.png" alt="Roaming Direction Logo" className="navbar-logo-img" />
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                                }
                                end={link.path === '/'}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="navbar-cta">
                        <NavLink to="/contact" className="btn-primary nav-btn">
                            Book Now
                        </NavLink>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="nav-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </header>

            {/* Mobile overlay */}
            <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav">
                    <div className="mobile-logo">
                        <img src="/images/roaminglogo_transparent.png" alt="Roaming Direction Logo" className="mobile-logo-img" />
                    </div>
                    <ul className="mobile-links">
                        {navLinks.map((link, i) => (
                            <li key={link.path} style={{ animationDelay: `${i * 0.07}s` }}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `mobile-link ${isActive ? 'mobile-link-active' : ''}`
                                    }
                                    end={link.path === '/'}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-footer-info">
                        <NavLink to="/contact" className="btn-gold mobile-cta">
                            Book Now
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    );
}
