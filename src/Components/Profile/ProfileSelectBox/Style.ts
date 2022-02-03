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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Language = css`
  display: flex;
  justify-content: space-between;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50px;
  font-style: normal;
  font-size: ${theme.fonts.h5};
  padding: 10px 29px;
`;

export const Line = css`
  width: 100%;
  height: 0%;
  border: 1px solid #a5a5a5;
  margin-top: 0.5%;
`;

export const Icon = css`
  position: absolute;
  margin-left: 5%;
`;
