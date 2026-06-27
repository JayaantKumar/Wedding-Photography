import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const destinationsData = [
  {
    name: 'Udaipur',
    country: 'India',
    img: 'https://images.unsplash.com/photo-1615836245337-f839dffdbac3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Lake Como',
    country: 'Italy',
    img: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
  },
  {
    name: 'Jaipur',
    country: 'India',
    img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Swiss Alps',
    country: 'Switzerland',
    img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Amalfi Coast',
    country: 'Italy',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
  },
];

// --- Tilt Card Sub-Component ---
const DestinationCard = ({ dest }) => {
  const cardRef = useRef(null);

  // Framer Motion Values for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics-based smoothing for the tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation angles (max 10 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the card's dimensions
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Convert to a percentage from -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset the card gracefully when the mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", // Important for 3D depth
      }}
      data-cursor="hover"
      className="relative w-full h-[450px] md:h-[550px] cursor-pointer group"
    >
      {/* Container to handle overflow and base styles */}
      <div className="absolute inset-0 w-full h-full overflow-hidden shadow-2xl bg-[#1A1A1A]">
        
        {/* Background Image with Zoom on Hover */}
        <img
          src={dest.img}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        />

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
        
        {/* Glassmorphism Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-[#1A1A1A]/40 backdrop-blur-[2px] transition-all duration-700 opacity-0 group-hover:opacity-100" />
      </div>

      {/* Floating Content mapped to 3D Z-axis */}
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end items-center text-center pointer-events-none"
      >
        <span className="text-[#EAAC7F] text-xs font-sans tracking-[0.3em] uppercase mb-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {dest.country}
        </span>
        <h3 className="text-4xl md:text-5xl font-serif text-[#F8F5F0] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {dest.name}
        </h3>
        
        {/* Animated Line Indicator */}
        <div className="w-0 h-[1px] bg-[#EAAC7F] mt-6 group-hover:w-16 transition-all duration-700 ease-out delay-200" />
      </div>
    </motion.div>
  );
};

// --- Main Section Component ---
const Destinations = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Stagger Cards on Scroll
      const cards = cardsWrapperRef.current.children;
      gsap.fromTo(
        cards,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: cardsWrapperRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#F8F5F0] relative w-full border-t border-[#EAAC7F]/20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-24">
          <p className="text-[#EAAC7F] text-xs uppercase tracking-[0.3em] font-sans mb-6">
            Global Horizons
          </p>
          <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight max-w-4xl">
            Breathtaking <br /> <span className="italic text-[#C75D2C]">Destinations</span>
          </h2>
          <p className="text-[#2D2420] text-sm font-sans tracking-wide mt-8 max-w-lg opacity-80">
            From historic Indian palaces to the serene shores of Lake Como, we source and secure the world's most exclusive properties for your celebration.
          </p>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div 
          ref={cardsWrapperRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 perspective-[1000px]"
        >
          {destinationsData.map((dest, index) => (
            <DestinationCard key={index} dest={dest} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
          <a 
            href="#destinations"
            data-cursor="hover"
            className="group relative overflow-hidden px-12 py-5 border border-[#1A1A1A] text-[#1A1A1A] transition-colors duration-500 flex items-center justify-center"
          >
            <span className="absolute inset-0 w-full h-full bg-[#1A1A1A] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
            <span className="relative z-10 text-xs uppercase tracking-[0.2em] group-hover:text-[#F8F5F0] transition-colors duration-500">
              Explore All Locations
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Destinations;