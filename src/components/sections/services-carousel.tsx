"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

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
        <AnimatedSection>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F7F9F8] rounded-full border border-[#E6E6E6]">
              <div className="w-2 h-2 rounded-full bg-[#1A4D43]"></div>
              <span className="text-[14px] font-medium text-[#1A4D43] uppercase tracking-wider">Services</span>
            </div>
          </div>

          <h2 className="text-[48px] font-semibold text-[#121212] leading-[1.2] mb-16 max-w-[700px] mx-auto">
            Reliable expertise to drive your greatest success
          </h2>
        </AnimatedSection>
      </div>

      <AnimatedSection className="relative w-full max-w-[1920px] overflow-hidden" delay={200}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1300px] flex justify-between px-4 z-20 pointer-events-none">
          <button className="w-12 h-12 rounded-full bg-[#1A4D43] text-white flex items-center justify-center pointer-events-auto shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#153a33] hover:scale-110 hover:shadow-xl active:scale-95">
            <ChevronLeft size={24} />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#1A4D43] text-white flex items-center justify-center pointer-events-auto shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#153a33] hover:scale-110 hover:shadow-xl active:scale-95">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 px-4 md:px-0">
          {services.slice(0, 3).map((service, index) => (
            <AnimatedSection 
              key={index}
              delay={300 + index * 150}
              direction={index === 0 ? 'left' : index === 2 ? 'right' : 'up'}
              className={`relative overflow-hidden group rounded-[24px] cursor-pointer
              ${index === 1 ? 'w-[480px] h-[580px] z-10 scale-100 opacity-100' : 'w-[400px] h-[480px] opacity-60 scale-90'}`}
            >
              <div className={`relative w-full h-full transition-all duration-700 ${index !== 1 ? 'grayscale hover:grayscale-0' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <h3 className="text-[24px] font-semibold text-white mb-3 transform transition-all duration-500 group-hover:-translate-y-2">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-white/80 leading-relaxed transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={800} className="flex gap-2.5 mt-10">
        {[0, 1, 2, 3].map((dot, i) => (
          <div 
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
              i === 0 ? 'bg-[#1A4D43]' : 'bg-[#E6E6E6] hover:bg-[#1A4D43]/50'
            }`}
          />
        ))}
      </AnimatedSection>
    </section>
  );
}