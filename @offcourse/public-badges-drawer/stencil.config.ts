import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'publicbadges',
  plugins: [
    sass()
  ],
  bundles: [
    { components: ['publicbadges-drawer', 'publicbadges-circle', 'publicbadges-modal'] }
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
