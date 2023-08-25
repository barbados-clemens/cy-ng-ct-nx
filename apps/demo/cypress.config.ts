import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';
import { defineConfig } from 'cypress';

const config = nxComponentTestingPreset(__filename);
console.log(config);
export default defineConfig({
  component: config,
});
