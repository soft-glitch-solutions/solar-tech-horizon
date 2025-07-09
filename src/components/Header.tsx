
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
import { Menu, ChevronDown, Globe, Phone } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { title: "Home", href: "#" },
    { title: "Projects", href: "#projects" },
    { title: "Funding", href: "#funding" },
    { title: "FAQs", href: "#faqs" },
    { title: "Blog", href: "#blog" },
    { title: "Contact Us", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/4527a828-b094-4932-9ddc-7b666ca95e10.png" 
            alt="Enfolded Logo" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Country/Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-sm">
                <Globe className="w-4 h-4 mr-2" />
                ZA
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg z-50">
              <DropdownMenuItem>🇿🇦 South Africa</DropdownMenuItem>
              <DropdownMenuItem>🇳🇦 Namibia</DropdownMenuItem>
              <DropdownMenuItem>🇧🇼 Botswana</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact Button */}
          <Button variant="outline" size="sm" className="text-sm">
            <Phone className="w-4 h-4 mr-2" />
            Contact
          </Button>

          {/* Login to Metering */}
          <Button className="bg-brand-orange hover:bg-orange-600 text-white">
            Log in to metering
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
            <div className="flex flex-col space-y-4 mt-8">
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
                  Language: ZA
                </Button>
                <Button variant="default" className="w-full justify-start bg-brand-orange hover:bg-orange-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button className="w-full bg-brand-orange hover:bg-orange-600 text-white">
                  Log in to metering
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
