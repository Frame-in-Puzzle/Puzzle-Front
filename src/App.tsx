import GlobalStyle from "./Styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./Styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Pages/Mainpage/Mainpage";
import ProfileCheckPage from "./Pages/ProfileCheckPage/ProfileCheckPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Routes>
          <Route path="/main" element={<Mainpage />} />
          <Route path="/profile" element={<ProfileCheckPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
