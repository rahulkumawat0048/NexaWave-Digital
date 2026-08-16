import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import DifferenceSection from '@/components/DifferenceSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import IndustriesSection from '@/components/IndustriesSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <DifferenceSection />
      <PricingSection />
      <TestimonialsSection />
      <IndustriesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
