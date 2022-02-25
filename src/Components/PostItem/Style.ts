import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Positioner = css`
  width: 327px;
  height: 304px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 15%);
  border-radius: 15px;
  border: none;
  background-color: #ffffff;
`;

export const Container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 5%;
`;

export const Title = css`
  width: 100%;
  height: 13%;
  font-weight: bold;
  font-style: italic;
  font-size: ${theme.fonts.h4};
`;

export const Image = css`
  width: 100%;
  height: 75%;
`;

export const State = css`
  display: flex;
  justify-content: flex-end;
  height: 7%;
  font-size: ${theme.fonts.h6};
  color: #434343;
`;
