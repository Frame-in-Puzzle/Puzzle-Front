import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 50%;
  padding: 4% 6%;
  background-color: #fbfbfb;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 15%);
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = css`
  font-size: ${theme.fonts.h3};
`;

export const BoldText = css`
  font-weight: bold;
`;

export const BottomTextWrapper = css`
  display: flex;
`;

export const Text = css`
  margin-top: 3%;
  margin-left: 2%;
`;
