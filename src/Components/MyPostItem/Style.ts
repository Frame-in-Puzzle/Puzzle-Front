import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Positioner = css`
  width: 1250px;
  height: 395px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: none;
  background-color: #ffffff;
`;

export const Container = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const rightbox = css`
  width: 605px;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
`;

export const Image = css`
  width: 500px;
  height: 340px;
  margin-left: 25px;
  margin-right: 60px;
  margin-top: 27px;
  border-radius: 10px;
  background-color: gray;
`;

export const Icon = css`
  position: absolute;
  font-size: 35px;
  color: #787878;
  right: 20px;
  top: 20px;
`;

export const Category = css`
  color: #434343;
  font-style: italic;
  font-size: ${theme.fonts.h4};
`;
export const Title = css`
  width: 100%;
  height: 53px;
  font-weight: bold;
  font-style: italic;
  font-size: ${theme.fonts.h3};
`;

export const content = css`
  width: 100%;
  height: 120px;
  font-size: ${theme.fonts.h5};
  color: #787878;
  margin-top: 37px;
`;

export const State = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: ${theme.fonts.h5};
  color: #434343;
  margin-top: 70px;
`;
