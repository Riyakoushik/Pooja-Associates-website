import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';

/**
 * HeroSection Component
 * Clones the hero section of the Stratex website with pixel-perfect accuracy.
 * Features: Dark green rounded container, 5-star rating badge, headline, description, CTAs, and a consultant portrait.
 */
const HeroSection: React.FC = () => {
  return (
    <header className="w-full px-4 pt-4 md:pt-6 lg:pt-8 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Hero Container */}
        <div className="bg-[#1A4D43] rounded-[24px] md:rounded-[40px] p-6 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
          
          {/* Left Content Column */}
          <div className="flex-1 z-10">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffffff14] border border-[#ffffff1a] rounded-full px-4 py-2 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F1C40F" color="#F1C40F" />
                ))}
              </div>
              <span className="text-white text-sm font-medium font-sans">Rated 4.9/5</span>
            </div>

            {/* Headline */}
            <h1 className="text-white text-[44px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.03em] mb-6 max-w-[600px]">
              Expert consulting that drives real growth
            </h1>

            {/* Description */}
            <p className="text-[#E8F5EE] text-lg md:text-xl font-normal leading-[1.6] mb-10 max-w-[500px] opacity-90">
              Elevate your business with expert insights, tailored strategies, and unwavering support designed
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center bg-white text-[#1A4D43] px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-[#E8F5EE]"
              >
                Get in touch
                <div className="ml-2 w-8 h-8 rounded-full bg-[#1A4D43] flex items-center justify-center text-white overflow-hidden relative">
                  <ArrowUpRight size={18} className="absolute transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
                  <ArrowUpRight size={18} className="absolute -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </a>
              
              <a 
                href="#services" 
                className="inline-flex items-center text-white text-base font-semibold hover:opacity-80 transition-opacity px-4"
              >
                What we do
              </a>
            </div>
          </div>

          {/* Right Consultant Image */}
          <div className="flex-1 w-full lg:max-w-[450px]">
            <div className="relative aspect-[4/5] w-full rounded-[24px] overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/wHPEsYa9YHcGTTHOJvS0mO9XY-1.jpg"
                alt="Professional Business Consultant"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-16 md:py-24 text-center">
          <p className="text-[#555555] text-sm font-medium mb-10 tracking-widest uppercase">
            We’ve partnered with:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale transition-all">
             <Image 
                src="https://framerusercontent.com/images/Qifbcz2UjIveHTCuImUZcqT9kZg.svg" 
                alt="Partner Logo 1" 
                width={120} 
                height={30} 
                className="h-6 w-auto"
              />
              <Image 
                src="https://framerusercontent.com/images/6QEz8kJbwqWFzbNDcgcMwaBk7Jk.svg" 
                alt="Partner Logo 2" 
                width={150} 
                height={40} 
                className="h-8 w-auto"
              />
              <Image 
                src="https://framerusercontent.com/images/UsU6TSwGi1GYzawTJkBdu5BNeqg.svg" 
                alt="Partner Logo 3" 
                width={100} 
                height={40} 
                className="h-8 w-auto"
              />
              <Image 
                src="https://framerusercontent.com/images/K7N7aNahky7BhBGyGdXp7oSDc.svg" 
                alt="Partner Logo 4" 
                width={90} 
                height={50} 
                className="h-10 w-auto"
              />
              <Image 
                src="https://framerusercontent.com/images/4I0nUFgLGKqAqwEE0S5l6yrCXzQ.svg" 
                alt="Partner Logo 5" 
                width={110} 
                height={35} 
                className="h-7 w-auto"
              />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;