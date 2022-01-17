import React from "react";
import logo from "./logo.svg";
import GlobalStyle from "Styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import {theme} from './Styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Routes></Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
