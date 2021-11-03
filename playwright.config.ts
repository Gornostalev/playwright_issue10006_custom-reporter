import { PlaywrightTestConfig } from '@playwright/test';

const devConfig: PlaywrightTestConfig = {
  reporter: './custom-list-reporter.ts',
};
export default devConfig;
