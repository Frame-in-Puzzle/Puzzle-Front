import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Positioner = css`
  width: 1250px;
  height: 325px;
`;

export const Container = css`
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: solid 1px #a5a5a5;
`;
export const ImgWrapper = css`
  margin-right: 10px;
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

export const TitleWrapper = css`
  display: flex;
  align-items: center;
`;

export const Name = css`
  font-style: normal;
  font-weight: 700;
  font-size: ${theme.fonts.h3};
`;

export const Icon = css`
  font-size: 35px;
  margin-left: 10px;
`;

export const Mail = css`
  display: flex;
  a {
    display: flex;
    color: #000;
  }
  p {
    display: none;
  }

  &:hover {
    p {
      display: block;
      margin-left: 10px;
      color: #fff;
      background-color: #707070;
      border-radius: 5px;
      padding: 6px;
    }
  }
`;

export const MailIcon = css`
  font-size: 31px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Introduction = css`
  color: #707070;
  font-style: normal;
  font-weight: normal;
  font-size: ${theme.fonts.h4};
`;

export const LanguageWrapper = css`
  width: 42%;
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
