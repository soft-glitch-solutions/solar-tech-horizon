
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductEcosystem } from "@/components/ProductEcosystem";
import { UserSegments } from "@/components/UserSegments";
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
        <UserSegments />
        <SmartPlatform />
        <Resources />
        <NewsUpdates />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
