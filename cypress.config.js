const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    blockHosts: ['*.backtrace.io'],
    video: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000
    },
  },
);
