import React from 'react';
import { ArrowRight, MapPin, Square } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

interface FeaturedProjectsProps {
  onViewPortfolio: () => void;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onViewPortfolio }) => {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);

  const handleViewDetails = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[var(--dy-red-700)] mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-[var(--dy-gray-400)] max-w-3xl mx-auto">
            Excellence in execution across residential, commercial, and specialty projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl card-hover border border-gray-100 
                         transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 px-4 py-2 rounded-full text-sm font-semibold text-[var(--dy-charcoal)] 
                                 backdrop-blur-sm shadow-md">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-3">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-[var(--dy-gray-400)] mb-6">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-base font-medium">{project.location}</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  {project.floorArea && (
                    <div className="flex items-center justify-between">
                      <span className="text-base text-[var(--dy-gray-400)]">Floor Area:</span>
                      <span className="text-base font-semibold text-[var(--dy-charcoal)]">
                        {project.floorArea}
                      </span>
                    </div>
                  )}
                  {project.totalCost && (
                    <div className="flex items-center justify-between">
                      <span className="text-base text-[var(--dy-gray-400)]">Total Cost:</span>
                      <span className="text-base font-bold text-[var(--dy-red-700)]">
                        {project.totalCost}
                      </span>
                    </div>
                  )}
                </div>
                
                <p className="text-[var(--dy-gray-400)] text-base mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <button 
                  onClick={() => handleViewDetails(project.id)}
                  className="text-[var(--dy-red-700)] font-semibold text-base hover:text-[var(--dy-red-600)] 
                                 flex items-center transition-all duration-200 hover:translate-x-2">
                  View Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onViewPortfolio}
            className="btn-primary inline-flex items-center"
          >
            Explore the Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;