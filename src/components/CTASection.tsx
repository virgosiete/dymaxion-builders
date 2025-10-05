import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onRequestQuote: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onRequestQuote }) => {
  return (
    <section className="py-20 bg-[var(--dy-red-700)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6">
          Ready to start?
        </h2>
        <p className="text-2xl md:text-3xl text-[var(--dy-offwhite)] mb-8 font-light">
          Let's lock in your scope and timeline.
        </p>
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
          Stop chasing contractors and start building with confidence. 
          Get a detailed quote with transparent pricing and realistic timelines.
        </p>
        
        <button
          onClick={onRequestQuote}
          className="bg-white text-[var(--dy-red-700)] font-montserrat font-bold 
                   px-10 py-4 rounded-xl hover:bg-[var(--dy-offwhite)] 
                   transform hover:scale-105 transition-all duration-200 
                   shadow-2xl text-lg inline-flex items-center"
        >
          Request a Quote
          <ArrowRight className="ml-3 h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;