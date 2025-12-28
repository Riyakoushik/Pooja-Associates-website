import React from 'react';
import Image from 'next/image';

/**
 * Partners section displaying grayscale company logos.
 * According to the instructions and screenshots, this section 
 * appears immediately after the Hero section.
 */
const Partners = () => {
  const logos = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/Qifbcz2UjIveHTCuImUZcqT9kZg-2.svg",
      alt: "Partner Logo 1",
      width: 140,
      height: 30,
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/6QEz8kJbwqWFzbNDcgcMwaBk7Jk-3.svg",
      alt: "Partner Logo 2",
      width: 176,
      height: 40,
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/UsU6TSwGi1GYzawTJkBdu5BNeqg-4.svg",
      alt: "Partner Logo 3",
      width: 105,
      height: 40,
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/K7N7aNahky7BhBGyGdXp7oSDc-5.svg",
      alt: "Partner Logo 4",
      width: 100,
      height: 51,
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/svgs/4I0nUFgLGKqAqwEE0S5l6yrCXzQ-6.svg",
      alt: "Partner Logo 5",
      width: 132,
      height: 35,
    },
  ];

  return (
    <section 
      className="w-full flex flex-col items-center justify-center bg-white"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px'
      }}
    >
      <div className="container flex flex-col items-center gap-10">
        {/* Subtitle */}
        <div className="w-full flex justify-center">
          <p 
            className="text-center font-medium"
            style={{
              fontSize: '18px',
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-brand-text-dark)',
              lineHeight: '1.2'
            }}
          >
            We&rsquo;ve partnered with:
          </p>
        </div>

        {/* Logos Row */}
        <div className="w-full flex flex-wrap items-center justify-center gap-x-12 gap-y-8 px-4 opacity-70">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              style={{
                minWidth: '120px',
                height: '50px'
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;