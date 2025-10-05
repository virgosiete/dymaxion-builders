import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import ContactSlideOver from './ContactSlideOver';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0 mr-8 lg:mr-12">
              <div className="flex items-center gap-3">
                <img 
                  src="https://42lxfly3fn.ufs.sh/f/t9YpzTMVcXDphe7yd9IinFmb1aZGLIUA5o4cJS6BpEHCjVT7" 
                  alt="DYMAXION Builders Logo" 
                  className="h-20 w-20 object-contain"
                />
                <div>
                  <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-[#E11D48] leading-none">
                    DYMAXION BUILDERS
                  </h1>
                  <p className="text-[10px] md:text-xs text-[#4B5563] font-normal leading-none mt-1 tracking-widest pl-1">
                    RAISING STRUCTURES, ELEVATING DREAMS
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg px-3 py-2 text-[var(--dy-charcoal)] hover:text-[var(--dy-red-700)] 
                           font-medium transition-colors duration-200 whitespace-nowrap rounded-lg
                           hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Spacer to push mobile menu to the right */}
            <div className="flex-1"></div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-[var(--dy-charcoal)] hover:text-[var(--dy-red-700)]"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-[var(--dy-charcoal)] 
                           hover:text-[var(--dy-red-700)] hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <ContactSlideOver 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
};

export default Header;