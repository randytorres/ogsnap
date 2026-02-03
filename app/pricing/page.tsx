'use client';

import { useState } from 'react';
import { Metadata } from 'next';

export default function PricingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
  };

  const plans = [
    {
      name: 'Free',
      price: 0,
      period: '',
      description: 'Perfect for side projects and testing',
      features: [
        '100 images/day',
        'All 5 themes',
        'Standard 1200×630 images',
        'OGSnap watermark',
        'Community support',
      ],
      cta: 'Start Free',
      ctaHref: '/',
      popular: false,
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? 9 : 7,
      period: '/mo',
      description: 'For professionals and growing brands',
      features: [
        'Unlimited images',
        'All 5 themes',
        'No watermark',
        'Custom fonts (coming soon)',
        'Priority support',
        'Usage analytics',
        'API key authentication',
      ],
      cta: 'Join Waitlist',
      ctaHref: '#waitlist',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: null,
      period: '',
      description: 'For teams with custom requirements',
      features: [
        'Everything in Pro',
        'Custom themes',
        'Dedicated support',
        'SLA guarantee',
        'Custom domain',
        'Team management',
        'Priority feature requests',
      ],
      cta: 'Contact Us',
      ctaHref: 'mailto:hello@ogsnap.xyz',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-purple-300 mb-4">
            <span>💎</span>
            <span>Simple, transparent pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free, upgrade when you&apos;re ready. No credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">
                Save 22%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all hover:-translate-y-2 ${
                plan.popular
                  ? 'glass-strong border-purple-500/50 shadow-lg shadow-purple-500/10'
                  : 'glass'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.price !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-white">Custom</div>
                )}
                {billingCycle === 'yearly' && plan.price !== null && plan.price > 0 && (
                  <p className="text-sm text-green-400 mt-1">
                    ${plan.price * 12}/year (billed annually)
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`block w-full py-3 rounded-xl text-center font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02]'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Waitlist Section */}
        <section id="waitlist" className="mb-20">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
            
            <div className="relative max-w-xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                <span>🚀</span>
                <span>Pro launching soon</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                Join the Pro Waitlist
              </h2>
              <p className="text-gray-400 mb-8">
                Be the first to know when Pro launches. Early access members get 50% off for 3 months.
              </p>

              {submitted ? (
                <div className="glass rounded-xl p-6 bg-green-500/10 border-green-500/20">
                  <div className="flex items-center justify-center gap-3 text-green-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">You&apos;re on the list!</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    We&apos;ll email you when Pro launches.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-[1.02] whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'Can I use OGSnap for free?',
                a: 'Yes! The free tier includes 100 images per day with all themes. Images include a subtle OGSnap watermark.',
              },
              {
                q: 'How do I remove the watermark?',
                a: 'Upgrade to Pro to generate watermark-free images. Pro members get unlimited images with no branding.',
              },
              {
                q: 'Are the images cached?',
                a: 'Yes, images are cached at the edge for 24 hours. This means fast delivery and repeated requests don\'t count against your limit.',
              },
              {
                q: 'Can I use custom fonts?',
                a: 'Custom fonts are coming soon for Pro members. Currently, we use the Inter font family for all images.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 14-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.',
              },
              {
                q: 'Is there an API rate limit?',
                a: 'Free tier: 100 requests/day. Pro tier: Unlimited. Images are cached, so repeated requests are free.',
              },
            ].map((faq, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
