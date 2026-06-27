import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FiMapPin, FiFeather, FiBookOpen, FiCamera, FiMusic, FiHeart } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

// Using highly stable Pexels links to ensure images always load
const servicesData = [
  {
    num: '01',
    title: 'Destination Weddings',
    desc: 'Curating breathtaking celebrations across the globe, handling all logistics seamlessly.',
    icon: <FiMapPin className="w-6 h-6" />,
    img: 'https://www.bodycraft.co.in/hubfs/unnamed%20-%202025-12-25T152552.860.webp',
  },
  {
    num: '02',
    title: 'Luxury Decor',
    desc: 'Architectural floral design, custom lighting, and bespoke aesthetic styling.',
    icon: <FiFeather className="w-6 h-6" />,
    img: 'https://assets.cntraveller.in/photos/6886f6f7ad2e6713a0089d80/16:9/w_1280,c_limit/IMG_3631.jpg',
  },
  {
    num: '03',
    title: 'Wedding Planning',
    desc: 'End-to-end event orchestration, timeline management, and precise execution.',
    icon: <FiBookOpen className="w-6 h-6" />,
    img: 'https://i.etsystatic.com/34777690/r/il/ba5d42/3933988779/il_1080xN.3933988779_5aow.jpg',
  },
  {
    num: '04',
    title: 'Photography',
    desc: 'Coordination with world-class editorial photographers and cinematographers.',
    icon: <FiCamera className="w-6 h-6" />,
    img: 'https://images.prismic.io/rigbiswas/aU6C7HNYClf9opbj_wedding-couple-poses-for-timeless-photo.webp?auto=format,compress',
  },
  {
    num: '05',
    title: 'Entertainment',
    desc: 'Securing top-tier live bands, international DJs, and immersive performances.',
    icon: <FiMusic className="w-6 h-6" />,
    img: 'https://cdn0.weddingwire.in/article/3676/original/1280/jpg/76763-best-wedding-entertainment-ideas-the-wedding-salad-games.jpeg',
  },
  {
    num: '06',
    title: 'Guest Hospitality',
    desc: 'Five-star concierge services, travel arrangements, and personalized gifting.',
    icon: <FiHeart className="w-6 h-6" />,
    img: 'https://www.pranayaweddings.com/assets/images/shape/wedding-catering.webp',
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
    <section ref={sectionRef} className="py-32 bg-[#DDD0C8] relative w-full border-t border-[#323232]/10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-24">
          <p className="text-[#323232] text-xs uppercase tracking-[0.3em] font-sans mb-6 opacity-70">
            Our Expertise
          </p>
          <h2 className="text-5xl md:text-7xl font-serif text-[#323232] leading-tight max-w-3xl">
            Signature <span className="italic text-[#EAAC7F]">Services</span>
          </h2>
        </div>

        {/* Services Grid (6 Items, Always Visible Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#323232]/20">
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative h-[450px] border-b border-r border-[#323232]/20 overflow-hidden bg-[#323232] transition-colors duration-500 cursor-pointer"
            >
              
              {/* Permanent Image Background with Cinematic Zoom on Hover */}
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
              />
              
              {/* Permanent Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#323232] via-[#323232]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Card Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between text-[#DDD0C8]">
                
                {/* Top: Number & Icon */}
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-serif font-light opacity-50 group-hover:opacity-100 group-hover:text-[#EAAC7F] transition-all duration-500">
                    {service.num}
                  </span>
                  <div className="text-[#EAAC7F] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Bottom: Title & Slide-Up Description */}
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">
                    {service.title}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-sm font-sans tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed text-[#DDD0C8]/80">
                      {service.desc}
                    </p>
                  </div>
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