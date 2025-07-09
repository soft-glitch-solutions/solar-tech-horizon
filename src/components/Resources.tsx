
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  MessageCircle,
  ArrowRight,
  FileText,
  Video,
  Phone
} from "lucide-react";

export const Resources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Comprehensive documentation, installation guides, and technical specifications for all products.",
      features: ["Product manuals", "Installation guides", "Technical specifications", "FAQ database"],
      cta: "Browse Documentation",
      color: "blue"
    },
    {
      icon: Users,
      title: "Installer Portal",
      description: "Exclusive access to professional tools, project management, and monitoring dashboards.",
      features: ["Project management", "Real-time monitoring", "Diagnostic tools", "Customer portal"],
      cta: "Access Portal",
      color: "green"
    },
    {
      icon: GraduationCap,
      title: "Training Academy",
      description: "Professional certification programs and hands-on training for installers and technicians.",
      features: ["Certification courses", "Video tutorials", "Hands-on workshops", "Continuing education"],
      cta: "Start Learning",
      color: "purple"
    },
    {
      icon: MessageCircle,
      title: "Customer Support",
      description: "24/7 technical support with AI-powered assistance and direct access to expert technicians.",
      features: ["24/7 availability", "AI-powered help", "Live chat support", "Phone & email"],
      cta: "Get Support",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-50 hover:bg-blue-100", icon: "text-blue-600 bg-blue-100", border: "border-blue-200" },
      green: { bg: "bg-green-50 hover:bg-green-100", icon: "text-green-600 bg-green-100", border: "border-green-200" },
      purple: { bg: "bg-purple-50 hover:bg-purple-100", icon: "text-purple-600 bg-purple-100", border: "border-purple-200" },
      orange: { bg: "bg-orange-50 hover:bg-orange-100", icon: "text-orange-600 bg-orange-100", border: "border-orange-200" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Resources &{" "}
            <span className="text-gradient">Support</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to succeed with our smart energy solutions. From comprehensive documentation 
            to professional training and 24/7 support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            const colors = getColorClasses(resource.color);
            
            return (
              <Card 
                key={resource.title}
                className={`group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${colors.bg} border-2 ${colors.border} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-brand-navy transition-colors">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {resource.features.map((feature) => (
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
                    {resource.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support CTA Section */}
        <Card className="bg-gradient-to-r from-brand-navy to-slate-800 text-white p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Need Immediate Assistance?
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our expert support team is available 24/7 to help you with any questions 
                about installation, configuration, or troubleshooting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-brand-orange hover:bg-orange-600 text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Support
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-navy"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Live Chat
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-brand-orange mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-brand-green mb-2">98%</div>
                <div className="text-sm text-gray-300">Customer Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">5min</div>
                <div className="text-sm text-gray-300">Average Response</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
                <div className="text-sm text-gray-300">Certified Installers</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
