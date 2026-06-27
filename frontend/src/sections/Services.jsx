import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FiMapPin, FiFeather, FiBookOpen, FiCamera, FiMusic, FiHeart } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    num: '01',
    title: 'Destination Weddings',
    desc: 'Curating breathtaking celebrations across the globe, handling all logistics seamlessly.',
    icon: <FiMapPin className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1546942111-470bc5529816?q=80&w=2073&auto=format&fit=crop',
  },
  {
    num: '02',
    title: 'Luxury Decor',
    desc: 'Architectural floral design, custom lighting, and bespoke aesthetic styling.',
    icon: <FiFeather className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
  },
  {
    num: '03',
    title: 'Wedding Planning',
    desc: 'End-to-end event orchestration, timeline management, and precise execution.',
    icon: <FiBookOpen className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  },
  {
    num: '04',
    title: 'Photography',
    desc: 'Coordination with world-class editorial photographers and cinematographers.',
    icon: <FiCamera className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    num: '05',
    title: 'Entertainment',
    desc: 'Securing top-tier live bands, international DJs, and immersive performances.',
    icon: <FiMusic className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1470229722913-7c090be5c520?q=80&w=2070&auto=format&fit=crop',
  },
  {
    num: '06',
    title: 'Guest Hospitality',
    desc: 'Five-star concierge services, travel arrangements, and personalized gifting.',
    icon: <FiHeart className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1551887373-3f51da334544?q=80&w=2070&auto=format&fit=crop',
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Text Animation
      gsap.fromTo(
        headerRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      // 2. Cards Staggered Reveal from Bottom
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#F8F5F0] relative w-full border-t border-[#EAAC7F]/20">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-24">
          <p className="text-[#EAAC7F] text-xs uppercase tracking-[0.3em] font-sans mb-6">
            Our Expertise
          </p>
          <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight max-w-3xl">
            Signature <span className="italic text-[#C75D2C]">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#EAAC7F]/20">
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-cursor="hover"
              className="group relative h-[400px] border-b border-r border-[#EAAC7F]/20 overflow-hidden bg-[#F8F5F0] transition-colors duration-500 cursor-pointer"
            >
              {/* Background Image (Reveals on Hover) */}
              <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />
                {/* Dark gradient overlay so text remains readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between text-[#1A1A1A] group-hover:text-[#F8F5F0] transition-colors duration-500">
                
                {/* Top: Number & Icon */}
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-serif font-light opacity-30 group-hover:opacity-100 group-hover:text-[#EAAC7F] transition-all duration-500">
                    {service.num}
                  </span>
                  <div className="text-[#C75D2C] group-hover:text-[#EAAC7F] transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Bottom: Title & Description */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm font-sans tracking-wide opacity-0 group-hover:opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {service.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;