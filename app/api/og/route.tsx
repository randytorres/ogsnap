import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const title = searchParams.get('title') || 'Your Title Here';
  const description = searchParams.get('description') || '';
  const logo = searchParams.get('logo') || '';
  const theme = searchParams.get('theme') || 'gradient';
  const watermark = searchParams.get('watermark') !== 'false';

  const themes: Record<string, { bg: string; text: string; desc: string; accent: string }> = {
    dark: {
      bg: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
      text: '#ffffff',
      desc: '#a0a0a0',
      accent: '#a855f7',
    },
    light: {
      bg: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
      text: '#0f172a',
      desc: '#64748b',
      accent: '#7c3aed',
    },
    gradient: {
      bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1a1a2e 100%)',
      text: '#ffffff',
      desc: '#cbd5e1',
      accent: '#06b6d4',
    },
    minimal: {
      bg: 'linear-gradient(180deg, #18181b 0%, #27272a 100%)',
      text: '#fafafa',
      desc: '#a1a1aa',
      accent: '#e4e4e7',
    },
    vibrant: {
      bg: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 25%, #06b6d4 50%, #3b82f6 75%, #7c3aed 100%)',
      text: '#ffffff',
      desc: '#e0e7ff',
      accent: '#fbbf24',
    },
  };

  const currentTheme = themes[theme] || themes.gradient;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '60px 80px',
          background: currentTheme.bg,
          position: 'relative',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: theme === 'vibrant' 
              ? 'rgba(251, 191, 36, 0.15)' 
              : 'rgba(168, 85, 247, 0.15)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(6, 182, 212, 0.15)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Logo if provided */}
        {logo && (
          <div
            style={{
              display: 'flex',
              marginBottom: '30px',
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                objectFit: 'contain',
              }}
            />
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 40 ? '52px' : '64px',
            fontWeight: 800,
            color: currentTheme.text,
            lineHeight: 1.1,
            marginBottom: description ? '24px' : '0',
            maxWidth: '900px',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: '28px',
              color: currentTheme.desc,
              lineHeight: 1.4,
              maxWidth: '800px',
              fontWeight: 400,
            }}
          >
            {description}
          </div>
        )}

        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            width: '100px',
            height: '4px',
            borderRadius: '2px',
            background: theme === 'vibrant'
              ? 'linear-gradient(90deg, #fbbf24, #f59e0b)'
              : 'linear-gradient(90deg, #a855f7, #06b6d4)',
          }}
        />

        {/* Watermark */}
        {watermark && (
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '16px',
              color: theme === 'light' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)',
              fontWeight: 500,
            }}
          >
            ⚡ ogsnap.xyz
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
