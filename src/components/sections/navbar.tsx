"use client";

import React, { useEffect, useState } from 'react';
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
            <span className="text-[22px] font-semibold text-[#141414] tracking-tight font-display transition-colors duration-300 group-hover:text-[#1A4D43]">
              Pooja Associates
            </span>
          </Link>
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
            href="https://wa.me/918357892019" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 bg-[#1A4D43] text-white py-2.5 px-6 rounded-full text-[16px] font-semibold transition-all duration-300 no-underline hover:bg-[#153d35] hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <span>Join Us</span>
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