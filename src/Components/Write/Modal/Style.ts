import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

type selected = {
  name: string;
  value: string;
};

export const PreviewModalWrapper = css`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: hidden;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Positioner = css`
  width: 500px;
  height: 560px;
  display: flex;
  position: absolute;
  z-index: 1000;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
`;

export const Label = css`
  width: 50%;
  display: flex;
  color: #858585;
  font-size: 16px;
  margin-bottom: 13px;
`;

export const HeaderContainer = css`
  width: 100%;
  padding: 2% 5%;
  position: relative;
  text-align: center;
`;

export const Reset = css`
  font-size: 16px;
  color: #858585;
  background: none;
  position: absolute;
  left: 0;
  right: auto;
  padding-left: 5%;
  padding-top: 1.5%;
  cursor: pointer;
`;

export const Title = css`
  font-size: ${theme.fonts.h5};
`;

export const Close = css`
  font-size: 16px;
  color: #858585;
  background: none;
  position: absolute;
  right: 0;
  left: auto;
  padding-right: 5%;
  padding-top: 1.5%;
  cursor: pointer;
`;

export const ContentsContainer = css`
  padding: 6% 5%;
  height: 100%;
`;

export const TextArea = css`
  width: 100%;
  height: 70%;
  resize: none;
  background-color: #f5f5f5;
  border-radius: 10px;
  ::placeholder {
    color: #929292;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    padding: 2%;
  }
`;

export const SelectWrapper = css`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;

  &:nth-of-type(2n) > ul {
    border-left: none;
  }
`;

export const Button = css`
  padding: 5% 5%;
`;
