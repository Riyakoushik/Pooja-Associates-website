import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    title: "Business consulting",
    description:
      "Gain a clear roadmap for growth with tailored strategies that align with your goals.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/0YczDvjwpwN80wyyW0HHaSg0VA-2.jpg",
  },
  {
    title: "Operational efficiency",
    description:
      "Streamline workflows and optimize processes to boost productivity and reduce costs.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/iL1g2JceXoecOESZCnxxGh4SA-3.jpg",
  },
  {
    title: "Market research & analysis",
    description:
      "Make informed decisions with in-depth market insights and competitor analysis.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/F8bRxnZXtathTlYe6oa9P55kjsY-4.jpg",
  },
  {
    title: "Digital transformation",
    description:
      "Leverage cutting-edge technology to modernize your business and stay ahead.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5aade3a5-fd00-4189-b091-576124594133-stratex-framer-website/assets/images/0YczDvjwpwN80wyyW0HHaSg0VA-2.jpg",
  },
];

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.4
          : scrollLeft + clientWidth * 0.4;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="bg-brand-off-white py-[120px] px-6 lg:px-0 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 bg-brand-light-green px-4 py-2 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            <span className="text-[12px] font-bold text-brand-green uppercase tracking-wider">
              Services
            </span>
          </div>
          <h2 className="text-[48px] font-serif tracking-[-0.01em] text-[#1A1A1A] max-w-[600px] leading-[1.2]">
            Reliable expertise to drive your greatest success
          </h2>
        </div>

        <div className="relative group">
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[450px] aspect-[4/5] relative rounded-[32px] overflow-hidden snap-center"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle dark overlay for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                  <h3 className="text-[28px] font-serif mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-white/80 font-sans leading-[1.6] line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-8 lg:-left-12 z-10">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-8 lg:-right-12 z-10">
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;