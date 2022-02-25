import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 120%;
`;

export const BottomTextContainer = css`
  width: 100%;
  padding: 4% 12%;
  margin-top: -6%;
`;

export const TextButtonWrapper = css`
  margin-bottom: 1%;
`;

export const WarningMessage = css`
  color: #7d7d7d;
  font-size: ${theme.fonts.h5};
`;

export const Text = css`
  font-size: ${theme.fonts.h4};
  font-weight: 600;
`;

export const Button = css`
  ${theme.buttons.Medium};
  background: #ec8080;
  border-radius: 5px;
  font-size: ${theme.fonts.h5};
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin-left: 2%;
`;
