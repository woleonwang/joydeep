/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 1985-10-26 16:15:00
 * @Author: wmy
 * @LastEditTime: 2022-06-09 21:39:25
 */
/** @type {import('next').NextConfig} */

const Host =
  process.env.NODE_ENV === 'development'
    ? 'http://47.245.96.254'
    : 'http://47.245.96.254';

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    prependData: `@import "styles/variables.scss";`,
  },
  images: {
    domains: ['travo-dev.oss-cn-shanghai.aliyuncs.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/recruiter/profile',
        destination: `${Host}/recruiter/profile/`,
      },
      {
        source: '/api/recruiter/endorse',
        destination: `${Host}/recruiter/endorse/`,
      },
      {
        source: '/api/:path*',
        destination: `${Host}/:path*`, // Proxy to Backend
      },
      {
        source: '/',
        destination: '/landd',
      },
    ];
  },
};

module.exports = nextConfig;
