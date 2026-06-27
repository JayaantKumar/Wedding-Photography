import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#F8F5F0] pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32 relative z-10">
          
          {/* Column 1: Newsletter */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif mb-6 text-[#EAAC7F]">The Journal</h3>
              <p className="text-sm font-sans tracking-wide opacity-70 max-w-sm leading-relaxed mb-8">
                Subscribe to our private newsletter for exclusive editorial insights, 
                architectural design trends, and luxury destination reveals.
              </p>
              
              <form className="relative max-w-md group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-sm font-sans tracking-[0.1em] text-[#F8F5F0] placeholder:text-white/30 focus:outline-none focus:border-[#EAAC7F] transition-colors"
                />
                <button 
                  type="submit"
                  data-cursor="hover"
                  className="absolute right-0 bottom-4 text-xs tracking-[0.2em] text-[#EAAC7F] uppercase hover:text-[#C75D2C] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#EAAC7F] mb-8 font-sans">Menu</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Destinations', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    data-cursor="hover"
                    className="text-lg font-serif opacity-80 hover:opacity-100 hover:text-[#EAAC7F] transition-all duration-300 inline-block hover:translate-x-2"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & HQ */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#EAAC7F] mb-8 font-sans">Contact</h4>
            <div className="flex flex-col gap-6 text-sm font-sans opacity-80 tracking-wide">
              <a href="mailto:inquire@newresolutionstudio.com" data-cursor="hover" className="hover:text-[#EAAC7F] transition-colors">
                inquire@newresolutionstudio.com
              </a>
              <a href="tel:+910000000000" data-cursor="hover" className="hover:text-[#EAAC7F] transition-colors">
                +91 (000) 000-0000
              </a>
              <div className="leading-relaxed">
                <p>Headquarters</p>
                <p>Durg, Chhattisgarh, India</p>
                <p>Available Worldwide</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Massive Logo & Copyright */}
        <div className="flex flex-col items-center border-t border-white/10 pt-12 relative z-10">
          <h1 className="text-[12vw] leading-none font-serif text-[#F8F5F0] opacity-10 tracking-tighter whitespace-nowrap select-none pointer-events-none mb-8">
            NEWRESOLUTIONSTUDIO
          </h1>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-sans opacity-50 gap-4">
            <span>&copy; {new Date().getFullYear()} Newresolutionstudio</span>
            <div className="flex gap-6">
              <a href="#" data-cursor="hover" className="hover:text-[#EAAC7F]">Instagram</a>
              <a href="#" data-cursor="hover" className="hover:text-[#EAAC7F]">Pinterest</a>
              <a href="#" data-cursor="hover" className="hover:text-[#EAAC7F]">LinkedIn</a>
            </div>
            <span>All Rights Reserved</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;