import React from 'react';
import Image from 'next/image';

const ImpactStats = () => {
  const stats = [
    {
      label: 'Revenue',
      value: '$7M+',
      position: 'top-left',
      className: 'top-[90px] -left-24 lg:-left-32',
      lineWidth: 'w-24 lg:w-32',
      lineRotate: 'rotate-0',
      lineTranslate: 'translate-y-1/2',
    },
    {
      label: 'Growth',
      value: '72%',
      position: 'middle-left',
      className: 'top-[220px] -left-28 lg:-left-36',
      lineWidth: 'w-28 lg:w-36',
      lineRotate: 'rotate-0',
      lineTranslate: 'translate-y-1/2',
    },
    {
      label: 'Skills',
      value: '65%',
      position: 'bottom-left',
      className: 'top-[350px] -left-20 lg:-left-28',
      lineWidth: 'w-20 lg:w-28',
      lineRotate: 'rotate-0',
      lineTranslate: 'translate-y-1/2',
    },
    {
      label: 'Impact',
      value: '78%',
      position: 'top-right',
      className: 'top-[90px] -right-24 lg:-right-32',
      lineWidth: 'w-24 lg:w-32',
      lineRotate: 'rotate-0',
      lineTranslate: 'translate-y-1/2',
    },
    {
      label: 'Designers',
      value: '1%',
      position: 'middle-right',
      className: 'top-[220px] -right-28 lg:-right-36',
      lineWidth: 'w-28 lg:w-36',
      lineRotate: 'rotate-0',
      lineTranslate: 'translate-y-1/2',
    },
    {
      label: 'Consultants',
      value: '10+',
      position: 'bottom-right',
      className: 'top-[350px] -right-32 lg:-right-40',
      lineWidth: 'w-32 lg:w-40',
      lineRotate: 'rotate-0',
      lineTranslate: 'translate-y-1/2',
    },
  ];

  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-16 max-w-[800px] mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1A4D43]" />
            <span className="text-[14px] font-medium text-[#1A4D43] uppercase tracking-wider">Impact</span>
          </div>
          
          <h2 className="text-[48px] leading-[1.2] font-semibold text-[#121212] mb-6 tracking-tight">
            Real results that drive lasting impact for everyone
          </h2>
          
          <p className="text-[18px] leading-[1.6] text-[#555555] max-w-[600px]">
            We deliver tailored strategies, innovative solutions, and dedicated support to drive lasting growth
          </p>
        </div>

        {/* Interactive Stats Grid */}
        <div className="relative flex justify-center items-center mt-20 h-[500px] max-w-[800px] mx-auto">
          
          {/* Central Image Wrapper */}
          <div className="relative w-[300px] h-[450px] rounded-[40px] overflow-hidden z-10 shadow-sm border border-[#E6E6E6]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/aGCx5FMi3PVDM61orsuLiWio0k-8.jpg"
              alt="Professional consultant representative"
              fill
              className="object-cover"
              sizes="300px"
              priority
            />
          </div>

          {/* Floating Stats & Connecting Lines */}
          {stats.map((stat, idx) => {
            const isLeft = stat.position.includes('left');
            return (
              <div
                key={idx}
                className={`absolute flex items-center ${stat.className} z-20`}
              >
                {/* Stat Badge */}
                <div className={`flex items-center gap-2 bg-[#1A4D43] rounded-full py-1.5 px-3 shadow-md min-w-[120px] transition-transform hover:scale-105 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  <span className="text-white font-bold text-[16px]">{stat.value}</span>
                  <span className="text-[#E8F5EE] text-[13px] font-medium">{stat.label}</span>
                </div>

                {/* Connecting Line (Desktop Only) */}
                <div 
                  className={`hidden md:block absolute h-[1px] bg-[#E6E6E6] rounded-full ${stat.lineWidth} ${isLeft ? 'left-[calc(100%-8px)]' : 'right-[calc(100%-8px)]'}`}
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;