import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  display: flex;
  margin-top: 2%;
  padding: 2rem 0 2rem 0;
`;

export const Text = css`
  display: flex;
  p {
    font-weight: 600;
    font-size: ${theme.fonts.h4};
    color: #000000;
  }
`;
