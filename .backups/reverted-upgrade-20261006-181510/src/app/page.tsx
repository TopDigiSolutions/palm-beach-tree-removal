import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Chatbot from "@/components/chatbot/Chatbot";
import MobileActionBar from "@/components/layout/MobileActionBar";
import ScrollObserver from "@/components/ui/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Header />
      <main id="main-content" className="flex-1 w-full overflow-hidden">
        {/* 1. Cinematic Hero Section with Video */}
        <Hero />

        {/* 2. Verified Reviews Running Ticker (Left to Right, Compact Height) */}
        <TrustBar />

        {/* 3. Six Core Arboricultural Services */}
        <Services />

        {/* 4. About / Master Arborist Engineering & Zero Lawn Damage Guarantee */}
        <About />

        {/* 5. Estate Project Portfolio Gallery with Lightbox */}
        <Gallery />

        {/* 6. Interactive Before vs After Slider Spotlights */}
        <BeforeAfter />

        {/* 5. Dedicated Service Areas Showcase Across Palm Beach County */}
        <ServiceAreas />

        {/* 6. Verified Client Testimonials & Estate Reviews */}
        <Testimonials />

        {/* 7. Interactive Free Estimate & Scope Calculator */}
        {/* <EstimateCalculator /> */}

        {/* 8. Dedicated Contact Us & Free Estimate Request Form */}
        <HowItWorks />
        <ContactForm />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 10. Final Call-To-Action Banner */}
        <CTASection />
      </main>

      {/* 11. Multi-Column Footer */}
      <Footer />

      {/* 12. Floating Arborist Concierge Chatbot */}
      <Chatbot />

      {/* 13. Mobile Sticky Action Bar */}
      <MobileActionBar />
    </>
  );
}

