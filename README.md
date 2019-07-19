# React smart picture

> Smarter image component that has blured preview and posibility to use webp image type and different images according to device width.

[![NPM](https://img.shields.io/npm/v/example_lib.svg)](https://www.npmjs.com/package/react-smart-picture) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

- **Blured** preview image [optional]
- Provide a **default preview** image
- **Lazy** load mode [optional]
- Support **webP** format [optional]
- Support **fallback** for retarded Safari
- You can define your own **breakpoints** and [optional]
- **different** images for each **device** [optional]


### Possible enhancements

- Custom animation effect / css
- Add support for videos
- ...


## Install

```bash
npm install --save react-smart-picture
```

## Usage

```tsx
import * as React from 'react'

import { BoostedImage } from 'react-smart-picture'

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

## License

MIT © [Antonina Lebedeva](https://github.com/lebtonya)
