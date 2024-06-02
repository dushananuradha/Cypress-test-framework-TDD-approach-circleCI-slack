import { defineConfig } from "cypress";
// import { MongoClient } from 'mongodb';
// import dbConnection from "./cypress/fixtures/dbConnection.json";
import { dbTasks } from "./cypress/support/dbTasks";
require("dotenv").config();

const dotenv = require("dotenv");
const path = require("path");
const envFolderPath = "./env_files";
const envFile = process.env.ENV_FILE || ".env";

export default defineConfig({
  projectId: "a78kas",
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

      dotenv.config({
        path: path.resolve(__dirname, path.join(envFolderPath, envFile)),
      });
      config.env = Object.assign({}, config.env, process.env);

      // on('task', {
      //   async createUser({ record }) {
      //     const client = new MongoClient(dbConnection.MONGO_URI);
      //     await client.connect();
      //     const db = client.db(dbConnection.dbName);
      //     const collection = db.collection(dbConnection.collection);
      //     const result = await collection.insertOne(record);
      //     await client.close();
      //     return result;
      //   }
      // });

      on("task", dbTasks);

      return config;
    },
  },
});
