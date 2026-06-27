import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Years Experience', value: 12 },
  { label: 'Luxury Events', value: 450 },
  { label: 'Countries Covered', value: 25 },
  { label: 'Happy Couples', value: 1200 },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the counting effect
      statsRef.current.forEach((el) => {
        const targetValue = parseInt(el.getAttribute('data-value'));
        
        gsap.fromTo(el, 
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: 1 }, // Ensure only integers show
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#1A1A1A] text-[#F8F5F0] py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Image with Parallax feel */}
        <div className="relative h-[600px] overflow-hidden">
          <img 
            src="https://greenhollyweddings.com/wp-content/uploads/sites/20828/2023/02/Luxury-wedding-photographers-michigan-01-scaled.jpg" 
            alt="Luxury Wedding Venue" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
          <div className="absolute inset-0 border border-[#EAAC7F]/30 m-8" />
        </div>

        {/* Right Column: Stats & Copy */}
        <div className="flex flex-col gap-12">
          <div>
            <p className="text-[#EAAC7F] text-xs uppercase tracking-[0.3em] font-sans mb-6">
              The Resolution Difference
            </p>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              We Don't Plan Events, <br />
              <span className="italic text-[#C75D2C]">We Craft Legacies.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span 
                  ref={(el) => (statsRef.current[index] = el)} 
                  data-value={stat.value}
                  className="text-5xl md:text-6xl font-serif text-[#EAAC7F] mb-2"
                >
                  0
                </span>
                <span className="text-xs uppercase tracking-[0.2em] opacity-60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm leading-relaxed opacity-70 max-w-md font-sans border-t border-[#F8F5F0]/10 pt-8">
            Our agency model, Newresolutionstudio, combines industrial precision with editorial storytelling. 
            We treat your wedding with the same rigor as an architectural project, ensuring 
            flawless execution where others see only chaos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;