import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FiInstagram } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const instaImages = [
  'https://static.wixstatic.com/media/59c923_77225967c7ed4e1b805017f02620d4a5~mv2.jpg/v1/fill/w_640,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/59c923_77225967c7ed4e1b805017f02620d4a5~mv2.jpg',
  'https://www.pranayaweddings.com/assets/images/shape/wedding-catering.webp',
  'https://cdn0.weddingwire.in/article/3676/original/1280/jpg/76763-best-wedding-entertainment-ideas-the-wedding-salad-games.jpeg',
  'https://images.prismic.io/rigbiswas/aU6C7HNYClf9opbj_wedding-couple-poses-for-timeless-photo.webp?auto=format,compress',
  'https://assets.cntraveller.in/photos/6886f6f7ad2e6713a0089d80/16:9/w_1280,c_limit/IMG_3631.jpg',
  'https://www.bodycraft.co.in/hubfs/unnamed%20-%202025-12-25T152552.860.webp',
];

const Instagram = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the Header
      gsap.fromTo(
        headerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );

      // Reveal the Marquee Track
      gsap.fromTo(
        trackRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: trackRef.current,
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#323232] relative w-full overflow-hidden">
      
      {/* Inject custom CSS for the hardware-accelerated marquee loop */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .marquee-container:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="container mx-auto px-6 md:px-12 mb-16">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <p className="text-[#EAAC7F] text-xs uppercase tracking-[0.3em] font-sans mb-4 opacity-80">
              Social Journal
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#DDD0C8] leading-tight">
              Follow The <span className="italic text-[#EAAC7F]">Journey</span>
            </h2>
          </div>
          
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#DDD0C8] pb-2 cursor-pointer"
          >
            <FiInstagram className="w-4 h-4 text-[#EAAC7F]" />
            <span className="relative z-10">@newresolutionstudio</span>
            <div className="w-full h-[1px] bg-white/20 absolute bottom-0 left-0" />
            <div className="w-0 h-[1px] bg-[#EAAC7F] group-hover:w-full transition-all duration-500 ease-out absolute bottom-0 left-0" />
          </a>
        </div>
      </div>

      {/* Marquee Track */}
      <div 
        ref={trackRef} 
        className="marquee-container w-full overflow-hidden relative"
      >
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-[#323232] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-[#323232] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 px-3">
          {/* Render the images twice to create the seamless infinite loop */}
          {[...instaImages, ...instaImages].map((img, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] flex-shrink-0 overflow-hidden cursor-pointer bg-[#323232]"
            >
              {/* Image */}
              <img
                src={img}
                alt="Instagram Gallery"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#323232]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <FiInstagram className="w-8 h-8 text-[#EAAC7F] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100" />
                <span className="text-[#DDD0C8] text-xs uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                  View Post
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;