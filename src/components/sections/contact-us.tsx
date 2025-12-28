"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

const ContactUs = () => {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <section id="contact" className="w-full py-[120px] bg-white">
      <div className="container mx-auto max-w-[1240px] px-5">
        <AnimatedSection>
          <div className="relative w-full overflow-hidden bg-[#1A4D43] rounded-[40px] flex flex-col lg:flex-row min-h-[700px] transition-all duration-500 hover:shadow-2xl">
            <AnimatedSection direction="left" delay={200} className="w-full lg:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-white text-sm font-medium uppercase tracking-wider">Contact us</span>
              </div>

                <h2 className="text-white text-[40px] md:text-[48px] font-semibold leading-[1.2] mb-10 max-w-[400px]">
                  Join Pooja Associates for Business Growth
                </h2>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-all duration-300 focus:bg-white/15 focus:scale-[1.02]"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-all duration-300 focus:bg-white/15 focus:scale-[1.02]"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="date" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-all duration-300 appearance-none focus:bg-white/15 focus:scale-[1.02]"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                <div className="relative group">
                  <select 
                    className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 transition-all duration-300 appearance-none cursor-pointer focus:bg-white/15 focus:scale-[1.02] focus:outline-none focus:border-white ${service ? 'text-white' : 'text-white/60'}`}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                      <option value="" disabled className="text-gray-400 bg-white">Service...</option>
                      <option value="content" className="text-black bg-white">Content Design & Marketing</option>
                      <option value="social" className="text-black bg-white">Social Media Marketing</option>
                      <option value="analysis" className="text-black bg-white">Business Analysis</option>
                      <option value="telemarketing" className="text-black bg-white">Tele-marketing</option>
                      <option value="loans" className="text-black bg-white">Business Loan Processing</option>
                    </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/60 transition-transform duration-300 group-focus-within:rotate-180">
                    <ChevronDown size={18} />
                  </div>
                </div>
                <div className="relative md:col-span-2 group">
                  <select 
                    className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 transition-all duration-300 appearance-none cursor-pointer focus:bg-white/15 focus:scale-[1.02] focus:outline-none focus:border-white ${budget ? 'text-white' : 'text-white/60'}`}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    <option value="" disabled className="text-gray-400 bg-white">Budget...</option>
                    <option value="small" className="text-black bg-white">&lt; $5k</option>
                    <option value="medium" className="text-black bg-white">$5k - $20k</option>
                    <option value="large" className="text-black bg-white">$20k+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/60 transition-transform duration-300 group-focus-within:rotate-180">
                    <ChevronDown size={18} />
                  </div>
                </div>
                <div className="relative md:col-span-2">
                  <textarea 
                    placeholder="How Can We Help?" 
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-all duration-300 resize-none focus:bg-white/15"
                  ></textarea>
                </div>

                  <div className="md:col-span-2 pt-4">
                    <a 
                      href="https://wa.me/918357892019"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-white text-[#1A4D43] transition-all duration-300 font-semibold px-6 py-3 rounded-full hover:bg-[#E8F5EE] hover:scale-105 hover:shadow-lg active:scale-95 no-underline"
                    >
                      <span>Join us on WhatsApp</span>
                      <div className="w-8 h-8 rounded-full bg-[#1A4D43] flex items-center justify-center text-white ring-2 ring-transparent group-hover:ring-white/20 transition-all duration-300 group-hover:rotate-45">
                        <ArrowRight size={16} />
                      </div>
                    </a>
                  </div>
              </form>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={400} className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
              <div className="absolute inset-4 overflow-hidden rounded-[32px] group">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/dI0cuWh7b6N8F0Vv0P0dYChCg-9.png"
                  alt="Our customer support expert team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactUs;