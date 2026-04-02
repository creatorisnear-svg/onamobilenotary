import { BadgeCheck, Award, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
              <img 
                src="/images/az-skyline.jpg" 
                alt="Arizona Skyline" 
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1469488865564-c2dea1149920?auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-2xl font-serif font-bold text-primary">DO</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">Daniel Oceguera</h3>
                    <p className="text-blue-200">Certified Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Expertise You Can Trust
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              When it comes to legal documents, immigration forms, and official notarizations, precision is everything. As a licensed professional serving the Phoenix area, I provide meticulous, confidential, and convenient mobile services. 
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              I am fully bilingual (English and Spanish) and take pride in making complex document processes clear and stress-free for my clients. Whether at your home, office, hospital, or care facility, I bring the expertise to you.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                  <BadgeCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">State of Arizona Notary</h4>
                  <p className="text-muted-foreground">
                    Commission #677098 (Valid through January 2029). Issued by Arizona Secretary of State Adrian Fontes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Licensed Legal Document Preparer</h4>
                  <p className="text-muted-foreground">
                    Board of Nonlawyer Legal Service Providers — Standard Individual Certificate to Practice (Certificate #82252).
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Professional Memberships</h4>
                  <p className="text-muted-foreground">
                    Member in good standing of the American Association of Notaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
