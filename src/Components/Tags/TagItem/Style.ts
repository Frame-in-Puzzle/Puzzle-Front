import { css } from "@emotion/react";

export const Tag = css`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  border-radius: 1rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.875rem;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
`;

export const themes = {
  DarkGrayTag: css`
    background: #717171;
    color: #ffffff;
  `,
  LightGrayTag: css`
    background: #ececec;
    color: #353535;
  `,
};
