import { css } from "@emotion/react";

const GlobalStyle = css`
  @font-face {
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    src: url("../Fonts/NotoSansKR-Regular.woff2") format("woff2"),
      url("../Fonts/NotoSansKR-Regular.woff") format("woff"),
      url("../Fonts/NotoSansKR-Regular.otf") format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
  }

  body {
    width: 100%;
    height: 100vh;
  }
`;

export const ProfileWrapper = css`
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export default GlobalStyle;
