"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatedSection, StaggeredChildren } from '@/components/ui/animated-section';

const features = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/TTZ62FEtZDMeSZdqiivrcLw73go-9.svg",
    title: "Digital Promotion",
    description: "Boost your online visibility with targeted digital and social media marketing."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/1EdiAQPtZngDAXZvIBVt6YZQMOs-10.svg",
    title: "Business Analysis",
    description: "Expert analysis to streamline your operations and maximize growth potential."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/nK5FIrBu2W1QnWt7F7A76OOkNzs-11.svg",
    title: "Tele-Marketing",
    description: "Connect directly with your customers through our professional outreach services."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/qASKRnUc5NcULrxYrJP31AKMQY-12.svg",
    title: "Loan Processing",
    description: "Simplify your financing journey with our expert business loan assistance."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/SJsjSKaZDYOSRjlGEaPo28mdbp8-13.svg",
    title: "App Listings",
    description: "Professional management for your app store presence and subscriptions."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/qZeNjj6DIXgksqzzaIH2krvnvQ-14.svg",
    title: "Flexible Work",
    description: "Explore opportunities with our work-from-home support and BPO services."
  }
];

export default function FeaturesGrid() {
  return (
    <section 
      id="features" 
      className="w-full bg-white py-[120px] px-6 lg:px-0"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <AnimatedSection>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#1A4D43]" />
            <span className="text-[14px] font-medium uppercase tracking-wider text-[#1A4D43]">
              Features
            </span>
          </div>

          <h2 className="text-[48px] font-semibold leading-[1.2] text-[#121212] mb-20 max-w-[800px] mx-auto">
            Key benefits that set us apart from other firms
          </h2>
        </AnimatedSection>

        <StaggeredChildren 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
          staggerDelay={100}
          baseDelay={200}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="mb-8 relative flex items-center justify-center">
                <div className="w-12 h-12 bg-[#1A4D43] rounded-full flex items-center justify-center p-3 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:bg-[#143B33]">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 invert brightness-0 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="text-[24px] font-semibold text-[#121212] mb-4 transition-colors duration-300 group-hover:text-[#1A4D43]">
                {feature.title}
              </h3>
              <p className="text-[18px] leading-[1.6] text-[#555555] max-w-[320px] transition-all duration-300 group-hover:text-[#333]">
                {feature.description}
              </p>
            </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
}