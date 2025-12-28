"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] h-[79px] w-full flex items-center transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-transparent' 
          : 'bg-white border-b border-[#E6E6E6]'
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 600ms ease-out, transform 600ms ease-out, background-color 300ms ease, box-shadow 300ms ease',
      }}
    >
      <div className="container mx-auto px-6 max-w-[1200px] flex items-center justify-between">
        <div 
          className="flex items-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'opacity 600ms ease-out 100ms, transform 600ms ease-out 100ms',
          }}
        >
          <Link href="/" className="flex items-center gap-2.5 no-underline group">
            <div 
              className="flex items-center justify-center w-8 h-8 rounded-[10px] bg-[#1F514C] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.07) 0px 0px 12px 0px, rgba(255, 255, 255, 0.25) 0px 2px 4px 0px inset"
              }}
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/AUOOfMLqx3UrCzpH7eIka9rF8-1.svg"
                width={15}
                height={15}
                alt="Stratex Logo Icon"
                className="w-[15px] h-[15px]"
              />
            </div>
            <span className="text-[22px] font-semibold text-[#141414] tracking-tight font-display transition-colors duration-300 group-hover:text-[#1A4D43]">
              Stratex
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Features', 'Pricing', 'How it work'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="relative text-[16px] font-medium text-[#121212] no-underline group overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                transition: `opacity 500ms ease-out ${200 + index * 100}ms, transform 500ms ease-out ${200 + index * 100}ms`,
              }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1A4D43]">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1A4D43] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div 
          className="flex items-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
            transition: 'opacity 600ms ease-out 400ms, transform 600ms ease-out 400ms',
          }}
        >
          <a 
            href="#contact" 
            className="group flex items-center gap-2.5 bg-[#1A4D43] text-white py-2.5 px-6 rounded-full text-[16px] font-semibold transition-all duration-300 no-underline hover:bg-[#153d35] hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <span>Get in touch</span>
            <div className="relative w-5 h-5 flex items-center justify-center bg-white rounded-full transition-all duration-300 group-hover:rotate-45">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" 
                  stroke="#1A4D43" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;