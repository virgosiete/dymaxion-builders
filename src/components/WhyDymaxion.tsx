import React from 'react';
import { Users, ShieldCheck, Heart, Clock } from 'lucide-react';

const WhyDymaxion: React.FC = () => {
  const values = [
    {
      title: 'Expert Teams',
      description: 'Architects, engineers, and master craftsmen working as one unified force for your project.',
      image: 'https://42lxfly3fn.ufs.sh/f/t9YpzTMVcXDpSCIezGlyrjJg5ekidqnoQKAh8FRG7S1OmXau'
    },
    {
      title: 'Quality & Compliance',
      description: 'Materials, methods, and documentation done right the first time, every time.',
      image: 'https://42lxfly3fn.ufs.sh/f/t9YpzTMVcXDpc0Io9WQRDJbnSGOEl9tr7BaoWhIgupc8Y4Nw'
    },
    {
      title: 'Client-First',
      description: 'Clear costs, transparent timelines, and direct communication throughout your journey.',
      image: 'https://42lxfly3fn.ufs.sh/f/t9YpzTMVcXDpfJZnUj7gtPELVvZITBFpMNyaJb80x691nSDh'
    },
    {
      title: 'On-Time Delivery',
      description: 'Streamlined project management from kickoff to turnover, meeting every deadline.',
      image: 'https://42lxfly3fn.ufs.sh/f/t9YpzTMVcXDpkHvmiZ9Gmf1s8gUMpiburw2jSeCT3RhJtoIa'
    }
  ];

  return (
    <section className="py-20 bg-[var(--dy-offwhite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            <span className="text-[var(--dy-charcoal)]">Why </span>
            <span className="text-[var(--dy-red-700)]">DYMAXION</span>
          </h2>
          <p className="text-xl text-[var(--dy-gray-400)] max-w-3xl mx-auto">
            We eliminate the chaos of construction by bringing everything under one roof. 
            No more chasing contractors or dealing with delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 card-hover border border-gray-100"
              >
                <div className="aspect-square w-full rounded-xl overflow-hidden mb-6">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--dy-gray-400)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDymaxion;