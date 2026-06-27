import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const eyebrowRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split the heading into characters for the cinematic reveal
      const splitText = new SplitType(headingRef.current, { types: 'words, chars' });
      
      splitText.words.forEach(word => {
        word.style.overflow = 'hidden';
        word.style.display = 'inline-flex';
        word.style.marginRight = '0.3em';
      });

      // Master Timeline
      const tl = gsap.timeline({ delay: 0.2 });

      gsap.set(splitText.chars, { y: 100, opacity: 0 });

      tl.fromTo(eyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
      .to(splitText.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out"
      }, "-=0.6")
      .fromTo(buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-[#1A1A1A]">
      
      {/* 4K Background Image */}
      <img
        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=3840&auto=format&fit=crop"
        alt="Cinematic Wedding Couple"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1A1A1A]/90 z-0" />
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-6">
        
        <p 
          ref={eyebrowRef}
          className="text-[#EAAC7F] text-xs md:text-sm uppercase tracking-[0.3em] font-sans mb-6"
        >
          A Newresolutionstudio Experience
        </p>

        <h1 
          ref={headingRef}
          className="text-[#F8F5F0] text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-[1.1] mb-10 max-w-6xl"
        >
          Crafting Timeless<br />Wedding Experiences
        </h1>

        <button 
          ref={buttonRef}
          onClick={() => navigate('/contact')}
          className="group relative overflow-hidden px-10 py-4 border border-[#EAAC7F]/40 hover:border-[#EAAC7F] transition-colors duration-500 rounded-none bg-black/20 backdrop-blur-sm cursor-pointer"
        >
          <span className="absolute inset-0 w-full h-full bg-[#EAAC7F] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
          <span className="relative z-10 text-[#F8F5F0] group-hover:text-[#1A1A1A] text-xs uppercase tracking-[0.2em] transition-colors duration-500">
            Begin Your Journey
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;