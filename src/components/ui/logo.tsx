import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className = "", size = 32 }: LogoProps) => {
  return (
    <div 
      className={`relative flex items-center justify-center rounded-lg bg-[#1A4D43] transition-all duration-300 group-hover:scale-105 overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <span 
        className="font-bold text-white select-none pointer-events-none"
        style={{ fontSize: size * 0.45 }}
      >
        PA
      </span>
      
      {/* Subtle Shine */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
    </div>
  );
};
