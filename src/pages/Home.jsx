import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    Globe, Car, Home as HomeIcon, ArrowRight, Star, MapPin,
    ChevronDown, Users, Award, Shield, Quote
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';
import CircularGallery from '../components/CircularGallery';
import HeroSlider from '../components/HeroSlider';
import destinationsData from '../data/destinationsData';

gsap.registerPlugin(ScrollTrigger);

const travelPhotos = [
    { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&q=80', aspect: 'portrait', destId: 'india', caption: 'Kerala Backwaters' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80', aspect: 'landscape', destId: 'maldives', caption: 'Maldives Paradise' },
    { url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&q=80', aspect: 'portrait', destId: 'georgia', caption: 'Georgia Old Tbilisi' },
    { url: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=500&q=80', aspect: 'landscape', destId: 'turkey', caption: 'Cappadocia, Turkey' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=80', aspect: 'square', destId: 'bali', caption: 'Ubud, Bali' },
    { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80', aspect: 'landscape', destId: 'dubai', caption: 'Dubai Deserts' },
    { url: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=500&q=80', aspect: 'portrait', destId: 'egypt', caption: 'Pyramids of Egypt' },
    { url: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500&q=80', aspect: 'square', destId: 'thailand', caption: 'Phi Phi, Thailand' },
    { url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&q=80', aspect: 'portrait', destId: 'kazakhstan', caption: 'Almaty, Kazakhstan' },
    { url: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&q=80', aspect: 'landscape', destId: 'malaysia', caption: 'Batu Caves, Malaysia' },
    { url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&q=80', aspect: 'square', destId: 'vietnam', caption: 'Ha Long Bay, Vietnam' },
    { url: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=500&q=80', aspect: 'portrait', destId: 'sri-lanka', caption: 'Ella, Sri Lanka' },
    { url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&q=80', aspect: 'landscape', destId: 'kenya', caption: 'Maasai Mara, Kenya' },
    { url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&q=80', aspect: 'square', destId: 'azerbaijan', caption: 'Baku, Azerbaijan' }
];

/* ---- Data ---- */

const services = [
    {
        icon: <Globe size={28} strokeWidth={1.5} />,
        title: 'International Tourism',
        desc: 'Curated tour packages across 50+ countries. Europe, Asia, Middle East and beyond — we plan every detail.',
        color: '#19351c',
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
        color: '#19351c',
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
const Home = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);

    const galleryItems = destinationsData.map(dest => ({
        image: dest.titleImage,
        text: dest.name
    }));

    const handleItemClick = (index) => {
        const dest = destinationsData[index];
        if (dest) {
            navigate(`/destinations/${dest.id}`);
        }
    };

    const ctaRef = useRef(null);
    const photosRef = useRef([]);
    const floatTweens = useRef([]);
    const targetsRef = useRef([]);

    const handleMouseEnter = (e, index) => {
        if (floatTweens.current[index]) {
            floatTweens.current[index].pause();
        }

        gsap.to(e.currentTarget, {
            rotation: 0,
            scale: 1.1,
            z: 50,
            boxShadow: "0 22px 45px rgba(0, 0, 0, 0.25), 0 5px 15px rgba(0, 0, 0, 0.12)",
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto"
        });
    };

    const handleMouseLeave = (e, index) => {
        const targetRot = targetsRef.current[index]?.rotation || 0;
        gsap.to(e.currentTarget, {
            rotation: targetRot,
            scale: 1,
            z: 0,
            boxShadow: "0 12px 35px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)",
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
                if (floatTweens.current[index]) {
                    floatTweens.current[index].resume();
                }
            }
        });
    };

    useEffect(() => {
        if (!ctaRef.current) return;

        // Clear and resize refs array
        photosRef.current = photosRef.current.slice(0, travelPhotos.length);
        floatTweens.current = [];

        // Precompute target locations relative to section center
        const targets = travelPhotos.map(() => {
            const angle = gsap.utils.random(-15, 15);
            const xOffset = gsap.utils.random(-38, 38);
            const yOffset = gsap.utils.random(-22, 22);
            return {
                x: `${xOffset}vw`,
                y: `${yOffset}vh`,
                rotation: angle,
                opacity: 1,
                scale: 1,
                zIndex: gsap.utils.random(1, 9),
            };
        });
        targetsRef.current = targets;

        const startFloat = (el, index) => {
            if (floatTweens.current[index]) {
                floatTweens.current[index].kill();
            }

            const randomY = gsap.utils.random(8, 15);
            const randomRot = gsap.utils.random(1.5, 3);
            const randomDur = gsap.utils.random(2.5, 4.5);

            floatTweens.current[index] = gsap.to(el, {
                y: `+=${randomY}`,
                rotation: `+=${randomRot}`,
                duration: randomDur,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                delay: gsap.utils.random(0, 1.5)
            });
        };

        const ctx = gsap.context(() => {
            const resetPhotos = () => {
                photosRef.current.forEach((photo, index) => {
                    if (!photo) return;
                    gsap.set(photo, {
                        x: targets[index].x,
                        y: '-100vh',
                        rotation: gsap.utils.random(-45, 45),
                        opacity: 0,
                        scale: 0.8,
                        z: 0,
                        boxShadow: "0 12px 35px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)"
                    });
                });
            };

            // Set initial state
            resetPhotos();

            // Landing animation timeline
            const tl = gsap.timeline({ paused: true });

            tl.to(photosRef.current, {
                x: (i) => targets[i].x,
                y: (i) => targets[i].y,
                rotation: (i) => targets[i].rotation,
                opacity: (i) => targets[i].opacity,
                scale: (i) => targets[i].scale,
                zIndex: (i) => targets[i].zIndex,
                duration: 1.8,
                ease: 'power3.out',
                stagger: {
                    amount: 0.9,
                    from: 'random',
                },
                onComplete: () => {
                    // Start floating movement after landing
                    photosRef.current.forEach((photo, idx) => {
                        if (photo) startFloat(photo, idx);
                    });
                }
            });

            const playCascade = () => {
                floatTweens.current.forEach(t => t && t.kill());
                floatTweens.current = [];
                resetPhotos();
                tl.play(0);
            };

            const resetCascade = () => {
                floatTweens.current.forEach(t => t && t.kill());
                floatTweens.current = [];
                tl.pause(0);
                photosRef.current.forEach((photo) => {
                    if (photo) {
                        gsap.set(photo, { clearProps: "all" });
                    }
                });
                resetPhotos();
            };

            // ScrollTrigger to animate and replay
            ScrollTrigger.create({
                trigger: ctaRef.current,
                start: 'top 85%',
                end: 'bottom 15%',
                onEnter: playCascade,
                onLeave: resetCascade,
                onEnterBack: playCascade,
                onLeaveBack: resetCascade,
            });

        }, ctaRef);

        return () => {
            ctx.revert();
            floatTweens.current.forEach(t => t && t.kill());
        };
    }, []);

    useEffect(() => {
        // Optimized parallax using requestAnimationFrame
        let ticking = false;
        const heroText = document.querySelector('.hero-text-content');

        const updateParallax = () => {
            const scrolled = window.scrollY;
            if (heroText && scrolled < window.innerHeight) {
                heroText.style.transform = `translate3d(0, ${scrolled * 0.35}px, 0)`;
                heroText.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        // Lazy load observer for sections
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, { threshold: 0.1 });

        const sections = document.querySelectorAll('.section, .aos, .aos-left, .aos-right');
        sections.forEach(section => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', onScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="home-page">
            {/* ===== HERO ===== */}
            <section className="hero-section" id="hero">
                <HeroSlider />
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
            <section className="section destinations-section" id="destinations">
                {/* Cinematic Background Glows */}
                <div className="luxury-glow-1"></div>
                <div className="luxury-glow-2"></div>

                {/* Subtle Floating Particles */}
                <div className="luxury-particles">
                    <span className="particle p-1"></span>
                    <span className="particle p-2"></span>
                    <span className="particle p-3"></span>
                    <span className="particle p-4"></span>
                    <span className="particle p-5"></span>
                    <span className="particle p-6"></span>
                </div>

                {/* Animated Floating Background Tags */}
                <div className="floating-tags-container">
                    <span className="floating-tag tag-1">Amalfi Coast</span>
                    <span className="floating-tag tag-2">Kyoto</span>
                    <span className="floating-tag tag-3">Swiss Alps</span>
                    <span className="floating-tag tag-4">Serengeti</span>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="section-header aos" style={{ marginBottom: '40px' }}>
                        <div className="section-badge light">FEATURED DESTINATIONS</div>
                        <h2 className="heading-lg" style={{ color: 'var(--white)' }}>Explore Extraordinary Destinations</h2>
                        <div className="section-divider" />
                        <p style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Handpicked travel packages designed for unforgettable experiences.</p>
                    </div>

                </div>

                {/* Circular Image Gallery */}
                <div style={{ height: '600px', position: 'relative', overflow: 'hidden', zIndex: 10 }}>
                    <CircularGallery
                        items={galleryItems}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.02}
                        fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
                        font="bold 24px Orbitron"
                        onItemClick={handleItemClick}
                        onActiveIndexChange={setActiveIndex}
                    />
                </div>

                {/* Active Destination View Button */}
                {activeIndex !== null && destinationsData[activeIndex] && (
                    <div className="active-destination-cta aos aos-scale" style={{ textAlign: 'center', marginTop: '-30px', position: 'relative', zIndex: 20 }}>
                        <NavLink to={`/destinations/${destinationsData[activeIndex].id}`} className="btn-gold" style={{ boxShadow: '0 8px 32px rgba(201, 168, 76, 0.4)' }}>
                            <span>View Destination</span>
                            <ArrowRight size={18} />
                        </NavLink>
                    </div>
                )}
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
            <section className="cta-section" ref={ctaRef}>
                {/* Photo Cascade Wrapper */}
                <div className="photo-cascade-wrap">
                    {travelPhotos.map((photo, i) => (
                        <NavLink 
                            key={i} 
                            to={`/destinations/${photo.destId}`}
                            ref={(el) => (photosRef.current[i] = el)} 
                            className={`polaroid-photo aspect-${photo.aspect}`}
                            onMouseEnter={(e) => handleMouseEnter(e, i)}
                            onMouseLeave={(e) => handleMouseLeave(e, i)}
                        >
                            <img src={photo.url} alt={photo.caption} loading="lazy" />
                            <div className="polaroid-caption">{photo.caption}</div>
                        </NavLink>
                    ))}
                </div>

                <div className="container" id="contact" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="cta-inner-centered">
                        <div className="section-badge">Get Started</div>
                        <h2 className="cta-centered-title">
                            Start Your Journey Today
                        </h2>
                        <p className="cta-centered-subtitle">
                            Ready to explore the world? Let our experts craft your perfect travel experience. No dream is too big.
                        </p>
                        <div className="cta-centered-actions">
                            <NavLink to="/services" className="btn-cinematic-primary">
                                <span>Explore Packages</span>
                                <ArrowRight size={18} />
                            </NavLink>
                            <NavLink to="/contact" className="btn-cinematic-secondary">
                                <span>Talk to Us</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
