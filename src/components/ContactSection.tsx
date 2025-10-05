import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactSectionProps {
  onRequestQuote: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onRequestQuote }) => {
  return (
    <section id="contact" className="py-20 bg-[var(--dy-offwhite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
            Let's build it right.
          </h2>
          <p className="text-xl text-[var(--dy-gray-400)] max-w-3xl mx-auto">
            Ready to discuss your project? Reach out to us and let's start building something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--dy-red-700)] rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--dy-charcoal)] mb-1">New Serve Office</h4>
                    <p className="text-[var(--dy-gray-400)]">
                      Level 24, Philippine Stock Exchange Tower<br />
                      5th Ave cor. 28th St, BGC, Taguig City
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--dy-red-700)] rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--dy-charcoal)] mb-1">Main Office</h4>
                    <p className="text-[var(--dy-gray-400)]">
                      Unit 2, Board Up Hardware<br />
                      Bantayan Road, Palingon, Taguig City
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--dy-red-700)] rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--dy-charcoal)] mb-1">Phone</h4>
                    <p className="text-[var(--dy-gray-400)]">
                      (+63) 917 162 7100<br />
                      (+63) 917 791 5115
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--dy-red-700)] rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--dy-charcoal)] mb-1">Business Hours</h4>
                    <p className="text-[var(--dy-gray-400)]">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & CTA */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="aspect-w-16 aspect-h-12 mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.838954801799!2d121.04477297439279!3d14.551200378285635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c817330843df%3A0x69a89faf926a1a74!2sThe%20Philippine%20Stock%20Exchange%2C%20Inc.!5e0!3m2!1sen!2sus!4v1754550701046!5m2!1sen!2sus"
                  className="w-full h-64 rounded-lg border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DYMAXION Builders Location - Philippine Stock Exchange Tower"
                />
              </div>
              
              <div className="text-center space-y-4">
                <button
                  onClick={onRequestQuote}
                  className="w-full btn-primary"
                >
                  Request a Quote
                </button>
                
                <a
                  href="tel:+639171627100"
                  className="w-full btn-secondary inline-flex items-center justify-center md:hidden"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h4 className="font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
                Why Choose DYMAXION
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--dy-gray-400)]">Since</span>
                  <span className="font-semibold text-[var(--dy-charcoal)]">1998</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--dy-gray-400)]">Incorporated</span>
                  <span className="font-semibold text-[var(--dy-charcoal)]">2005</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--dy-gray-400)]">Team Size</span>
                  <span className="font-semibold text-[var(--dy-charcoal)]">100+ Professionals</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--dy-gray-400)]">Specialties</span>
                  <span className="font-semibold text-[var(--dy-charcoal)]">All Sectors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;