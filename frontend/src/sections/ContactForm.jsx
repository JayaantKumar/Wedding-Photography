import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ContactForm = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text column
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
      );

      // Animate form fields
      gsap.fromTo(
        formRef.current.children,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.6 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-[#F8F5F0] flex items-center py-32 border-b border-[#EAAC7F]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12">
          
          {/* Left Column: Text */}
          <div ref={textRef} className="flex flex-col justify-center max-w-lg">
            <p className="text-[#EAAC7F] text-xs uppercase tracking-[0.3em] font-sans mb-6">
              Begin The Journey
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8">
              Let's create <br /> something <span className="italic text-[#C75D2C]">timeless.</span>
            </h1>
            <p className="text-[#2D2420] text-sm md:text-base leading-relaxed font-sans opacity-80 mb-12">
              We accept a strictly limited number of commissions each year to ensure uncompromising dedication to our clients. Please share the details of your vision below, and our atelier will be in touch shortly.
            </p>
          </div>

          {/* Right Column: Editorial Form */}
          <div className="flex items-center justify-center">
            <form 
              ref={formRef}
              onSubmit={(e) => e.preventDefault()} 
              className="w-full max-w-xl flex flex-col gap-10"
            >
              {/* Name Field */}
              <div className="relative group">
                <input 
                  type="text" 
                  required
                  placeholder=" " 
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 text-lg font-serif text-[#1A1A1A] focus:outline-none focus:border-[#EAAC7F] transition-colors peer"
                />
                <label className="absolute left-0 top-4 text-sm font-sans tracking-widest uppercase text-[#1A1A1A]/50 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#EAAC7F] peer-valid:-top-4 peer-valid:text-xs transition-all duration-300 pointer-events-none">
                  Partner Names
                </label>
              </div>

              {/* Email & Date Fields (Row) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="email" 
                    required
                    placeholder=" " 
                    className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 text-lg font-serif text-[#1A1A1A] focus:outline-none focus:border-[#EAAC7F] transition-colors peer"
                  />
                  <label className="absolute left-0 top-4 text-sm font-sans tracking-widest uppercase text-[#1A1A1A]/50 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#EAAC7F] peer-valid:-top-4 peer-valid:text-xs transition-all duration-300 pointer-events-none">
                    Email Address
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    required
                    placeholder=" " 
                    className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 text-lg font-serif text-[#1A1A1A] focus:outline-none focus:border-[#EAAC7F] transition-colors peer"
                  />
                  <label className="absolute left-0 top-4 text-sm font-sans tracking-widest uppercase text-[#1A1A1A]/50 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#EAAC7F] peer-valid:-top-4 peer-valid:text-xs transition-all duration-300 pointer-events-none">
                    Wedding Date
                  </label>
                </div>
              </div>

              {/* Destination/Venue Field */}
              <div className="relative group">
                <input 
                  type="text" 
                  required
                  placeholder=" " 
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 text-lg font-serif text-[#1A1A1A] focus:outline-none focus:border-[#EAAC7F] transition-colors peer"
                />
                <label className="absolute left-0 top-4 text-sm font-sans tracking-widest uppercase text-[#1A1A1A]/50 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#EAAC7F] peer-valid:-top-4 peer-valid:text-xs transition-all duration-300 pointer-events-none">
                  Destination / Venue
                </label>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <textarea 
                  required
                  placeholder=" " 
                  rows="3"
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 text-lg font-serif text-[#1A1A1A] focus:outline-none focus:border-[#EAAC7F] transition-colors peer resize-none"
                />
                <label className="absolute left-0 top-4 text-sm font-sans tracking-widest uppercase text-[#1A1A1A]/50 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#EAAC7F] peer-valid:-top-4 peer-valid:text-xs transition-all duration-300 pointer-events-none">
                  Tell Us About Your Vision
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="group relative overflow-hidden px-10 py-5 border border-[#1A1A1A] hover:border-[#1A1A1A] transition-colors duration-500 rounded-none bg-transparent cursor-pointer w-full md:w-auto self-start mt-4"
              >
                <span className="absolute inset-0 w-full h-full bg-[#1A1A1A] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
                <span className="relative z-10 text-[#1A1A1A] group-hover:text-[#F8F5F0] text-xs uppercase tracking-[0.2em] transition-colors duration-500">
                  Submit Inquiry
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;