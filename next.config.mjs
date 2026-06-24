/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Optimize images - disable if hosting doesn't support it
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
