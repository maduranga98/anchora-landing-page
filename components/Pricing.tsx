'use client'

import { FiCheck, FiArrowRight } from 'react-icons/fi'

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    'Unlimited posts and discussions',
    'Anonymous & named posting',
    'Real-time analytics dashboard',
    'Department management',
    '7-state workflow system',
    'Priority escalation',
    'File attachments (images, videos, PDFs)',
    'Content moderation tools',
    'Audit trail & compliance',
    'QR code onboarding',
    'Mobile & desktop access',
    'Email support'
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-background-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-sm font-semibold text-primary-teal uppercase tracking-wide mb-4">
            Simple, Transparent Pricing
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 md:mb-6">
            One Price. <span className="text-primary-teal">Everything Included.</span>
          </h3>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            No hidden fees. No surprises. Just powerful employee engagement software at an affordable price.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-large border-2 border-primary-teal p-6 md:p-10 lg:p-12">
            <div className="text-center mb-8 md:mb-10">
              {/* Badge */}
              <div className="inline-block px-4 py-2 bg-primary-teal/10 text-primary-teal rounded-full text-sm font-semibold mb-6">
                Most Popular
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary">$1</span>
                <span className="text-xl md:text-2xl text-text-secondary ml-2">/employee/month</span>
              </div>

              <p className="text-text-secondary text-base md:text-lg">
                Billed monthly. Cancel anytime. No setup fees.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-status-success-light rounded-full flex items-center justify-center mt-0.5">
                    <FiCheck className="w-4 h-4 text-status-success" />
                  </div>
                  <span className="text-text-secondary text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="w-full py-4 md:py-5 bg-primary-teal text-white rounded-xl font-semibold text-lg hover:bg-primary-teal/90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Started Today
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-border-light">
              <p className="text-center text-text-tertiary text-sm">
                ✓ 14-day free trial &nbsp;•&nbsp; ✓ No credit card required &nbsp;•&nbsp; ✓ Setup in minutes
              </p>
            </div>
          </div>

          {/* Pricing Examples */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-6 md:p-8 bg-background-softGray rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-primary-teal mb-2">$50/mo</div>
              <div className="text-text-secondary text-sm md:text-base">50 employees</div>
            </div>
            <div className="text-center p-6 md:p-8 bg-background-softGray rounded-xl border-2 border-primary-teal">
              <div className="text-2xl md:text-3xl font-bold text-primary-teal mb-2">$100/mo</div>
              <div className="text-text-secondary text-sm md:text-base">100 employees</div>
              <div className="text-xs text-primary-teal font-semibold mt-2">Most Common</div>
            </div>
            <div className="text-center p-6 md:p-8 bg-background-softGray rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-primary-teal mb-2">$500/mo</div>
              <div className="text-text-secondary text-sm md:text-base">500 employees</div>
            </div>
          </div>

          {/* Enterprise */}
          <div className="mt-8 md:mt-12 text-center p-6 md:p-8 lg:p-10 bg-gradient-primary rounded-2xl text-white">
            <h4 className="text-xl md:text-2xl font-bold mb-3">Enterprise Plans Available</h4>
            <p className="text-white/80 mb-6 text-sm md:text-base">
              Need custom integrations, dedicated support, or white-labeling? Contact us for enterprise pricing.
            </p>
            <button
              onClick={scrollToContact}
              className="px-6 md:px-8 py-3 bg-white text-primary-navy rounded-lg font-semibold hover:bg-white/90 transition-all duration-300"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}