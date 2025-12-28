import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className = "", size = 32 }: LogoProps) => {
  return (
    <div 
      className={`relative flex items-center justify-center rounded-xl bg-[#1A4D43] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
        boxShadow: "0 10px 15px -3px rgba(26, 77, 67, 0.3), 0 4px 6px -2px rgba(26, 77, 67, 0.05)"
      }}
    >
      {/* Abstract Background Detail */}
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full blur-xl animate-pulse" />
      
      <svg 
        width={size * 0.7} 
        height={size * 0.7} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Modern Stylized P & A Mark */}
        {/* The 'P' part */}
        <path 
          d="M30 20V80M30 20H60C73.8071 20 85 31.1929 85 45C85 58.8071 73.8071 70 60 70H30" 
          stroke="white" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* The 'A' bridge/overlay */}
        <path 
          d="M50 45L75 80" 
          stroke="white" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Inner glow dot */}
        <circle cx="30" cy="20" r="4" fill="white" />
      </svg>
      
      {/* Decorative Shine */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
    </div>
  );
};
