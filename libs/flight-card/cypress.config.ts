import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: nxE2EPreset(__filename, { cypressDir: 'cypress' }),
  component: nxComponentTestingPreset(__filename),
});
