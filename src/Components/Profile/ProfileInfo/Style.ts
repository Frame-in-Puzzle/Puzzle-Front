import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 100%;
  padding: 4% 12%;
`;

export const Container = css`
  width: 100%;
  height: 100%;
`;

export const ContentsWrapper = css`
  width: 100%;
  height: 0%;
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
`;

export const SpanText = css`
  font-size: ${theme.fonts.h4};
  font-weight: 600;
`;

export const Link = css`
  font-size: ${theme.fonts.h5};
  font-weight: 600;
  color: #535353;
  margin-right: 64%;
`;

export const ModifyText = css`
  font-size: ${theme.fonts.h5};

  &:hover {
    color: #c2c2c2;
    transition: 0.2s;
  }
`;

export const Line = css`
  width: 100%;
  height: 0%;
  border: 1px solid #a5a5a5;
  margin-top: 0.5%;
`;

export const ToggleButtonWrapper = css`
  width: 86%;
  display: grid;
  margin-bottom: 1.3%;
`;

export const ToggleButton = css`
  display: flex;

  span {
    margin-right: 2%;
    color: #878787;
    font-size: ${theme.fonts.h5};
  }
`;
