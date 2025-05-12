/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 외부 이미지 도메인 제거
    domains: [],
    // 이미지 최적화 설정
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  // 보안 헤더 설정
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; frame-src 'self' https://www.google.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
