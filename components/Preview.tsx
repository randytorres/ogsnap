'use client';

interface PreviewProps {
  title: string;
  description: string;
  logo: string;
  theme: string;
  watermark: boolean;
}

export default function Preview({ title, description, logo, theme, watermark }: PreviewProps) {
  const params = new URLSearchParams({
    title: title || 'Your Amazing Title',
    ...(description && { description }),
    ...(logo && { logo }),
    theme,
    watermark: watermark.toString(),
  });

  const imageUrl = `/api/og?${params.toString()}`;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Live Preview</h3>
        <span className="text-xs text-gray-500 font-mono">1200 × 630px</span>
      </div>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
        <div className="relative glass rounded-xl overflow-hidden">
          <img
            src={imageUrl}
            alt="OG Image Preview"
            className="w-full aspect-[1200/630] object-cover"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <a
          href={imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Open Full Size
        </a>
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'og-image.png';
            link.click();
          }}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-sm font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-[1.02]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PNG
        </button>
      </div>
    </div>
  );
}
