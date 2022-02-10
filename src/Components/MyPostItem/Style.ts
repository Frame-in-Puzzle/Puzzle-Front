import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Positioner = css`
  width: 1250px;
  height: 395px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: none;
  background-color: #ffffff;
  margin-bottom: 90px;
`;

export const Container = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const rightbox = css`
  width: 48%;
  display: flex;
  margin-top: 3%;
  flex-direction: column;
`;

export const Image = css`
  width: 40%;
  height: 86%;
  margin-left: 2%;
  margin-right: 4%;
  margin-top: 2%;
  border-radius: 10px;
  background-color: gray;
`;

export const Icon = css`
  position: absolute;
  font-size: 35px;
  color: #434343;
  right: 20px;
  top: 20px;

  &:hover {
    background-color: white;
    color: #787878;
  }
`;

export const Category = css`
  width: 100%;
  color: #434343;
  font-style: italic;
  font-size: ${theme.fonts.h4};
`;
export const Title = css`
  width: 100%;
  height: 13%;
  font-weight: bold;
  font-style: italic;
  font-size: ${theme.fonts.h3};
`;

export const content = css`
  width: 600px;
  height: 130px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${theme.fonts.h5};
  color: #787878;
  margin-top: 7.5%;
`;

export const State = css`
  display: flex;
  justify-content: flex-end;
  font-size: ${theme.fonts.h5};
  color: #434343;
  margin-top: 14%;
`;
