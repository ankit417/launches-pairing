import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    supportFile: './components/card/card.component.tsx',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
