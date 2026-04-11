import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import SuccessStoriesPreview from "@/components/home/SuccessStoriesPreview";
import ProcessSection from "@/components/home/ProcessSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import AffiliateSection from "@/components/home/AffiliateSection";
import WarehouseSection from "@/components/home/WarehouseSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import BenefitsSections from "@/components/services/ServiceBenefits";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <SuccessStoriesPreview />
      <ProcessSection />
      <FeaturesGrid />
      <AffiliateSection />
      <WarehouseSection />
      <WhyUsSection />
      <BenefitsSections />
      <PartnersSection />
      <CTASection />
    </>
  );
}
