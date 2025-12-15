import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Arif Tour and Travels - National & International Tour Packages';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation (same as opengraph for consistency)
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            zIndex: 1,
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '120px',
              height: '120px',
              background: 'white',
              borderRadius: '60px',
              marginBottom: '40px',
              fontSize: '60px',
            }}
          >
            ✈️
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            }}
          >
            Arif Tour and Travels
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '36px',
              color: 'rgba(255, 255, 255, 0.95)',
              textAlign: 'center',
              marginBottom: '30px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            Your Gateway to Amazing Adventures
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              fontSize: '24px',
              color: 'white',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🌍</span>
              <span>International Tours</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🇮🇳</span>
              <span>Domestic Tours</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>⭐</span>
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
