import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full bg-white/95 backdrop-blur-sm border-b border-[#E6E6E6]">
      <div className="container mx-auto max-w-[1200px] px-[25px]">
        <nav className="flex items-center justify-between h-[79px] py-5">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-[22px] font-serif font-medium text-[#1A1A1A] no-underline hover:opacity-80 transition-opacity"
            >
              <div 
                className="flex items-center justify-center w-8 h-8 rounded-[10px] bg-[#1F514C]"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.07) 0px 0px 12px 0px, rgba(255, 255, 255, 0.25) 0px 2px 4px 0px inset'
                }}
              >
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/AUOOfMLqx3UrCzpH7eIka9rF8-1.svg" 
                  alt="Stratex Logo" 
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px] object-contain"
                />
              </div>
              <span className="leading-none -mt-0.5" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                Stratex
              </span>
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex items-center gap-[30px]">
            <a 
              href="#services" 
              className="text-[16px] font-medium text-[#1A1A1A] no-underline hover:text-[#1C453B] transition-colors"
            >
              Services
            </a>
            <a 
              href="#features" 
              className="text-[16px] font-medium text-[#1A1A1A] no-underline hover:text-[#1C453B] transition-colors"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-[16px] font-medium text-[#1A1A1A] no-underline hover:text-[#1C453B] transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#how-it-works" 
              className="text-[16px] font-medium text-[#1A1A1A] no-underline hover:text-[#1C453B] transition-colors"
            >
              How it work
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <a 
              href="#contact" 
              className="group flex items-center gap-2.5 bg-[#1C453B] text-white px-5 py-2.5 rounded-full text-[16px] font-medium hover:bg-[#14322a] transition-all duration-300 no-underline"
            >
              Get in touch
              <div className="relative w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-6">
                  <div className="flex items-center justify-center w-6 h-6 shrink-0">
                    <svg 
                      width="12" 
                      height="12" 
                      viewBox="0 0 12 12" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#1C453B]"
                    >
                      <path 
                        d="M3.5 8.5L8.5 3.5M8.5 3.5H3.5M8.5 3.5V8.5" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 shrink-0">
                    <svg 
                      width="12" 
                      height="12" 
                      viewBox="0 0 12 12" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#1C453B]"
                    >
                      <path 
                        d="M3.5 8.5L8.5 3.5M8.5 3.5H3.5M8.5 3.5V8.5" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;