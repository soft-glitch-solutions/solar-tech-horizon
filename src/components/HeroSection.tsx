
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

          {/* Hero Image/Animation */}
          <div className="relative">
            <div className="relative">
              {/* Main solar panel illustration */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 transform rotate-3 shadow-2xl">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="aspect-square bg-gradient-to-br from-blue-300 to-blue-600 rounded-sm animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Battery unit */}
              <div className="absolute -bottom-4 -left-8 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 shadow-xl transform -rotate-6">
                <div className="w-16 h-10 bg-green-400 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-2 bg-white rounded-full" />
                </div>
              </div>

              {/* EV Charger */}
              <div className="absolute -top-4 -right-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4 shadow-xl transform rotate-12">
                <div className="w-12 h-16 bg-orange-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/2 -left-12 w-6 h-6 bg-yellow-400 rounded-full animate-bounce" />
              <div className="absolute top-1/4 -right-6 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
