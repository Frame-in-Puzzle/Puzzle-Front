import { css } from "@emotion/react";
import { Style } from "../../Components/Input/Style";

export const parent = css`
  /* make the container overflow vertically */
  height: 100vh;
  overflow-y: auto;

  /* define scroll snap behaviour */
  scroll-snap-type: y mandatory;
`;

export const child = css`
  /* adjust based on desired behaviour */
  scroll-snap-align: start; /* start or center or end */

  /* add for a slideshow-like feel */
`;
