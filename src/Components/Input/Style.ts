import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

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

export const fontWeight = {
  100: css`
    font-weight: 100;
  `,
  200: css`
    font-weight: 200;
  `,
  300: css`
    font-weight: 300;
  `,
  400: css`
    font-weight: 400;
  `,
  500: css`
    font-weight: 500;
  `,
  600: css`
    font-weight: 600;
  `,
  700: css`
    font-weight: 700;
  `,
  800: css`
    font-weight: 800;
  `,
  900: css`
    font-weight: 900;
  `,
};
