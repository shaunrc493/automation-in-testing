const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationintesting.online',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    defaultBrowser: 'chrome',
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);

      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        log(message) {
          console.log(message)
          return null
        },
      });

      return config;
    },
  },
});
