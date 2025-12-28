import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Simple Booking',
    description: 'Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/WWbcr9xA8ezJ0nrGh99vBWXbBs-5.jpg',
    reverse: false,
  },
  {
    number: '02',
    title: 'Tailored Strategy',
    description: 'We analyze your goals and create a customized strategy designed to drive measurable success for your business needs and exploring more ideas.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/xc6RQaW8YMwoiQjv7ZOKCZp8b8-6.jpg',
    reverse: true,
  },
  {
    number: '03',
    title: 'Continuous Support',
    description: 'From implementation to optimization, we provide ongoing guidance and adjustments to ensure long-term growth for you and you business with stratex.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/ItACgVJBPr0EhH34leMd7ZB0Q-7.jpg',
    reverse: false,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-[120px] bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-[80px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9F2E6] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1C453B]" />
            <span className="text-[12px] font-bold tracking-wider uppercase text-[#1C453B]">How it works</span>
          </div>
          <h2 className="text-[48px] font-serif font-medium leading-[1.2] text-[#1A1A1A] max-w-[700px] mb-8">
            A proven process to achieve your biggest goals
          </h2>
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 bg-[#1C453B] text-white px-8 py-4 rounded-full text-[16px] font-medium transition-all hover:opacity-90"
          >
            Get in touch
            <div className="relative w-5 h-5 overflow-hidden">
               <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-full" />
               <ArrowRight className="w-5 h-5 absolute top-0 -left-full transition-transform group-hover:translate-x-full" />
            </div>
          </a>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E6E6E6] transform -translate-x-1/2 hidden md:block" />

          {/* Steps */}
          <div className="space-y-[120px]">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative ${
                  step.reverse ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className={`relative w-full max-w-[480px] aspect-[4/3] rounded-[32px] overflow-hidden ${
                    step.reverse ? 'md:ml-12' : 'md:mr-12'
                  }`}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                  </div>
                </div>

                {/* Central Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#1C453B] text-white text-[14px] font-bold border-[6px] border-white shadow-sm">
                  {step.number}
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                  <div className={`max-w-[400px] mx-auto md:mx-0 ${
                    step.reverse ? 'md:mr-auto text-left' : 'md:ml-24 text-left'
                  }`}>
                    <h3 className="text-[24px] font-semibold text-[#1A1A1A] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[18px] text-[#4D4D4D] leading-[1.6] mb-6">
                      {step.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#1A1A1A] hover:opacity-70 transition-opacity"
                    >
                      Discover More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;