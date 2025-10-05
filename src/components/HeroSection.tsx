import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote }) => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Designing", "For", "Generations"],
    []
  );

  const trustLogos = [
    'SM', 'SMDC', 'Ayala', 'Robinsons', 'Sta. Lucia', 
    'Megaworld', 'Lawson', "Burby's Grill"
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleViewPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Diagonal Overlay */}
      <div 
        className="absolute inset-0 diagonal-overlay"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)'
        }}
      >
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl">
          {/* Animated Title */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-montserrat font-bold text-white leading-tight text-center">
              <span className="block mb-2">Building Timeless Spaces</span>
              <span className="relative flex items-center justify-center overflow-hidden min-h-[1.2em] w-full">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-[var(--dy-offwhite)] text-center whitespace-nowrap px-2"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100,
                      damping: 15,
                      duration: 0.6
                    }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -100 : 100,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-[var(--dy-offwhite)] mb-8 font-light leading-relaxed max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
            "Over 10 years of excellence in residential, commercial & interior construction."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center">
            <Button
              onClick={onRequestQuote}
              size="lg"
              variant="default"
              className="flex items-center justify-center font-montserrat font-semibold"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleViewPortfolio}
              size="lg"
              variant="outline"
              className="flex items-center justify-center font-montserrat font-semibold"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Bar */}
          <motion.div 
            className="border-t border-white/20 pt-8 text-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="text-[var(--dy-offwhite)] text-sm mb-4 font-medium text-center">
              TRUSTED BY INDUSTRY LEADERS
            </p>
            <div className="overflow-hidden whitespace-nowrap w-full">
              <motion.div
                className="flex items-center gap-4 sm:gap-6 md:gap-8"
                animate={{ x: [-1000, 0] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of logos */}
                {trustLogos.map((logo, index) => (
                  <div
                    key={`first-${logo}`}
                    className="text-white/70 font-montserrat font-semibold text-xs sm:text-sm md:text-lg 
                             hover:text-white transition-colors duration-200 cursor-pointer
                             flex-shrink-0 px-2 sm:px-3 md:px-4"
                  >
                    {logo}
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {trustLogos.map((logo, index) => (
                  <div
                    key={`second-${logo}`}
                    className="text-white/70 font-montserrat font-semibold text-xs sm:text-sm md:text-lg 
                             hover:text-white transition-colors duration-200 cursor-pointer
                             flex-shrink-0 px-2 sm:px-3 md:px-4"
                  >
                    {logo}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;