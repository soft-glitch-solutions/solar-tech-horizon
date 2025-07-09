
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Smartphone, Phone } from "lucide-react";

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
                Ensuring a profitable future with{" "}
                <span className="text-gradient">guaranteed energy availability</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We offer world-class turn-key solutions, including in-house engineering and financial modeling, 
                project management, and holistic energy management services.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-6 text-lg h-auto"
              >
                <Phone className="mr-2 w-5 h-5" />
                Give Us a Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-6 text-lg h-auto"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-orange">R490m+</div>
                <div className="text-sm text-muted-foreground">In clients' savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-green">192</div>
                <div className="text-sm text-muted-foreground">GWh produced</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-navy">58</div>
                <div className="text-sm text-muted-foreground">MWp installed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-green">74k+</div>
                <div className="text-sm text-muted-foreground">Tonnes CO2 saved</div>
              </div>
            </div>

            {/* Additional stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-xl font-bold text-brand-green">2.3M+</div>
                <div className="text-sm text-muted-foreground">Equivalent trees planted</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-brand-orange">100+</div>
                <div className="text-sm text-muted-foreground">Trusted Partners</div>
              </div>
            </div>
          </div>

          {/* Hero Image - South African Solar Installation */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&crop=center"
                alt="Solar installation in South Africa"
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
