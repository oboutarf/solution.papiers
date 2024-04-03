/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    // async rewrites() {
    //     return [
    //       {
    //         source: '/zohoverify/verifyforzoho.html',
    //         destination: '/',
    //       },
    //     ]
    // },
}

module.exports = nextConfig
