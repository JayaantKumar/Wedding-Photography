import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';

// Global Components
import ScrollToTop from './components/ScrollToTop'; // <-- Added here
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import DestinationsPage from './pages/DestinationsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  useLenis();

  return (
    <Router>
      <div className="relative w-full min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans antialiased selection:bg-[#EAAC7F] selection:text-[#F8F5F0]">
        
        <ScrollToTop /> {/* <-- Added here */}
        <Navbar />
        
        <main className="relative w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;