"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Mitchell',
    role: 'Lead Consultant',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/PlN76M8KK3J8Iwj1r4XNicuoSeE-10.jpg',
  },
  {
    name: 'James Carter',
    role: 'Business Expertultant',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/Rfi8Dzlz5SKxegez4irAvX21mk-14.jpg',
  },
  {
    name: 'Emily Ross',
    role: 'Efficiency Specialist',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/PlN76M8KK3J8Iwj1r4XNicuoSeE-10.jpg', // Using available assets as fallback
  },
  {
    name: 'Daniel Lee',
    role: 'Financial & Growth Advisor',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/Rfi8Dzlz5SKxegez4irAvX21mk-14.jpg', // Using available assets as fallback
  },
];

const TeamSection = () => {
  return (
    <section className="py-[120px] bg-white overflow-hidden" id="team">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-[60px]">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#F7F9F8] rounded-full mb-4 border border-[#E6E6E6]">
            <div className="w-2 h-2 rounded-full bg-[#1A4D43]"></div>
            <span className="text-[14px] font-medium text-[#1A4D43] uppercase tracking-wider">
              Our team
            </span>
          </div>
          <h2 className="text-[48px] font-semibold text-[#121212] leading-[1.2] max-w-[600px]">
            Meet the experts behind your business success
          </h2>
        </div>

        {/* Team Carousel / Grid Wrapper */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 snap-x">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[282px] group relative snap-start"
              >
                <div className="relative h-[400px] w-full rounded-[24px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Info Overlay (visible at bottom of image as per screenshots) */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end h-1/2">
                    <h3 className="text-white text-[20px] font-semibold leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/80 text-[14px] font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E6E6E6] text-[#1A4D43] hover:bg-[#1A4D43] hover:text-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E6E6E6] bg-[#1A4D43] text-white hover:bg-[#143B33] transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default TeamSection;