import { ImageResponse } from 'next/og';
import { config } from '@/lib/config';

export const dynamic = 'force-dynamic';
export const alt = `${config.couple.combined} — Wedding in Goa`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadGoogleFont(font: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (match) {
    const res = await fetch(match[1]);
    if (res.ok) return res.arrayBuffer();
  }
  throw new Error(`Failed to load font: ${font}`);
}

export default async function Image() {
  const title = config.couple.combined;
  const subtitle = `${config.weddingDateDisplay} · ${config.location}`;

  const [cormorant, dmSans] = await Promise.all([
    loadGoogleFont('Cormorant+Garamond', 600, title),
    loadGoogleFont('DM+Sans', 500, subtitle + config.couple.hashtag),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(160deg, #4A1010 0%, #6B1818 55%, #1B4FBF 130%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 24,
            border: '1.5px solid rgba(212,175,55,0.55)',
            borderRadius: 12,
          }}
        />
        <div
          style={{
            display: 'flex',
            width: 90,
            height: 90,
            borderRadius: '50%',
            border: '1.5px solid rgba(212,175,55,0.6)',
            marginBottom: 36,
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            color: '#F8D99A',
            fontFamily: 'Cormorant Garamond',
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            width: 160,
            height: 2,
            background: 'linear-gradient(to right, transparent, #D4AF37, transparent)',
            margin: '28px 0',
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#FFFDF5',
            fontFamily: 'DM Sans',
            fontWeight: 500,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            color: 'rgba(255,253,245,0.7)',
            fontFamily: 'DM Sans',
            fontWeight: 500,
            marginTop: 18,
          }}
        >
          {config.couple.hashtag}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Cormorant Garamond', data: cormorant, weight: 600, style: 'normal' },
        { name: 'DM Sans', data: dmSans, weight: 500, style: 'normal' },
      ],
    }
  );
}
