
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, Star } from "lucide-react";

const solarProducts = [
  {
    id: 1,
    name: "SolarEdge HD-Wave Inverter",
    model: "SE7600H-US",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
    price: "$1,299",
    rating: 4.8,
    features: ["99% efficiency", "25-year warranty", "Smart monitoring"],
    description: "Industry-leading single-phase inverter with HD-Wave technology for maximum efficiency."
  },
  {
    id: 2,
    name: "Tesla Powerwall 2",
    model: "Battery Storage",
    image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=400&h=300&fit=crop",
    price: "$7,500",
    rating: 4.7,
    features: ["13.5 kWh capacity", "Weather resistant", "Mobile app control"],
    description: "Complete home battery system with integrated inverter for backup power and energy independence."
  },
  {
    id: 3,
    name: "Enphase IQ8+ Microinverters",
    model: "IQ8PLUS-72-2-US",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=300&fit=crop",
    price: "$189",
    rating: 4.9,
    features: ["Module-level optimization", "25-year warranty", "Grid-forming technology"],
    description: "Advanced microinverter technology that maximizes energy harvest from every solar panel."
  },
  {
    id: 4,
    name: "Tesla Wall Connector",
    model: "EV Charger",
    image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400&h=300&fit=crop",
    price: "$475",
    rating: 4.6,
    features: ["48A charging", "Wi-Fi enabled", "Weather resistant"],
    description: "High-speed home EV charging solution that integrates seamlessly with solar systems."
  },
  {
    id: 5,
    name: "SunPower Maxeon 3 Solar Panels",
    model: "SPR-400-COM",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop",
    price: "$450",
    rating: 4.8,
    features: ["400W output", "Copper foundation", "40-year warranty"],
    description: "Premium solar panels with industry-leading efficiency and unmatched durability."
  },
  {
    id: 6,
    name: "Solaredge EV Charging Inverter",
    model: "SE7600H-RWS",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
    price: "$2,199",
    rating: 4.7,
    features: ["Integrated EV charging", "Smart load management", "Solar boost mode"],
    description: "Revolutionary inverter that combines solar energy conversion with EV charging capabilities."
  }
];

export const SolarProductsCarousel = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Premium Solar{" "}
            <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated selection of industry-leading solar equipment, 
            designed to maximize your energy production and savings.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {solarProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-white">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-brand-orange">{product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-brand-navy transition-colors">
                      {product.name}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground font-medium">
                      {product.model}
                    </div>
                    <CardDescription className="text-base leading-relaxed mt-2">
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
                      className="w-full bg-brand-orange hover:bg-orange-600 text-white group/btn"
                      size="lg"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
