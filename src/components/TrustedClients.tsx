
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    name: "Old Mutual",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  },
  {
    name: "CTP",
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop"
  },
  {
    name: "Clicks Group",
    logo: "https://images.unsplash.com/photo-1560472354-aec13bf37b1e?w=200&h=100&fit=crop"
  },
  {
    name: "Steve's Auto Clinic",
    logo: "https://images.unsplash.com/photo-1560472355-ca414fef7c31?w=200&h=100&fit=crop"
  },
  {
    name: "Coricraft",
    logo: "https://images.unsplash.com/photo-1560472355-024b8b5fe45a?w=200&h=100&fit=crop"
  }
];

export const TrustedClients = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our valued{" "}
            <span className="text-gradient">clients</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by leading South African businesses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <Card 
              key={client.name}
              className={`group relative transition-all duration-500 hover:shadow-lg hover:-translate-y-1 border-0 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-12 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">{client.name}</span>
                  </div>
                  <p className="text-sm font-medium text-brand-navy">{client.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
