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

export const MainWarpper = css`
  width: 1500px;
  display: flex;
  justify-content: space-between;
  margin-left: 7%;
`;

export const MainSectionWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainSection = css`
  color: #fff;
  font-size: ${theme.fonts.h3};
  font-weight: 700;
`;

export const ButtonWrapper = css`
  width: 290px;
  display: flex;
  margin-top: 5%;
  justify-content: space-between;
`;

export const floating = keyframes`
    from {
      top: 600px;
      right: -300px;
    }
    to{
      top: 150px;
      right: -10px;
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
