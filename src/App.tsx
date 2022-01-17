import React from "react";
import logo from "./logo.svg";
import GlobalStyle from "Styles/GlobalStyle";
import { Global } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Global styles={GlobalStyle} />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
