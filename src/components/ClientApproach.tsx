
import { Card, CardContent } from "@/components/ui/card";
import { Building, Zap, TrendingUp, Mountain, Users } from "lucide-react";

const approachSteps = [
  {
    id: 1,
    icon: Building,
    title: "Nature of the client's business",
    description: "Adapt to clients' operational cycles, uphold customer duties, aim for energy efficiency.",
    details: [
      "Hourly, daily and seasonal operational requirements",
      "Responsibility towards internal and external customers", 
      "Short- and long term financial & energy goals"
    ]
  },
  {
    id: 2,
    icon: Zap,
    title: "Energy Requirements",
    description: "Comprehensive assessment of your current and future energy needs."
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Current Energy inputs and Costs",
    description: "Analysis of existing energy consumption patterns and expenses."
  },
  {
    id: 4,
    icon: Building,
    title: "Expected Business Growth",
    description: "Planning for future expansion and energy scaling requirements."
  },
  {
    id: 5,
    icon: Mountain,
    title: "Site Topography",
    description: "Detailed site analysis for optimal solar panel placement and efficiency."
  }
];

export const ClientApproach = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Approach is{" "}
            <span className="text-gradient">client centric</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We tailor our solutions to meet your specific business needs through our comprehensive 5-step approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approachSteps.map((step, index) => (
            <Card 
              key={step.id}
              className={`group relative transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 animate-fade-in ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div className="w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.id}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {step.details && (
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
