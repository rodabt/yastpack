/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: "/"},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
  ],
  routes: [
    /* Example: Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/"}
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    knownEntrypoints: ["@roxi/routify/runtime/buildRoutes"]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};