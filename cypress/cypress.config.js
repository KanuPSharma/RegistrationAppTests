const { defineConfig } = require("cypress");
const { Client } = require("pg");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: false,
  },
  e2e: {
      url: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("task", {
        async connectDB(query) {
          const client = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            database: "app_db",
            ssl: false,
            port: 5432,
          });
          await client.connect();
          const res = await client.query(query);
          await client.end();
          return res.rows; 
        },
      });
    },
  },
});
