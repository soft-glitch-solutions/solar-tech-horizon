
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Zap, Battery } from "lucide-react";

const houseExamples = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    title: "Modern Family Home",
    location: "Sandton, Johannesburg",
    panels: "24 Panels",
    savings: "R38,400/year",
    capacity: "8.4 kW System"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    title: "Suburban Villa",
    location: "Constantia, Cape Town", 
    panels: "36 Panels",
    savings: "R51,200/year",
    capacity: "12.6 kW System"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&h=400&fit=crop",
    title: "Contemporary Estate",
    location: "Waterkloof, Pretoria",
    panels: "48 Panels",
    savings: "R65,600/year", 
    capacity: "16.8 kW System"
  }
];

export const HouseShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Real Homes, Real{" "}
            <span className="text-gradient">Savings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how homeowners across South Africa are transforming their energy consumption 
            and achieving energy independence with our solar solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houseExamples.map((house, index) => (
            <Card 
              key={house.id}
              className={`group relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 overflow-hidden animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={house.image}
                  alt={house.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-4 left-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-medium">
                  {house.capacity}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-1">
                      {house.title}
                    </h3>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Home className="w-4 h-4" />
                      {house.location}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Zap className="w-4 h-4 text-brand-orange" />
                      </div>
                      <div className="text-sm font-medium text-brand-orange">
                        {house.panels}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Battery className="w-4 h-4 text-brand-green" />
                      </div>
                      <div className="text-sm font-medium text-brand-green">
                        {house.savings}
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-6 text-lg h-auto"
          >
            Calculate Your Savings
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
