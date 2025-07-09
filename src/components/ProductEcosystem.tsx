
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Battery, 
  Car, 
  Smartphone, 
  Home, 
  TrendingUp,
  ArrowRight,
  Shield
} from "lucide-react";

const products = [
  {
    icon: Zap,
    title: "Smart Inverters",
    description: "99% efficiency with remote setup and real-time monitoring. Industry-leading power optimization technology.",
    features: ["99% efficiency", "Remote monitoring", "25-year warranty"],
    color: "orange"
  },
  {
    icon: Battery,
    title: "Solar Batteries", 
    description: "Seamless backup power and energy storage. Store excess solar energy for use when you need it most.",
    features: ["10+ year lifespan", "Weather resistant", "Smart charging"],
    color: "green"
  },
  {
    icon: Car,
    title: "EV Charger",
    description: "Solar-powered electric vehicle charging station. Charge your car with clean energy from your roof.",
    features: ["Solar integration", "Fast charging", "Smart scheduling"],
    color: "blue"
  },
  {
    icon: Smartphone,
    title: "Energy Monitoring App",
    description: "Complete visibility into your energy production, consumption, and savings with intuitive mobile controls.",
    features: ["Real-time data", "Energy insights", "Remote control"],
    color: "purple"
  },
  {
    icon: Home,
    title: "Smart Home Controller",
    description: "Intelligent automation that manages all your devices, optimizing energy use and maximizing efficiency.",
    features: ["Device automation", "Energy optimization", "Voice control"],
    color: "indigo"
  },
  {
    icon: TrendingUp,
    title: "Energy Analytics Platform",
    description: "Advanced analytics and AI-powered insights to maximize your energy savings and system performance.",
    features: ["AI insights", "Performance tracking", "Cost optimization"],
    color: "teal"
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    orange: "bg-orange-50 border-orange-200 hover:border-orange-300",
    green: "bg-green-50 border-green-200 hover:border-green-300", 
    blue: "bg-blue-50 border-blue-200 hover:border-blue-300",
    purple: "bg-purple-50 border-purple-200 hover:border-purple-300",
    indigo: "bg-indigo-50 border-indigo-200 hover:border-indigo-300",
    teal: "bg-teal-50 border-teal-200 hover:border-teal-300"
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.orange;
};

const getIconColorClasses = (color: string) => {
  const colorMap = {
    orange: "text-orange-600 bg-orange-100",
    green: "text-green-600 bg-green-100",
    blue: "text-blue-600 bg-blue-100", 
    purple: "text-purple-600 bg-purple-100",
    indigo: "text-indigo-600 bg-indigo-100",
    teal: "text-teal-600 bg-teal-100"
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.orange;
};

export const ProductEcosystem = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Complete Smart Energy{" "}
            <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our integrated platform connects all your energy devices into one intelligent system, 
            maximizing efficiency and simplifying management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={product.title}
                className={`group relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${getColorClasses(product.color)} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl ${getIconColorClasses(product.color)} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-brand-navy transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="group/btn w-full justify-between hover:bg-white/50"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
