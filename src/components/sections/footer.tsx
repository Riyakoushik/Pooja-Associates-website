import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-[120px] pb-[40px] px-6 md:px-12 lg:px-20 border-t border-[#E6E6E6]">
      <div className="max-width-[1200px] mx-auto w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          
              <div className="flex flex-col gap-6 max-w-[320px]">
                <Link href="/" className="flex items-center gap-2 group">
                  <Logo size={32} />
                  <span className="text-[22px] font-semibold text-[#121212] font-display transition-colors duration-300 group-hover:text-[#1A4D43]">
                    Pooja Associates
                  </span>
                </Link>
                <p className="text-[18px] text-[#555555] leading-[1.6]">
                  Growth-focused marketing and promotion services for registered and subscribed customers.
                </p>
              </div>

          {/* Menu Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[18px] font-semibold text-[#121212]">Menu</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#services" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">Services</a></li>
              <li><a href="#features" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">How it work</a></li>
              <li><a href="#team" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">Team</a></li>
              <li><a href="/404" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">Error 404</a></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[18px] font-semibold text-[#121212]">Follow us:</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">Instagram</a></li>
              <li><a href="#" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">Linkedin</a></li>
              <li><a href="#" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">Twitter</a></li>
            </ul>
          </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[18px] font-semibold text-[#121212]">Contact</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="mailto:marketing.poojaassociates@gmail.com" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">marketing.poojaassociates@gmail.com</a></li>
                <li><a href="tel:8357892019" className="text-[16px] text-[#555555] hover:text-[#1A4D43] transition-colors">8357892019</a></li>
                <li className="text-[16px] text-[#555555]">MP Nagar, Bhopal, Madhya Pradesh</li>
              </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E6E6E6] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[14px] text-[#555555]">
            <span>Copyright@2024</span>
            <span className="w-1 h-1 bg-[#555555] rounded-full"></span>
            <span>Made in Framer</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 p-2 bg-white border border-[#E6E6E6] rounded-md shadow-sm">
               <svg width="12" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18">
                <path d="M0 0h12v6H6v6H0V0z" fill="#000"></path>
                <path d="M6 6h6v6H6V6z" fill="#000"></path>
                <path d="M0 12h6v6H0v-6z" fill="#000"></path>
              </svg>
              <span className="text-[12px] font-bold text-[#121212]">Made in Framer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;