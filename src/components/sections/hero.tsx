"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="w-full px-4 pt-4 md:pt-6 lg:pt-8 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div 
          className="bg-[#1A4D43] rounded-[24px] md:rounded-[40px] p-6 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transition: 'opacity 800ms ease-out, transform 800ms ease-out',
          }}
        >
          <div className="flex-1 z-10">
            <div 
              className="inline-flex items-center gap-2 bg-[#ffffff14] border border-[#ffffff1a] rounded-full px-4 py-2 mb-8"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms ease-out, transform 600ms ease-out',
                transitionDelay: '300ms',
              }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F1C40F" color="#F1C40F" className="animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <span className="text-white text-sm font-medium font-sans">Rated 4.9/5</span>
            </div>

              <h1 
                className="text-white text-[44px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.03em] mb-6 max-w-[600px]"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 700ms ease-out, transform 700ms ease-out',
                  transitionDelay: '400ms',
                }}
              >
                Scale Your Business with Pooja Associates
              </h1>

              <p 
                className="text-[#E8F5EE] text-lg md:text-xl font-normal leading-[1.6] mb-10 max-w-[500px] opacity-90"
                style={{
                  opacity: isLoaded ? 0.9 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 700ms ease-out, transform 700ms ease-out',
                  transitionDelay: '500ms',
                }}
              >
                Growth-focused marketing and promotion services for registered and subscribed customers. Elevate your brand with expert insights and tailored strategies.
              </p>

              <div 
                className="flex flex-wrap items-center gap-4"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 700ms ease-out, transform 700ms ease-out',
                  transitionDelay: '600ms',
                }}
              >
                  <a 
                    href="https://wa.me/918357892019" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center bg-white text-[#1A4D43] px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-[#E8F5EE] hover:scale-105 hover:shadow-lg"
                  >
                  Join Us
                  <div className="ml-2 w-8 h-8 rounded-full bg-[#1A4D43] flex items-center justify-center text-white overflow-hidden relative">
                    <ArrowUpRight size={18} className="absolute transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
                    <ArrowUpRight size={18} className="absolute -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </a>
              
              <a 
                href="#services" 
                className="inline-flex items-center text-white text-base font-semibold hover:opacity-80 transition-all duration-300 px-4 hover:translate-x-1"
              >
                What we do
              </a>
            </div>
          </div>

          <div 
            className="flex-1 w-full lg:max-w-[450px]"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.95)',
              transition: 'opacity 900ms ease-out, transform 900ms ease-out',
              transitionDelay: '200ms',
            }}
          >
            <div className="relative aspect-[4/5] w-full rounded-[24px] overflow-hidden shadow-2xl group">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/wHPEsYa9YHcGTTHOJvS0mO9XY-1.jpg"
                alt="Professional Business Consultant"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
          </div>
        </div>

        <div 
          className="py-16 md:py-24 text-center"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 700ms ease-out, transform 700ms ease-out',
            transitionDelay: '800ms',
          }}
        >
          <p className="text-[#555555] text-sm font-medium mb-10 tracking-widest uppercase">
            We&apos;ve partnered with:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-500">
            {[
              { src: "https://framerusercontent.com/images/Qifbcz2UjIveHTCuImUZcqT9kZg.svg", w: 120, h: 30, cls: "h-6" },
              { src: "https://framerusercontent.com/images/6QEz8kJbwqWFzbNDcgcMwaBk7Jk.svg", w: 150, h: 40, cls: "h-8" },
              { src: "https://framerusercontent.com/images/UsU6TSwGi1GYzawTJkBdu5BNeqg.svg", w: 100, h: 40, cls: "h-8" },
              { src: "https://framerusercontent.com/images/K7N7aNahky7BhBGyGdXp7oSDc.svg", w: 90, h: 50, cls: "h-10" },
              { src: "https://framerusercontent.com/images/4I0nUFgLGKqAqwEE0S5l6yrCXzQ.svg", w: 110, h: 35, cls: "h-7" },
            ].map((logo, i) => (
              <Image 
                key={i}
                src={logo.src} 
                alt={`Partner Logo ${i + 1}`} 
                width={logo.w} 
                height={logo.h} 
                className={`${logo.cls} w-auto transition-transform duration-300 hover:scale-110`}
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                  transitionDelay: `${900 + i * 100}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;