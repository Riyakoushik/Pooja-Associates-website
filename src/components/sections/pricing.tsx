"use client";

import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';

const CheckIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 flex-shrink-0"
  >
    <path 
      d="M13.3334 4L6.00008 11.3333L2.66675 8" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-[120px] bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <AnimatedSection className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-primary mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[14px] font-medium uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="text-[48px] font-semibold text-brand-text-dark leading-[1.2] max-w-[600px] mb-4">
            Flexible pricing tailored to your business needs
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-center max-w-[1000px] mx-auto">
            <AnimatedSection direction="left" delay={100}>
              <div className="flex flex-col p-10 bg-white border border-border rounded-[24px] h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:border-primary/20">
                <div className="mb-8">
                  <h3 className="text-[24px] font-semibold text-brand-text-dark mb-4">Monthly Plan</h3>
                  <p className="text-brand-text-gray text-[18px] leading-[1.6]">
                    Flexible growth-focused marketing services billed monthly.
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-[48px] font-bold text-brand-text-dark leading-none">₹1,000</span>
                  <span className="text-brand-text-gray text-[18px]">/Month</span>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-4 px-6 mb-10 rounded-full border border-border text-center text-brand-text-dark font-semibold text-[16px] transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-[1.02]"
                >
                  Join Us
                </a>

                <ul className="space-y-4">
                  {[
                    "Content design & marketing",
                    "Social media marketing",
                    "Business analysis services",
                    "Digital promotion tools",
                    "Standard support",
                    "Listing services access",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-brand-text-gray text-[16px] transition-all duration-300 hover:translate-x-1 hover:text-brand-text-dark">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col p-10 bg-[#E8F5EE] border border-transparent rounded-[24px] h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <h3 className="text-[24px] font-semibold text-brand-text-dark">Yearly Plan</h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-carbon text-white rounded-full animate-pulse">
                    <span className="text-[12px] font-bold">✨</span>
                    <span className="text-[12px] font-bold uppercase tracking-tight">Best Value</span>
                  </div>
                </div>
                
                <div className="mb-8 relative z-10">
                  <p className="text-brand-text-gray text-[18px] leading-[1.6]">
                    Save over 15% with our annual subscription for long-term growth.
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-8 text-brand-text-dark relative z-10">
                  <span className="text-[48px] font-bold leading-none">₹10,000</span>
                  <span className="text-[18px] text-brand-text-gray opacity-80">/Year</span>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-4 px-6 mb-10 rounded-full bg-brand-carbon text-white text-center font-semibold text-[16px] transition-all duration-300 hover:bg-primary hover:scale-[1.02] hover:shadow-lg relative z-10"
                >
                  Join Us
                </a>

                <ul className="space-y-4 relative z-10">
                  {[
                    "Everything in Monthly Plan",
                    "Priority business loan processing",
                    "Advanced digital marketing",
                    "Full ad creation suite",
                    "Premium tele-marketing support",
                    "Priority response time",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-brand-text-gray text-[16px] transition-all duration-300 hover:translate-x-1 hover:text-brand-text-dark">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Pricing;