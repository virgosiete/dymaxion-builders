import React from 'react';
import { ArrowLeft, Download, CheckCircle, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost: React.FC = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const handleCTAClick = () => {
    window.location.href = '/#contact';
  };

  const stats = [
    { icon: TrendingUp, value: '98%', label: 'Projects Over Budget' },
    { icon: DollarSign, value: '80%', label: 'Average Cost Increase' },
    { icon: Clock, value: '20mo', label: 'Average Delay' }
  ];

  const dymaxionDifference = [
    {
      title: 'Unified A–E–C Team',
      description: 'Architects, engineers, craftsmen under one roof'
    },
    {
      title: 'Daily Site Reports',
      description: 'Transparent dashboards, alert triggers'
    },
    {
      title: 'Permit Fast-Track Desk',
      description: 'In-house liaison to LGUs'
    },
    {
      title: 'Proactive PM',
      description: 'Weekly earned-value tracking vs. baseline'
    }
  ];

  const actionSteps = [
    'Define KPIs before groundbreaking',
    'Insist on line-item visibility in all reports',
    'Demand on-site licensed professionals',
    'Establish weekly milestone checkpoints',
    'Implement change order approval protocols'
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
            backgroundImage: 'url(https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg)',
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
            Cut the Chaos. Build with Certainty.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Integrated supervision is your best defense against runaway costs and schedule slippage.
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

          {/* The Hard Truth */}
          <section className="mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              The Hard Truth About Cost Overruns
            </h2>
            <p className="text-lg leading-relaxed text-[var(--dy-gray-400)] mb-6">
              According to McKinsey research, 98% of global construction projects blow past budgets or deadlines, 
              with average cost increases hitting 80% and delays stretching 20 months. This isn't just a global 
              phenomenon—in the Philippines, we face additional challenges including material inflation, permit 
              bottlenecks with local government units, and fragmented project management across multiple contractors.
            </p>
            <p className="text-lg leading-relaxed text-[var(--dy-gray-400)]">
              For property developers and business owners, these overruns translate directly to delayed revenue 
              recognition, tenant dissatisfaction, and eroded profit margins. The question isn't whether your 
              project will face challenges—it's whether you'll have the right supervision framework to catch 
              and correct issues before they compound.
            </p>
          </section>

          {/* Root Causes */}
          <section className="mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Root Causes of Project Failures
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-[var(--dy-red-700)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--dy-charcoal)] mb-2">Fragmented Teams</h3>
                  <p className="text-[var(--dy-gray-400)]">
                    When architects, engineers, and contractors operate in silos, miscommunication becomes inevitable. 
                    Design changes don't reach all stakeholders, leading to rework and delays.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-[var(--dy-red-700)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--dy-charcoal)] mb-2">Poor Documentation Trails</h3>
                  <p className="text-[var(--dy-gray-400)]">
                    Without systematic documentation, change orders, material specifications, and quality control 
                    checkpoints become disputed memories rather than actionable records.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-[var(--dy-red-700)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--dy-charcoal)] mb-2">Reactive Risk Management</h3>
                  <p className="text-[var(--dy-gray-400)]">
                    Most projects handle problems after they occur rather than implementing preventive monitoring 
                    systems that catch issues early when they're still manageable and affordable to fix.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-[var(--dy-red-700)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--dy-charcoal)] mb-2">Under-resourced Supervision</h3>
                  <p className="text-[var(--dy-gray-400)]">
                    Many projects rely on part-time oversight or inexperienced supervisors who lack the authority 
                    or expertise to make critical decisions when timing matters most.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DYMAXION Difference */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-8">
              The DYMAXION Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dymaxionDifference.map((item, index) => (
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

          {/* Real-World Impact */}
          <section className="mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Real-World Impact
            </h2>
            <div className="bg-[var(--dy-offwhite)] rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
                Case Study: 10-Storey Commercial Building, Pasay City
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--dy-red-700)] mb-2">₱27.4M</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Original Budget Maintained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--dy-red-700)] mb-2">0</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Safety Incidents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--dy-red-700)] mb-2">3 weeks</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Ahead of Schedule</div>
                </div>
              </div>
              <p className="text-[var(--dy-gray-400)] leading-relaxed">
                Through integrated supervision, daily reporting, and proactive risk management, this project 
                delivered exceptional results while maintaining the highest quality standards throughout construction.
              </p>
            </div>

            {/* Client Testimonial Placeholder */}
            <div className="bg-white border-l-4 border-[var(--dy-red-700)] p-6 rounded-r-xl shadow-lg">
              <blockquote className="text-xl italic text-[var(--dy-gray-400)] mb-4">
                "Working with DYMAXION gave us complete peace of mind. Their integrated approach meant we always 
                knew exactly where we stood on budget and timeline, with no surprises at the end."
              </blockquote>
              <cite className="text-[var(--dy-charcoal)] font-semibold">— Commercial Property Developer, BGC</cite>
            </div>
          </section>

          {/* What It Means for Owners */}
          <section className="mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              What It Means for Property Owners
            </h2>
            <div className="bg-[var(--dy-red-700)] text-white rounded-xl p-8 mb-6">
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold mb-4">1:5 ROI</div>
                <p className="text-xl">
                  Every peso invested in preventive supervision saves 5-7 pesos in rework costs
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[var(--dy-charcoal)] mb-3">Faster Revenue Recognition</h3>
                <p className="text-[var(--dy-gray-400)]">
                  On-time completion means faster tenant occupancy, earlier rental income, and improved cash flow projections.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--dy-charcoal)] mb-3">Better Tenant Perception</h3>
                <p className="text-[var(--dy-gray-400)]">
                  Quality construction with minimal defects creates positive first impressions and reduces post-occupancy maintenance costs.
                </p>
              </div>
            </div>
          </section>

          {/* Action Steps */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Your Action Checklist
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-4">
                {actionSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-[var(--dy-red-700)] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <span className="text-[var(--dy-charcoal)] font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Download CTA */}
          <div className="text-center mb-12 not-prose">
            <button className="inline-flex items-center bg-[var(--dy-charcoal)] text-white px-8 py-4 rounded-xl hover:bg-[var(--dy-charcoal)]/90 transition-colors duration-200">
              <Download className="h-5 w-5 mr-3" />
              Get Our Supervision Checklist (PDF)
            </button>
          </div>
        </article>
      </main>

      {/* Sticky CTA Band */}
      <div className="sticky bottom-0 z-40 bg-[var(--dy-red-700)] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-montserrat font-bold text-white mb-1">
                Ready to lock your budget and timeline?
              </h3>
              <p className="text-white/80 text-sm">
                Get transparent pricing and realistic schedules from day one.
              </p>
            </div>
            <button
              onClick={handleCTAClick}
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

export default BlogPost;