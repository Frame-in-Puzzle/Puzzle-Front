import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const ListStyle = css`
  padding: 1% 1.5%;
  width: 400px;
  font-size: ${theme.fonts.h5};
  border: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  list-style: none;
  border-radius: 10px;
  li {
    margin-top: 15px;
    cursor: pointer;
  }
  li:nth-of-type(1) {
    margin: 0;
  }
`;
