import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Daniel Oceguera
            </h3>
            <p className="text-blue-200 text-sm mb-6 max-w-xs leading-relaxed">
              Certified Mobile Notary Public and Licensed Legal Document Preparer serving the greater Phoenix and Maricopa County area.
            </p>
            <div className="flex items-center gap-3 text-white">
              <span className="text-sm font-semibold tracking-wider uppercase text-secondary">BILINGUAL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span className="text-sm font-semibold tracking-wider uppercase text-secondary">SE HABLA ESPAÑOL</span>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:602-625-5625" className="flex items-center gap-3 text-blue-100 hover:text-secondary transition-colors group">
                  <div className="bg-white/10 p-2 rounded group-hover:bg-secondary/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>602-625-5625 (Call or Text)</span>
                </a>
              </li>
              <li>
                <a href="mailto:Doceguer@live.com" className="flex items-center gap-3 text-blue-100 hover:text-secondary transition-colors group">
                  <div className="bg-white/10 p-2 rounded group-hover:bg-secondary/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>Doceguer@live.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-blue-100">
                <div className="bg-white/10 p-2 rounded mt-1">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Serving Greater Phoenix<br/>& Maricopa County, Arizona</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block">Certifications</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li>• State of Arizona Notary Commission #677098</li>
              <li>• Legal Document Preparer Certificate #82252</li>
              <li>• Member, American Association of Notaries</li>
            </ul>
            
            <div className="mt-6 p-4 bg-red-900/20 border border-red-500/20 rounded-lg">
              <p className="text-xs text-red-200 font-medium">
                *DISCLAIMER: I am not an attorney licensed to practice law in this state. I am not allowed to draft legal records, give advice on legal matters, including immigration, or charge a fee for those activities. Document preparation services only.
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-300">
            &copy; {new Date().getFullYear()} Daniel Oceguera. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-blue-300">
            <a href="#policies" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#policies" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
