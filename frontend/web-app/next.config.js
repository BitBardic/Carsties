/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        logging: "verbose"
    },
    images: {
        domains: ['cdn.pixabay.com']
    }
}

module.exports = nextConfig
