import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    setupNodeEvents(on: any, config: any) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    testIsolation: false
  },
});
