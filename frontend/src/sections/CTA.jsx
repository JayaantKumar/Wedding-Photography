import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the massive text
      gsap.fromTo(
        textRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Fade in the button
      gsap.fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.4,
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
    <section ref={sectionRef} className="relative w-full py-40 md:py-60 flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      
      {/* Cinematic Background Image with Parallax Setup */}
      <div className="absolute inset-0 w-full h-full opacity-40 mix-blend-luminosity">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Wedding Setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        
        <div ref={textRef} className="mb-12">
          <p className="text-[#EAAC7F] text-xs uppercase tracking-[0.4em] font-sans mb-8">
            Your Vision, Architected
          </p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#F8F5F0] leading-[1.1]">
            Let's Build <br />
            <span className="italic text-[#C75D2C]">Your Legacy.</span>
          </h2>
        </div>

        <button 
          ref={buttonRef}
          data-cursor="hover"
          className="group relative overflow-hidden px-14 py-6 border border-[#EAAC7F]/40 hover:border-[#EAAC7F] transition-colors duration-700 bg-[#1A1A1A]/50 backdrop-blur-md mt-8"
        >
          <span className="absolute inset-0 w-full h-full bg-[#EAAC7F] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
          <span className="relative z-10 text-[#F8F5F0] group-hover:text-[#1A1A1A] text-sm uppercase tracking-[0.3em] transition-colors duration-700">
            Inquire Now
          </span>
        </button>

      </div>
    </section>
  );
};

export default CTA;