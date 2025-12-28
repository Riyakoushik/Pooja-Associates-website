"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';

/**
 * ContactUs Section
 * 
 * A split layout section with a dark green background container.
 * Left side: Contact form with various input types.
 * Right side: Image of a support person wearing a headset.
 */

const ContactUs = () => {
  return (
    <section id="contact" className="w-full py-[120px] bg-white">
      <div className="container mx-auto max-w-[1240px] px-5">
        <div className="relative w-full overflow-hidden bg-[#1A4D43] rounded-[40px] flex flex-col lg:flex-row min-h-[700px]">
          
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="text-white text-sm font-medium uppercase tracking-wider">Contact us</span>
            </div>

            {/* Heading */}
            <h2 className="text-white text-[40px] md:text-[48px] font-semibold leading-[1.2] mb-10 max-w-[400px]">
              Get in touch with our experts team
            </h2>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors appearance-none"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
              <div className="relative">
                <select 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white/60 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>Service...</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="efficiency">Operational Efficiency</option>
                  <option value="market">Market Research</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                  <ChevronDown size={18} />
                </div>
              </div>
              <div className="relative md:col-span-2">
                <select 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white/60 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>Budget...</option>
                  <option value="small">&lt; $5k</option>
                  <option value="medium">$5k - $20k</option>
                  <option value="large">$20k+</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                  <ChevronDown size={18} />
                </div>
              </div>
              <div className="relative md:col-span-2">
                <textarea 
                  placeholder="How Can We Help?" 
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <button className="group flex items-center gap-3 bg-white text-[#1A4D43] hover:bg-[#E8F5EE] transition-all duration-300 font-semibold px-6 py-3 rounded-full">
                  <span>Submit your Form</span>
                  <div className="w-8 h-8 rounded-full bg-[#1A4D43] flex items-center justify-center text-white ring-2 ring-transparent group-hover:ring-white/20 transition-all">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Support Image */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            <div className="absolute inset-4 overflow-hidden rounded-[32px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/dI0cuWh7b6N8F0Vv0P0dYChCg-9.png"
                alt="Our customer support expert team"
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

export default ContactUs;