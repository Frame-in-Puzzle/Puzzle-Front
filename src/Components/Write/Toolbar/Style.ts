import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const NavigationBar = css`
  display: flex;
  width: 100%;
  height: 20%;
  padding: 1% 0 0 0.7%;

  Button {
    margin-left: 0.5%;
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
