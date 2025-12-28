import React from 'react';

/**
 * Pricing component for the Stratex website clone.
 * Features two cards: Standard (white) and Premium (highlighted light green with "Popular" badge).
 * Adheres to the exact visual style, typography, and spacing defined in the design tokens.
 */

const CheckIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 flex-shrink-0"
  >
    <path 
      d="M13.3334 4L6.00008 11.3333L2.66675 8" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-[120px] bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-primary mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[14px] font-medium uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="text-[48px] font-semibold text-brand-text-dark leading-[1.2] max-w-[600px] mb-4">
            Flexible pricing tailored to your business needs
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-center max-w-[1000px] mx-auto">
          
          {/* Standard Card */}
          <div className="flex flex-col p-10 bg-white border border-border rounded-[24px] hover:shadow-sm transition-shadow">
            <div className="mb-8">
              <h3 className="text-[24px] font-semibold text-brand-text-dark mb-4">Standard</h3>
              <p className="text-brand-text-gray text-[18px] leading-[1.6]">
                Perfect for small teams looking to streamline consulting processes
              </p>
            </div>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[48px] font-bold text-brand-text-dark leading-none">$99</span>
              <span className="text-brand-text-gray text-[18px]">/Month</span>
            </div>

            <a 
              href="#contact" 
              className="w-full py-4 px-6 mb-10 rounded-full border border-border text-center text-brand-text-dark font-semibold text-[16px] hover:bg-secondary transition-colors"
            >
              Request Consultation
            </a>

            <ul className="space-y-4">
              {[
                "Personalized strategy sessions",
                "Essential business analytics",
                "Core reporting tools",
                "Up to 5 team members",
                "Dedicated email support",
                "Customizable workflow insights",
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-3 text-brand-text-gray text-[16px]">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Card (Highlighted) */}
          <div className="flex flex-col p-10 bg-[#E8F5EE] border border-transparent rounded-[24px] hover:shadow-md transition-shadow relative">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-[24px] font-semibold text-brand-text-dark">Premium</h3>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-carbon text-white rounded-full">
                <span className="text-[12px] font-bold">✨</span>
                <span className="text-[12px] font-bold uppercase tracking-tight">Popular</span>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-brand-text-gray text-[18px] leading-[1.6]">
                Designed for growing consulting firms needing insights & support.
              </p>
            </div>

            <div className="flex items-baseline gap-1 mb-8 text-brand-text-dark">
              <span className="text-[48px] font-bold leading-none">$299</span>
              <span className="text-[18px] text-brand-text-gray opacity-80">/Month</span>
            </div>

            <a 
              href="#contact" 
              className="w-full py-4 px-6 mb-10 rounded-full bg-brand-carbon text-white text-center font-semibold text-[16px] hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>

            <ul className="space-y-4">
              {[
                "Unlimited strategy consultations",
                "Advanced business analytics",
                "Up to 10 team members",
                "Comprehensive reporting suite",
                "Up to 10 team members",
                "Priority email & chat support",
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-3 text-brand-text-gray text-[16px]">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;