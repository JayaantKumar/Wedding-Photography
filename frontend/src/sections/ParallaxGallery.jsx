import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imagesCol1 = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop',
];

const imagesCol2 = [
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop',
  'https://www.thetamarindtree.in/wp-content/uploads/2024/07/430943168_1608341169921419_6020615981058994008_n.jpg',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
];

const imagesCol3 = [
  'https://images.unsplash.com/photo-1546942111-470bc5529816?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop',
];

const ParallaxGallery = () => {
  const sectionRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Column 1: Moves up faster
      gsap.to(col1Ref.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Column 2: Moves down (opposite direction)
      gsap.to(col2Ref.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Column 3: Moves up slightly slower
      gsap.to(col3Ref.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Reveal animation for images
      gsap.fromTo(
        '.gallery-image',
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[120vh] bg-[#F8F5F0] overflow-hidden py-24 flex items-center justify-center"
    >
      {/* Decorative Text Behind the Gallery */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-[15vw] font-serif text-[#1A1A1A] opacity-[0.03] whitespace-nowrap tracking-tighter">
          ARCHIVES
        </h2>
      </div>

      <div className="container mx-auto px-6 h-full flex justify-center items-center relative z-10 gap-4 md:gap-8">
        
        {/* Column 1 */}
        <div ref={col1Ref} className="w-1/3 flex flex-col gap-4 md:gap-8 translate-y-10">
          {imagesCol1.map((src, i) => (
            <div key={`col1-${i}`} className="overflow-hidden aspect-[3/4]">
              <img src={src} alt="Gallery" className="gallery-image w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Column 2 (Moving Down) */}
        <div ref={col2Ref} className="w-1/3 flex flex-col gap-4 md:gap-8 -translate-y-[20%]">
          {imagesCol2.map((src, i) => (
            <div key={`col2-${i}`} className="overflow-hidden aspect-[4/5]">
              <img src={src} alt="Gallery" className="gallery-image w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div ref={col3Ref} className="w-1/3 flex flex-col gap-4 md:gap-8 translate-y-20 hidden md:flex">
          {imagesCol3.map((src, i) => (
            <div key={`col3-${i}`} className="overflow-hidden aspect-[3/4]">
              <img src={src} alt="Gallery" className="gallery-image w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ParallaxGallery;