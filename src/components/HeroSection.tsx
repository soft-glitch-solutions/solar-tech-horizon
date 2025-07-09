
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Smartphone } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-green-50/30" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Empowering{" "}
                <span className="text-gradient">Sustainable Living</span>{" "}
                Through Smart Energy Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your energy consumption with our comprehensive ecosystem of smart inverters, 
                solar batteries, EV chargers, and intelligent home automation.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-6 text-lg h-auto"
              >
                For Homeowners
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-6 text-lg h-auto"
              >
                For Businesses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-orange-500" />
                Inverters
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-green-500" />
                Batteries
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
                EV Charger
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4 text-purple-500" />
                Smart Controls
              </div>
            </div>
          </div>

          {/* Hero Image - House with Solar Panels */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1720625070078-bc41a9fe8e49?w=800&h=600&fit=crop&crop=center"
                alt="Modern house with solar panels on roof"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating stats */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-brand-green">99%</div>
                <div className="text-sm text-muted-foreground">Efficiency</div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-brand-orange">25+</div>
                <div className="text-sm text-muted-foreground">Year Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
