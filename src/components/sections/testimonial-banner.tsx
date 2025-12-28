import React from 'react';
import { Star } from 'lucide-react';

/**
 * TestimonialBanner Component
 * 
 * A pixel-perfect clone of the centered testimonial section.
 * Features:
 * - 5-star rating with "Rated 4.9/5" text
 * - Large italicized quote
 * - Author name below
 * - Consistent styling with the Stratex design system
 */
const TestimonialBanner: React.FC = () => {
  return (
    <section 
      className="w-full flex flex-col items-center justify-center bg-white"
      style={{ 
        paddingTop: '120px', 
        paddingBottom: '120px',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center">
        
        {/* Rating Pill */}
        <div 
          className="flex items-center gap-2 px-4 py-2 mb-8 bg-[#F7F9F8] rounded-[24px] border border-[#E6E6E6]"
          style={{ height: '44px' }}
        >
          <div className="flex items-center gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill="#F1C40F" 
                color="#F1C40F" 
                strokeWidth={0}
              />
            ))}
          </div>
          <span 
            className="font-medium text-[#121212]"
            style={{ 
              fontSize: '14px', 
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.01em'
            }}
          >
            Rated 4.9/5
          </span>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="max-w-[900px] mb-8">
          <h3 
            className="text-[#121212] italic font-semibold leading-[1.2]"
            style={{ 
              fontSize: '48px', 
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.03em'
            }}
          >
            &quot;Startex revolutionized our customer understanding, boosting retention like never before.&quot;
          </h3>
        </blockquote>

        {/* Author Name */}
        <div className="flex flex-col items-center">
          <p 
            className="text-[#555555] font-medium"
            style={{ 
              fontSize: '18px', 
              fontFamily: 'var(--font-sans)'
            }}
          >
            Muzamal Hussain
          </p>
          
          {/* Subtle decoration lines if needed by visual context, 
              though the screenshots show a clean centered layout */}
          <div className="mt-4 flex gap-8">
             <div className="flex flex-col items-center">
                <span className="text-[14px] font-bold text-[#1A4D43] opacity-60 uppercase tracking-widest">High conversion</span>
             </div>
             <div className="w-[1px] h-4 bg-[#E6E6E6] self-center"></div>
             <div className="flex flex-col items-center">
                <span className="text-[14px] font-bold text-[#1A4D43] opacity-60 uppercase tracking-widest">2x sales</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialBanner;