import {defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: 'http://127.0.0.1:4200',
    headless: true,
  },
  webServer: [
    {
      command: 'npm run start:products',
      port: 4201,
      reuseExistingServer: !process.env.CI,
      timeout: 180_000,
    },
    {
      command: 'npm run start:profile',
      port: 4202,
      reuseExistingServer: !process.env.CI,
      timeout: 180_000,
    },
    {
      command: 'npm run start:host',
      port: 4200,
      reuseExistingServer: !process.env.CI,
      timeout: 180_000,
    },
  ],
});
