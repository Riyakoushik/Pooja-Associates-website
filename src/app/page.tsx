import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import WhyUs from "@/components/sections/why-us";
import ServicesCarousel from "@/components/sections/services-carousel";
import FeaturesGrid from "@/components/sections/features-grid";
import Pricing from "@/components/sections/pricing";
import ProcessSteps from "@/components/sections/process-steps";
import ImpactStats from "@/components/sections/impact-stats";
import FAQSection from "@/components/sections/faq";
import ContactUs from "@/components/sections/contact-us";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[79px]">
        <HeroSection />
        <WhyUs />
        <ServicesCarousel />
        <FeaturesGrid />
        <Pricing />
        <ProcessSteps />
        <ImpactStats />
        <FAQSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
