import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const weddings = [
  {
    id: 1,
    title: 'A Tuscan Dream',
    location: 'Florence, Italy',
    img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
    gridClass: 'md:col-span-7 h-[50vh] md:h-[80vh]',
  },
  {
    id: 2,
    title: 'Royal Heritage',
    location: 'Udaipur, India',
    img: 'https://images.unsplash.com/photo-1583939000148-22ba0a09e1e2?q=80&w=2070&auto=format&fit=crop',
    gridClass: 'md:col-span-5 h-[50vh] md:h-[60vh]',
  },
  {
    id: 3,
    title: 'Coastal Elegance',
    location: 'Amalfi Coast',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
    gridClass: 'md:col-span-4 h-[50vh] md:h-[70vh] md:-mt-[20vh]',
  },
  {
    id: 4,
    title: 'Alpine Romance',
    location: 'Lake Como, Italy',
    img: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop',
    gridClass: 'md:col-span-8 h-[50vh] md:h-[90vh]',
  },
];

const FeaturedWeddings = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal
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
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // 2. Editorial Image Stagger Reveal
      itemsRef.current.forEach((item, i) => {
        const image = item.querySelector('.portfolio-image');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        });

        tl.fromTo(
          item,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
        ).fromTo(
          image,
          { scale: 1.2 },
          { scale: 1, duration: 1.5, ease: 'power3.out' },
          "-=1.2" // Sync image scale with the container moving up
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#F8F5F0] relative w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <p className="text-[#EAAC7F] text-xs uppercase tracking-[0.3em] font-sans mb-6">
              Our Portfolio
            </p>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight">
              Featured <br /> <span className="italic text-[#C75D2C]">Masterpieces</span>
            </h2>
          </div>
          
          <a 
            href="#portfolio"
            data-cursor="hover"
            className="group relative inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-[#1A1A1A] pb-2"
          >
            <span className="relative z-10">View Full Gallery</span>
            <div className="w-12 h-[1px] bg-[#EAAC7F] group-hover:w-full transition-all duration-500 ease-out absolute bottom-0 left-0" />
          </a>
        </div>

        {/* Bespoke Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {weddings.map((wedding, index) => (
            <div 
              key={wedding.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`group cursor-pointer flex flex-col ${wedding.gridClass}`}
              data-cursor="hover"
            >
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden mb-6 bg-[#2D2420]">
                <img 
                  src={wedding.img} 
                  alt={wedding.title}
                  className="portfolio-image w-full h-full object-cover transform transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                />
                
                {/* Subtle overlay for interaction */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
              </div>

              {/* Typography Details */}
              <div className="flex justify-between items-start">
                <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] group-hover:text-[#EAAC7F] transition-colors duration-500">
                  {wedding.title}
                </h3>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#2D2420] opacity-70 mt-2">
                  {wedding.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedWeddings;