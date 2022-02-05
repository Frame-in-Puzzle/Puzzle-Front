import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 100%;
  padding: 4% 12%;
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

export const LanguageWrapper = css`
  width: 20%;
  display: flex;
`;

export const Language = css`
  border: 1px solid #000000;
  border-radius: 50px;
  padding: 4% 6%;
  display: flex;
  justify-content: space-between;
`;

export const Line = css`
  width: 100%;
  height: 0%;
  border: 1px solid #a5a5a5;
  margin-top: 0.5%;
`;

export const Icon = css`
  position: relative;
  top: 4px;
  left: 6px;
`;
