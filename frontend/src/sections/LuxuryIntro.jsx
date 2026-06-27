import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const LuxuryIntro = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const mainImageRef = useRef(null);
  const accentImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Reveal Animation (Fades in when scrolling into view)
      const textElements = textRef.current.children;
      gsap.fromTo(
        textElements,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%', // Starts animation when the top of section hits 75% of viewport
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Parallax Effect on Main Image (Moves slower, slightly downwards)
      gsap.to(mainImageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true, // Ties the animation strictly to the scrollbar
        },
      });

      // 3. Parallax Effect on Accent Image (Moves faster upwards to create depth)
      gsap.to(accentImageRef.current, {
        yPercent: -25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[#F8F5F0] py-32 md:py-48 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div 
            ref={textRef} 
            className="lg:col-span-5 flex flex-col items-start z-10"
          >
            <p className="text-[#EAAC7F] text-xs uppercase tracking-[0.3em] font-sans mb-8">
              The Art of Celebration
            </p>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] leading-[1.1] mb-10">
              Redefining <br />
              <span className="italic text-[#C75D2C]">Luxury</span> <br />
              Weddings.
            </h2>
            
            <p className="text-[#2D2420] text-sm md:text-base leading-relaxed font-sans max-w-md opacity-80 mb-12">
              We orchestrate bespoke celebrations that blur the line between dreams and reality. 
              By blending cinematic aesthetics with meticulous architectural planning, we ensure 
              your legacy begins with an unforgettable masterpiece. Every detail is curated for 
              the extraordinary.
            </p>
            
            {/* Minimal Luxury Button */}
            <a 
              href="#about"
              data-cursor="hover"
              className="group relative inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-[#1A1A1A] font-medium"
            >
              <span className="relative z-10">Discover Our Story</span>
              <div className="w-12 h-[1px] bg-[#EAAC7F] group-hover:w-20 transition-all duration-500 ease-out" />
            </a>
          </div>

          {/* Right Column: Parallax Images */}
          <div className="lg:col-span-7 relative h-[600px] md:h-[800px] w-full flex justify-end">
            
            {/* Main Portrait Image */}
            <div 
              ref={mainImageRef}
              className="relative w-[85%] md:w-[70%] h-full overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
                alt="Elegant bride in a luxury setting" 
                className="w-full h-[120%] object-cover object-center absolute -top-[10%]"
                // Height is 120% and top is -10% to give the parallax effect room to move
              />
            </div>

            {/* Overlapping Accent Image */}
            <div 
              ref={accentImageRef}
              className="absolute left-0 bottom-10 md:bottom-24 w-[50%] md:w-[45%] aspect-[4/5] overflow-hidden shadow-2xl border-4 border-[#F8F5F0]"
            >
              <img 
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop" 
                alt="Close up of luxury wedding details" 
                className="w-full h-[130%] object-cover object-center absolute -top-[15%]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryIntro;