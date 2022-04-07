import { css, keyframes } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020946;
  overflow: hidden;
`;

export const MainSection = css`
  color: #fff;
  font-size: ${theme.fonts.h4};
  font-weight: 700;
`;
export const ButtonWrapper = css`
  width: 290px;
  display: flex;
  margin-top: 5%;
  justify-content: space-between;
`;

export const ImgWarpper = css`
  margin-left: 5%;
`;
export const floating = keyframes`
    from {

      top: 600px;
      right: -300px;
    }

    to{
      top: 200px;
      right: 80px;

    }
 `;

export const RoketWarpper = css`
  position: absolute;
  animation-name: ${floating};
  animation-duration: 2s;
  animation-duration: leaner;
  animation-direction: alternate;
  animation-fill-mode: forwards;
`;
