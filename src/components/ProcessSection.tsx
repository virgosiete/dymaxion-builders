import React from 'react';
import { MessageSquare, Palette, Calculator, Hammer, Key } from 'lucide-react';
import { FeatureSteps } from './ui/FeatureSteps';
import { buildingProcessFeatures } from '../data/buildingProcess';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Consult',
      description: 'We understand your vision, requirements, and constraints.'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design',
      description: 'Creative concepts transformed into detailed construction documents.'
    },
    {
      number: '03',
      icon: Calculator,
      title: 'Costing',
      description: 'Transparent budgeting with line-item clarity and no surprises.'
    },
    {
      number: '04',
      icon: Hammer,
      title: 'Build',
      description: 'Quality construction with disciplined project management.'
    },
    {
      number: '05',
      icon: Key,
      title: 'Turnover',
      description: 'Complete handover with documentation and warranties.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[var(--dy-offwhite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
            Our Process
          </h2>
          <p className="text-2xl text-[var(--dy-red-700)] font-montserrat font-semibold mb-6">
            "Discipline beats drama. We plan, we document, we build, we hand over."
          </p>
          <p className="text-xl text-[var(--dy-gray-400)] max-w-3xl mx-auto">
            Five clear steps from vision to reality, with transparency at every stage.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-montserrat font-bold text-[var(--dy-red-700)] mb-2">
              25+
            </div>
            <div className="text-[var(--dy-charcoal)] font-medium">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-montserrat font-bold text-[var(--dy-red-700)] mb-2">
              100+
            </div>
            <div className="text-[var(--dy-charcoal)] font-medium">Team Members</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-montserrat font-bold text-[var(--dy-red-700)] mb-2">
              500+
            </div>
            <div className="text-[var(--dy-charcoal)] font-medium">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-montserrat font-bold text-[var(--dy-red-700)] mb-2">
              100%
            </div>
            <div className="text-[var(--dy-charcoal)] font-medium">Licensed Pros</div>
          </div>
        </div>

        {/* Interactive Process Feature */}
        <div className="mt-20">
          <FeatureSteps 
            features={buildingProcessFeatures}
            title="Your Project Journey"
            autoPlayInterval={4000}
            className="bg-white rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;