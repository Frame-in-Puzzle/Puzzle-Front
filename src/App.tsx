import React from "react";
import logo from "./logo.svg";
import GlobalStyle from "./Styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./Styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <h1 style={{ color: "red" }}> hi</h1>
        <Routes></Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
