import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    names: 'Eleanor & James',
    location: 'Lake Como, Italy',
    quote: "Working with Newresolutionstudio was a revelation. They didn't just plan our wedding; they architected an absolute masterpiece. Every single detail felt completely effortless and undeniably luxurious.",
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
  },
  {
    names: 'Sophia & Alexander',
    location: 'Udaipur, India',
    quote: "Their meticulous attention to detail is unmatched. From the custom floral installations to the flawless execution of our 3-day itinerary, they allowed us to simply exist in the magic of our celebration.",
    image: 'https://static.wixstatic.com/media/59c923_77225967c7ed4e1b805017f02620d4a5~mv2.jpg/v1/fill/w_640,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/59c923_77225967c7ed4e1b805017f02620d4a5~mv2.jpg',
  },
  {
    names: 'Isabella & Mateo',
    location: 'Amalfi Coast, Italy',
    quote: "A truly cinematic experience. The aesthetic curation was beyond our wildest dreams, and their ability to blend architectural precision with emotional storytelling made our wedding unforgettable.",
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the Header
      gsap.fromTo(
        headerRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Reveal the Swiper Container
      gsap.fromTo(
        swiperRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: swiperRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#F8F5F0] relative w-full overflow-hidden border-t border-[#EAAC7F]/20">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 md:mb-24">
          <p className="text-[#EAAC7F] text-xs uppercase tracking-[0.3em] font-sans mb-6">
            Words of Love
          </p>
          <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight">
            Client <span className="italic text-[#C75D2C]">Legacies</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div ref={swiperRef} className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1200}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
            data-cursor="hover" // Uses your custom cursor
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center justify-center relative min-h-[600px] py-10">
                  
                  {/* Portrait Image */}
                  <div className="w-full md:w-3/5 h-[400px] md:h-[600px] relative z-0 overflow-hidden shadow-2xl">
                    <img
                      src={testimonial.image}
                      alt={testimonial.names}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1A1A1A]/20 mix-blend-overlay" />
                  </div>

                  {/* Glassmorphism Quote Card */}
                  <div className="w-11/12 md:w-2/5 md:absolute md:right-10 lg:right-20 z-10 -mt-20 md:mt-0 bg-[#F8F5F0]/80 backdrop-blur-xl p-10 md:p-14 border border-[#EAAC7F]/30 shadow-xl">
                    
                    {/* Massive Quote Icon */}
                    <div className="text-[6rem] md:text-[8rem] font-serif text-[#EAAC7F] opacity-30 leading-none absolute -top-8 left-6 md:-top-12 md:left-10 select-none">
                      "
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-lg md:text-xl lg:text-2xl font-serif text-[#1A1A1A] leading-relaxed mb-10 italic">
                        {testimonial.quote}
                      </p>
                      
                      <div className="flex flex-col border-t border-[#EAAC7F]/30 pt-6">
                        <span className="text-[#1A1A1A] text-lg font-serif mb-1">
                          {testimonial.names}
                        </span>
                        <span className="text-[#C75D2C] text-xs uppercase tracking-[0.2em] font-sans">
                          {testimonial.location}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;