# React smart picture

> Smarter image component that has blured preview and posibility to use webp image type and different images according to device width.

[![NPM](https://img.shields.io/npm/v/example_lib.svg)](https://www.npmjs.com/package/react-smart-picture) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-smart-picture
```

## Usage

```tsx
import * as React from 'react'

import SmartImage from 'react-smart-picture'

class Example extends React.Component {
  render () {
    return (
      <SmartImage
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
      />
    )
  }
}
```

## License

MIT © [Antonina Lebedeva](https://github.com/lebtonya)
