import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ServiceFeature {
  title: string;
  description: string;
}

interface FeatureProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  features?: ServiceFeature[];
}

function Feature({ 
  badgeText = "Services",
  title = "Complete Construction Solutions",
  subtitle = "From design to delivery, we handle every aspect of your construction project.",
  features = []
}: FeatureProps) {
  const defaultFeatures: ServiceFeature[] = [
    {
      title: "General Construction",
      description: "Ground-break to grand-opening, all in-house."
    },
    {
      title: "Construction Plans",
      description: "Permit-ready drawings, first-pass approval."
    },
    {
      title: "Interior Fit-out",
      description: "Luxury finishes in 8-12 weeks."
    },
    {
      title: "Supervision & Management",
      description: "Daily oversight, weekly reports."
    },
    {
      title: "Renovation",
      description: "Boost value, slash downtime."
    },
    {
      title: "Interior Design",
      description: "Spaces that live as good as they look."
    }
  ];

  const servicesToShow = features.length > 0 ? features : defaultFeatures;

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge variant="default">{badgeText}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-4xl font-montserrat font-bold text-[var(--dy-charcoal)]">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-3xl leading-relaxed tracking-tight text-[var(--dy-gray-400)]">
              {subtitle}
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {servicesToShow.map((service, index) => (
                <div key={index} className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-5 h-5 mt-1 text-[var(--dy-red-700)] flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-[var(--dy-charcoal)]">{service.title}</p>
                    <p className="text-[var(--dy-gray-400)] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };