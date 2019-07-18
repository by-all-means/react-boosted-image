import styled, { css } from 'styled-components';

interface IImgContainer {
  width?: string;
  height?: string;
}

const ImgContainer = styled.div<IImgContainer>`
  position: relative;

  width: ${p => (p.width ? `${p.width}px` : '100%')};
  height: ${p => (p.height ? `${p.height}px` : '100%')};

  overflow: hidden;
`;

interface IPlaceholderImg {
  show?: boolean;
  blured?: boolean;
}

const RealImg = styled.img<IPlaceholderImg>`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 400ms ease 0ms, transform 0.6s;

  ${p =>
    p.show &&
    css`
      opacity: 1;
    `}

  ${p =>
    p.blured &&
    css`
      filter: blur(50px);
      /* this is needed so Safari keeps sharp edges */
      transform: scale(1);
    `}
`;

export { ImgContainer, RealImg };
