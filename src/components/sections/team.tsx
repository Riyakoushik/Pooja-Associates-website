"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

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
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/PlN76M8KK3J8Iwj1r4XNicuoSeE-10.jpg',
  },
  {
    name: 'Daniel Lee',
    role: 'Financial & Growth Advisor',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/Rfi8Dzlz5SKxegez4irAvX21mk-14.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="py-[120px] bg-white overflow-hidden" id="team">
      <div className="container mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-[60px]">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#F7F9F8] rounded-full mb-4 border border-[#E6E6E6]">
            <div className="w-2 h-2 rounded-full bg-[#1A4D43]"></div>
            <span className="text-[14px] font-medium text-[#1A4D43] uppercase tracking-wider">
              Our team
            </span>
          </div>
          <h2 className="text-[48px] font-semibold text-[#121212] leading-[1.2] max-w-[600px]">
            Meet the experts behind your business success
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 snap-x">
            {teamMembers.map((member, index) => (
              <AnimatedSection 
                key={index}
                delay={index * 150}
                direction="up"
                className="flex-shrink-0 w-[282px] group relative snap-start"
              >
                <div className="relative h-[400px] w-full rounded-[24px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-white text-[20px] font-semibold leading-tight mb-1 transform transition-all duration-500 group-hover:translate-y-0">
                      {member.name}
                    </h3>
                    <p className="text-white/80 text-[14px] font-medium transform transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600} className="flex justify-center gap-4 mt-8">
            <button 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E6E6E6] text-[#1A4D43] transition-all duration-300 cursor-pointer hover:bg-[#1A4D43] hover:text-white hover:scale-110 hover:shadow-lg"
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E6E6E6] bg-[#1A4D43] text-white transition-all duration-300 cursor-pointer hover:bg-[#143B33] hover:scale-110 hover:shadow-lg"
              aria-label="Next slide"
            >
              <ArrowRight size={20} />
            </button>
          </AnimatedSection>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;