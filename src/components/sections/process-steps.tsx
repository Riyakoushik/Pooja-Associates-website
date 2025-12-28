"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

const ProcessSteps = () => {
  const steps = [
    {
      id: "01",
      title: "Simple Booking",
      description: "Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/WWbcr9xA8ezJ0nrGh99vBWXbBs-5.jpg",
      align: "right",
    },
    {
      id: "02",
      title: "Tailored Strategy",
      description: "We analyze your goals and create a customized strategy designed to drive measurable success for your business needs and exploring more ideas.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/xc6RQaW8YMwoiQjv7ZOKCZp8b8-6.jpg",
      align: "left",
    },
    {
      id: "03",
      title: "Continuous Support",
      description: "From implementation to optimization, we provide ongoing guidance and adjustments to ensure long-term growth for you and you business with stratex.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/ItACgVJBPr0EhH34leMd7ZB0Q-7.jpg",
      align: "right",
    },
  ];

  return (
    <section id="how-it-works" className="py-[120px] bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <AnimatedSection className="flex flex-col items-center text-center mb-[80px]">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-[#E8F5EE] border border-[#E6E6E6] rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#1A4D43]" />
            <span className="text-[14px] font-medium text-[#1A4D43] uppercase tracking-wider">
              How it works
            </span>
          </div>
          
          <h2 className="text-[48px] font-semibold leading-[1.2] text-[#121212] tracking-[-0.02em] max-w-[600px] mb-8">
            A proven process to achieve your biggest goals
          </h2>

          <a 
            href="https://wa.me/918357892019" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-[#1A4D43] text-white rounded-full transition-all duration-300 hover:bg-[#143B33] hover:scale-105 hover:shadow-lg"
          >
            <span className="text-[16px] font-semibold">Get in touch</span>
            <div className="relative w-5 h-5 overflow-hidden">
              <ArrowRight className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </div>
          </a>
        </AnimatedSection>

        <div className="relative pt-12">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E6E6E6] -translate-x-1/2 hidden md:block" />

          <div className="space-y-[100px] relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
                <AnimatedSection 
                  delay={100}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#1A4D43] text-white text-[14px] font-semibold border-4 border-white transition-all duration-500 hover:scale-125 hover:shadow-lg"
                >
                  {step.id}
                </AnimatedSection>

                <AnimatedSection 
                  direction={step.align === 'right' ? 'left' : 'right'} 
                  delay={index * 200}
                  className={`${step.align === 'right' ? 'order-1' : 'order-1 md:order-2'} flex justify-center`}
                >
                  {step.align === 'right' ? (
                    <div className="relative w-full aspect-[4/3] max-w-[500px] rounded-[24px] overflow-hidden shadow-sm group">
                      <Image 
                        src={step.image} 
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                    </div>
                  ) : (
                    <div className="w-full max-w-[450px] text-left">
                      <h3 className="text-[24px] font-semibold text-[#121212] mb-4">{step.title}</h3>
                      <p className="text-[18px] leading-[1.6] text-[#555555] mb-6">
                        {step.description}
                      </p>
                      <button className="group/btn flex items-center gap-2 text-[#1A4D43] font-semibold transition-all duration-300 hover:gap-3">
                        Discover More <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  )}
                </AnimatedSection>

                <AnimatedSection 
                  direction={step.align === 'right' ? 'right' : 'left'} 
                  delay={index * 200 + 100}
                  className={`${step.align === 'right' ? 'order-2' : 'order-2 md:order-1'} flex justify-center`}
                >
                  {step.align === 'right' ? (
                    <div className="w-full max-w-[450px] text-left">
                      <h3 className="text-[24px] font-semibold text-[#121212] mb-4">{step.title}</h3>
                      <p className="text-[18px] leading-[1.6] text-[#555555] mb-6">
                        {step.description}
                      </p>
                      <button className="group/btn flex items-center gap-2 text-[#1A4D43] font-semibold transition-all duration-300 hover:gap-3">
                        Discover More <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[4/3] max-w-[500px] rounded-[24px] overflow-hidden shadow-sm group">
                      <Image 
                        src={step.image} 
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                    </div>
                  )}
                </AnimatedSection>

                <div className="absolute -top-6 left-0 flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-[#1A4D43] text-white text-[12px] font-semibold">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;