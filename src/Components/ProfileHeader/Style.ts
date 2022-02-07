import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Positioner = css`
  width: 1250px;
  height: 325px;
`;

export const Container = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: solid 1px #a5a5a5;
`;

export const rightbox = css`
  width: 80%;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 3%;
  margin-top: 5%;
`;

export const Name = css`
  font-style: normal;
  font-weight: 700;
  font-size: ${theme.fonts.h3};
`;

export const Icon = css`
  position: absolute;
  font-size: 35px;
  left: 465px;
  top: 65px;
`;

export const Introduction = css`
  color: #707070;
  font-style: normal;
  font-weight: normal;
  font-size: ${theme.fonts.h4};
`;

export const LanguageWrapper = css`
  width: 37%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Language = css`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50px;
  font-style: normal;
  font-size: ${theme.fonts.h5};
  padding: 10px 29px;
`;