"use client";

import React from 'react';
import { Star } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

const TestimonialBanner: React.FC = () => {
  return (
    <section 
      className="w-full flex flex-col items-center justify-center bg-white"
      style={{ 
        paddingTop: '120px', 
        paddingBottom: '120px',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center">
        <AnimatedSection delay={0}>
          <div 
            className="flex items-center gap-2 px-4 py-2 mb-8 bg-[#F7F9F8] rounded-[24px] border border-[#E6E6E6] transition-all duration-300 hover:shadow-md hover:scale-105"
            style={{ height: '44px' }}
          >
            <div className="flex items-center gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill="#F1C40F" 
                  color="#F1C40F" 
                  strokeWidth={0}
                  className="transition-transform duration-300 hover:scale-125"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <span 
              className="font-medium text-[#121212]"
              style={{ 
                fontSize: '14px', 
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.01em'
              }}
            >
              Rated 4.9/5
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <blockquote className="max-w-[900px] mb-8 group cursor-default">
            <h3 
              className="text-[#121212] italic font-semibold leading-[1.2] transition-all duration-500 group-hover:text-[#1A4D43]"
              style={{ 
                fontSize: '48px', 
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.03em'
              }}
            >
              &quot;Startex revolutionized our customer understanding, boosting retention like never before.&quot;
            </h3>
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="flex flex-col items-center">
            <p 
              className="text-[#555555] font-medium transition-colors duration-300 hover:text-[#1A4D43]"
              style={{ 
                fontSize: '18px', 
                fontFamily: 'var(--font-sans)'
              }}
            >
              Muzamal Hussain
            </p>
            
            <div className="mt-4 flex gap-8">
              <div className="flex flex-col items-center group cursor-default">
                <span className="text-[14px] font-bold text-[#1A4D43] opacity-60 uppercase tracking-widest transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">High conversion</span>
              </div>
              <div className="w-[1px] h-4 bg-[#E6E6E6] self-center"></div>
              <div className="flex flex-col items-center group cursor-default">
                <span className="text-[14px] font-bold text-[#1A4D43] opacity-60 uppercase tracking-widest transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">2x sales</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialBanner;