import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Input = css`
  font-size: ${theme.fonts.h2};
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 2px solid #a5a5a5;

  ::placeholder {
    font-size: ${theme.fonts.h2};
    font-weight: bold;
    color: #6a6a6a;
  }
`;
