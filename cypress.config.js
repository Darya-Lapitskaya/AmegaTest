const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: 'https://www.amega.finance/',
     defaultCommandTimeout: 5000,
     viewportWidth: 1920,
     viewportHeight: 1080,
  },
});