import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import CTA from './components/CTA';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-white selection:text-black">
      <ScrollToTop />
      
      {/* Sleek Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="z-50 shrink-0">
            <img 
              src="https://i.imgur.com/WteqLLo.png" 
              alt="OutaTime Detailing Logo" 
              className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-16 sm:h-20' : 'h-24 sm:h-[120px]'}`} 
            />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-base font-semibold text-white/80">
            <Link to="/services" className="hover:text-white transition-colors duration-300 drop-shadow">Services</Link>
            <Link to="/gallery" className="hover:text-white transition-colors duration-300 drop-shadow">Gallery</Link>
            <Link to="/about" className="hover:text-white transition-colors duration-300 drop-shadow">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors duration-300 drop-shadow">Contact</Link>
            <div className="w-px h-5 bg-white/20 mx-2" />
            <Link to="/contact" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-white p-2 z-50">
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8 drop-shadow" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-center items-center ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col space-y-8 text-2xl font-black text-center text-white/80">
            <Link to="/services" className="hover:text-white transition-colors hover:scale-110 duration-300">Services</Link>
            <Link to="/gallery" className="hover:text-white transition-colors hover:scale-110 duration-300">Gallery</Link>
            <Link to="/about" className="hover:text-white transition-colors hover:scale-110 duration-300">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors hover:scale-110 duration-300">Contact</Link>
            <Link to="/contact" className="bg-white text-black px-12 py-4 rounded-full transition-transform hover:scale-105 mt-4">
              Book Now
            </Link>
            <Link to="/admin" className="text-sm font-medium text-white/30 hover:text-white mt-12 transition-colors">Client Portal</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {/* Global CTA Section */}
      {location.pathname !== '/contact' && location.pathname !== '/admin' && <CTA />}

      {/* Premium Footer */}
      <footer className="bg-[#050505] border-t border-white/10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
          <div className="md:col-span-1">
            <img 
              src="https://i.imgur.com/WteqLLo.png" 
              alt="OutaTime Detailing Logo" 
              className="h-16 sm:h-24 w-auto object-contain mb-6" 
            />
            <p className="text-base text-white/60 mb-6 leading-relaxed">
              Elevating the standard of automotive detailing in Collin County.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-base text-white/80 flex flex-col font-medium">
              <Link to="/services" className="hover:text-white transition-colors w-fit">Services</Link>
              <Link to="/gallery" className="hover:text-white transition-colors w-fit">Gallery</Link>
              <Link to="/about" className="hover:text-white transition-colors w-fit">About</Link>
              <Link to="/contact" className="hover:text-white transition-colors w-fit">Contact</Link>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">Hours</h4>
            <ul className="space-y-4 text-base text-white/80">
              <li className="flex flex-col">
                <span className="text-white font-bold">Mon - Fri</span>
                <span className="text-white/60">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-bold">Weekends</span>
                <span className="text-white/60">9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-base text-white/80">
              <li className="flex flex-col">
                <span className="text-white font-bold mb-1">Service Area</span>
                <span className="text-white/60">Collin County, TX<br/>& Surrounding Areas</span>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-white font-bold mb-1">Get in Touch</span>
                <a href="tel:4698151949" className="text-white/60 hover:text-white transition-colors">469-815-1949</a>
                <a href="mailto:martin@outatimedetail.com" className="text-white/60 hover:text-white transition-colors">martin@outatimedetail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium tracking-wider uppercase text-white/40">
            &copy; {new Date().getFullYear()} OUTATIME DETAIL. ALL RIGHTS RESERVED.
          </p>
          <Link to="/admin" className="text-xs font-medium tracking-wider uppercase text-white/20 hover:text-white/60 transition-colors">
            Admin Access
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
