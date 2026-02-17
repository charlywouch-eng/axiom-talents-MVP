/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'], // si tu ajoutes des images externes plus tard
  },
  // Pour Supabase + Next.js App Router
  experimental: {
    serverActions: true,
  },
}

export default nextConfig
