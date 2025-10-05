import React from 'react';
import { Lock } from 'lucide-react';
import { teamMembers } from '../data/team';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[var(--dy-red-700)] mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-[var(--dy-gray-400)] max-w-3xl mx-auto">
            Meet the experienced professionals leading DYMAXION to new heights of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover border border-gray-100"
            >
              <div className="aspect-w-3 aspect-h-3 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover filter grayscale blur-lg brightness-[0.1]"
                />
                {/* Locked Character Overlay */}
                <div className="absolute inset-0 bg-black/95 flex items-center justify-center 
                              group-hover:bg-black/60 transition-all duration-500">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3
                                  backdrop-blur-sm border border-white/30">
                      <Lock className="h-8 w-8 text-white/80" />
                    </div>
                    <p className="text-sm font-medium opacity-80">Under Construction</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-2">
                  {member.name}
                </h3>
                
                <div className="text-[var(--dy-red-700)] font-semibold mb-4">
                  {member.position}
                </div>
                
                <p className="text-[var(--dy-gray-400)] leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Partners */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
              Technical Partners
            </h3>
            <p className="text-[var(--dy-gray-400)]">
              Specialized expertise across all construction disciplines
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              'Architects',
              'Civil Engineers',
              'Structural Engineers',
              'Interior Designers',
              'MEP Engineers',
              'Master Plumbers'
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-[var(--dy-offwhite)] rounded-lg p-4 hover:bg-[var(--dy-red-700)] 
                         hover:text-white transition-all duration-300 cursor-pointer"
              >
                <div className="text-sm font-medium">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;