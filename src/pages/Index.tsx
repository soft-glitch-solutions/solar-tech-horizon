
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductEcosystem } from "@/components/ProductEcosystem";
import { SolarProductsCarousel } from "@/components/SolarProductsCarousel";
import { UserSegments } from "@/components/UserSegments";
import { HouseShowcase } from "@/components/HouseShowcase";
import { SmartPlatform } from "@/components/SmartPlatform";
import { Resources } from "@/components/Resources";
import { NewsUpdates } from "@/components/NewsUpdates";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductEcosystem />
        <SolarProductsCarousel />
        <UserSegments />
        <HouseShowcase />
        <SmartPlatform />
        <Resources />
        <NewsUpdates />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
