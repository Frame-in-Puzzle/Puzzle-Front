import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const DropDownStyle = css`
  position: relative;
  margin-bottom: 10px;
  border: 1px solid #c4c4c4;
  font-size: ${theme.fonts.h5};
  padding: 5px 7px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
