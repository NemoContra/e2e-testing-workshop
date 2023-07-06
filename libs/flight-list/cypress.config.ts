import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';

export default defineConfig({
  e2e: nxE2EPreset(__filename, { cypressDir: 'cypress' }),
  component: nxComponentTestingPreset(__filename),
});
