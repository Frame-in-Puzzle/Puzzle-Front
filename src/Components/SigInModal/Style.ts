import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Positioner = css`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
`;

export const Container = css`
  width: 40%;
  height: 58%;
  background: #fff;
  z-index: 10;
  border-radius: 15px;
`;

export const Overay = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #c4c4c4;
  opacity: 0.8;
`;
export const ModalHeader = css`
  width: 100%;
  height: 11%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: rgba(196, 196, 196, 0.15);
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.1);
`;
export const ModalHeaderItem = css`
  width: 92%;
  display: flex;
  justify-content: space-between;
`;

export const Icon = css`
  font-size: 35px;
  margin-left: 10px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const Content = css`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fonts.h4};
    margin-top: 45px;
  }
`;

export const GithubIcon = css`
  font-size: 160px;
`;

export const GithubContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
  cursor: pointer;

  h2 {
    color: #494949;
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fonts.h5};
  }
`;
