/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/products/deleted',
                destination: '/products',
                permanent: true,
            },
        ];
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/retrieve-something',
    //             destination: 'https://chocobe/retrieve-something',
    //         }
    //     ];
    // },
};

module.exports = nextConfig
