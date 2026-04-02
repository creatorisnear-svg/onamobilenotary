import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Professional Notary Signing"
          className="w-full h-full object-cover object-center opacity-30"
          onError={(e) => {
            // Fallback if image doesn't load
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 text-secondary" />
            <span>Certified, Licensed & Bilingual (English/Español)</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Trusted Mobile Notary & Legal Document Prep in Arizona
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
            I come to you. Professional, fast, and accurate mobile notary services, 
            immigration document preparation, and certified translations across the 
            greater Phoenix and Maricopa County area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="xl" className="bg-secondary text-primary hover:bg-secondary/90 text-lg font-semibold px-8 h-14" asChild>
              <a href="tel:602-625-5625">
                <Phone className="mr-2 h-5 w-5" />
                Call or Text: 602-625-5625
              </a>
            </Button>
            <Button size="xl" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg h-14" asChild>
              <a href="#services">
                View All Services
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-secondary shrink-0" />
              <div>
                <h3 className="text-white font-medium">Service Area</h3>
                <p className="text-blue-200 text-sm">Phoenix & Maricopa County</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-secondary shrink-0" />
              <div>
                <h3 className="text-white font-medium">Fast Response</h3>
                <p className="text-blue-200 text-sm">Same-day appointments</p>
              </div>
            </div>
            <div className="flex items-start gap-3 col-span-2 md:col-span-1">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-secondary text-primary font-bold text-xs shrink-0">
                A+
              </div>
              <div>
                <h3 className="text-white font-medium">Top Rated</h3>
                <p className="text-blue-200 text-sm">5-star customer reviews</p>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-xs text-white/50 italic">
            *Not an attorney — Document preparation services only
          </p>
        </div>
      </div>
    </section>
  );
}
