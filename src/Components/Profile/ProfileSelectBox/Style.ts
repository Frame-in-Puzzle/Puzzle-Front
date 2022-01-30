import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 100%;
`;

export const DropDownWrapper = css`
  margin-bottom: 2%;

  label {
    display: inline-block;
    margin-bottom: 0.5%;
    font-size: ${theme.fonts.h4};
    font-weight: 600;
  }
`;
