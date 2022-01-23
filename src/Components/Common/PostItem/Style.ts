import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 327px;
  height: 304px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 15%);

  border-radius: 15px;
  border: none;
  background-color: #ffffff;
`;

export const Container = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 5%;
`;

export const Title = css`
  font-weight: bold;
  font-style: italic;
  font-size: ${theme.fonts.h4};
`;

export const Image = css`
  margin-top: 3%;
`;

export const State = css`
  margin-top: 10%;
  margin-left: 80%;
  font-size: ${theme.fonts.h6};
  color: #434343;
`;
