import { css, keyframes } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f6fff9;
  overflow: hidden;
`;

export const MainText = css`
  font-size: ${theme.fonts.h4};
  font-weight: 700;
`;

export const ImgWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img1 = css`
  position: absolute;
  z-index: 1;
`;

export const floating = keyframes`
    from {
     transform: translateX(-100%)
    }

    to{
     transform: translateX(-60%)
    }
 `;

export const Img2 = css`
  position: absolute;
  z-index: 2;
  top: 55%;
  animation-name: ${floating};
  animation-duration: 2s;
  animation-duration: leaner;
  animation-direction: alternate;
  animation-fill-mode: forwards;
`;
export const Img3 = css`
  position: absolute;
  z-index: 3;
`;
export const floating2 = keyframes`
    from {
     transform: translateX(100%)
    }

    to{
     transform: translateX(60%)
    }
 `;
export const Img4 = css`
  position: absolute;
  z-index: 4;
  top: 27%;
  animation-name: ${floating2};
  animation-duration: 2s;
  animation-duration: leaner;
  animation-direction: alternate;
  animation-fill-mode: forwards;
`;
