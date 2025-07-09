
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Globe, Phone, Zap } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      title: "For Homeowners",
      href: "#homeowners",
      description: "Smart energy solutions for your home"
    },
    {
      title: "For Businesses", 
      href: "#businesses",
      description: "Commercial energy management systems"
    },
    {
      title: "Installers & Professionals",
      href: "#installers", 
      description: "Tools and training for installation professionals"
    },
    {
      title: "Resources & Support",
      href: "#resources",
      description: "Documentation, guides and customer support"
    },
    {
      title: "About Us",
      href: "#about",
      description: "Learn about our mission and technology"
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl brand-navy">SolarTech</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {navigationItems.slice(0, 4).map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Country/Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-sm">
                <Globe className="w-4 h-4 mr-2" />
                US
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>🇺🇸 United States</DropdownMenuItem>
              <DropdownMenuItem>🇨🇦 Canada</DropdownMenuItem>
              <DropdownMenuItem>🇬🇧 United Kingdom</DropdownMenuItem>
              <DropdownMenuItem>🇦🇺 Australia</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact Button */}
          <Button variant="outline" size="sm" className="text-sm">
            <Phone className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              <a href="#" className="text-lg font-medium hover:text-orange-500 transition-colors">
                Home
              </a>
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-lg font-medium hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Globe className="w-4 h-4 mr-2" />
                  Language: US
                </Button>
                <Button variant="default" className="w-full justify-start bg-brand-orange hover:bg-orange-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
