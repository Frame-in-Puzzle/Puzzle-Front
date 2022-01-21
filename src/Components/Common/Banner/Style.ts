import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Wrapper = css`
  width: 100%;
  height: 50%;
  padding: 5%;
  background-color: #fbfbfb;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextWrapper = css`
  font-size: ${theme.fonts.h3};
`;

export const BoldText = css`
  font-weight: bold;
`;

export const BottomText = css`
  display: flex;
`;

export const Text = css`
  margin-top: 4%;
  margin-left: 2%;
`;
