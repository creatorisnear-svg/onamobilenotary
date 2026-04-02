import { useState, useEffect } from "react";
import { Phone, Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Policies", href: "#policies" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-primary text-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <a
              href="#"
              className={`font-serif text-xl md:text-2xl font-bold tracking-tight ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Daniel Oceguera
              <span className={`block text-xs font-sans font-normal mt-0.5 ${isScrolled ? "text-muted-foreground" : "text-blue-200"}`}>
                Mobile Notary & Legal Document Preparer
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-secondary transition-colors ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
            <div className={`flex flex-col items-end ${isScrolled ? "text-primary" : "text-white"}`}>
              <a href="tel:602-625-5625" className="flex items-center gap-2 font-semibold hover:text-secondary transition-colors">
                <Phone className="h-4 w-4 text-secondary" />
                602-625-5625
              </a>
              <span className="text-xs opacity-80">Call or Text</span>
            </div>
            <Button 
              size="lg"
              className={isScrolled ? "bg-secondary text-primary hover:bg-secondary/90" : "bg-white text-primary hover:bg-white/90"}
              asChild
            >
              <a href="tel:602-625-5625">Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled ? "text-primary" : "text-white"}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary font-medium text-lg border-b border-gray-100 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <a href="tel:602-625-5625" className="flex items-center gap-2 text-primary font-bold text-lg">
              <Phone className="h-5 w-5 text-secondary" />
              602-625-5625
            </a>
            <a href="mailto:Doceguer@live.com" className="flex items-center gap-2 text-primary font-medium">
              <Mail className="h-5 w-5 text-secondary" />
              Doceguer@live.com
            </a>
            <Button size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 mt-2" asChild>
              <a href="tel:602-625-5625">Book Appointment</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
