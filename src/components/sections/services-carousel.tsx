"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    skipSnaps: false,
    containScroll: 'trimSnaps'
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
      className="py-16 md:py-[120px] bg-[#FAFAFA] overflow-hidden flex flex-col items-center"
    >
      <div className="container max-w-[1200px] px-6 text-center">
        <AnimatedSection>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[#E6E6E6] shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#1A4D43] animate-pulse"></div>
              <span className="text-[12px] md:text-[14px] font-semibold text-[#1A4D43] uppercase tracking-[0.1em]">Our Expertise</span>
            </div>
          </div>

          <h2 className="text-[32px] md:text-[48px] font-bold text-[#121212] leading-[1.1] mb-8 md:mb-16 max-w-[800px] mx-auto tracking-tight">
            Tailored solutions designed for your <span className="text-[#1A4D43]">business success</span>
          </h2>
        </AnimatedSection>
      </div>

      <div className="relative w-full">
        {/* Navigation Buttons - Hidden on small mobile, visible on tablet+ */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] hidden md:flex justify-between px-8 z-20 pointer-events-none">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            className="w-14 h-14 rounded-full bg-white text-[#1A4D43] flex items-center justify-center pointer-events-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 transition-colors cursor-pointer hover:bg-[#1A4D43] hover:text-white"
          >
            <ChevronLeft size={28} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            className="w-14 h-14 rounded-full bg-white text-[#1A4D43] flex items-center justify-center pointer-events-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 transition-colors cursor-pointer hover:bg-[#1A4D43] hover:text-white"
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>

        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-4 md:gap-8 px-[15%] md:px-[20%] lg:px-[25%]">
            {services.map((service, index) => {
              const isActive = index === selectedIndex;
              return (
                <motion.div 
                  key={index}
                  initial={false}
                  animate={{
                    width: isActive ? 'clamp(300px, 80vw, 500px)' : 'clamp(260px, 70vw, 420px)',
                    height: isActive ? 'clamp(400px, 70vh, 600px)' : 'clamp(340px, 60vh, 500px)',
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.92,
                    y: isActive ? 0 : 40,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 25,
                  }}
                  className={`relative flex-[0_0_auto] overflow-hidden group rounded-[32px] cursor-grab active:cursor-grabbing z-10 shadow-2xl shadow-black/5`}
                >
                  <div className={`relative w-full h-full transition-all duration-700 ${!isActive ? 'grayscale opacity-70' : 'grayscale-0'}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority={isActive}
                    />
                    
                    {/* Dynamic Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                    
                    {/* Subtle Top Inner Shadow for Depth */}
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
                      <motion.div
                        animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0.8 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-[22px] md:text-[28px] font-bold text-white mb-3 md:mb-4 tracking-tight leading-tight">
                          {service.title}
                        </h3>
                        
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ delay: 0.2 }}
                            >
                              <p className="text-[14px] md:text-[17px] text-white/90 leading-relaxed mb-6 max-w-[320px]">
                                {service.description}
                              </p>
                              
                              <motion.button 
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 text-white font-semibold text-[14px] md:text-[16px] group/btn"
                              >
                                <span>Learn more</span>
                                <div className="p-1 rounded-full bg-white/20 backdrop-blur-sm group-hover/btn:bg-white group-hover/btn:text-[#1A4D43] transition-colors">
                                  <ArrowUpRight size={16} />
                                </div>
                              </motion.button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Custom Pagination Dots */}
      <div className="flex items-center gap-3 mt-12 md:mt-20">
        {scrollSnaps.map((_, i) => (
          <button 
            key={i}
            onClick={() => scrollTo(i)}
            className="group relative flex items-center justify-center p-2 transition-all"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className={`transition-all duration-500 rounded-full ${
              i === selectedIndex 
                ? 'w-10 h-2 bg-[#1A4D43]' 
                : 'w-2 h-2 bg-[#E6E6E6] group-hover:bg-[#1A4D43]/40'
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
}
