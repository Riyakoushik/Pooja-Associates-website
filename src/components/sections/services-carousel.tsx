"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import useEmblaCarousel from 'embla-carousel-react';

const services = [
  {
    title: "Content Design & Marketing",
    description: "Creative storytelling and strategic content to capture your audience's attention.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/0YczDvjwpwN80wyyW0HHaSg0VA-2.jpg",
  },
  {
    title: "Social Media Marketing",
    description: "Building your brand presence across all major social platforms with engagement-driven campaigns.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/iL1g2JceXoecOESZCnxxGh4SA-3.jpg",
  },
  {
    title: "Business Analysis",
    description: "Data-driven insights to optimize your operations and drive sustainable growth.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/F8bRxnZXtathTlYe6oa9P55kjsY-4.jpg",
  },
  {
    title: "Digital & Social Media",
    description: "Comprehensive digital strategies including email marketing and ad creation for maximum reach.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/0YczDvjwpwN80wyyW0HHaSg0VA-2.jpg",
  },
  {
    title: "Listing Services",
    description: "Get your business noticed with professional app listing and subscription management.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/iL1g2JceXoecOESZCnxxGh4SA-3.jpg",
  },
  {
    title: "Business Loan Processing",
    description: "Expert assistance in navigating and securing the right financing for your business needs.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/F8bRxnZXtathTlYe6oa9P55kjsY-4.jpg",
  }
];

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'center',
    loop: true,
    skipSnaps: false
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section 
      id="services" 
      className="py-[120px] bg-white overflow-hidden flex flex-col items-center"
    >
      <div className="container max-w-[1200px] px-6 text-center">
        <AnimatedSection>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F7F9F8] rounded-full border border-[#E6E6E6]">
              <div className="w-2 h-2 rounded-full bg-[#1A4D43]"></div>
              <span className="text-[14px] font-medium text-[#1A4D43] uppercase tracking-wider">Services</span>
            </div>
          </div>

          <h2 className="text-[48px] font-semibold text-[#121212] leading-[1.2] mb-16 max-w-[700px] mx-auto">
            Comprehensive solutions for your business growth
          </h2>
        </AnimatedSection>
      </div>

      <div className="relative w-full max-w-[1920px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1300px] flex justify-between px-4 z-20 pointer-events-none">
          <button 
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full bg-[#1A4D43] text-white flex items-center justify-center pointer-events-auto shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#153a33] hover:scale-110 hover:shadow-xl active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-[#1A4D43] text-white flex items-center justify-center pointer-events-auto shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#153a33] hover:scale-110 hover:shadow-xl active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-[10%] md:px-0">
            {services.map((service, index) => {
              const isActive = index === selectedIndex;
              return (
                <div 
                  key={index}
                  className={`relative flex-[0_0_auto] overflow-hidden group rounded-[24px] cursor-grab active:cursor-grabbing transition-all duration-500
                  ${isActive ? 'w-[480px] h-[580px] z-10 scale-100 opacity-100' : 'w-[400px] h-[480px] opacity-60 scale-90 mt-12'}`}
                >
                  <div className={`relative w-full h-full transition-all duration-700 ${!isActive ? 'grayscale hover:grayscale-0' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-10">
                      <h3 className="text-[24px] font-semibold text-white mb-3 transform transition-all duration-500 group-hover:-translate-y-2">
                        {service.title}
                      </h3>
                      <p className={`text-[16px] text-white/80 leading-relaxed transform transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="flex gap-2.5 mt-10">
        {scrollSnaps.map((_, i) => (
          <div 
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
              i === selectedIndex ? 'bg-[#1A4D43]' : 'bg-[#E6E6E6] hover:bg-[#1A4D43]/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}