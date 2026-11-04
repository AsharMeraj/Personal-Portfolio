/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "asharmeraj.vercel.app" }],
        destination: "https://muhammadashar.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
