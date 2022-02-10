import GlobalStyle from "./Styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./Styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Pages/Mainpage/Mainpage";
import { ProfileCheckPage } from "./Pages";
import Profilepage from "./Pages/Profilepage/Profilepage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Routes>
          <Route path="/main" element={<Mainpage />} />
          <Route path="/profile/check" element={<ProfileCheckPage />} />
          <Route path="/profile" element={<Profilepage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
