/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.pixabay.com']
    },
    experimental: {
        logging: "verbose"
    }
}

module.exports = nextConfig
