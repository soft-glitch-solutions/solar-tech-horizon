
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Linkedin,
  Globe,
  ArrowRight
} from "lucide-react";

export const Footer = () => {
  const productLinks = [
    { name: "Home", href: "#" },
    { name: "Our Expertise", href: "#expertise" },
    { name: "Funding", href: "#funding" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" }
  ];

  const supportLinks = [
    { name: "Terms of use", href: "#terms" },
    { name: "Privacy", href: "#privacy" },
    { name: "Cookie policy", href: "#cookies" },
    { name: "Terms of sale", href: "#terms-sale" }
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "News", href: "#news" },
    { name: "FAQ's", href: "#faqs" }
  ];

  return (
    <footer className="bg-brand-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Stay Connected with Smart Energy Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Get the latest updates on clean energy technology, project launches, 
                and exclusive insights delivered to your inbox.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-orange"
                />
                <Button className="bg-brand-orange hover:bg-orange-600 px-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to receive emails.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/4527a828-b094-4932-9ddc-7b666ca95e10.png" 
                alt="Enfolded Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Leading the revolution in smart energy solutions with cutting-edge solar technology, 
              intelligent energy management, and sustainable innovation for homes and businesses across South Africa.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
                <span className="text-sm">Unit S1 Spearhead Business Park, C/O Montague Drive & Freedom Way, Montague Gardens, Cape Town, 7441</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>+27 21 555 0123</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-brand-orange" />
                <span>info@enfolded.co.za</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Links</h4>
            <nav className="space-y-3">
              {productLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <nav className="space-y-3">
              {supportLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              Copyright 2025, INFOLED (Pty) Ltd. Built by Shaqeel less @ Soft glitch Solutions
            </div>

            {/* Language/Region */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe className="w-4 h-4" />
              <span>South Africa (English)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
