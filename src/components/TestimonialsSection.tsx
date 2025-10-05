import React from 'react';
import { Testimonials } from './ui/testimonials';
import { testimonials } from '../data/testimonials';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--dy-offwhite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Testimonials 
          testimonials={testimonials}
          title="What Our Clients Say"
          description="Real feedback from property owners, developers, and business leaders who chose DYMAXION for their construction projects."
          maxDisplayed={6}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;