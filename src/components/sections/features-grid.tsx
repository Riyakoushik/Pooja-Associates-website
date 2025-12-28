import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/TTZ62FEtZDMeSZdqiivrcLw73go-9.svg",
    title: "Unlimited consultations",
    description: "Schedule as many strategy sessions as needed to your business"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/1EdiAQPtZngDAXZvIBVt6YZQMOs-10.svg",
    title: "Tailored solutions",
    description: "Get customized strategies designed to with your unique goals"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/nK5FIrBu2W1QnWt7F7A76OOkNzs-11.svg",
    title: "Expert insights",
    description: "Leverage industry-leading expertise to drive informed decisions"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/qASKRnUc5NcULrxYrJP31AKMQY-12.svg",
    title: "Data strategies",
    description: "Make confident moves with insights backed by research & analytics."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/SJsjSKaZDYOSRjlGEaPo28mdbp8-13.svg",
    title: "Ongoing support",
    description: "Stay ahead with continuous guidance and recommendation"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/qZeNjj6DIXgksqzzaIH2krvnvQ-14.svg",
    title: "Seamless execution",
    description: "From planning to implementation, we ensure a smooth & process"
  }
];

export default function FeaturesGrid() {
  return (
    <section 
      id="features" 
      className="w-full bg-white py-[120px] px-6 lg:px-0"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Tag */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#1A4D43]" />
          <span className="text-[14px] font-medium uppercase tracking-wider text-[#1A4D43]">
            Features
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-[48px] font-semibold leading-[1.2] text-[#121212] mb-20 max-w-[800px] mx-auto">
          Key benefits that set us apart from other ferms
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="mb-8 relative flex items-center justify-center">
                <div className="w-12 h-12 bg-[#1A4D43] rounded-full flex items-center justify-center p-3 shadow-md">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 invert brightness-0"
                  />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-[24px] font-semibold text-[#121212] mb-4">
                {feature.title}
              </h3>
              <p className="text-[18px] leading-[1.6] text-[#555555] max-w-[320px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}