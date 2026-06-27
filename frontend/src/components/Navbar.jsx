import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { y: '0%', duration: 0.8, ease: 'power4.inOut' });
      gsap.fromTo(linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );
    } else {
      gsap.to(menuRef.current, { y: '-100%', duration: 0.8, ease: 'power4.inOut' });
    }
  }, [isMenuOpen]);

  // Determine if we are on the homepage
  const isHomePage = location.pathname === '/';
  
  // Dynamically set text and hamburger menu colors based on the route
  const textColorClass = isHomePage ? 'text-[#F8F5F0]' : 'text-[#1A1A1A]';
  const hamburgerColorClass = isHomePage ? 'bg-[#F8F5F0]' : 'bg-[#1A1A1A]';

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 py-10 bg-transparent">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo with dynamic color */}
          <Link to="/" className={`text-2xl font-serif tracking-widest z-[60] transition-colors duration-300 ${textColorClass}`}>
            NEW RESOLUTION
          </Link>

          <nav className="hidden md:flex gap-10 items-center z-[60]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? 'text-[#EAAC7F]' : `${textColorClass} hover:text-[#EAAC7F]`
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[60]">
            <span className={`block w-full h-[1px] transition-all duration-300 ${hamburgerColorClass} ${isMenuOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1'}`} />
            <span className={`block w-full h-[1px] transition-all duration-300 ${hamburgerColorClass} ${isMenuOpen ? '-rotate-45 -translate-y-[0px]' : 'translate-y-1'}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div ref={menuRef} className="fixed inset-0 z-40 bg-[#1A1A1A] flex flex-col justify-center items-center -translate-y-full">
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, index) => (
            <div key={link.name} className="overflow-hidden">
              <Link
                ref={(el) => (linksRef.current[index] = el)}
                to={link.path}
                className="block text-4xl font-serif text-[#F8F5F0] hover:text-[#EAAC7F] transition-colors"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;