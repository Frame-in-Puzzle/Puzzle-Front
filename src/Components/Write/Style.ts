import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 100%;
  padding: 2% 12% 0;
`;

export const Input = css`
  *:focus {
    outline: none;
  }
`;

export const CheckProjectContainer = css`
  display: flex;
  padding-top: 3%;

  p {
    margin-right: 1%;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const ContentsContainer = css`
  background: #ffffff;
  border: 0.5px solid #b5b5b5;
  box-sizing: border-box;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;

export const NavigationBar = css`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1%;
  Button {
    margin-left: 1%;
  }
`;

export const NavButtonWrapper = css`
  width: 100%;
  display: flex;
`;

export const MarkdownWrapper = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const ToolbarBlock = css``;

export const FileIconInput = css`
  display: none;
`;

export const FileIconButton = css`
  background: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const TextArea = css`
  resize: none;
  width: 100%;
  height: 1200px;
  padding: 20px;
  font-size: ${theme.fonts.h4};

  &:focus {
    outline: none;
  }
`;

export const PreviewArea = css`
  resize: none;
  width: 100%;
  height: 1200px;
  font-size: ${theme.fonts.h4};
  padding: 20px;

  &:focus {
    outline: none;
  }
`;

export const Line = css`
  border: 0.5px solid #a5a5a5;
  opacity: 3;
`;

export const Markdown = css`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const ButtonWrapper = css`
  display: flex;
  float: right;
  padding-top: 1%;

  Button {
    margin-left: 2%;
  }
`;
