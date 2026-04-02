import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, FileText, Globe, Scale, Users, Car } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "Notary Public Services",
      icon: <FileText className="h-6 w-6 text-secondary" />,
      description: "General and specialized notarization for all official documents.",
      items: [
        "Acknowledgment statement notarization",
        "Affidavit & oath notarization",
        "Apostille certificate notarization",
        "Auto loan & property registration",
        "Certified copy services",
        "Deed, contract, & demand for payment",
        "Power of attorney, wills & trusts",
        "Translation certification"
      ]
    },
    {
      title: "Legal Document Preparation",
      icon: <Scale className="h-6 w-6 text-secondary" />,
      description: "Professional preparation of legal documents in Arizona.",
      items: [
        "Living Trust",
        "Will / Testament (Testamento)",
        "Trust and Will",
        "Beneficiary deed",
        "Transfer-on-Death deed (Escritura de Transferencia)",
        "Deed / Warranty Deed / Quitclaim deed",
        "LLC Registration / Formation",
        "Document Retrieval"
      ]
    },
    {
      title: "Immigration Services (USCIS)",
      icon: <Globe className="h-6 w-6 text-secondary" />,
      description: "Servicios de Inmigración. Preparation of USCIS forms.",
      items: [
        "Citizenship (N-400) / Ciudadanía",
        "Residency Renewal (I-90) / Renovación",
        "Status Adjustment (I-485) / Ajuste",
        "Family Petition (I-130) / Petición",
        "FOIA",
        "USCIS Form Preparation"
      ]
    },
    {
      title: "Translation & Document Services",
      icon: <Users className="h-6 w-6 text-secondary" />,
      description: "Certified document handling and translation.",
      items: [
        "Certified Translations (Traducciones Certificadas)",
        "Apostille / Apostillar documentos",
        "Certified Copy / Copia certificada",
        "Travel Letter / Permiso de viaje",
        "Carta Poder (Power of Attorney)",
        "Printing / Impresora"
      ]
    },
    {
      title: "Special Mobile Services",
      icon: <Car className="h-6 w-6 text-secondary" />,
      description: "Convenient on-site services when you can't travel.",
      items: [
        "Mobile Notary (Notario Móvil)",
        "Hospital Notary",
        "Prison/Jail Notary (Notario de Prisión/Carcel)",
        "After-hours appointments available"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Comprehensive Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Bilingual (English/Spanish) document preparation and notary services tailored to your needs. We ensure accuracy and compliance every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="border-t-4 border-t-secondary shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-serif text-primary">
                  {category.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          
          <Card className="bg-primary text-white shadow-md flex flex-col justify-center items-center text-center p-8">
            <h3 className="text-2xl font-serif font-bold mb-4 text-white">Need a Service Not Listed?</h3>
            <p className="mb-6 text-blue-100">Contact us to discuss your specific document needs. We offer custom preparation services.</p>
            <a 
              href="tel:602-625-5625" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-primary hover:bg-secondary/90 h-11 px-8 py-2"
            >
              Contact Daniel
            </a>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto italic bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
            <strong>Disclaimer:</strong> Daniel Oceguera is not an attorney and cannot give legal advice about immigration or any other legal matters. Services provided are for document preparation only.
          </p>
        </div>
      </div>
    </section>
  );
}
