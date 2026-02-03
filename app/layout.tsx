import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OGSnap - Instant OG Image Generator",
  description: "Generate beautiful Open Graph images for your website in seconds. Free API, premium themes, and live preview.",
  keywords: ["og image generator", "social preview image", "open graph generator", "meta image", "twitter card"],
  openGraph: {
    title: "OGSnap - Instant OG Image Generator",
    description: "Generate beautiful Open Graph images for your website in seconds.",
    url: "https://ogsnap.xyz",
    siteName: "OGSnap",
    images: [
      {
        url: "/api/og?title=OGSnap&description=Instant%20OG%20Image%20Generator&theme=gradient",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OGSnap - Instant OG Image Generator",
    description: "Generate beautiful Open Graph images for your website in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen antialiased`}>
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-950/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-2xl">⚡</span>
                <span className="font-bold text-xl bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-cyan-400 transition-all duration-500">
                  OGSnap
                </span>
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/docs" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  API Docs
                </Link>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Pricing
                </Link>
                <Link 
                  href="/pricing" 
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                >
                  Get API Key
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="border-t border-white/5 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <span className="font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  OGSnap
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                © 2024 OGSnap. Generate beautiful OG images instantly.
              </p>
              <div className="flex gap-6">
                <Link href="/docs" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Docs
                </Link>
                <Link href="/pricing" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
