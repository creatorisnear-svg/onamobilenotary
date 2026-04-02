import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Maria G.",
      date: "2 months ago",
      text: "Daniel was amazing! He came to my house same day and notarized all my documents quickly. Very professional and bilingual — he explained everything in Spanish so my parents could understand. Highly recommend!"
    },
    {
      name: "Robert T.",
      date: "3 months ago",
      text: "Used Daniel for a real estate closing. Showed up on time, had everything ready, and made a stressful process very easy. Will definitely use again."
    },
    {
      name: "Ana L.",
      date: "1 month ago",
      text: "Excellent service! Daniel helped us with our immigration paperwork (I-485). He was thorough, patient, and very knowledgeable. The price was fair and he came to our location. 5 stars!"
    },
    {
      name: "James M.",
      date: "4 months ago",
      text: "Called Daniel for an urgent Power of Attorney that needed notarizing before my father's surgery. He came to the hospital within the hour. Can't thank him enough."
    },
    {
      name: "Sofia R.",
      date: "2 weeks ago",
      text: "Necesitaba traducción certificada y notariado urgente. Daniel fue muy profesional, habla perfectamente español y los precios son muy razonables. Lo recomiendo al 100%."
    },
    {
      name: "Kevin B.",
      date: "5 months ago",
      text: "Set up my LLC through Daniel — he handled all the paperwork and filings. Super convenient, came to my office, and saved me hours I would have spent at a government office."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Client Testimonials
          </h2>
          <div className="flex justify-center items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-secondary text-secondary" />
            ))}
          </div>
          <p className="text-lg text-blue-100">
            Read what our clients have to say about our professional mobile notary and document services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/15 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold font-serif text-lg">{review.name}</h4>
                    <p className="text-xs text-blue-200">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-blue-50 italic">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
