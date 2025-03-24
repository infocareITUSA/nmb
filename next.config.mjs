const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.placeholder.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;

