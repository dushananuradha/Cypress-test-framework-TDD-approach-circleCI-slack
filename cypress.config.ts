import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
  projectId: "a78kas",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Report - Amazon',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.env.BASE_URL = process.env.BASE_URL;
      return config;
    },
  },
});
