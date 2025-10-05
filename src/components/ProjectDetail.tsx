import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Square, ArrowRight, X } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const project = projects.find(p => p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--dy-charcoal)] mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/#portfolio')}
            className="btn-primary"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const handleBackToPortfolio = () => {
    navigate('/#portfolio');
  };

  const handleRequestQuote = () => {
    navigate('/#contact');
  };

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === (project.gallery?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? (project.gallery?.length || 1) - 1 : prev - 1
    );
  };

  const images = project.gallery || [project.image];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={handleBackToPortfolio}
              className="flex items-center text-[var(--dy-charcoal)] hover:text-[var(--dy-red-700)] transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-montserrat font-bold">Back to Portfolio</span>
            </button>
            <button
              onClick={handleRequestQuote}
              className="btn-primary"
            >
              Start My Interior Fit-Out →
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-[var(--dy-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
              {project.title}
            </h1>
            <div className="flex items-center justify-center text-[var(--dy-gray-400)] mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">{project.location}</span>
            </div>
            <p className="text-xl text-[var(--dy-gray-400)] max-w-4xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <div className="mb-8">
            <img
              src={images[0]}
              alt={project.title}
              className="w-full h-96 md:h-[500px] object-cover rounded-xl shadow-lg cursor-pointer"
              onClick={() => openGallery(0)}
            />
          </div>

          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {images.slice(1).map((image, index) => (
                <img
                  key={index + 1}
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-200"
                  onClick={() => openGallery(index + 1)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-[var(--dy-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Info */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-8">
                Project Overview
              </h2>
              
              {/* Tech Specs */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h3 className="text-xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
                  Project Specifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[var(--dy-gray-400)]">Type:</span>
                    <span className="font-semibold text-[var(--dy-charcoal)]">{project.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--dy-gray-400)]">Size:</span>
                    <span className="font-semibold text-[var(--dy-charcoal)]">{project.size}</span>
                  </div>
                  {project.floorArea && (
                    <div className="flex justify-between">
                      <span className="text-[var(--dy-gray-400)]">Floor Area:</span>
                      <span className="font-semibold text-[var(--dy-charcoal)]">{project.floorArea}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-[var(--dy-gray-400)]">Completed:</span>
                    <span className="font-semibold text-[var(--dy-charcoal)]">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--dy-gray-400)]">Location:</span>
                    <span className="font-semibold text-[var(--dy-charcoal)]">{project.location}</span>
                  </div>
                  {project.totalCost && (
                    <div className="flex justify-between">
                      <span className="text-[var(--dy-gray-400)]">Total Cost:</span>
                      <span className="font-bold text-[var(--dy-red-700)]">{project.totalCost}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleRequestQuote}
                  className="btn-primary inline-flex items-center"
                >
                  Start My Interior Fit-Out
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-8">
                Key Features
              </h2>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-1 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[var(--dy-red-700)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-[var(--dy-charcoal)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-6xl max-h-full p-4">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <img
              src={images[selectedImageIndex]}
              alt={`${project.title} - Gallery Image ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <ArrowLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <ArrowRight className="h-8 w-8" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                  {selectedImageIndex + 1} of {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;