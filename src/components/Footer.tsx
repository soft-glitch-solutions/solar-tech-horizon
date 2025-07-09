
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Globe,
  ArrowRight
} from "lucide-react";

export const Footer = () => {
  const productLinks = [
    { name: "Smart Inverters", href: "#inverters" },
    { name: "Solar Batteries", href: "#batteries" },
    { name: "EV Chargers", href: "#ev-chargers" },
    { name: "Energy Monitoring", href: "#monitoring" },
    { name: "Smart Controllers", href: "#controllers" }
  ];

  const supportLinks = [
    { name: "Knowledge Base", href: "#knowledge" },
    { name: "Installation Guides", href: "#guides" },
    { name: "Customer Support", href: "#support" },
    { name: "Warranty & Service", href: "#warranty" },
    { name: "Training Academy", href: "#training" }
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press & Media", href: "#press" },
    { name: "Investor Relations", href: "#investors" },
    { name: "Sustainability", href: "#sustainability" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Data Protection", href: "#data-protection" }
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
                Get the latest updates on clean energy technology, product launches, 
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
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl">SolarTech</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Leading the revolution in smart energy solutions with cutting-edge solar technology, 
              intelligent energy management, and sustainable innovation for homes and businesses worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>1-800-SOLAR-TECH (1-800-765-2783)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-brand-orange" />
                <span>support@solartech.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>1234 Innovation Drive, Clean Energy City, CA 90210</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Products</h4>
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

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <nav className="space-y-3">
              {companyLinks.map((link) => (
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
              © 2024 SolarTech. All rights reserved. Powering the future with clean energy.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language/Region */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe className="w-4 h-4" />
              <span>United States (English)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
