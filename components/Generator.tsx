'use client';

import { useState } from 'react';
import ThemePicker from './ThemePicker';
import Preview from './Preview';

export default function Generator() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [theme, setTheme] = useState('gradient');
  const [watermark, setWatermark] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);

  const params = new URLSearchParams({
    title: title || 'Your Amazing Title',
    ...(description && { description }),
    ...(logo && { logo }),
    theme,
    watermark: watermark.toString(),
  });

  const apiUrl = `https://ogsnap.xyz/api/og?${params.toString()}`;
  const metaTag = `<meta property="og:image" content="${apiUrl}" />`;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Controls */}
      <div className="space-y-6">
        <div className="glass rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-sm">
              ✨
            </span>
            Generate Your OG Image
          </h2>
          
          {/* Title */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Title <span className="text-purple-400">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Description <span className="text-gray-500">(optional)</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description..."
              rows={2}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none"
            />
          </div>

          {/* Logo URL */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Logo URL <span className="text-gray-500">(optional)</span>
            </label>
            <input
              type="url"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
              placeholder="https://example.com/logo.png"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          {/* Theme Picker */}
          <ThemePicker selected={theme} onSelect={setTheme} />

          {/* Watermark Toggle */}
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5 border border-white/10">
            <div>
              <p className="text-sm font-medium text-white">Include Watermark</p>
              <p className="text-xs text-gray-500">Free tier includes ⚡ ogsnap.xyz</p>
            </div>
            <button
              onClick={() => setWatermark(!watermark)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                watermark ? 'bg-purple-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  watermark ? 'left-7' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Share & Copy Section */}
        <div className="glass rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-white">Share & Embed</h3>
          
          {/* Copy Meta Tag */}
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider">Meta Tag</label>
            <div className="relative">
              <code className="block w-full p-3 pr-12 rounded-lg bg-gray-900 border border-white/10 text-xs text-cyan-400 overflow-x-auto whitespace-nowrap">
                {metaTag}
              </code>
              <button
                onClick={() => copyToClipboard(metaTag, 'meta')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
              >
                {copied === 'meta' ? (
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Copy URL */}
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider">Image URL</label>
            <div className="relative">
              <code className="block w-full p-3 pr-12 rounded-lg bg-gray-900 border border-white/10 text-xs text-purple-400 overflow-x-auto whitespace-nowrap">
                {apiUrl}
              </code>
              <button
                onClick={() => copyToClipboard(apiUrl, 'url')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
              >
                {copied === 'url' ? (
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="flex gap-3 pt-2">
            <a
              href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20OG%20image%20I%20made%20with%20OGSnap!&url=${encodeURIComponent(apiUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 text-[#1DA1F2] text-sm font-medium hover:bg-[#1DA1F2]/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://ogsnap.xyz')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] text-sm font-medium hover:bg-[#0A66C2]/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
              Share on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <Preview
          title={title}
          description={description}
          logo={logo}
          theme={theme}
          watermark={watermark}
        />
      </div>
    </div>
  );
}
