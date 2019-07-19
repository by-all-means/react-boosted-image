import { configure, addParameters } from '@storybook/react';

import { create } from '@storybook/theming';
import pck from '../package'

addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: pck.name,
      brandUrl: pck.repository.url,
    }),
    isFullscreen: false,
    panelPosition: 'bottom',
  },
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
