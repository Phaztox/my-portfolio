// pages/api/og.tsx - social preview card, rendered on the edge.
// Social platforms don't accept SVG for og:image, so this produces a real PNG
// from the same palette as the site.
import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const config = { runtime: 'edge' };

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') ?? 'Antonin Gabet';
  const subtitle =
    searchParams.get('subtitle') ?? 'Data & AI - Engineering student at EFREI Paris';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #F3E8FF 0%, #FCE7F3 50%, #C7D2FE 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '84px',
              height: '84px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #F7A8B8 0%, #CBB3EE 50%, #FFB347 100%)',
              color: '#ffffff',
              fontSize: '40px',
              fontWeight: 800,
            }}
          >
            AG
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '26px', color: '#6B7280', letterSpacing: '2px' }}>PORTFOLIO</div>
          </div>
        </div>

        <div
          style={{
            fontSize: title.length > 45 ? '58px' : '76px',
            fontWeight: 800,
            color: '#111827',
            lineHeight: 1.15,
            marginBottom: '28px',
          }}
        >
          {title}
        </div>

        <div style={{ fontSize: '34px', color: '#4B5563', lineHeight: 1.4 }}>{subtitle}</div>

        <div
          style={{
            display: 'flex',
            marginTop: '48px',
            height: '10px',
            width: '280px',
            borderRadius: '9999px',
            background: 'linear-gradient(90deg, #F7A8B8 0%, #CBB3EE 50%, #FFB347 100%)',
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
