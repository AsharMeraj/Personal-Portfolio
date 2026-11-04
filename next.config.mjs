/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const has = [{ type: "host", value: "asharmeraj.vercel.app" }];
    const to = "https://muhammadashar.vercel.app";

    return [
      { source: "/Services", has, destination: `${to}/`, permanent: true },
      { source: "/About", has, destination: `${to}/`, permanent: true },
      { source: "/Contact", has, destination: `${to}/contact`, permanent: true },
      { source: "/Work", has, destination: `${to}/work`, permanent: true },
      { source: "/:path*", has, destination: `${to}/:path*`, permanent: true },
    ];
  },
};

export default nextConfig;
