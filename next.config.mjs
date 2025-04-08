/** @type {import('next').NextConfig} */

import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  experimental: {
    appDir: true
  }
}

export default withSentryConfig(nextConfig, {
  org: "ricardo-atakiama",
  project: "javascript-nextjs",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs

  hideSourceMaps: true,

  disableLogger: true
});
