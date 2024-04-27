import { defineConfig } from "cypress";
import { MongoClient } from 'mongodb';
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

  env: {
    mongodb: {
        uri: 'mongodb+srv://ohda456:5QQekAsyx9HiZeF6@cluster0.umyzbdy.mongodb.net/',
        database: 'test_database',
        collection: 'user_profile_data'
    }
},

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.env.BASE_URL = process.env.BASE_URL;

      on('task', {
        async insertOne({ uri, database, collection, document }: { uri: string, database: string, collection: string, document: object }) {
          const client = new MongoClient(uri);
      
          try {
            await client.connect();
            const db = client.db(database);
            const result = await db.collection(collection).insertOne(document);
            return result;
          } catch (err) {
            console.error(err);
          } finally {
            await client.close();
          }
        }
      });

      return config;
    },
  },
});
