import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Clock, Calendar, Check, X, Phone, ArrowLeft, Hotel, Users } from 'lucide-react';
import './InternationalDetail.css';

export default function GeorgiaDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Enchanting Georgia Escape | Roaming Directions';
    }, []);

    const itinerary = [
        {
            day: 1,
            title: 'Arrival in Tbilisi & Evening City Tour',
            desc: 'Welcome to Georgia! Upon landing at Tbilisi International Airport, our driver will greet you and transfer you to Hotel 21 Tbilisi. In the evening, embark on a scenic walking tour of Old Tbilisi. Ride the cable car up to Narikala Fortress for a birds-eye view of the city, and stroll across the futuristic Bridge of Peace illuminated in glowing lights.'
        },
        {
            day: 2,
            title: 'Historic Tbilisi & Spiritual Mtskheta',
            desc: 'Explore the spiritual heart of Georgia. Visit Mtskheta, the ancient capital and a UNESCO World Heritage site. Explore the breathtaking Jvari Monastery perched on a hilltop overlooking the confluence of two rivers, and Svetitskhoveli Cathedral. Return to Tbilisi for an afternoon walking tour through the historic Sulphur Bath district and Shardeni Street.'
        },
        {
            day: 3,
            title: 'Ananuri Castle & Gergeti Trinity Church Kazbegi',
            desc: 'Drive along the legendary Georgian Military Highway. Stop at the picturesque Ananuri Castle complex overlooking the Zhinvali Reservoir. Pass through the mountain ski resort of Gudauri and stop at the Friendship Monument. Continue to Kazbegi, where a 4x4 vehicle will take you up to the iconic Gergeti Trinity Church, standing tall against the majestic Mount Kazbek.'
        },
        {
            day: 4,
            title: 'Wine Tasting Journey in Kakheti',
            desc: 'A premium tour of Kakheti, the cradle of wine. Stroll the narrow, winding streets of Signagi (the City of Love) surrounded by 18th-century defensive walls. Enjoy panoramic views of the Alazani Valley. Visit the sacred Bodbe Monastery of St. Nino, and head to a traditional family-run Georgian winery for an exclusive wine tasting session and masterclass in baking Georgian Shoti bread.'
        },
        {
            day: 5,
            title: 'Tbilisi to Kutaisi & Uplistsikhe Cave Town',
            desc: 'Check out from Tbilisi and journey west. Visit Uplistsikhe, an ancient rock-hewn town dating back to the Iron Age. Walk through carved stone chambers and tunnels. Continue to Kutaisi, the historic second capital. Check in to Kutaisi Inn and visit the majestic Bagrati Cathedral standing proudly on Ukimerioni Hill.'
        },
        {
            day: 6,
            title: 'Prometheus Cave & Departure',
            desc: 'Visit the stunning Prometheus Cave, one of Georgia’s natural wonders. Walk through stalactites, stalagmites, petrified waterfalls, and underground rivers lit by beautiful LED systems. In the afternoon, return back to Tbilisi International Airport for your departure flight, carrying home unforgettable memories of Georgia.'
        }
    ];

    const inclusions = [
        'Private transfers in a comfortable luxury vehicle',
        'Professional English-speaking local tour guide',
        '4 Nights accommodation at Hotel 21 Tbilisi',
        '1 Night accommodation at Kutaisi Inn',
        'Daily premium breakfasts at the hotels',
        'Excursion tickets to all sights listed in the itinerary',
        'Gergeti 4x4 mountain shuttle service in Kazbegi',
        'Traditional Kakhetian wine tasting and culinary masterclass',
        'Prometheus Cave entrance fees and guided tour'
    ];

    const exclusions = [
        'International flight tickets & travel insurance',
        'Lunch, dinner, and personal expenses',
        'Visas (if applicable, though free for many nationalities)',
        'Gratuities/tips for local guide and driver'
    ];

    return (
        <div className="int-detail-page">
            {/* Hero */}
            <section className="int-hero" style={{ backgroundImage: "url('/images/destinations/georgia.webp')" }}>
                <div className="int-hero-overlay" />
                <div className="container">
                    <div className="int-hero-content">
                        <NavLink to="/services" className="back-btn-link">
                            <ArrowLeft size={16} />
                            <span>Back to Services</span>
                        </NavLink>
                        <h1 className="aos">Enchanting Georgia Escape</h1>
                        <p className="aos aos-delay-1">
                            A classic premium journey through alpine highlands, ancient monasteries, and vibrant cultural routes.
                        </p>
                        <div className="int-hero-badges aos aos-delay-2">
                            <span className="int-hero-badge"><Calendar size={14} /> 6 Days / 5 Nights</span>
                            <span className="int-hero-badge"><MapPin size={14} /> Georgia 🇬🇪</span>
                            <span className="int-hero-badge">NEW</span>
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
                                        <h4>Duration</h4>
                                        <p>6 Days / 5 Nights</p>
                                    </div>
                                    <div className="int-spec-item">
                                        <h4>Traveler Info</h4>
                                        <p>6 Adults + 1 Child</p>
                                    </div>
                                    <div className="int-spec-item">
                                        <h4>Type</h4>
                                        <p>Premium Tour</p>
                                    </div>
                                </div>

                                <h3 className="heading-sm" style={{ marginBottom: '14px' }}>Accommodation Plan</h3>
                                <ul className="int-acc-list">
                                    <li className="int-acc-item">
                                        <Hotel size={18} />
                                        <span><strong>Tbilisi:</strong> Hotel 21 Tbilisi (4 Nights)</span>
                                    </li>
                                    <li className="int-acc-item">
                                        <Hotel size={18} />
                                        <span><strong>Kutaisi:</strong> Kutaisi Inn (1 Night)</span>
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
                                    <div className="int-booking-from">Starting From</div>
                                    <div className="int-booking-price">Contact for Price</div>
                                </div>
                                <div className="int-booking-details">
                                    <div className="int-booking-detail-item">
                                        <Users size={16} />
                                        <span><strong>Group Size:</strong> 6 Adults + 1 Child</span>
                                    </div>
                                    <div className="int-booking-detail-item">
                                        <Hotel size={16} />
                                        <span><strong>Stay:</strong> 4★ Premium Accommodations</span>
                                    </div>
                                    <div className="int-booking-detail-item">
                                        <MapPin size={16} />
                                        <span><strong>Includes:</strong> Private vehicle and Guide</span>
                                    </div>
                                </div>
                                <div className="int-booking-btns">
                                    <NavLink to="/contact" className="btn-primary int-btn-book">
                                        Book Now
                                    </NavLink>
                                    <a 
                                        href="https://wa.me/917204370369?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20Georgia%20Escape%20package." 
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
                    <div className="int-booking-from" style={{ marginBottom: 0 }}>Starting From</div>
                    <div className="int-mobile-price">Contact for Price</div>
                </div>
                <NavLink to="/contact" className="btn-primary int-mobile-btn-book">
                    Book Now
                </NavLink>
            </div>
        </div>
    );
}
