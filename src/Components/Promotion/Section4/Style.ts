import { css, keyframes } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
  overflow: hidden;
`;

export const MainText = css`
  font-size: ${theme.fonts.h4};
  font-weight: 700;
  text-align: center;
`;
