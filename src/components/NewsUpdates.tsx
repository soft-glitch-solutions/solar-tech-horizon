
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  ArrowRight, 
  Play,
  ExternalLink,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

export const NewsUpdates = () => {
  const updates = [
    {
      type: "Blog Post",
      title: "5 Ways Smart Energy Storage is Revolutionizing Home Energy Management",
      description: "Discover how modern battery storage systems are transforming the way homeowners think about energy independence and cost savings.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "#blog-post",
      icon: TrendingUp
    },
    {
      type: "Partnership", 
      title: "SolarTech Partners with Leading EV Manufacturers for Integrated Charging Solutions",
      description: "New collaboration brings seamless solar-to-vehicle charging integration, making clean transportation more accessible than ever.",
      date: "December 12, 2024",
      category: "Partnership",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "#partnership",
      icon: Users
    },
    {
      type: "Video",
      title: "Customer Success Story: The Johnson Family's Journey to Energy Independence",
      description: "Watch how one family reduced their energy bills by 85% and achieved complete backup power protection with our smart energy ecosystem.",
      date: "December 10, 2024",
      duration: "12 min",
      category: "Customer Story",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "#video",
      icon: Play,
      isVideo: true
    }
  ];

  const getCategoryColor = (category: string) => {
    const colorMap = {
      "Technology": "bg-blue-100 text-blue-800",
      "Partnership": "bg-green-100 text-green-800", 
      "Customer Story": "bg-purple-100 text-purple-800"
    };
    return colorMap[category as keyof typeof colorMap] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Latest News &{" "}
            <span className="text-gradient">Updates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about the latest developments in smart energy technology, 
            customer success stories, and industry partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {updates.map((update, index) => {
            const Icon = update.icon;
            return (
              <Card 
                key={update.title}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in overflow-hidden`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={update.image} 
                    alt={update.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Video overlay */}
                  {update.isVideo && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-brand-navy ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(update.category)} border-0`}>
                      {update.category}
                    </Badge>
                  </div>

                  {/* Type indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Icon className="w-4 h-4 text-brand-navy" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {update.date}
                    </div>
                    {update.readTime && (
                      <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {update.readTime}
                      </div>
                    )}
                    {update.duration && (
                      <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {update.duration}
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl font-semibold leading-tight group-hover:text-brand-navy transition-colors">
                    {update.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {update.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="group/btn w-full justify-between hover:bg-slate-50 p-0"
                  >
                    <span className="font-medium">
                      {update.isVideo ? "Watch Video" : "Read More"}
                    </span>
                    <div className="flex items-center gap-1">
                      {update.isVideo ? (
                        <Play className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      ) : (
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      )}
                    </div>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8"
          >
            View All Updates
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
