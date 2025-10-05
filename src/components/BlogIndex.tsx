import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogIndex: React.FC = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const handleViewPost = (slug: string) => {
    window.location.href = `/blog/${slug}`;
  };

  const posts = [
    {
      slug: 'professional-supervision-saves-millions',
      title: 'How Professional Supervision Slashes Cost Overruns & Delays in Philippine Construction',
      description: 'Discover why 98% of construction projects run over budget—and how DYMAXION\'s integrated supervision model keeps yours on time and on cost.',
      date: 'January 15, 2024',
      readTime: '8 min read',
      category: 'Project Management',
      image: 'https://xt8mucpx5f.ufs.sh/f/mLXjFaD4YOwxINEpVqO0MjN4p7COBqUHSXPoWiDwm6kALc1F'
    },
    {
      slug: 'hidden-condo-renovation-costs-philippines',
      title: 'The Hidden Costs of Condo Renovations in the Philippines—and How to Budget Smart',
      description: 'Renovating a condo? Learn the overlooked costs—permits, association dues, fit-out fees—and the pro tips that keep your budget intact.',
      date: 'January 8, 2024',
      readTime: '7 min read',
      category: 'Renovation Planning',
      image: 'https://xt8mucpx5f.ufs.sh/f/mLXjFaD4YOwxpQOcMpbsIBP5jCb36Jgo8V4Z01SNAFrxwL9K'
    },
    {
      slug: 'design-build-vs-design-bid-build-philippines',
      title: 'Design-Build vs. Design-Bid-Build: 102% Faster Delivery & 3.8% Less Cost Growth',
      description: 'Compare delivery methods: see why design-build cuts months off your timeline and protects your budget—plus how DYMAXION makes it work in PH.',
      date: 'January 22, 2024',
      readTime: '9 min read',
      category: 'Project Management',
      image: 'https://xt8mucpx5f.ufs.sh/f/mLXjFaD4YOwxWkmH6TgP8ZupfVgUxq4sIHmGDbd0Sa51jJyl'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-[var(--dy-charcoal)] hover:text-[var(--dy-red-700)] transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-montserrat font-bold">DYMAXION</span>
            </button>
            <button
              onClick={handleBackToHome}
              className="btn-primary"
            >
              Request Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-[var(--dy-offwhite)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
            Construction Insights
          </h1>
          <p className="text-xl text-[var(--dy-gray-400)] leading-relaxed">
            Expert perspectives on construction best practices, project management, and industry trends.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-xl card-hover border border-gray-100 
                         transform transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 px-4 py-2 rounded-full text-sm font-semibold text-[var(--dy-charcoal)] 
                                   backdrop-blur-sm shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-sm text-[var(--dy-gray-400)] mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-3">
                    {post.title}
                  </h2>
                  
                  <p className="text-[var(--dy-gray-400)] text-base mb-6 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <button
                    onClick={() => handleViewPost(post.slug)}
                    className="text-[var(--dy-red-700)] font-semibold text-base hover:text-[var(--dy-red-600)] 
                                 flex items-center transition-all duration-200 hover:translate-x-2"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogIndex;