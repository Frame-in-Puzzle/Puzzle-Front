import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Positioner = css`
  display: grid;
  grid-template-columns: repeat(4, 325px);
  grid-column-gap: 30px;
  padding: 4% 6%;
  justify-content: space-between;
  row-gap: 50px;

  /* @media screen and (max-width: 1414px) {
    grid-template-columns: repeat(3, 325px);
  }
  @media screen and (max-width: 1065px) {
    grid-template-columns: repeat(2, 325px);
  }
  @media screen and (max-width: 710px) {
    grid-template-columns: repeat(1, 325px);
    justify-content: center;
  } */
`;
