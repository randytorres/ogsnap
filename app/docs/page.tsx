import { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'API Documentation - OGSnap',
  description: 'Learn how to use the OGSnap API to generate beautiful OG images programmatically.',
  openGraph: {
    title: 'API Documentation - OGSnap',
    description: 'Learn how to use the OGSnap API to generate beautiful OG images programmatically.',
  },
};

export default function DocsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-purple-300 mb-4">
            <span>📚</span>
            <span>Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            API Reference
          </h1>
          <p className="text-xl text-gray-400">
            Generate OG images with a simple GET request. No SDK required.
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-sm">
              ⚡
            </span>
            Quick Start
          </h2>
          <div className="space-y-4">
            <p className="text-gray-400">
              Generate an OG image by making a GET request to our endpoint:
            </p>
            <CodeBlock
              title="Basic Request"
              language="bash"
              code={`curl "https://ogsnap.xyz/api/og?title=Hello%20World"`}
            />
            <p className="text-gray-400">
              The API returns a PNG image (1200×630px) that you can use directly in your meta tags:
            </p>
            <CodeBlock
              title="HTML Meta Tag"
              language="html"
              code={`<meta property="og:image" content="https://ogsnap.xyz/api/og?title=My%20Page%20Title" />`}
            />
          </div>
        </section>

        {/* Endpoint */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-sm">
              🔗
            </span>
            Endpoint
          </h2>
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-md bg-green-500/20 text-green-400 text-sm font-mono font-bold">
                GET
              </span>
              <code className="text-purple-400 font-mono">/api/og</code>
            </div>
            <p className="text-gray-400 text-sm">
              Returns a PNG image with Content-Type: image/png
            </p>
          </div>
        </section>

        {/* Parameters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-sm">
              📝
            </span>
            Parameters
          </h2>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Parameter</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Required</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-6 py-4 font-mono text-sm text-purple-400">title</td>
                  <td className="px-6 py-4 text-sm text-gray-400">string</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium">
                      Required
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">The main title text for your OG image</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-mono text-sm text-purple-400">description</td>
                  <td className="px-6 py-4 text-sm text-gray-400">string</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full bg-gray-500/20 text-gray-400 text-xs font-medium">
                      Optional
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">Subtitle or description text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-mono text-sm text-purple-400">logo</td>
                  <td className="px-6 py-4 text-sm text-gray-400">URL</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full bg-gray-500/20 text-gray-400 text-xs font-medium">
                      Optional
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">URL to your logo image (60×60px recommended)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-mono text-sm text-purple-400">theme</td>
                  <td className="px-6 py-4 text-sm text-gray-400">enum</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full bg-gray-500/20 text-gray-400 text-xs font-medium">
                      Optional
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    <code className="text-cyan-400">dark</code> | <code className="text-cyan-400">light</code> | <code className="text-cyan-400">gradient</code> | <code className="text-cyan-400">minimal</code> | <code className="text-cyan-400">vibrant</code>
                    <br />
                    <span className="text-gray-500">Default: gradient</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-mono text-sm text-purple-400">watermark</td>
                  <td className="px-6 py-4 text-sm text-gray-400">boolean</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full bg-gray-500/20 text-gray-400 text-xs font-medium">
                      Optional
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    Include OGSnap watermark. Default: true
                    <br />
                    <span className="text-yellow-500 text-xs">Pro API key required for false</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-sm">
              💡
            </span>
            Examples
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Basic Usage</h3>
              <CodeBlock
                language="bash"
                code={`curl "https://ogsnap.xyz/api/og?title=My%20Blog%20Post&description=A%20great%20article%20about%20coding"`}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">With Logo and Theme</h3>
              <CodeBlock
                language="bash"
                code={`curl "https://ogsnap.xyz/api/og?title=Welcome&logo=https://example.com/logo.png&theme=vibrant"`}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">JavaScript/Node.js</h3>
              <CodeBlock
                language="javascript"
                code={`const ogUrl = new URL('https://ogsnap.xyz/api/og');
ogUrl.searchParams.set('title', 'My Amazing Product');
ogUrl.searchParams.set('description', 'The best tool for developers');
ogUrl.searchParams.set('theme', 'gradient');

// Use in your HTML
const metaTag = \`<meta property="og:image" content="\${ogUrl}" />\`;`}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Next.js Metadata</h3>
              <CodeBlock
                language="typescript"
                code={`// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    openGraph: {
      images: [
        \`https://ogsnap.xyz/api/og?title=\${encodeURIComponent(post.title)}&theme=dark\`
      ],
    },
  };
}`}
              />
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-sm">
              🚦
            </span>
            Rate Limits
          </h2>
          <div className="glass rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <span className="text-gray-400">Free Tier</span>
              <span className="text-white font-medium">100 requests/day</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-400">Pro Tier</span>
              <span className="text-white font-medium">Unlimited</span>
            </div>
            <p className="text-sm text-gray-500 pt-4">
              Images are cached at the edge for 24 hours. Repeated requests for the same parameters won&apos;t count against your limit.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to try it?</h3>
            <p className="text-gray-400 mb-6">
              Start generating beautiful OG images right now.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105"
            >
              Open Generator
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
