/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Fast Refresh 관련 설정
  webpack: (config, { dev, isServer }) => {
    // 개발 모드에서만 적용
    if (dev && !isServer) {
      // CSP 문제 해결을 위한 설정
      config.devtool = 'eval-source-map';
    }
    return config;
  },
  // 보안 헤더 설정
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://*.google.com https://*.googleapis.com https://*.gstatic.com; font-src 'self' https://fonts.gstatic.com; frame-src 'self' https://www.google.com; connect-src 'self' https://*.googleapis.com;"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
