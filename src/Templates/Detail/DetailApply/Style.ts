import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 1200px;
  margin: 5% auto;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Apply = css`
  font-weight: bold;
  font-size: ${theme.fonts.h4};
  color: #4d4d4d;
`;

export const ApplyDescription = css`
  font-size: ${theme.fonts.h6};
  color: #5c5c5c;
  margin-left: 1rem;
`;

export const ApplyContainer = css`
  margin-bottom: 2rem;
`;
