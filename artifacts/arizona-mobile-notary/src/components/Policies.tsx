import { ShieldAlert, CreditCard, Car, Clock, UserCheck, FileX, AlertTriangle } from "lucide-react";

export default function Policies() {
  const policies = [
    {
      title: "Fees and Payment",
      icon: <CreditCard className="h-5 w-5 text-secondary" />,
      text: "Payment is due at the time of service. All fees are non-refundable once the appointment has been scheduled and the notary arrives at the agreed location or the client arrives at the notary's location."
    },
    {
      title: "Mobile / Travel Service",
      icon: <Car className="h-5 w-5 text-secondary" />,
      text: "A travel fee may apply depending on the distance and location of the appointment. Mobile service is provided for the convenience of the client."
    },
    {
      title: "After-Hours Appointments",
      icon: <Clock className="h-5 w-5 text-secondary" />,
      text: "Appointments scheduled after 10:00 PM may be subject to an additional after-hours service fee due to late-night availability and travel."
    },
    {
      title: "Waiting Time Policy",
      icon: <Clock className="h-5 w-5 text-secondary" />,
      text: "A 15-minute grace period is allowed from the scheduled appointment time. If the wait exceeds 15 minutes, an additional waiting fee may be charged. If the wait becomes excessive, the appointment may be cancelled and the service fee will still apply."
    },
    {
      title: "Identification Requirements",
      icon: <UserCheck className="h-5 w-5 text-secondary" />,
      text: "All signers must present a valid government-issued photo ID. The name on the ID must reasonably match the name on the document."
    },
    {
      title: "Signer Disqualifications",
      icon: <AlertTriangle className="h-5 w-5 text-secondary" />,
      text: "The notary may refuse notarization if the signer is not present, does not have proper identification, refuses to take an oath when required, refuses to pay the service fee, or appears confused, coerced, or lacking mental capacity."
    },
    {
      title: "Document Requirements",
      icon: <FileX className="h-5 w-5 text-secondary" />,
      text: "Documents must be complete and contain a notarial certificate. The notary may refuse to notarize documents that appear incomplete, fraudulent, deceptive, or illegal."
    },
    {
      title: "Important Notice",
      icon: <ShieldAlert className="h-5 w-5 text-secondary" />,
      text: "If the notary arrives at the scheduled time and location and the client decides not to proceed or no longer requires the service, the service fee will still be charged."
    }
  ];

  return (
    <section id="policies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Service Policies & Terms
            </h2>
            <p className="text-muted-foreground">
              Please review our service policies to ensure a smooth and efficient appointment.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Left Column */}
              <div className="flex flex-col divide-y divide-gray-100">
                {policies.slice(0, 4).map((policy, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/5 p-2 rounded-full">
                        {policy.icon}
                      </div>
                      <h3 className="font-bold text-primary">{policy.title}</h3>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {policy.text}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Right Column */}
              <div className="flex flex-col divide-y divide-gray-100">
                {policies.slice(4).map((policy, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/5 p-2 rounded-full">
                        {policy.icon}
                      </div>
                      <h3 className="font-bold text-primary">{policy.title}</h3>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {policy.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
