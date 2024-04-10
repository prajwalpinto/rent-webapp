/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.viewpoint.ca',
          },
        ],
      },
};

export default nextConfig;
