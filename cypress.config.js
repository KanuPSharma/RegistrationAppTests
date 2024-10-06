
const { defineConfig } = require("cypress");
const { Client } = require("pg");
//const dotenv = require('dotenv');
//dotenv.config();
module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 30000,
  responseTimeout: 30000,
  requestTimeout: 30000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: false,
  },
  e2e: {
      url: process.env.URL,     
      email: process.env.EMAIL,          
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
