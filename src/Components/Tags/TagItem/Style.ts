import { css } from "@emotion/react";

export const Tag = css`
  padding: 0 1rem;
  height: 2rem;
  border-radius: 1rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
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
  WhiteTag: css`
    background: #ffffff;
    border: 1px solid #000000;
  `,
};
