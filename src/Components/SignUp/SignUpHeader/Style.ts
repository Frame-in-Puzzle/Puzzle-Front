import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 150px;
`;

export const TitleWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = css`
  font-style: normal;
  font-weight: 800;
  font-size: ${theme.fonts.h2};
  margin-left: 10px;
`;

export const Introduction = css`
  font-style: normal;
  font-weight: 600;
  font-size: ${theme.fonts.h4};
  color: #9f9f9f;
`;
