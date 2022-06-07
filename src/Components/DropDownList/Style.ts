import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const ListStyle = css`
  position: absolute;
  padding: 20px 22px;
  width: 400px;
  background: #ffffff;
  font-size: ${theme.fonts.h5};
  border: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  list-style: none;
  border-radius: 5px;
  z-index: 100;
  li {
    margin-top: 15px;
    cursor: pointer;
  }
  li:nth-of-type(1) {
    margin: 0;
  }
`;

export const themes = {
  interest: css``,
  state: css``,
  purpose: css``,
  profile: css`
    align-items: center;
    li {
      margin-top: 20px;
    }
  `,
  Frontend: css``,
  Backend: css``,
  AI: css``,
  Android: css``,
  iOS: css``,
  Game: css``,
  detail: css`
    align-items: center;
    position: absolute;
    top: 70px;
    right: -68px;
  `,
};
