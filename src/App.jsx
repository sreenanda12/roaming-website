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
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const PageTitleHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const titleMap = {
      '/': 'Roaming Direction | Explore the World',
      '/about': 'About Us | Roaming Direction',
      '/destinations': 'Destinations | Roaming Direction',
      '/services': 'Travel Services | Roaming Direction',
      '/contact': 'Contact Us | Roaming Direction'
    };

    const path = location.pathname;
    if (path.startsWith('/destinations/')) {
        document.title = 'Destination Details | Roaming Direction';
    } else {
        document.title = titleMap[path] || 'Roaming Direction';
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
