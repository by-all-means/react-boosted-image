import React, { useEffect, useState, useRef } from "react";
import { RealImg, ImgContainer } from "./styled";
import { WebpIsSupported } from "./helpers";
import { useInView } from 'react-intersection-observer';
import { DEFAULT_PREVIEW_IMG } from './default_preview_img';

interface ISmartImage {
  alt: string;
  previewSrc?: string;
  sources: {
    breakpoints?: number[];
    webpSrcSet?: string[];
    fallbackSrcSet: string[];
  };
  width?: string;
  height?: string;
  lazyMode?: boolean;
}

const SmartImage: React.FC<ISmartImage> = ({
  previewSrc = DEFAULT_PREVIEW_IMG,
  ...p
}) => {
  const [largeLoaded, setLargeLoaded] = useState<boolean>(false);
  const [largeImgSrc, setLargeImgSrc] = useState<string>("");

  const imageRef: any = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const shouldRender = p.lazyMode ? inView : true;

  useEffect(() => {
    const src = determineSrc();
    setLargeImgSrc(src);
  }, []);

  useEffect(() => {
    startLoadImg()
  }, [largeImgSrc, shouldRender]);

  const determineSrc = () => {
    const { webpSrcSet, breakpoints, fallbackSrcSet } = p.sources;
    const srcSet = (webpSrcSet && WebpIsSupported()) ? webpSrcSet : fallbackSrcSet;

    if (breakpoints) {
      const smallestApplicableBreakpoint = breakpoints.find(
        breakpoint => window.innerWidth < breakpoint
      );

      const index = smallestApplicableBreakpoint
        ? breakpoints.indexOf(smallestApplicableBreakpoint)
        : srcSet.length - 1;

      return srcSet[index];
    }

    return srcSet[0];
  };

  const startLoadImg = () => {
    // guard for UC when you don't need to load image yet
    if (!(largeImgSrc && shouldRender)) { return; }

    setImageSrc(largeImgSrc);
  };

  const handleOnLoad = () => {
    setLargeLoaded(true);
  }

  const setImageSrc = (src: string) => {
    if (imageRef && imageRef.current) {
      imageRef.current.src = src;
    }
  }

  return (
    <ImgContainer width={p.width} height={p.height} ref={ref}>
      <RealImg blured src={previewSrc} show={!largeLoaded} alt={p.alt} />
      <RealImg show={largeLoaded} ref={imageRef} onLoad={handleOnLoad} alt={p.alt} />
    </ImgContainer>
  );
};

export { SmartImage };
