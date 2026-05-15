import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#020617', // slate-950
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '40px',
            padding: '60px',
            position: 'relative',
          }}
        >
          {/* Blue accent line */}
          <div style={{ position: 'absolute', top: 0, left: '60px', width: '100px', height: '4px', backgroundColor: '#2563eb' }} />
          
          <div style={{ fontSize: 80, fontWeight: 'bold', color: 'white', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Polaris
          </div>
          <div style={{ fontSize: 32, fontWeight: 'normal', color: '#94a3b8', maxWidth: '800px', lineHeight: '1.4' }}>
            Institutional-Grade Financial & Capital Advisory Solutions.
            Headquartered in Mauritius.
          </div>
          
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ padding: '10px 20px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', fontSize: 20, border: '1px solid rgba(255,255,255,0.1)' }}>
              Variable Capital Company
            </div>
            <div style={{ color: '#64748b', fontSize: 20 }}>
              polarisvcc.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
