export const WebpIsSupported = () => {
  // If the browser doesn't has the method createImageBitmap, you can't display webp format
  return !!window.createImageBitmap;
};
