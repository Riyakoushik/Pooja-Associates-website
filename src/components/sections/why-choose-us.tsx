import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
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

  const withStratexFeatures = [
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
    <section id="why-choose-us" className="py-[120px] bg-white">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D9F2E6] px-3 py-1.5 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1C453B]"></div>
            <span className="text-[12px] font-bold text-[#1C453B] uppercase tracking-wider">
              Why choose us
            </span>
          </div>
          <h2 className="text-[48px] md:text-[56px] font-serif leading-[1.1] text-[#1A1A1A] max-w-[800px]">
            Expert consulting tailored to your business success
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Other Firms Card */}
          <div className="bg-white border border-[#E6E6E6] rounded-[32px] p-8 md:p-10 flex flex-col">
            <h3 className="text-[24px] font-semibold text-[#1A1A1A] mb-10 pb-6 border-b border-[#E6E6E6]">
              Other Firms
            </h3>
            <div className="space-y-10">
              {otherFirmsFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <img 
                      src={feature.icon} 
                      alt="Cross icon" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-2 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-[16px] text-[#4D4D4D] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* With Stratex Card */}
          <div className="bg-[#1C453B] rounded-[32px] p-8 md:p-10 flex flex-col text-white">
            <h3 className="text-[24px] font-semibold text-white mb-10 pb-6 border-b border-white/10">
              With Stratex
            </h3>
            <div className="space-y-10">
              {withStratexFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <img 
                      src={feature.icon} 
                      alt="Check icon" 
                      className="w-full h-full object-contain filter invert"
                    />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold text-white mb-2 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-[16px] text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;