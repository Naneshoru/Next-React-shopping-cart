import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ad6621b33a197ab472964521cea1d4a7@o4508171461918720.ingest.us.sentry.io/4508171464933376",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
