"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from '@/components/ui/animated-section';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "process",
    question: "How does your consulting process work?",
    answer: "Our process begins with a deep dive into your business model and challenges. We then develop a tailored strategy, assist with implementation, and provide ongoing support to ensure measurable results and sustainable growth."
  },
  {
    id: "industries",
    question: "What industries do you specialize in?",
    answer: "We specialize in a wide range of industries including technology, healthcare, finance, and retail. Our multi-disciplinary team brings diverse expertise to address specific sector challenges effectively."
  },
  {
    id: "results",
    question: "How long does it take to see results?",
    answer: "Timeline for results varies depending on the project scope. However, most clients begin to see measurable improvements in operational efficiency or strategic clarity within the first 3 to 6 months of implementation."
  },
  {
    id: "one-time",
    question: "Do you offer one-time consultations?",
    answer: "Yes, we offer both project-based consulting and one-time strategy sessions to help businesses tackle specific immediate hurdles or validate their strategic direction."
  },
  {
    id: "small-business",
    question: "Can small businesses afford your services?",
    answer: "Absolutely. We offer flexible pricing tiers and modular consulting services designed to scale with your business size and budget requirements."
  },
    {
      id: "start",
      question: "How do I get started?",
      answer: "Simply click any 'Join Us' button to chat with us on WhatsApp or call us directly. We'll set up a discovery call to discuss your goals and how Pooja Associates can best support your journey."
    }
];

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-[120px] bg-white">
      <div className="container max-w-[1200px] px-6 mx-auto">
        <AnimatedSection className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#F7F9F8] rounded-full border border-[#E6E6E6] mb-6">
            <div className="w-2 h-2 rounded-full bg-[#1A4D43]" />
            <span className="text-[14px] font-medium text-[#1A4D43] uppercase tracking-wider">
              FAQ
            </span>
          </div>

          <h2 className="text-[48px] font-semibold text-[#121212] leading-[1.2] text-center max-w-[700px]">
            Answers to your most common questions
          </h2>
        </AnimatedSection>

        <div className="max-w-[800px] mx-auto">
          {faqData.map((item, index) => (
            <AnimatedSection 
              key={item.id}
              delay={index * 100}
              direction="up"
            >
              <div className="border-b border-[#E6E6E6] last:border-0 transition-all duration-300 hover:bg-[#FAFAFA] rounded-lg">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between py-8 px-4 text-left group focus:outline-none"
                >
                  <span className="text-[20px] font-medium text-[#121212] transition-all duration-300 group-hover:text-[#1A4D43] group-hover:translate-x-2">
                    {item.question}
                  </span>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 ${
                      openId === item.id
                        ? "bg-[#1A4D43] text-white rotate-180 scale-110"
                        : "bg-[#E8F5EE] text-[#1A4D43] group-hover:scale-110"
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={2.5} />
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openId === item.id 
                      ? "max-h-[500px] opacity-100 pb-8" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[18px] leading-[1.6] text-[#555555] px-4 transform transition-all duration-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;