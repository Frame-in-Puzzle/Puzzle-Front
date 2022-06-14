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

export const ItemContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 3%;
`;

export const ImageWrapper = css`
  width: 15%;
  height: 100%;
  display: grid;

  img {
    width: 250px;
    height: 250px;
    box-sizing: border-box;
    border-radius: 50%;
    border: solid #e5e5e5 4px;
  }
`;

export const UploadWrapper = css`
  display: flex;
  margin-top: 1%;
  margin-left: 9%;
  height: 0;
`;

export const UploadBtn = css`
  width: 170px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 10px;
  font-size: ${theme.fonts.h5};
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

export const VerticalLine = css`
  border: 1px solid #a5a5a5;
  margin-left: 3%;
`;

export const TextWrapper = css`
  margin-left: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  input {
    color: #000;
  }
`;

export const textarea = css`
  font-size: ${theme.fonts.h4};
  font-weight: 500;
  width: 577px;
  height: 135px;
  border: solid 2px #888;
  resize: none;
  border-radius: 10px;
  padding: 2%;
`;

export const EmailInput = css`
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  margin-bottom: 3%;
  input {
    color: #000;
  }
`;

export const Title = css`
  font-size: ${theme.fonts.h4};
  font-weight: 800;
  display: flex;
  align-items: center;
  margin-right: 3%;
`;

export const FiledWrapper = css`
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  margin-bottom: 3%;
`;

export const Language = css`
  display: flex;
  flex-direction: row;
  z-index: 5;
`;

export const ImageBtn = css`
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const tag = css`
  margin: 1% 9.5%;
`;

export const ButtonWrapper = css`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
`;

export const Text = css`
  color: #a5a5a5;
  margin-top: 2%;
`;
