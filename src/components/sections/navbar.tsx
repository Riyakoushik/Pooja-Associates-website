"use client";

import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-[#E6E6E6] h-[79px] w-full flex items-center">
      <div className="container mx-auto px-6 max-w-[1200px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div 
              className="flex items-center justify-center w-8 h-8 rounded-[10px] bg-[#1F514C]"
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
            <span className="text-[22px] font-semibold text-[#141414] tracking-tight font-display">
              Stratex
            </span>
          </Link>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#services" 
            className="text-[16px] font-medium text-[#121212] transition-opacity hover:opacity-70 no-underline"
          >
            Services
          </a>
          <a 
            href="#features" 
            className="text-[16px] font-medium text-[#121212] transition-opacity hover:opacity-70 no-underline"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="text-[16px] font-medium text-[#121212] transition-opacity hover:opacity-70 no-underline"
          >
            Pricing
          </a>
          <a 
            href="#how-it-works" 
            className="text-[16px] font-medium text-[#121212] transition-opacity hover:opacity-70 no-underline"
          >
            How it work
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          <a 
            href="#contact" 
            className="group flex items-center gap-2.5 bg-[#1A4D43] text-white py-2.5 px-6 rounded-full text-[16px] font-semibold transition-all hover:bg-[#153d35] no-underline"
          >
            <span>Get in touch</span>
            <div className="relative w-5 h-5 flex items-center justify-center bg-white rounded-full transition-transform duration-300 group-hover:rotate-[-45deg]">
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