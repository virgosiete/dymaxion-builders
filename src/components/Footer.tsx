import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Architectural Design',
    'Interior Design',
    'Engineering Design',
    'Permits & Construction',
    'Project Management'
  ];

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Company Profile'
  ];

  return (
    <footer className="bg-[var(--dy-charcoal)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-montserrat font-bold text-[var(--dy-red-700)] mb-4">
              DYMAXION
            </h3>
            <p className="text-sm font-medium text-white/80 mb-4">
              BUILDERS
            </p>
            <p className="text-white/70 mb-6 leading-relaxed">
              Excellence in design, engineering, and construction since 1998. 
              We deliver projects on time, within budget, and beyond expectations.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
                         hover:bg-[var(--dy-red-700)] transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
                         hover:bg-[var(--dy-red-700)] transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
                         hover:bg-[var(--dy-red-700)] transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white hover:text-[var(--dy-red-700)] 
                             transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-montserrat font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-montserrat font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[var(--dy-red-700)] mt-1 mr-3 flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  Level 24, PSE Tower<br />
                  5th Ave cor. 28th St, BGC
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[var(--dy-red-700)] mr-3" />
                <div className="text-white/70 text-sm">
                  (+63) 917 162 7100
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[var(--dy-red-700)] mr-3" />
                <div className="text-white/70 text-sm">
                  info@dymaxionbuilders.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row 
                        justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © 2024 DYMAXION Builders. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {legal.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;