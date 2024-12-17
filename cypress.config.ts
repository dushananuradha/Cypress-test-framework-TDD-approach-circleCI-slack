import { defineConfig } from "cypress";
// import { MongoClient } from 'mongodb';
// import dbConnection from "./cypress/fixtures/dbConnection.json";
import { dbTasks } from "./cypress/support/dbTasks";
require("dotenv").config();

const dotenv = require("dotenv");
const path = require("path");
const envFolderPath = "./env_files";
const envFile = process.env.ENV_FILE || ".env";

//dbTestig with mySQL
const mysql = require("mysql");


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
      // });on("task", dbTasks);

      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        }
      })

      return config;
    },
    "env": {
      "db": {
        "host": "localhost",
        user: "root",
        password: "password",
        database: "cypresstest",
        port: 3306
      }
    }
  },
});

function queryTestDb(query, config) {
  //create new mysql connection using credentials from cypress.json
  const connection = mysql.createConnection(config.env.db);
  //start connection 
  connection.connect();
//execute query + disconnect 
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    });
  });
}
