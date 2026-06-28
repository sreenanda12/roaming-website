import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Clock, Calendar, Check, X, Phone, ArrowLeft, Hotel, Users, Car } from 'lucide-react';
import './InternationalDetail.css';

export default function KazakhstanGroupDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Majestic Kazakhstan Group Adventure | Roaming Directions';
    }, []);

    const itinerary = [
        {
            day: 1,
            title: 'Arrival in Almaty & Transfer to A-Frame Cabins',
            desc: 'Welcome to Kazakhstan! On arrival at Almaty International Airport, our driver will meet your group and transfer you in a comfortable 7-seater vehicle to your private premium A-Frame Cabins in the mountains. In the evening, ride the cable car up to Kok Tobe Hill to view the spectacular city lights, visit the miniature zoo, and enjoy group activities.'
        },
        {
            day: 2,
            title: 'Shymbulak Mountain Resort & Medeu Gorge',
            desc: 'Spend the day in Almaty’s stunning alpine heights. Visit Medeu Gorge, home to the world’s highest outdoor ice-skating rink. Board the panoramic gondola lift to Shymbulak Mountain Resort (3,200m altitude). Admire snow-capped peaks, enjoy coffee on a high mountain terrace, and take group photos at the peak.'
        },
        {
            day: 3,
            title: 'Charyn Canyon Exploration (Castle Valley)',
            desc: 'Embark on a private day trip to Charyn Canyon, often described as the Grand Canyon of Central Asia. Hike through the stunning Valley of Castles, surrounded by red sedimentary rock structures shaped by wind and time. Stroll down to the refreshing Charyn River bank for a relaxing group picnic before driving back.'
        },
        {
            day: 4,
            title: 'Kaindy Lake & Kolsai Lakes Day Tour',
            desc: 'Visit two of Kazakhstan’s natural gems. Explore Kolsai Lakes, set within majestic pine forests. Continue to Kaindy Lake, famous for its sunken forest of spruce trees rising from the crystal water. Stroll around the shoreline and enjoy a peaceful horseback ride through nature.'
        },
        {
            day: 5,
            title: 'Green Bazaar Shopping, Cultural Sights & Departure',
            desc: 'Check out from your cabins. Explore Almaty’s vibrant Green Bazaar to sample fresh fruits, local chocolates, and honey. Visit the Zenkov Cathedral, a beautiful wooden structure built entirely without nails. In the afternoon, transfer to Almaty International Airport for your return flight home.'
        }
    ];

    const inclusions = [
        'Private airport transfers and sightseeing in a 7-seater vehicle',
        'Daily breakfasts and professional local tour guide',
        '4 Nights accommodation in 2 private premium A-Frame Houses',
        'Kok Tobe cable car tickets and Shymbulak gondola ride passes',
        'Park entry tickets to Charyn Canyon and Kolsai/Kaindy Lakes',
        'Equipped picnic setup at Charyn Canyon',
        'Group horse-riding experience at Kolsai Lake'
    ];

    const exclusions = [
        'International flight tickets and tourist visas',
        'Lunch, dinner, and personal shopping expenses',
        'Gratuities/tips for local guide and driver'
    ];

    return (
        <div className="int-detail-page">
            {/* Hero */}
            <section className="int-hero" style={{ backgroundImage: "url('/images/destinations/kazakhstan.webp')" }}>
                <div className="int-hero-overlay" />
                <div className="container">
                    <div className="int-hero-content">
                        <NavLink to="/services" className="back-btn-link">
                            <ArrowLeft size={16} />
                            <span>Back to Services</span>
                        </NavLink>
                        <h1 className="aos">Majestic Kazakhstan Adventure (Group)</h1>
                        <p className="aos aos-delay-1">
                            An alpine retreat designed for groups, featuring canyon hikes, lake horse rides, and 2 private A-frame cabins.
                        </p>
                        <div className="int-hero-badges aos aos-delay-2">
                            <span className="int-hero-badge"><Calendar size={14} /> 5 Days / 4 Nights</span>
                            <span className="int-hero-badge"><MapPin size={14} /> Kazakhstan 🇰🇿</span>
                            <span className="int-hero-badge">POPULAR</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="int-main-content">
                <div className="container">
                    <div className="int-grid">
                        
                        {/* Left Column */}
                        <div className="int-left-col">
                            
                            {/* Specs Card */}
                            <div className="int-section-card">
                                <h2 className="int-section-title">Package Details</h2>
                                <div className="int-specs-grid">
                                    <div className="int-spec-item">
                                        <h4>Price</h4>
                                        <p>1,630 USD</p>
                                    </div>
                                    <div className="int-spec-item">
                                        <h4>Travelers</h4>
                                        <p>4 Adults + 3 Kids</p>
                                    </div>
                                    <div className="int-spec-item">
                                        <h4>Duration</h4>
                                        <p>5 Days / 4 Nights</p>
                                    </div>
                                </div>

                                <h3 className="heading-sm" style={{ marginBottom: '14px' }}>Transport & Stay</h3>
                                <ul className="int-acc-list">
                                    <li className="int-acc-item">
                                        <Car size={18} style={{ color: 'var(--gold-400)' }} />
                                        <span><strong>Vehicle:</strong> 7 Seater Private SUV / Van</span>
                                    </li>
                                    <li className="int-acc-item">
                                        <Hotel size={18} />
                                        <span><strong>Stay:</strong> 2 Private Mountain A-Frame Houses (4 Nights)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Itinerary */}
                            <div className="int-section-card">
                                <h2 className="int-section-title"><Clock size={22} /> Daily Itinerary</h2>
                                <div className="int-itinerary-timeline">
                                    {itinerary.map((day) => (
                                        <div key={day.day} className="int-itinerary-day">
                                            <div className="int-day-node" />
                                            <div className="int-day-header">
                                                <div className="int-day-title">
                                                    <span className="int-day-num">Day {day.day}:</span>
                                                    {day.title}
                                                </div>
                                            </div>
                                            <div className="int-day-content">
                                                {day.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Inclusions / Exclusions */}
                            <div className="int-section-card">
                                <div className="int-inc-exc-grid">
                                    <div className="int-inc-col">
                                        <h3><Check size={18} className="inc-icon" /> What is Included</h3>
                                        <ul className="int-list">
                                            {inclusions.map((item, idx) => (
                                                <li key={idx}>
                                                    <Check size={14} className="inc-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="int-exc-col">
                                        <h3><X size={18} className="exc-icon" /> What is Excluded</h3>
                                        <ul className="int-list">
                                            {exclusions.map((item, idx) => (
                                                <li key={idx}>
                                                    <X size={14} className="exc-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Column (Sticky Booking) */}
                        <div className="int-sticky-col">
                            <div className="int-booking-card">
                                <div className="int-booking-price-section">
                                    <div className="int-booking-from">Fixed Price</div>
                                    <div className="int-booking-price">1,630 USD</div>
                                </div>
                                <div className="int-booking-details">
                                    <div className="int-booking-detail-item">
                                        <Users size={16} />
                                        <span><strong>Group:</strong> 4 Adults + 3 Kids</span>
                                    </div>
                                    <div className="int-booking-detail-item">
                                        <Hotel size={16} />
                                        <span><strong>Stay:</strong> 2 Private A-Frame Houses</span>
                                    </div>
                                    <div className="int-booking-detail-item">
                                        <Car size={16} style={{ color: 'var(--gold-400)' }} />
                                        <span><strong>Transport:</strong> 7 Seater Private Vehicle</span>
                                    </div>
                                </div>
                                <div className="int-booking-btns">
                                    <NavLink to="/contact" className="btn-primary int-btn-book">
                                        Book Now
                                    </NavLink>
                                    <a 
                                        href="https://wa.me/917204370369?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20Kazakhstan%20Group%20Adventure%20(1630%20USD)." 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="int-btn-wa"
                                    >
                                        <Phone size={16} />
                                        <span>WhatsApp Inquiry</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mobile Sticky Footer */}
            <div className="int-mobile-footer">
                <div className="int-mobile-price-group">
                    <div className="int-booking-from" style={{ marginBottom: 0 }}>Group Package</div>
                    <div className="int-mobile-price">1,630 USD</div>
                </div>
                <NavLink to="/contact" className="btn-primary int-mobile-btn-book">
                    Book Now
                </NavLink>
            </div>
        </div>
    );
}
