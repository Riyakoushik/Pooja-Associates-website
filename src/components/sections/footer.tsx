import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-[120px] pb-[40px] px-6 md:px-12 lg:px-20 border-t border-[#E6E6E6]">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20">
          
          <div className="flex flex-col gap-6 max-w-[400px]">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-[24px] font-semibold text-[#121212] font-display transition-colors duration-300 group-hover:text-[#1A4D43]">
                Pooja Associates
              </span>
            </Link>
            <p className="text-[18px] text-[#555555] leading-[1.6]">
              Growth-focused marketing and promotion services for registered and subscribed customers.
            </p>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6 md:items-end md:text-right">
            <h4 className="text-[20px] font-semibold text-[#121212]">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="mailto:marketing.poojaassociates@gmail.com" 
                  className="text-[18px] text-[#555555] hover:text-[#1A4D43] transition-colors"
                >
                  marketing.poojaassociates@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/918357892019" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] text-[#555555] hover:text-[#1A4D43] transition-colors"
                >
                  +91 83578 92019
                </a>
              </li>
              <li className="text-[18px] text-[#555555]">
                MP Nagar, Bhopal, Madhya Pradesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E6E6E6] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[14px] text-[#555555]">
            <span>© 2025 Pooja Associates. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;