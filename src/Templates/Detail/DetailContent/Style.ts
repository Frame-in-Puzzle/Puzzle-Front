import { css } from "@emotion/react";

export const Positioner = css`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 1rem;
  }

  li {
    margin-left: 15px;
  }

  img {
    width: 1200px;
  }
`;
