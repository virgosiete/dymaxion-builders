import React from 'react';
import { Phone } from 'lucide-react';

interface StickyCTAProps {
  onRequestQuote: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onRequestQuote }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-white shadow-2xl border-t border-gray-200 p-4">
        <div className="flex gap-3">
          <a
            href="tel:+639171627100"
            className="flex-1 bg-[var(--dy-charcoal)] text-white font-medium py-3 px-4 
                     rounded-xl flex items-center justify-center hover:bg-[var(--dy-charcoal)]/90 
                     transition-colors duration-200"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </a>
          <button
            onClick={onRequestQuote}
            className="flex-1 btn-primary"
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;