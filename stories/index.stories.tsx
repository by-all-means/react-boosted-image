import React from 'react';

import { storiesOf } from '@storybook/react';
import { SmartImage } from '../src/index';

const WithSizes = () => (
  <SmartImage
    alt={"example"}
    sources={{
      breakpoints: [900],
      webpSrcSet: [
        "https://www.placecage.com/360/360",
        "https://www.placecage.com/640/540"
      ],
      fallbackSrcSet: [
        "https://www.placecage.com/640/360",
        "https://www.placecage.com/640/360"
      ]
    }}
    width="640"
    height="540"
  />
);

storiesOf('SmartImage', module)
  .add('with sizes (width x height)', () => <WithSizes />);
