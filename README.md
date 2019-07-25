# React boosted image :muscle: :sunrise_over_mountains:

> Smarter image component that has a blurred preview and a possibility to use WebP image type. It can also adjust to a device width. Feel free to check it out!


[![NPM](https://img.shields.io/npm/v/example_lib.svg)](https://www.npmjs.com/package/react-boosted-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## Features

- **Blurred** preview image [optional]
- Provide a **default preview** image
- **Lazy** load mode [optional]
- **WebP** format support [optional]
- **Fallback** for your "favourite" Safari :shit:
- Custom **breakpoints** (media-query widths) [optional]
- **Different** images for each **device** [optional]


### Possible enhancements

- Custom animation effect / css
- Add video support
- ...


## Install

```bash
npm install --save react-boosted-image
```

## Usage

```tsx
import * as React from 'react'

import { BoostedImage } from 'react-boosted-image'

class Example extends React.Component {
  render () {
    return (
      <BoostedImage
        alt={"example"}
        sources={{
          breakpoints: [900],
          webpSrcSet: [
            "/assets/your-image-for-width-less-than-900.webp",
            "/assets/your-image-for-width-more-than-900.webp"
          ],
          fallbackSrcSet: [
            "/assets/your-image-for-width-less-than-900.jpg",
            "/assets/your-image-for-width-more-than-900.jpg"
          ]
        }}
        width="640"
        height="540"
        lazyMode={true}
      />
    )
  }
}
```

## Authors

- [Antonina Lebedeva](https://github.com/lebtonya)
- [Tomáš Uhrík](https://github.com/TomasUhrik)

## License

MIT
