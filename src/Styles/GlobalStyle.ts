import { css } from "@emotion/react";

const GlobalStyle = css`
  @font-face {
    font-family: "Poppins";
    src: url("../Fonts/Poppins-Black.ttf");
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    font-family: "Poppins";
  }
`;

export default GlobalStyle;
