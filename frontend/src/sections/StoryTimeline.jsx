import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const journeyStages = [
  {
    num: '01',
    title: 'The Dream',
    subtitle: 'Vision & Concept',
    desc: 'Every legacy begins with a vision. We sit down with you to understand your aesthetic, your story, and the emotional resonance you want to create.',
    img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    num: '02',
    title: 'The Blueprint',
    subtitle: 'Architectural Planning',
    desc: 'Meticulous logistical architecture. From securing exclusive venues to timeline orchestration, we build the foundation of your celebration.',
    img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop',
  },
  {
    num: '03',
    title: 'The Design',
    subtitle: 'Aesthetic Curation',
    desc: 'Translating concepts into tangible luxury. We curate floral installations, bespoke lighting, and spatial design that transforms environments.',
    img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    num: '04',
    title: 'The Symphony',
    subtitle: 'Flawless Execution',
    desc: 'The day arrives. Our team operates invisibly in the background, conducting the flow of events so you can remain entirely present in the moment.',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
  },
  {
    num: '05',
    title: 'The Legacy',
    subtitle: 'Forever After',
    desc: 'Long after the final dance, your celebration lives on through cinematic photography and memories crafted to transcend time.',
    img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
  },
];

const StoryTimeline = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray('.timeline-panel');
    
    const ctx = gsap.context(() => {
      // 1. Horizontal Scroll Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true, // Pins the section to the viewport
          scrub: 1,  // Smooth scrubbing effect tied to scrollbar
          end: () => `+=${trackRef.current.offsetWidth}`, // Scroll distance equals total width of all panels
        }
      });

      // Move the track to the left by the width of all panels minus one viewport width
      tl.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none', // Important: 'none' ensures constant speed across the scroll
      });

      // 2. Progress Bar Animation
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${trackRef.current.offsetWidth}`,
          scrub: 1,
        }
      });

      // 3. Image Parallax inside Panels (Optional extra luxury touch)
      panels.forEach((panel) => {
        const img = panel.querySelector('img');
        gsap.fromTo(img, 
          { scale: 1.2, xPercent: 10 },
          { 
            scale: 1, 
            xPercent: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tl, // Ties this trigger to the horizontal timeline!
              start: 'left right',
              end: 'right left',
              scrub: true,
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#1A1A1A] overflow-hidden flex items-center">
      
      {/* Global Section Label */}
      <div className="absolute top-12 left-6 md:left-12 z-20 mix-blend-difference">
        <p className="text-[#EAAC7F] text-xs uppercase tracking-[0.3em] font-sans">
          The Journey
        </p>
      </div>

      {/* Horizontal Scrolling Track */}
      <div ref={trackRef} className="flex h-full w-[500vw]"> 
        {/* Width is 100vw * number of panels (5) */}
        
        {journeyStages.map((stage, index) => (
          <div 
            key={index} 
            className="timeline-panel w-screen h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-24 gap-12 md:gap-24 relative"
          >
            
            {/* Background Massive Number */}
            <div className="absolute left-10 md:left-24 top-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-serif font-bold text-white/[0.03] select-none z-0 pointer-events-none">
              {stage.num}
            </div>

            {/* Left Content */}
            <div className="w-full md:w-1/3 relative z-10 flex flex-col pt-20 md:pt-0">
              <span className="text-[#C75D2C] text-sm uppercase tracking-[0.2em] mb-4 font-sans">
                Phase {stage.num} — {stage.subtitle}
              </span>
              <h2 className="text-5xl md:text-7xl font-serif text-[#F8F5F0] mb-8 leading-tight">
                {stage.title}
              </h2>
              <p className="text-[#F8F5F0]/70 text-sm md:text-base leading-relaxed font-sans max-w-sm">
                {stage.desc}
              </p>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden relative z-10">
              <img 
                src={stage.img} 
                alt={stage.title}
                className="w-full h-full object-cover origin-center"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
          </div>
        ))}
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-20">
        <div 
          ref={progressBarRef}
          className="h-full w-full bg-[#EAAC7F] transform origin-left scale-x-0"
        />
      </div>

    </section>
  );
};

export default StoryTimeline;