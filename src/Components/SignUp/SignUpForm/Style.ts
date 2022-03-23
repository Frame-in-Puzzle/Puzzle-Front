import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = css`
  font-size: ${theme.fonts.h4};
  font-weight: 600; ;
`;

export const TitleWrapper = css`
  margin-top: 5%;

  input {
    color: #000;
  }
`;

export const DropDown = css`
  margin-top: 5%;

  z-index: 5;
`;

export const DropWarpper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Tag = css`
  margin-top: 1%;
`;

export const ButtonWrapper = css`
  margin-top: 100px;
  display: flex;
  width: 300px;
  justify-content: space-between;
`;
