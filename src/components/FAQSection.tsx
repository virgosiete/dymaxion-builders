import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  onRequestQuote: () => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ onRequestQuote }) => {
  const faqs = [
    {
      question: "What types of projects does DYMAXION Builders handle?",
      answer: "DYMAXION delivers residential, commercial, industrial, healthcare, and infrastructure builds—from single-unit condo fit-outs to 10-storey commercial towers."
    },
    {
      question: "Do you handle permits and approvals?",
      answer: "Yes. Our in-house permitting desk liaises with LGUs, building admins, and utility providers so your project doesn't stall in paperwork."
    },
    {
      question: "How long does a typical condo renovation take?",
      answer: "Most 35–120 sqm units finish in 8–12 weeks, depending on scope and building rules. We give you a detailed Gantt chart at contract signing."
    },
    {
      question: "How do you keep projects on budget?",
      answer: "We lock scope with line-item BOQs, bulk-rate material agreements, and weekly earned-value dashboards. Any change orders are documented and client-approved before work proceeds."
    },
    {
      question: "Do you charge for the initial consultation?",
      answer: "No. Your first on-site or virtual consultation is 100% free—including preliminary scope review and ballpark costing."
    },
    {
      question: "What warranty do you provide?",
      answer: "All workmanship carries a 1-year warranty. Manufacturer warranties on fixtures and equipment are passed on in full."
    },
    {
      question: "Can I supply my own materials or fixtures?",
      answer: "You can, provided they meet our quality and spec standards. We'll still inspect, handle, and install them under the same warranty terms."
    },
    {
      question: "How soon can you start once we sign?",
      answer: "Mobilization can begin in as little as 10 business days, pending permit clearance and client down-payment."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[var(--dy-offwhite)] relative overflow-hidden">
      {/* Background Chevron Watermark */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-[var(--dy-red-700)]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[var(--dy-gray-400)] max-w-2xl mx-auto">
            Straight answers to the questions we hear most.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="faq-item bg-white rounded-xl shadow-lg border-t-4 border-[var(--dy-red-700)] mb-4 
                       card-hover group overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer 
                               hover:bg-gray-50 transition-colors duration-200">
                <h3 className="text-lg font-montserrat font-semibold text-[var(--dy-charcoal)] pr-4">
                  {faq.question}
                </h3>
                <ChevronDown className="h-5 w-5 text-[var(--dy-red-700)] flex-shrink-0 
                                     transition-transform duration-150 ease-out group-open:rotate-180" />
              </summary>
              
              <div className="px-6 pb-6">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-[var(--dy-gray-400)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;