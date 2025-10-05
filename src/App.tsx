import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedProjects from './components/FeaturedProjects';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactSlideOver from './components/ContactSlideOver';
import BlogIndex from './components/BlogIndex';
import BlogPost from './components/BlogPost';
import HiddenCostsBlogPost from './components/HiddenCostsBlogPost';
import DesignBuildBlogPost from './components/DesignBuildBlogPost';
import ProjectDetail from './components/ProjectDetail';

function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleRequestQuote = () => {
    setIsContactOpen(true);
  };

  const handleViewPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection onRequestQuote={handleRequestQuote} />
        <AboutSection />
        <FeaturedProjects onViewPortfolio={handleViewPortfolio} />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection onRequestQuote={handleRequestQuote} />
        <CTASection onRequestQuote={handleRequestQuote} />
        <ContactSection onRequestQuote={handleRequestQuote} />
      </main>

      <Footer />
      
      <ContactSlideOver 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/professional-supervision-saves-millions" element={<BlogPost />} />
        <Route path="/blog/hidden-condo-renovation-costs-philippines" element={<HiddenCostsBlogPost />} />
        <Route path="/blog/design-build-vs-design-bid-build-philippines" element={<DesignBuildBlogPost />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;