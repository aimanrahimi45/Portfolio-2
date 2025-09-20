import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PillNav from './components/PillNav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';
import './styles/index.css';

function AppContent() {
  const location = useLocation();
  console.log('DEBUG: Current location pathname:', location.pathname);
  
  // Navigation items for PillNav component
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
    { label: 'Resume', href: '/resume' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PillNav
        logo="/vite.svg"
        logoAlt="Portfolio Logo"
        items={navItems}
        activeHref={location.pathname}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#ffffff"           // White text for good contrast
        pillColor="rgba(255, 255, 255, 0.1)"  // Very subtle white with transparency
        hoveredPillTextColor="#ffffff" // Keep white text on hover
        pillTextColor="#ffffff"       // White text in pills
      />

      <div style={{position: 'fixed', top: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '5px', zIndex: 9999, fontSize: '12px'}}>
        DEBUG: Current route: {location.pathname}
      </div>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;