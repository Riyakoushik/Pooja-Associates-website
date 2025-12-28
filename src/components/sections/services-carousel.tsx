"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Services carousel section featuring card-based navigation with images and descriptions.
 * Consistent with the high-end consulting agency aesthetic (Stratex).
 */

const services = [
  {
    title: "Business consulting",
    description: "Gain a clear roadmap for growth with tailored strategies that align with your goals.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/0YczDvjwpwN80wyyW0HHaSg0VA-2.jpg",
  },
  {
    title: "Operational efficiency",
    description: "Streamline workflows and optimize processes to boost productivity and reduce costs.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/iL1g2JceXoecOESZCnxxGh4SA-3.jpg",
  },
  {
    title: "Market research & analysis",
    description: "Make informed decisions with in-depth market insights and competitor analysis.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/F8bRxnZXtathTlYe6oa9P55kjsY-4.jpg",
  },
  {
    title: "Digital transformation",
    description: "Leverage cutting-edge technology to modernize your business and stay ahead.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/0YczDvjwpwN80wyyW0HHaSg0VA-2.jpg",
  }
];

export default function ServicesCarousel() {
  return (
    <section 
      id="services" 
      className="py-[120px] bg-white overflow-hidden flex flex-col items-center"
    >
      <div className="container max-w-[1200px] px-6 text-center">
        {/* Section Pill Tag */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F7F9F8] rounded-full border border-[#E6E6E6]">
            <div className="w-2 h-2 rounded-full bg-[#1A4D43]"></div>
            <span className="text-[14px] font-medium text-[#1A4D43] uppercase tracking-wider">Services</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[48px] font-semibold text-[#121212] leading-[1.2] mb-16 max-w-[700px] mx-auto">
          Reliable expertise to drive your greatest success
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1920px] overflow-hidden">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1300px] flex justify-between px-4 z-20 pointer-events-none">
          <button className="w-12 h-12 rounded-full bg-[#1A4D43] text-white flex items-center justify-center pointer-events-auto shadow-lg hover:bg-[#153a33] transition-colors cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#1A4D43] text-white flex items-center justify-center pointer-events-auto shadow-lg hover:bg-[#153a33] transition-colors cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Sliders Area - Horizontal Scroll Simulation */}
        <div className="flex items-center justify-center gap-6 px-4 md:px-0">
          {/* We show 3 main cards for the "active" view snapshot as per design */}
          {services.slice(0, 3).map((service, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group transition-all duration-500 rounded-[24px] 
              ${index === 1 ? 'w-[480px] h-[580px] z-10 scale-100 opacity-100' : 'w-[400px] h-[480px] opacity-40 scale-90 grayscale'}`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              
              {/* Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-[24px] font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-[16px] text-white/80 leading-relaxed translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative dots for pagination */}
      <div className="flex gap-2.5 mt-10">
        <div className="w-2.5 h-2.5 rounded-full bg-[#1A4D43]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#E6E6E6]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#E6E6E6]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#E6E6E6]"></div>
      </div>
    </section>
  );
}