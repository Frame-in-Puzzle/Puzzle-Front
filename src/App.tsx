import React from "react";
import logo from "./logo.svg";
import GlobalStyle from "./Styles/GlobalStyle";
import { Global } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <Global styles={GlobalStyle}></Global>
    </div>
  );
}

export default App;
