import { defineConfig } from "cypress";
import { getPlayers, createPlayer, updatePlayer, deletePlayer } from "./cypress/utilities/dbOperations";
require("dotenv").config();

const dotenv = require("dotenv");
const path = require("path");
const mysql = require("mysql");

const envFolderPath = "./env_files";
const envFile = process.env.ENV_FILE || ".env";

export default defineConfig({
  projectId: "1vwv6f",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Test Report - Amazon",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      const envPath = path.resolve(
        __dirname,
        path.join(envFolderPath, envFile)
      );
      console.log(`Loading .env file from: ${envPath}`);

      const result = dotenv.config({ path: envPath });

      if (result.error) {
        console.error("Error loading .env file:", result.error);
        throw result.error;
      }
      console.log("Loaded environment variables:", result.parsed);

      config.env = {
        ...config.env,
        ...result.parsed,
      };
      console.log("Final config.env:", config.env);

      on("task", {
        getPlayers,
        createPlayer,
        updatePlayer,
        deletePlayer,
      });
      return config;
    },
  },
});
