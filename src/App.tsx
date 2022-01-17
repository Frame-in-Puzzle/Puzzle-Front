import React from "react";
import logo from "./logo.svg";
import GlobalStyle from "./Styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";

const theme = {
  buttons: {
    Big: 'width: 280px; height: 90px',
    Medium: 'width: 150px; height: 60px',
    Regular: 'width: 100px; height: 40px',
    Small: 'width: 90px; height: 30px',
  },
  fonts: {
    h1: '78px',
    h2: '60px',
    h3: '37px',
    h4: '25px',
    h5: '20px',
    h6: '13px',
  }
}

function App() {
  return <ThemeProvider theme={theme}>
    <Global styles={GlobalStyle} />
  </ThemeProvider>;
}

export default App;
