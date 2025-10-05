import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Award, Building2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const timelineItems = [
    {
      year: '1998',
      title: 'J.P. De Guia Construction launched',
      description: 'Started as a subcontractor on the EDSA project'
    },
    {
      year: '2005',
      title: 'Rebranded to DYMAXION BUILDERS INC.',
      description: 'Evolution from modest crew to established company'
    },
    {
      year: '10 → 100',
      title: 'Team Growth',
      description: 'Expanded from 10 to 100+ professionals'
    },
    {
      year: 'Today',
      title: 'Industry Leader',
      description: 'Prestigious clients, innovative projects, sustainable practices'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handleScrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-[var(--dy-offwhite)] relative overflow-hidden">
      {/* Background Diagonal Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-[var(--dy-red-700)]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <img
                src="https://xt8mucpx5f.ufs.sh/f/mLXjFaD4YOwxo0xbpZH8hxgFKBrI2T9ucMnRlX13WtfO0Ykz"
                alt="DYMAXION Builders Team"
                className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Founding & Growth Story */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-[var(--dy-red-700)]"
              variants={itemVariants}
            >
             <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
               About Dymaxion Builders
             </h3>
             <div className="text-lg leading-relaxed text-[var(--dy-charcoal)]">
               <p>
                 With our group of engineers, architects, and skilled workers, we make sure that professional supervision and excellent service is given to every client we come across—regardless of the scale of the project.
               </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          id="timeline"
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] text-center mb-12"
            variants={itemVariants}
          >
            Our Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-[var(--dy-red-700)] opacity-20"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  variants={itemVariants}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-montserrat font-bold text-[var(--dy-red-700)] mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-montserrat font-bold text-[var(--dy-charcoal)] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[var(--dy-gray-400)]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[var(--dy-red-700)] rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-[var(--dy-red-700)] card-hover"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--dy-red-700)] rounded-lg flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-[var(--dy-charcoal)]">
                  Our Mission
                </h3>
              </div>
              <p className="text-[var(--dy-gray-400)] leading-relaxed">
                To exceed client expectations by delivering exceptional design and engineering solutions tailored to their unique needs—backed by uncompromising quality, innovation, and relationships built on trust and excellence.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-[var(--dy-red-700)] card-hover"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--dy-red-700)] rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-[var(--dy-charcoal)]">
                  Our Vision
                </h3>
              </div>
              <p className="text-[var(--dy-gray-400)] leading-relaxed">
                To deliver innovative design and engineering solutions locally and internationally, transforming spaces with precision and creativity, setting new standards, and leaving a lasting impact on every project.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;