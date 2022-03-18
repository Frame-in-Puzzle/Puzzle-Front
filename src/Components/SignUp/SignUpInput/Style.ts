import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = css`
  font-size: ${theme.fonts.h4};
  font-weight: 600; ;
`;

export const TitleWrapper = css`
  input {
    color: #000;
  }
`;
