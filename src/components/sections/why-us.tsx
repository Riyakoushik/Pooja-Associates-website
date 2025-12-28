"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/animated-section';

const WhyUs = () => {
  const otherFirmsFeatures = [
    {
      title: "Generic Strategies",
      description: "One-size-fits-all solutions that lack personalized insights and flexibility.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/tEzcLHiec4GbqaRoZhpBbWc18mI-7.svg"
    },
    {
      title: "Limited Guidance",
      description: "Clients are left to navigate complex challenges with minimal expert support.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/tEzcLHiec4GbqaRoZhpBbWc18mI-7.svg"
    },
    {
      title: "Hidden Fees",
      description: "Unexpected costs and additional charges that inflate your total investment.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/tEzcLHiec4GbqaRoZhpBbWc18mI-7.svg"
    }
  ];

  const stratexFeatures = [
    {
      title: "Tailored Consulting",
      description: "Custom strategies designed to fit your unique business needs and goals.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/O0bOor0hO76GQ0DZjtTYXbMew-8.svg"
    },
    {
      title: "Dedicated Support",
      description: "Expert guidance and hands-on assistance at every stage of your journey.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/O0bOor0hO76GQ0DZjtTYXbMew-8.svg"
    },
    {
      title: "Transparent Pricing",
      description: "No surprises—clear pricing structure so you pay only for what you need.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/O0bOor0hO76GQ0DZjtTYXbMew-8.svg"
    }
  ];

  return (
    <section className="bg-white py-[120px] w-full flex flex-col items-center overflow-hidden">
      <div className="container max-w-[1200px] px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span className="text-[14px] font-medium text-primary uppercase tracking-wide">
              Why choose us
            </span>
          </div>
          <h2 className="text-[48px] font-semibold text-brand-text-dark leading-[1.2] max-w-[800px]">
            Expert consulting tailored to your business success
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <AnimatedSection direction="left" delay={100}>
            <div className="bg-brand-off-white border border-border rounded-[24px] overflow-hidden flex flex-col p-[40px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-10">
                <h3 className="text-[24px] font-semibold text-brand-text-dark">Other Firms</h3>
              </div>
              <div className="flex flex-col gap-6">
                {otherFirmsFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 transition-all duration-300 hover:translate-x-2"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border border-border bg-white transition-transform duration-300 hover:scale-110">
                        <Image src={feature.icon} alt="icon" width={18} height={18} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[18px] font-semibold text-brand-text-dark mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[16px] text-brand-text-gray leading-[1.5]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className="bg-primary border border-primary rounded-[24px] overflow-hidden flex flex-col p-[40px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
              <div className="mb-10">
                <h3 className="text-[24px] font-semibold text-white">With Stratex</h3>
              </div>
              <div className="flex flex-col gap-6">
                {stratexFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 transition-all duration-300 hover:translate-x-2"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20">
                        <Image src={feature.icon} alt="icon" width={18} height={18} style={{ filter: 'brightness(0) invert(1)' }} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[18px] font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[16px] text-white/70 leading-[1.5]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;