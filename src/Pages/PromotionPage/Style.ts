import { css } from "@emotion/react";
import { Style } from "../../Components/Input/Style";

export const container = css`
  scroll-snap-type: y mandatory;
  overflow: scroll;
  html,
  body {
    height: 100vh;
    overflow: hidden;
  }
`;

export const area = css`
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
