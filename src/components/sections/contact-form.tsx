import React from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-[120px] px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto bg-brand-green rounded-[40px] p-6 md:p-12 lg:p-20 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Form */}
          <div className="flex-1 z-10">
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-light-green"></div>
              <span className="text-white text-[14px] font-medium tracking-tight">Contact us</span>
            </div>

            {/* Heading */}
            <h2 className="text-white font-serif text-[48px] md:text-[56px] leading-[1.1] mb-12 tracking-[-0.01em]">
              Get in touch with our experts team
            </h2>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#265348] border-none text-white placeholder:text-white/60 rounded-[12px] px-5 py-4 focus:ring-1 focus:ring-brand-light-green outline-none h-[56px] text-[16px]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#265348] border-none text-white placeholder:text-white/60 rounded-[12px] px-5 py-4 focus:ring-1 focus:ring-brand-light-green outline-none h-[56px] text-[16px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => (e.target.type = 'text')}
                    className="w-full bg-[#265348] border-none text-white placeholder:text-white/60 rounded-[12px] px-5 py-4 focus:ring-1 focus:ring-brand-light-green outline-none h-[56px] text-[16px] appearance-none"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <select className="w-full bg-[#265348] border-none text-white placeholder:text-white/60 rounded-[12px] px-5 py-4 focus:ring-1 focus:ring-brand-light-green outline-none h-[56px] text-[16px] appearance-none">
                    <option value="" disabled selected>Service...</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="efficiency">Operational Efficiency</option>
                    <option value="market">Market Research</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div className="relative">
                <select className="w-full bg-[#265348] border-none text-white placeholder:text-white/60 rounded-[12px] px-5 py-4 focus:ring-1 focus:ring-brand-light-green outline-none h-[56px] text-[16px] appearance-none">
                  <option value="" disabled selected>Budget...</option>
                  <option value="small">$5,000 - $10,000</option>
                  <option value="medium">$10,000 - $50,000</option>
                  <option value="large">$50,000+</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5 pointer-events-none" />
              </div>

              <textarea
                placeholder="How Can We Help?"
                rows={4}
                className="w-full bg-[#265348] border-none text-white placeholder:text-white/60 rounded-[12px] px-5 py-4 focus:ring-1 focus:ring-brand-light-green outline-none text-[16px] resize-none"
              ></textarea>

              <button
                type="submit"
                className="mt-4 flex items-center justify-between gap-3 bg-white text-brand-green px-8 py-4 rounded-full font-medium hover:bg-brand-light-green transition-all"
              >
                <span>Submit your Form</span>
                <div className="bg-brand-green p-1 rounded-full text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </form>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 flex justify-center lg:justify-end items-center relative">
            <div className="w-full h-full max-w-[500px] aspect-[4/5] relative rounded-[32px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/dI0cuWh7b6N8F0Vv0P0dYChCg-9.png"
                alt="Professional consultant working at desk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;