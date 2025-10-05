import React from 'react';
import { ArrowLeft, Download, CheckCircle, AlertTriangle, Clock, DollarSign, Home, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const HiddenCostsBlogPost: React.FC = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const handleCTAClick = () => {
    window.location.href = '/#contact';
  };

  const stats = [
    { icon: DollarSign, value: '₱2,500-₱7,500', label: 'Monthly Association Dues' },
    { icon: Home, value: '₱800-₱10,000', label: 'Cost per sqm' },
    { icon: AlertTriangle, value: '25%', label: 'Invisible Cost Buffer' }
  ];

  const budgetKillers = [
    'Association dues during construction shutdowns',
    'Special assessments',
    'Move-in & hauling fees',
    'Permit & clearance charges',
    'Professional design fees',
    'Material price escalation',
    'Change-order creep',
    'Temporary lodging while unit is unusable',
    'Utility deposits & meter fees',
    'Punch-list rework'
  ];

  const dymaxionPlaybook = [
    {
      title: 'Up-Front Scope Freeze',
      description: 'Detailed BOQ, client-approved'
    },
    {
      title: 'Vendor-Locked Pricing',
      description: 'Bulk-rate material agreements'
    },
    {
      title: 'Permit Fast-Track Desk',
      description: 'LGU liaison slashes idle time'
    },
    {
      title: 'Earned-Value Tracking',
      description: 'Weekly cost/schedule dashboard'
    },
    {
      title: 'Single Source of Truth',
      description: 'Architects + engineers + build crew under one roof'
    }
  ];

  const actionSteps = [
    'Define scope',
    'Get three quotes',
    'Lock material SKUs',
    'Secure permits early',
    'Maintain 10% contingency',
    'Demand daily reports'
  ];

  const budgetingSamples = [
    { size: '30 sqm', low: '₱540,000', med: '₱810,000', high: '₱1,080,000' },
    { size: '50 sqm', low: '₱900,000', med: '₱1,350,000', high: '₱1,800,000' },
    { size: '70 sqm', low: '₱1,260,000', med: '₱1,890,000', high: '₱2,520,000' }
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
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg)',
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
            Budget Blindsided? Read This Before You Renovate.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Unmask the fees that can blow a ₱1M renovation to ₱1.5M—and see how DYMAXION keeps you on track.
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
                  <div className="text-2xl font-montserrat font-bold text-[var(--dy-red-700)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[var(--dy-charcoal)] font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticker-Shock Stats */}
          <section className="mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Sticker-Shock Stats
            </h2>
            <p className="text-lg leading-relaxed text-[var(--dy-gray-400)] mb-6">
              Association dues in Metro Manila average <strong>₱50–₱150 per sqm per month</strong>—that's 
              <strong> ₱2,500–₱7,500</strong> for a typical 50 sqm unit. These ongoing costs don't pause 
              during construction, and many developers don't warn you about potential special assessments.
            </p>
            <p className="text-lg leading-relaxed text-[var(--dy-gray-400)]">
              2025 renovation costs span <strong>₱800–₱10,000 per sqm</strong>, depending on scope and finishes. 
              But here's the kicker: most first-time renovators budget only for materials and labor, completely 
              overlooking the "invisible\" costs that can push a ₱1M project to ₱1.5M or beyond.
            </p>
          </section>

          {/* Ten Silent Budget Killers */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-8">
              The Ten Silent Budget Killers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {budgetKillers.map((killer, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-[var(--dy-red-700)] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-[var(--dy-charcoal)] font-medium">{killer}</span>
                </div>
              ))}
            </div>
          </section>

          {/* DYMAXION's Cost-Control Playbook */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-8">
              DYMAXION's Cost-Control Playbook
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dymaxionPlaybook.map((item, index) => (
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
              Case Snapshot: 1BR Condo Fit-Out, Tagaytay
            </h2>
            <div className="bg-[var(--dy-offwhite)] rounded-xl p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--dy-red-700)] mb-2">₱1.55M</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Final Cost (-3%)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--dy-red-700)] mb-2">2 weeks</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Ahead of Schedule</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--dy-red-700)] mb-2">0</div>
                  <div className="text-sm text-[var(--dy-gray-400)]">Change Orders</div>
                </div>
              </div>
              <p className="text-[var(--dy-gray-400)] leading-relaxed">
                Target budget was ₱1.6M, but through disciplined scope management and vendor-locked pricing, 
                we delivered at ₱1.55M—actually under budget. The key was front-loading all permit work and 
                association coordination before construction began.
              </p>
            </div>

            {/* Client Testimonial Placeholder */}
            <div className="bg-white border-l-4 border-[var(--dy-red-700)] p-6 rounded-r-xl shadow-lg">
              <blockquote className="text-xl italic text-[var(--dy-gray-400)] mb-4">
                "DYMAXION's upfront planning saved us from the nightmare stories we heard from other unit owners. 
                No surprise fees, no delays, and we actually came in under budget."
              </blockquote>
              <cite className="text-[var(--dy-charcoal)] font-semibold">— Unit Owner, SMDC Wind Residences</cite>
            </div>
          </section>

          {/* Budgeting Framework */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Budgeting Framework
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-4">
                Rule of 25%
              </h3>
              <p className="text-[var(--dy-gray-400)] mb-6">
                Set aside at least 25% of total budget for "invisible" costs (dues, design, permits).
              </p>
              
              <h4 className="text-lg font-semibold text-[var(--dy-charcoal)] mb-4">Traffic-Light Tracker</h4>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">Green</div>
                  <div className="text-sm text-green-700">≤ 100% Budget</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">Yellow</div>
                  <div className="text-sm text-yellow-700">101-110% Budget</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">Red</div>
                  <div className="text-sm text-red-700">{"> 110% Budget"}</div>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-[var(--dy-charcoal)] mb-4">Sample Budget Ranges</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[var(--dy-offwhite)]">
                    <tr>
                      <th className="text-left p-3 font-semibold text-[var(--dy-charcoal)]">Unit Size</th>
                      <th className="text-center p-3 font-semibold text-[var(--dy-charcoal)]">Low Finish</th>
                      <th className="text-center p-3 font-semibold text-[var(--dy-charcoal)]">Medium Finish</th>
                      <th className="text-center p-3 font-semibold text-[var(--dy-charcoal)]">High Finish</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgetingSamples.map((sample, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="p-3 font-medium text-[var(--dy-charcoal)]">{sample.size}</td>
                        <td className="p-3 text-center text-[var(--dy-gray-400)]">{sample.low}</td>
                        <td className="p-3 text-center text-[var(--dy-gray-400)]">{sample.med}</td>
                        <td className="p-3 text-center text-[var(--dy-red-700)] font-semibold">{sample.high}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Action Checklist */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-montserrat font-bold text-[var(--dy-charcoal)] mb-6">
              Action Checklist
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {actionSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-[var(--dy-red-700)] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-[var(--dy-charcoal)] font-medium">{step}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button className="inline-flex items-center bg-[var(--dy-charcoal)] text-white px-6 py-3 rounded-xl hover:bg-[var(--dy-charcoal)]/90 transition-colors duration-200">
                  <Download className="h-5 w-5 mr-3" />
                  Download Renovation Checklist (PDF)
                </button>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-12 not-prose">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/#services" className="block bg-[var(--dy-offwhite)] p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-3">
                  <Home className="h-6 w-6 text-[var(--dy-red-700)] mr-3" />
                  <h3 className="text-lg font-montserrat font-bold text-[var(--dy-charcoal)]">
                    Interior Fit-out Services
                  </h3>
                </div>
                <p className="text-[var(--dy-gray-400)]">
                  Learn more about our comprehensive interior renovation services
                </p>
              </a>
              
              <a href="/#portfolio" className="block bg-[var(--dy-offwhite)] p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-3">
                  <FileText className="h-6 w-6 text-[var(--dy-red-700)] mr-3" />
                  <h3 className="text-lg font-montserrat font-bold text-[var(--dy-charcoal)]">
                    Portfolio & Case Studies
                  </h3>
                </div>
                <p className="text-[var(--dy-gray-400)]">
                  See our completed renovation projects and client success stories
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
                Ready to renovate without surprises?
              </h3>
              <p className="text-white/80 text-sm">
                Get transparent pricing and realistic timelines from day one.
              </p>
            </div>
            <button
              onClick={handleCTAClick}
              data-analytics="blog_hiddencosts_cta"
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

export default HiddenCostsBlogPost;