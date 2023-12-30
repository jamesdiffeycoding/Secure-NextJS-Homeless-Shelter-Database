const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: 'https://shelterapp-homehorizon.onrender.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});

