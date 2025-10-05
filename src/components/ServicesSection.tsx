import React from 'react';
import { motion } from 'framer-motion';
import { Building2, FileText, ClipboardList, Home, Wrench, Palette, Hammer, Settings, Zap, Droplets, Ruler, Paintbrush } from 'lucide-react';
import { Feature } from './ui/feature-with-advantages';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "General Construction",
      description: "Ground-break to grand-opening, all in-house.",
      icon: Building2
    },
    {
      title: "Construction Plans",
      description: "Permit-ready drawings, first-pass approval.",
      icon: FileText
    },
    {
      title: "Supervision & Management",
      description: "Daily oversight, weekly reports.",
      icon: ClipboardList
    },
    {
      title: "Interior Fit-out",
      description: "Luxury finishes in 8-12 weeks.",
      icon: Home
    },
    {
      title: "Renovation",
      description: "Boost value, slash downtime.",
      icon: Wrench
    },
    {
      title: "Interior Design",
      description: "Spaces that live as good as they look.",
      icon: Palette
    },
    {
      title: "Civil Works",
      description: "Roads, drainage, grading done right.",
      icon: Hammer
    },
    {
      title: "Structural Works",
      description: "Seismic-ready frames.",
      icon: Settings
    },
    {
      title: "Electrical Works",
      description: "Load-balanced, future-proof.",
      icon: Zap
    },
    {
      title: "Plumbing Works",
      description: "Leak-free, code-approved.",
      icon: Droplets
    },
    {
      title: "Architectural Works",
      description: "Form meets function.",
      icon: Ruler
    },
    {
      title: "Painting Works",
      description: "Factory-finish durability.",
      icon: Paintbrush
    }
  ];

  return (
    <section id="services" className="bg-white py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-[var(--dy-red-700)]"
          style={{
            clipPath: 'polygon(0 20%, 100% 0%, 100% 80%, 0% 100%)'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[var(--dy-red-700)] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Our Services
          </div>
          <h2 className="text-5xl md:text-7xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-8">
            Complete Construction Solutions
          </h2>
          <p className="text-2xl text-[var(--dy-gray-400)] max-w-4xl mx-auto leading-relaxed">
            From design to delivery, we handle every aspect of your construction project with professional expertise and guaranteed results.
          </p>
        </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
      >
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl card-hover border border-gray-100 
                           hover:border-[var(--dy-red-700)] transition-all duration-300
                           hover:shadow-2xl hover:-translate-y-2"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
              >
                <div className="w-16 h-16 bg-[var(--dy-red-700)] rounded-xl flex items-center justify-center mb-6 
                              hover:bg-[var(--dy-red-600)] transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--dy-gray-400)] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-[var(--dy-offwhite)] rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-[var(--dy-gray-400)] mb-6">
              Let's discuss how we can bring your vision to life with our comprehensive construction services.
            </p>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;