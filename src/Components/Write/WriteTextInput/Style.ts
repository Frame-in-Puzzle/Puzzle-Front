import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 100%;
  padding: 2% 12% 0;
`;

export const ContentsContainer = css`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 0.5px solid #b5b5b5;
  box-sizing: border-box;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;

export const NavigationBar = css`
  display: flex;
  width: 100%;
  height: 20%;
  padding: 1% 0 0 0.7%;

  Button {
    margin-left: 0.5%;
  }
`;

export const TextArea = css`
  width: 100%;
  height: 1000px;
  resize: none;
  font-size: ${theme.fonts.h4};

  p {
    margin-left: 1%;
    margin-top: 1%;
  }
`;

export const Line = css`
  width: 100%;
  height: 0%;
  border: 0.5px solid #a5a5a5;
  margin-top: 0.5%;
  opacity: 3;
`;

export const MarkdownContainer = css`
  display: flex;
  margin-left: 55%;
`;

export const MarkdownWrapper = css`
  margin-left: 20%;
`;

export const Markdown = css`
  cursor: pointer;
`;
