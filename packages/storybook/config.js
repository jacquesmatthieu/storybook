/* eslint-disable global-require */

import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Arborescence',
  url: 'https://arborescence-staging.herokuapp.com',
  showAddonPanel: false,
});

configure(() => {
  require('./stories/index');
}, module);
