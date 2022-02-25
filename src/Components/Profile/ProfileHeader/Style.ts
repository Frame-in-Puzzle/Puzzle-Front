import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 100%;
  padding: 4% 12%;
`;

export const MainText = css`
  font-size: ${theme.fonts.h2};
  font-weight: bold;
`;

export const Line = css`
  width: 100%;
  border: 1px solid #a5a5a5;
`;

export const EditImage = css`
  margin-top: 0.4%;
  margin-left: 98%;
`;

export const ItemContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ImageWrapper = css`
  width: 15%;
  height: 100%;
  display: grid;

  img {
    width: 250px;
    height: 250px;
    border-radius: 250px;
    border: 3px solid #ffffff;
    box-sizing: border-box;
  }
`;

export const ButtonWrapper = css`
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 10%;
`;
export const UploadBtn = css`
  ${theme.buttons.Medium};
  margin-top: 10%;
  border-radius: 10px;
  background-color: #000000;
  color: #ffffff;
  font-size: ${theme.fonts.h5};
  font-weight: 600;
`;

export const DeleteBtn = css`
  ${theme.buttons.Medium};
  margin-top: 3%;
  border-radius: 10px;
  color: #717171;
  background-color: transparent;
  font-size: ${theme.fonts.h5};
  font-weight: 600;

  &:hover {
    background-color: #f7f7f7;
    color: #717171;
    transition: 0.2s;
  }
`;

export const VerticalLine = css`
  border: 1px solid #a5a5a5;
  margin-left: 3%;
`;

export const TextWrapper = css`
  margin-top: 5%;
  margin-left: 2.5%;
`;

export const Name = css`
  font-size: ${theme.fonts.h3};
  font-weight: bold;
`;

export const Description = css`
  font-size: ${theme.fonts.h4};
  color: #707070;
  margin-top: 7%;
`;
