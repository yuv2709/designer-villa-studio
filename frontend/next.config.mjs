/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**', // allow all paths
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
  