import React from 'react';
import Image from 'next/image';

interface StatPillProps {
  value: string;
  label: string;
  className?: string;
  side: 'left' | 'right';
}

const StatPill = ({ value, label, className = '', side }: StatPillProps) => {
  return (
    <div className={`absolute flex items-center group pointer-events-none ${className}`}>
      {side === 'right' && (
        <div className="w-[80px] h-[1px] bg-[#E6E6E6] hidden lg:block" />
      )}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1C453B] rounded-[100px] border border-[#2D5A4F] shadow-sm transform transition-transform hover:scale-105 pointer-events-auto">
        <span className="text-white font-sans text-[12px] font-bold tracking-tight whitespace-nowrap">{value}</span>
        <span className="text-white font-sans text-[12px] font-medium opacity-80 whitespace-nowrap">{label}</span>
      </div>
      {side === 'left' && (
        <div className="w-[80px] h-[1px] bg-[#E6E6E6] hidden lg:block" />
      )}
    </div>
  );
};

export default function ImpactResults() {
  return (
    <section id="impact" className="py-[120px] bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 bg-[#1C453B] rounded-full" />
            <span className="text-[14px] font-medium tracking-wide text-[#1C453B] uppercase">Impact</span>
          </div>
          
          <h2 className="text-[48px] md:text-[56px] lg:text-[64px] font-serif leading-[1.1] text-[#1A1A1A] mb-6 max-w-[800px] mx-auto">
            Real results that drive lasting impact for everyone
          </h2>
          
          <p className="text-[18px] text-[#4D4D4D] leading-[1.6] max-w-[600px] mx-auto">
            We deliver tailored strategies, innovative solutions, and dedicated support to drive lasting growth
          </p>
        </div>

        {/* Central Visualization */}
        <div className="relative max-w-[800px] mx-auto flex justify-center items-center pb-20 mt-10">
          {/* Portrait Image with Floating Pills */}
          <div className="relative z-10">
            {/* The Image */}
            <div className="w-[280px] h-[360px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] rounded-[40px] overflow-hidden border-[12px] border-white shadow-xl relative grayscale-[0.2]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/aGCx5FMi3PVDM61orsuLiWio0k-8.jpg"
                alt="Impact professional"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
              />
            </div>

            {/* Floating Stats - Left Side */}
            <div className="absolute top-[15%] left-0 -translate-x-[50%] lg:-translate-x-[110%] z-20">
              <StatPill value="$7M+" label="Revenue" side="left" />
            </div>
            
            <div className="absolute top-[45%] left-0 -translate-x-[12%] lg:-translate-x-[130%] z-20">
              <StatPill value="72%" label="Growth" side="left" />
            </div>
            
            <div className="absolute top-[75%] left-0 translate-x-[10%] lg:-translate-x-[100%] z-20">
              <StatPill value="65%" label="Skills" side="left" />
            </div>

            {/* Floating Stats - Right Side */}
            <div className="absolute top-[18%] right-0 translate-x-[50%] lg:translate-x-[110%] z-20">
              <StatPill value="78%" label="Impact" side="right" />
            </div>
            
            <div className="absolute top-[48%] right-0 translate-x-[12%] lg:translate-x-[130%] z-20">
              <StatPill value="1%" label="Designers" side="right" />
            </div>
            
            <div className="absolute top-[78%] right-0 -translate-x-[10%] lg:translate-x-[100%] z-20">
              <StatPill value="10+" label="Consultants" side="right" />
            </div>
          </div>

          {/* Decorative Elements / Connection Lines (Simplified approach using absolute Positioning) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {/* SVG Lines could go here but following CSS strategy for responsiveness and accuracy */}
          </div>
        </div>
      </div>
    </section>
  );
}