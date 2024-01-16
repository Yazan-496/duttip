/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");
const nextConfig = {
  reactStrictMode: false,
  images: {
    deviceSizes: [320, 640, 1200, 1920, 3840],
    // imageSizes: [32, 48, 64, 96, 128, 384],
    formats: ["image/webp"],
    // loader: "custom",
    // loaderFile: "./helpers/ImageLoader.js",
  },

  sentry: {
    // disableServerWebpackPlugin: true,
    // disableClientWebpackPlugin: true,
    // hideSourceMaps: true,
    // transpileClientSDK: true,
    // See the sections below for information on the following options:
    //   'Configure Source Maps':
    //     - disableServerWebpackPlugin
    //     - disableClientWebpackPlugin
    //     - hideSourceMaps
    //     - widenClientFileUpload
    //   'Configure Legacy Browser Support':
    //     - transpileClientSDK
    //   'Configure Serverside Auto-instrumentation':
    //     - autoInstrumentServerFunctions
    //     - excludeServerRoutes
    //   'Configure Tunneling to avoid Ad-Blockers':
    //     - tunnelRoute
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, configFile, stripPrefix, urlPrefix, include, ignore
  // org: "example-org",
  // project: "duttip",
  // // An auth token is required for uploading source maps.
  // authToken: process.env.SENTRY_AUTH_TOKEN,
  // silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);

// If you're using a next.config.mjs file:
// export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
