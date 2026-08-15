import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GeorgiaDetail from './pages/GeorgiaDetail';
import KazakhstanFamilyDetail from './pages/KazakhstanFamilyDetail';
import KazakhstanGroupDetail from './pages/KazakhstanGroupDetail';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import destinationsData from './data/destinationsData';
import { carsBySlug } from './data/carsData';
import PropertyDetail from './pages/PropertyDetail';
import OldKentDetail from './pages/OldKentDetail';
import JungleParkDetail from './pages/JungleParkDetail';
import VehicleDetail from './pages/VehicleDetail';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

const seoConfig = {
  '/': {
    title: 'Roaming Directions | Premium International Tourism, Property Booking & Car Rentals',
    description: 'Roaming Directions is your trusted partner for premium international tourism, luxury property booking, and premium car rentals. Start your journey today.',
    keywords: 'travel agency, international tourism, luxury hotel booking, premium car rental, roaming directions, custom travel packages',
    canonical: 'https://www.roamingdirections.com/',
    ogImage: 'https://www.roamingdirections.com/images/roaminglogo_transparent.png',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.roamingdirections.com/#organization",
        "name": "Roaming Directions",
        "url": "https://www.roamingdirections.com/",
        "logo": "https://www.roamingdirections.com/images/roaminglogo_transparent.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7204370369",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        },
        "sameAs": [
          "https://www.instagram.com/roamingdirections",
          "https://www.facebook.com/roamingdirections",
          "https://twitter.com/roamingdirections"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.roamingdirections.com/#website",
        "name": "Roaming Directions",
        "url": "https://www.roamingdirections.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.roamingdirections.com/destinations?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.roamingdirections.com/#webpage",
        "url": "https://www.roamingdirections.com/",
        "name": "Roaming Directions | Premium International Tourism, Property Booking & Car Rentals",
        "isPartOf": { "@id": "https://www.roamingdirections.com/#website" }
      }
    ]
  },
  '/about': {
    title: 'About Us | Roaming Directions',
    description: "Discover Roaming Directions's story. Since 2010, we've been crafting extraordinary travel experiences and building a trusted global network of partnerships.",
    keywords: 'about roaming directions, travel experts, iata certified travel agency, travel planners',
    canonical: 'https://www.roamingdirections.com/about',
    ogImage: 'https://www.roamingdirections.com/images/roaminglogo_transparent.png',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.roamingdirections.com/about#webpage",
        "url": "https://www.roamingdirections.com/about",
        "name": "About Us | Roaming Directions",
        "isPartOf": { "@id": "https://www.roamingdirections.com/#website" },
        "breadcrumb": { "@id": "https://www.roamingdirections.com/about#breadcrumb" }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.roamingdirections.com/about#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.roamingdirections.com/about" }
        ]
      }
    ]
  },
  '/destinations': {
    title: 'Explore Extraordinary Destinations | Roaming Directions',
    description: 'Browse our handpicked international tourism packages, from the Caucasus peaks of Georgia to the pristine shores of the Maldives.',
    keywords: 'international tour packages, holiday packages, travel destinations, europe packages, asia packages',
    canonical: 'https://www.roamingdirections.com/destinations',
    ogImage: 'https://www.roamingdirections.com/images/roaminglogo_transparent.png',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.roamingdirections.com/destinations#webpage",
        "url": "https://www.roamingdirections.com/destinations",
        "name": "Explore Extraordinary Destinations | Roaming Directions",
        "isPartOf": { "@id": "https://www.roamingdirections.com/#website" },
        "breadcrumb": { "@id": "https://www.roamingdirections.com/destinations#breadcrumb" }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.roamingdirections.com/destinations#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
          { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.roamingdirections.com/destinations" }
        ]
      }
    ]
  },
  '/services': {
    title: 'Premium Travel Services | Roaming Directions',
    description: 'Explore our premium travel services: custom international tour packages, luxury property bookings, and premium car rentals designed for comfortable travel.',
    keywords: 'hotel booking, premium car rentals, visa assistance, travel services, airport taxi service',
    canonical: 'https://www.roamingdirections.com/services',
    ogImage: 'https://www.roamingdirections.com/images/roaminglogo_transparent.png',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.roamingdirections.com/services#webpage",
        "url": "https://www.roamingdirections.com/services",
        "name": "Premium Travel Services | Roaming Directions",
        "isPartOf": { "@id": "https://www.roamingdirections.com/#website" },
        "breadcrumb": { "@id": "https://www.roamingdirections.com/services#breadcrumb" }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.roamingdirections.com/services#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.roamingdirections.com/services" }
        ]
      }
    ]
  },
  '/contact': {
    title: 'Contact Us | Plan Your Trip | Roaming Directions',
    description: "Get in touch with Roaming Directions's travel experts. Plan your next international adventure, property booking, or car rental today.",
    keywords: 'contact travel agency, travel agent phone number, roaming directions contact, book a trip',
    canonical: 'https://www.roamingdirections.com/contact',
    ogImage: 'https://www.roamingdirections.com/images/roaminglogo_transparent.png',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.roamingdirections.com/contact#webpage",
        "url": "https://www.roamingdirections.com/contact",
        "name": "Contact Us | Roaming Directions",
        "isPartOf": { "@id": "https://www.roamingdirections.com/#website" },
        "breadcrumb": { "@id": "https://www.roamingdirections.com/contact#breadcrumb" }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.roamingdirections.com/contact#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
          { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.roamingdirections.com/contact" }
        ]
      }
    ]
  },
  '/international/georgia': {
    title: 'Enchanting Georgia Escape | Roaming Directions',
    description: 'Explore Georgia: the crossroads of Europe & Asia. Book custom wine tours, mountain hikes in Caucasus, and Old Tbilisi exploration packages.',
    keywords: 'georgia tour package, tbilisi travel, kakheti wine tour, gergeti trinity church package, georgia itinerary',
    canonical: 'https://www.roamingdirections.com/international/georgia',
    ogImage: 'https://www.roamingdirections.com/images/destinations/georgia.webp',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.roamingdirections.com/international/georgia#webpage",
        "url": "https://www.roamingdirections.com/international/georgia",
        "name": "Enchanting Georgia Escape | Roaming Directions",
        "isPartOf": { "@id": "https://www.roamingdirections.com/#website" },
        "breadcrumb": { "@id": "https://www.roamingdirections.com/international/georgia#breadcrumb" }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.roamingdirections.com/international/georgia#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.roamingdirections.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Georgia Tour Package", "item": "https://www.roamingdirections.com/international/georgia" }
        ]
      }
    ]
  },
  '/international/kazakhstan-family': {
    title: 'Kazakhstan Family Tour Packages | Roaming Directions',
    description: 'Enjoy a premium family vacation in Kazakhstan. Explore Almaty, Charyn Canyon, and Ascension Cathedral with custom family travel itineraries.',
    keywords: 'kazakhstan family package, almaty travel family, charyn canyon family tour, kazakhstan travel itinerary',
    canonical: 'https://www.roamingdirections.com/international/kazakhstan-family',
    ogImage: 'https://www.roamingdirections.com/images/destinations/kazakhstan.webp',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.roamingdirections.com/international/kazakhstan-family#webpage",
        "url": "https://www.roamingdirections.com/international/kazakhstan-family",
        "name": "Kazakhstan Family Tour Packages | Roaming Directions",
        "isPartOf": { "@id": "https://www.roamingdirections.com/#website" },
        "breadcrumb": { "@id": "https://www.roamingdirections.com/international/kazakhstan-family#breadcrumb" }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.roamingdirections.com/international/kazakhstan-family#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.roamingdirections.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Kazakhstan Family Tour", "item": "https://www.roamingdirections.com/international/kazakhstan-family" }
        ]
      }
    ]
  },
  '/international/kazakhstan-group': {
    title: 'Kazakhstan Group Adventure Tour Packages | Roaming Directions',
    description: 'Embark on a group adventure tour to Kazakhstan. Experience Almaty, Medeu, Shymbulak skiing, and epic mountain trekking packages.',
    keywords: 'kazakhstan group tour, almaty group package, shymbulak ski package, central asia adventure group',
    canonical: 'https://www.roamingdirections.com/international/kazakhstan-group',
    ogImage: 'https://www.roamingdirections.com/images/destinations/kazakhstan.webp',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.roamingdirections.com/international/kazakhstan-group#webpage",
        "url": "https://www.roamingdirections.com/international/kazakhstan-group",
        "name": "Kazakhstan Group Adventure Tour Packages | Roaming Directions",
        "isPartOf": { "@id": "https://www.roamingdirections.com/#website" },
        "breadcrumb": { "@id": "https://www.roamingdirections.com/international/kazakhstan-group#breadcrumb" }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.roamingdirections.com/international/kazakhstan-group#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.roamingdirections.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Kazakhstan Group Tour", "item": "https://www.roamingdirections.com/international/kazakhstan-group" }
        ]
      }
    ]
  },
  '/properties/elam-munnar': {
    title: 'Élam Munnar | Luxury Mountain Retreat Stay | Roaming Directions',
    description: 'Perched 1640m above sea level in Munnar, Élam is a luxury eco-conscious sanctuary with breathtaking Western Ghats views, nature trails, and private decks.',
    keywords: 'elam munnar, luxury stay munnar, glass cabin munnar, pyramid retreat munnar, boutique resort kerala',
    canonical: 'https://www.roamingdirections.com/properties/elam-munnar',
    ogImage: 'https://www.roamingdirections.com/images/elam/image24.jpg',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "@id": "https://www.roamingdirections.com/properties/elam-munnar#lodging",
        "name": "Élam Munnar",
        "description": "A luxury mountain retreat perched 1640 meters above sea level, surrounded by cardamom and coffee plantations with breathtaking Western Ghats views.",
        "image": "https://www.roamingdirections.com/images/elam/image24.jpg",
        "url": "https://www.roamingdirections.com/properties/elam-munnar",
        "telephone": "+91-7204370369",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Munnar",
          "addressRegion": "Kerala",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "10.0885",
          "longitude": "77.0594"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.roamingdirections.com/properties/elam-munnar#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.roamingdirections.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Élam Munnar", "item": "https://www.roamingdirections.com/properties/elam-munnar" }
        ]
      }
    ]
  },
  '/properties/old-kent-estates-coorg': {
    title: 'Old Kent Estates & Spa Coorg | Heritage Plantation Resort | Roaming Directions',
    description: 'Experience the colonial charm of Old Kent Estates & Spa in Coorg. A historic 200-acre coffee plantation retreat featuring luxury English cottages, vintage suites, and crop-to-cup spa experiences.',
    keywords: 'old kent estates coorg, heritage stay coorg, luxury coffee plantation resort, madikeri resorts, coorg estate stay',
    canonical: 'https://www.roamingdirections.com/properties/old-kent-estates-coorg',
    ogImage: 'https://www.roamingdirections.com/images/oldkent/oldkentestates.webp',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "@id": "https://www.roamingdirections.com/properties/old-kent-estates-coorg#lodging",
        "name": "Old Kent Estates & Spa Coorg",
        "description": "A luxury heritage coffee plantation retreat set within a historic 200-acre estate in Madikeri, Coorg, Karnataka.",
        "image": "https://www.roamingdirections.com/images/oldkent/oldkentestates.webp",
        "url": "https://www.roamingdirections.com/properties/old-kent-estates-coorg",
        "telephone": "+91-7204370369",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Madikeri, Coorg",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.roamingdirections.com/properties/old-kent-estates-coorg#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.roamingdirections.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Old Kent Estates Coorg", "item": "https://www.roamingdirections.com/properties/old-kent-estates-coorg" }
        ]
      }
    ]
  },
  '/properties/jungle-park-wayanad': {
    title: 'Jungle Park Resort Wayanad | Rainforest Luxury Retreat | Roaming Directions',
    description: 'Nestled 7 km deep inside the reserve forests of Wayanad, Jungle Park Resort offers a premium eco-conscious sanctuary with breathtaking valley views, private lake views, and duplex suites.',
    keywords: 'jungle park resort wayanad, luxury stay wayanad, reserve forest stay kerala, lake view duplex suite wayanad, eco resort wayanad',
    canonical: 'https://www.roamingdirections.com/properties/jungle-park-wayanad',
    ogImage: 'https://www.roamingdirections.com/images/junglepark/p20.webp',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "@id": "https://www.roamingdirections.com/properties/jungle-park-wayanad#lodging",
        "name": "Jungle Park Resort",
        "description": "Nestled 7 km deep inside the forests of Wayanad, Jungle Park Resort offers a rare luxury rainforest experience surrounded by 900 acres of pristine wilderness.",
        "image": "https://www.roamingdirections.com/images/junglepark/p20.webp",
        "url": "https://www.roamingdirections.com/properties/jungle-park-wayanad",
        "telephone": "+91-7204370369",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Wayanad",
          "addressRegion": "Kerala",
          "addressCountry": "IN"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.roamingdirections.com/properties/jungle-park-wayanad#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.roamingdirections.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Jungle Park Resort Wayanad", "item": "https://www.roamingdirections.com/properties/jungle-park-wayanad" }
        ]
      }
    ]
  }
};

const PageTitleHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let seo = seoConfig[path];

    if (path.startsWith('/destinations/')) {
        const destId = path.split('/').pop();
        const dest = destinationsData.find(d => d.id === destId);
        if (dest) {
            seo = {
                title: `${dest.name} Tour Packages | Roaming Directions`,
                description: `${dest.tagline} - Explore ${dest.name} with Roaming Directions. Custom tour packages, experiences, and activities.`,
                keywords: `${dest.name} travel, ${dest.name} tour, visit ${dest.name}, ${dest.name} packages`,
                canonical: `https://www.roamingdirections.com/destinations/${dest.id}`,
                ogImage: `https://www.roamingdirections.com${dest.titleImage}`,
                schema: [
                  {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": `https://www.roamingdirections.com/destinations/${dest.id}#webpage`,
                    "url": `https://www.roamingdirections.com/destinations/${dest.id}`,
                    "name": `${dest.name} Tour Packages | Roaming Directions`,
                    "isPartOf": { "@id": "https://www.roamingdirections.com/#website" },
                    "breadcrumb": { "@id": `https://www.roamingdirections.com/destinations/${dest.id}#breadcrumb` }
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "@id": `https://www.roamingdirections.com/destinations/${dest.id}#breadcrumb`,
                    "itemListElement": [
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
                      { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.roamingdirections.com/destinations" },
                      { "@type": "ListItem", "position": 3, "name": dest.name, "item": `https://www.roamingdirections.com/destinations/${dest.id}` }
                    ]
                  }
                ]
            };
        }
    } else if (path.startsWith('/services/car-rentals/')) {
        const slug = path.split('/').pop();
        const car = carsBySlug[slug];
        if (car) {
            seo = {
                title: `${car.name} Rental | Roaming Directions`,
                description: `Rent the ${car.year} ${car.name} starting at ₹${car.price8Plus.toLocaleString('en-IN')}/day. Premium ${car.category} rental by Roaming Directions.`,
                keywords: `${car.name} rental, rent ${car.name}, premium car rental, ${car.category} rental`,
                canonical: `https://www.roamingdirections.com/services/car-rentals/${slug}`,
                ogImage: car.images[0],
                schema: [
                  {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": `https://www.roamingdirections.com/services/car-rentals/${slug}#webpage`,
                    "url": `https://www.roamingdirections.com/services/car-rentals/${slug}`,
                    "name": `${car.name} Rental | Roaming Directions`,
                    "isPartOf": { "@id": "https://www.roamingdirections.com/#website" },
                    "breadcrumb": { "@id": `https://www.roamingdirections.com/services/car-rentals/${slug}#breadcrumb` }
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "@id": `https://www.roamingdirections.com/services/car-rentals/${slug}#breadcrumb`,
                    "itemListElement": [
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.roamingdirections.com/" },
                      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.roamingdirections.com/services" },
                      { "@type": "ListItem", "position": 3, "name": "Car Rentals", "item": "https://www.roamingdirections.com/services" },
                      { "@type": "ListItem", "position": 4, "name": car.name, "item": `https://www.roamingdirections.com/services/car-rentals/${slug}` }
                    ]
                  }
                ]
            };
        }
    }

    if (seo) {
        document.title = seo.title;
        
        const updateMeta = (name, content, attr = 'name') => {
            let el = document.querySelector(`meta[${attr}="${name}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };
        
        updateMeta('description', seo.description);
        updateMeta('keywords', seo.keywords);
        
        // Open Graph
        updateMeta('og:title', seo.title, 'property');
        updateMeta('og:description', seo.description, 'property');
        updateMeta('og:url', seo.canonical, 'property');
        updateMeta('og:image', seo.ogImage, 'property');
        
        // Twitter
        updateMeta('twitter:title', seo.title);
        updateMeta('twitter:description', seo.description);
        updateMeta('twitter:image', seo.ogImage);
        
        // Canonical
        const canonicalEl = document.getElementById('canonical-link');
        if (canonicalEl) {
            canonicalEl.setAttribute('href', seo.canonical);
        }
        
        // JSON-LD Injection
        let schemaEl = document.getElementById('json-ld-schema');
        if (!schemaEl) {
            schemaEl = document.createElement('script');
            schemaEl.type = 'application/ld+json';
            schemaEl.id = 'json-ld-schema';
            document.head.appendChild(schemaEl);
        }
        schemaEl.textContent = JSON.stringify(seo.schema);
    }

    // Dynamic preloading for above-the-fold Hero banner image on home page
    if (path === '/') {
        const isMobile = window.innerWidth <= 768;
        const heroImage = isMobile ? '/images/pnih1.webp' : '/images/pni1.webp';
        let link = document.querySelector('link[rel="preload"][as="image"]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.setAttribute('fetchpriority', 'high');
            document.head.appendChild(link);
        }
        link.href = heroImage;
    } else {
        const link = document.querySelector('link[rel="preload"][as="image"]');
        if (link && link.parentNode) {
            link.parentNode.removeChild(link);
        }
    }
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    // Animate on scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animateEls = document.querySelectorAll('.aos');
    animateEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Preloader />
      <PageTitleHandler />
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/car-rentals/:slug" element={<VehicleDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/international/georgia" element={<GeorgiaDetail />} />
            <Route path="/international/kazakhstan-family" element={<KazakhstanFamilyDetail />} />
            <Route path="/international/kazakhstan-group" element={<KazakhstanGroupDetail />} />
            <Route path="/properties/elam-munnar" element={<PropertyDetail />} />
            <Route path="/properties/old-kent-estates-coorg" element={<OldKentDetail />} />
            <Route path="/properties/jungle-park-wayanad" element={<JungleParkDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
