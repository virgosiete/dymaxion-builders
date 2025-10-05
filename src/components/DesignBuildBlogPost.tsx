import React from 'react';
import { ArrowLeft, Download, CheckCircle, TrendingUp, Clock, DollarSign, Target, Users, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const DesignBuildBlogPost: React.FC = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const handleCTAClick = () => {
    window.location.href = '/#contact';
  };

  const stats = [
    { icon: TrendingUp, value: '102%', label: 'Faster Overall Delivery' },
    { icon: DollarSign, value: '3.8%', label: 'Less Cost Growth' },
    { icon: Clock, value: '36%', label: 'Faster Project Completion' }
  ];

  const dymaxionModel = [
    {
      title: 'Unified A-E-C Team',
      description: 'Architects, engineers, and build crew under one roof'
    },
    {
      title: 'Fast-Track Permitting Desk',
      description: 'In-house liaison to LGUs'
    },
    {
      title: 'Earned-Value Dashboards',
      description: 'Weekly cost/schedule tracking'
    },
    {
      title: 'Risk-Share Contracts',
      description: 'Single-point liability = fewer disputes'
    }
  ];

  const decisionMatrix = [
    { scenario: 'Clear scope, tight timeline', db: 'Green', dbb: 'Yellow', reason: 'DB excels with parallel workflows' },
    { scenario: 'Complex design, evolving requirements', db: 'Yellow', dbb: 'Green', reason: 'DBB allows design refinement' },
    { scenario: 'Fixed budget ceiling', db: 'Green', dbb: 'Red', reason: 'DB provides cost certainty earlier' },
    { scenario: 'Public sector compliance', db: 'Yellow', dbb: 'Green', reason: 'DBB traditional for transparency' }
  ];

  const actionSteps = [
    'Define project scope and performance criteria',
    'Prequalify design-build teams with relevant experience',
    'Request fixed-price proposals with schedule guarantees',
    'Insist on unified project management systems',
    'Establish clear change-order protocols',
    'Demand weekly progress reporting and cost tracking'
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
              onClick={handleCTAClick}
              className="btn-primary"
            >
              Request Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 diagonal-overlay"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}
        >
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-montserrat font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            One Contract. One Team. 100% Accountability.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the data-driven case for design-build and why DYMAXION leads the field.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-[var(--dy-offwhite)] rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-[var(--dy-red-700)] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-montserrat font-bold text-[var(--dy-red-700)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[var(--dy-charcoal)] font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery Method 101 */}
          <section className="mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Delivery Method 101
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
                  Design-Bid-Build (DBB)
                </h3>
                <p className="text-[var(--dy-gray-400)] leading-relaxed">
                  Traditional linear approach: complete design first, then bid to contractors, 
                  then build. Three separate phases, three separate contracts, three separate teams.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
                  Design-Build (DB)
                </h3>
                <p className="text-[var(--dy-gray-400)] leading-relaxed">
                  Integrated approach: one contract, one team handling design and construction 
                  simultaneously. Parallel workflows, shared accountability, unified communication.
                </p>
              </div>
            </div>

            {/* Pull Quote */}
            <div className="bg-[var(--dy-red-700)] text-white rounded-xl p-8 text-center mb-8">
              <blockquote className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
                "DB projects finish 36% faster and see 3.8% less cost growth than DBB."
              </blockquote>
              <cite className="text-white/80 text-sm">— Construction Industry Institute Research</cite>
            </div>
          </section>

          {/* Speed & Cost Advantage */}
          <section className="mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              The Speed & Cost Advantage
            </h2>
            
            <div className="bg-[var(--dy-offwhite)] rounded-xl p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-montserrat font-bold text-[var(--dy-red-700)] mb-2">102%</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Faster Overall Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-montserrat font-bold text-[var(--dy-red-700)] mb-2">61%</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Faster Design-to-Completion</div>
                </div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed text-[var(--dy-gray-400)] mb-6">
              Design-build's speed advantage comes from parallel work-streams: while architects refine 
              plans, contractors can begin site preparation and early procurement. This overlap eliminates 
              the traditional "dead time" between design completion and construction start.
            </p>
            
            <p className="text-lg leading-relaxed text-[var(--dy-gray-400)]">
              Cost benefits stem from fewer change orders (design and build teams collaborate from day one), 
              early value engineering, and bulk procurement advantages. When everyone shares the same goal 
              and timeline, inefficiencies naturally disappear.
            </p>
          </section>

          {/* Why This Matters in the Philippines */}
          <section className="mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Why This Matters in the Philippines
            </h2>
            <p className="text-lg leading-relaxed text-[var(--dy-gray-400)] mb-6">
              Local market conditions make design-build particularly valuable here. Permit bottlenecks 
              with various LGUs can stretch project timelines unpredictably. Material costs have seen 
              significant inflation—steel, cement, and labor rates shift monthly, making speed a budget 
              protection strategy.
            </p>
            <p className="text-lg leading-relaxed text-[var(--dy-gray-400)] mb-6">
              The talent shortage in skilled trades means successful contractors guard their teams carefully. 
              Design-build allows these teams to stay continuously productive rather than waiting for 
              separate design phases to complete.
            </p>
            <div className="bg-white border-l-4 border-[var(--dy-red-700)] p-6 rounded-r-xl shadow-lg">
              <p className="text-[var(--dy-gray-400)] leading-relaxed mb-4">
                <strong className="text-[var(--dy-charcoal)]">Legal Framework:</strong> RA 9184 
                explicitly allows design-build for infrastructure projects, recognizing its efficiency 
                advantages. Private sector owners have even more flexibility to streamline delivery methods.
              </p>
            </div>
          </section>

          {/* DYMAXION's Integrated Model */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-8">
              DYMAXION's Integrated Model
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dymaxionModel.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[var(--dy-red-700)]">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[var(--dy-red-700)] mr-3" />
                    <h3 className="text-xl font-montserrat font-bold text-[var(--dy-charcoal)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[var(--dy-gray-400)]">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Case Snapshot */}
          <section className="mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Case Snapshot: 4-BR Luxury Condo, BGC
            </h2>
            <div className="bg-[var(--dy-offwhite)] rounded-xl p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--dy-red-700)] mb-2">6 weeks</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Ahead of Schedule</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--dy-red-700)] mb-2">₱800k</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Escalation Avoided</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--dy-red-700)] mb-2">Zero</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Major Change Orders</div>
                </div>
              </div>
              <p className="text-[var(--dy-gray-400)] leading-relaxed">
                By running design development and early procurement in parallel, we compressed the 
                traditional 18-week timeline to 12 weeks. Material cost locks protected the client 
                from mid-project price increases that hit competing projects.
              </p>
            </div>

            {/* Client Testimonial Placeholder */}
            <div className="bg-white border-l-4 border-[var(--dy-red-700)] p-6 rounded-r-xl shadow-lg">
              <blockquote className="text-xl italic text-[var(--dy-gray-400)] mb-4">
                "DYMAXION's design-build approach eliminated the finger-pointing we experienced on previous 
                projects. One team, one contract, complete accountability—exactly what we needed."
              </blockquote>
              <cite className="text-[var(--dy-charcoal)] font-semibold">— Property Developer, BGC East</cite>
            </div>
          </section>

          {/* Decision Checklist */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Decision Checklist
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
                When Design-Build Beats Design-Bid-Build
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[var(--dy-offwhite)]">
                    <tr>
                      <th className="text-left p-3 font-semibold text-[var(--dy-charcoal)]">Scenario</th>
                      <th className="text-center p-3 font-semibold text-[var(--dy-charcoal)]">Design-Build</th>
                      <th className="text-center p-3 font-semibold text-[var(--dy-charcoal)]">Design-Bid-Build</th>
                      <th className="text-left p-3 font-semibold text-[var(--dy-charcoal)]">Key Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionMatrix.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="p-3 font-medium text-[var(--dy-charcoal)]">{item.scenario}</td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            item.db === 'Green' ? 'bg-green-100 text-green-700' :
                            item.db === 'Yellow' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {item.db}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            item.dbb === 'Green' ? 'bg-green-100 text-green-700' :
                            item.dbb === 'Yellow' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {item.dbb}
                          </span>
                        </td>
                        <td className="p-3 text-[var(--dy-gray-400)]">{item.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Action Steps */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Action Steps
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-4 mb-6">
                {actionSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-[var(--dy-red-700)] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-[var(--dy-charcoal)] font-medium">{step}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button className="inline-flex items-center bg-[var(--dy-charcoal)] text-white px-6 py-3 rounded-xl hover:bg-[var(--dy-charcoal)]/90 transition-colors duration-200">
                  <Download className="h-5 w-5 mr-3" />
                  Design-Build RFP Checklist (PDF)
                </button>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-12 not-prose">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/#services" className="block bg-[var(--dy-offwhite)] p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-3">
                  <Target className="h-6 w-6 text-[var(--dy-red-700)] mr-3" />
                  <h3 className="text-lg font-montserrat font-bold text-[var(--dy-charcoal)]">
                    General Construction Services
                  </h3>
                </div>
                <p className="text-[var(--dy-gray-400)]">
                  Learn more about our integrated design-build construction approach
                </p>
              </a>
              
              <a href="/#portfolio" className="block bg-[var(--dy-offwhite)] p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-[var(--dy-red-700)] mr-3" />
                  <h3 className="text-lg font-montserrat font-bold text-[var(--dy-charcoal)]">
                    Design-Build Portfolio
                  </h3>
                </div>
                <p className="text-[var(--dy-gray-400)]">
                  See our completed design-build projects and success stories
                </p>
              </a>
            </div>
          </section>
        </article>
      </main>

      {/* Sticky CTA Band */}
      <div className="sticky bottom-0 z-40 bg-[var(--dy-red-700)] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-montserrat font-bold text-white mb-1">
                Ready to cut months—not corners?
              </h3>
              <p className="text-white/80 text-sm">
                Experience the speed and cost advantages of integrated design-build.
              </p>
            </div>
            <button
              onClick={handleCTAClick}
              data-analytics="blog_designbuild_cta"
              className="bg-white text-[var(--dy-red-700)] font-montserrat font-bold px-8 py-3 rounded-xl hover:bg-[var(--dy-offwhite)] transition-colors duration-200"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignBuildBlogPost;