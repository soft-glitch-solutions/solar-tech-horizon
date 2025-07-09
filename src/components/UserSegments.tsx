
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building2, 
  Wrench, 
  DollarSign, 
  TrendingDown, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export const UserSegments = () => {
  const segments = [
    {
      icon: Home,
      title: "Homeowners",
      subtitle: "Energy Independence at Home",
      description: "Take control of your energy bills and reduce your carbon footprint with our residential smart energy solutions.",
      benefits: [
        "Reduce energy bills by up to 90%",
        "24/7 backup power protection", 
        "Increase home value significantly",
        "Monitor usage in real-time"
      ],
      cta: "Explore Homeowner Solutions",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-600 bg-orange-100"
    },
    {
      icon: Building2,
      title: "Businesses",
      subtitle: "Commercial Energy Management",
      description: "Optimize operational costs and demonstrate environmental leadership with scalable commercial energy systems.",
      benefits: [
        "Reduce operational & maintenance costs",
        "Improve ROI with smart automation",
        "Seamless building system integration",
        "Meet sustainability goals"
      ],
      cta: "Explore Business Solutions", 
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600 bg-green-100"
    },
    {
      icon: Wrench,
      title: "Installers & Professionals",
      subtitle: "Professional Installation Tools",
      description: "Access advanced tools, training resources, and dedicated support to deliver exceptional installations faster.",
      benefits: [
        "Faster setup with smart tools",
        "Comprehensive monitoring platform",
        "24/7 technical support access",
        "Professional training academy"
      ],
      cta: "Access Installer Portal",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100", 
      iconColor: "text-blue-600 bg-blue-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Solutions for Every{" "}
            <span className="text-gradient">Energy Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a homeowner looking to save on energy costs, a business aiming to reduce operational expenses, 
            or a professional installer, we have the right solution for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card 
                key={segment.title}
                className={`group relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 ${segment.bgColor} overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                
                <CardHeader className="relative z-10 pb-6">
                  <div className={`w-14 h-14 rounded-2xl ${segment.iconColor} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-navy mb-2">
                    {segment.title}
                  </CardTitle>
                  <div className="text-lg font-semibold text-muted-foreground mb-3">
                    {segment.subtitle}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {segment.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <div className="space-y-3 mb-8">
                    {segment.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-white hover:bg-gray-50 text-brand-navy border border-gray-200 shadow-sm group/btn"
                    size="lg"
                  >
                    {segment.cta}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
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
