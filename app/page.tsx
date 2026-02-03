import Generator from '@/components/Generator';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-purple-300 mb-6 animate-pulse-glow">
              <span>⚡</span>
              <span>Instant OG images for your links</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-white">Beautiful </span>
              <span className="gradient-text">OG Images</span>
              <br />
              <span className="text-white">in Seconds</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Generate stunning Open Graph images for your website, blog, or social media. 
              Free API, premium themes, and instant live preview.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#generator" 
                className="btn-primary px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105"
              >
                Start Generating
              </a>
              <a 
                href="/docs" 
                className="px-8 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all"
              >
                View API Docs
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
            {[
              { value: '1200×630', label: 'Standard OG Size' },
              { value: '5', label: 'Premium Themes' },
              { value: '<100ms', label: 'Generation Time' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Generator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional OG image generation with a simple API and beautiful themes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: '5 Premium Themes',
                description: 'Dark, light, gradient, minimal, and vibrant themes to match your brand.',
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Edge-rendered images in under 100ms. No waiting, no queues.',
              },
              {
                icon: '🔗',
                title: 'Simple API',
                description: 'Just one GET request. No SDK needed. Works everywhere.',
              },
              {
                icon: '📱',
                title: 'Perfect for Social',
                description: 'Optimized 1200×630 images that look great on Twitter, LinkedIn, and more.',
              },
              {
                icon: '🖼️',
                title: 'Custom Logos',
                description: 'Add your logo to make your OG images uniquely yours.',
              },
              {
                icon: '🚀',
                title: 'Deploy Anywhere',
                description: 'Works with Vercel, Netlify, or any static host. Just use the URL.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative glass rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Start generating beautiful OG images for free. Upgrade to Pro for watermark-free images and analytics.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href="#generator" 
                  className="btn-primary px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105"
                >
                  Try It Free
                </a>
                <a 
                  href="/pricing" 
                  className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
