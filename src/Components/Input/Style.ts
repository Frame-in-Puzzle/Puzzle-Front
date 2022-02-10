import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Input = css`
  width: 100%;
  height: 100%;
`;

export const Themes = {
  ProfileRegistrationPageInput: css`
    border: 2px solid #6a6a6a;
    box-sizing: border-box;
    border-radius: 10px;
    color: #888888;
  `,
  WritePageInput: css`
    color: #6a6a6a;
    border: none;
    border-bottom: 1px solid #a5a5a5;
  `,
  ProfileModifyPageInput: css`
    border: 2px solid #6a6a6a;
    box-sizing: border-box;
    border-radius: 5px;
    color: #a8a8a8;
  `,
};

export const fontSizes = {
  h6: css`
    font-size: ${theme.fonts.h6};
  `,
  h5: css`
    font-size: ${theme.fonts.h5};
  `,
  h4: css`
    font-size: ${theme.fonts.h4};
  `,
  h3: css`
    font-size: ${theme.fonts.h3};
  `,
  h2: css`
    font-size: ${theme.fonts.h2};
  `,
  h1: css`
    font-size: ${theme.fonts.h1};
  `,
};
