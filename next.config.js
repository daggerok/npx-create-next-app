/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: !process.env.GITHUB_PAGES ? undefined : '/npx-create-next-app',
    output: !process.env.NEXT_EXPORT ? undefined : 'export', // ./out
    cleanDistDir: true,
    distDir: '.next',
}

module.exports = nextConfig
