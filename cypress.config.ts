import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 30000,
  env: {
    requestMode: true,
    snapshotOnly: false,
    hideCredentials: true,
    hideCredentialsOptions: {
      headers: ['X-RapidAPI-Key', 'X-RapidAPI-Host'],
    },
    url: 'https://realstonks.p.rapidapi.com/GE',
    'X-RapidAPI-Key': 'fb3d1d5420msh74cdb594e5b6d22p167738jsn6a1cfeb9dbc9',
    'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
  },
  reporter: 'cypress-multi-reporters',
  chromeWebSecurity: true,
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'My Test Suite',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
    },
  },
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: 'https://www.google.com',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*spec.cy.ts',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
})