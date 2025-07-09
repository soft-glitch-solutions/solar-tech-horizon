
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Zap, 
  Battery, 
  Car, 
  Home,
  Activity,
  ArrowRight,
  Smartphone
} from "lucide-react";

export const SmartPlatform = () => {
  const platformFeatures = [
    {
      icon: Monitor,
      title: "Real-Time Monitoring",
      description: "Complete visibility into your energy production, consumption, and system performance."
    },
    {
      icon: Zap,
      title: "Intelligent Automation", 
      description: "AI-powered system that automatically optimizes energy usage based on your patterns."
    },
    {
      icon: Battery,
      title: "Smart Battery Management",
      description: "Automatically charges and discharges your battery at optimal times for maximum savings."
    },
    {
      icon: Car,
      title: "EV Charging Integration",
      description: "Coordinates EV charging with solar production and battery levels for cost efficiency."
    }
  ];

  return (
    <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-orange/10 rounded-full -translate-x-36 -translate-y-36" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full translate-x-48 translate-y-48" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
                <Activity className="w-4 h-4" />
                SolarTech ONE Platform
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                One Platform.{" "}
                <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
                  Infinite Possibilities.
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Our unified smart energy platform connects all your devices, 
                providing seamless control and optimization across your entire energy ecosystem.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {platformFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className="flex gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-6 text-lg h-auto"
              >
                Explore Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-navy px-8 py-6 text-lg h-auto"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Platform Visualization */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <CardContent className="p-0">
                {/* Central Hub */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <Smartphone className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Connected Devices */}
                  <div className="grid grid-cols-3 gap-4">
                    {/* Solar Panel */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-1">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-blue-300 rounded-sm" />
                          ))}
                        </div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    </div>

                    {/* Battery */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Battery className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                    </div>

                    {/* EV Charger */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Car className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    </div>

                    {/* Home Controller */}
                    <div className="relative col-start-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Home className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 200">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF8600" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#99D320" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    
                    {/* Connecting lines with animation */}
                    <g stroke="url(#connectionGradient)" strokeWidth="2" fill="none" opacity="0.7">
                      <line x1="150" y1="60" x2="100" y2="120" className="animate-pulse" />
                      <line x1="150" y1="60" x2="150" y2="120" className="animate-pulse" />
                      <line x1="150" y1="60" x2="200" y2="120" className="animate-pulse" />
                      <line x1="150" y1="60" x2="150" y2="160" className="animate-pulse" />
                    </g>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
