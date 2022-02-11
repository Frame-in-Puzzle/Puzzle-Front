import GlobalStyle from "./Styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./Styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Mainpage from "./Pages/Mainpage/Mainpage";
import ProfileCheckPage from "./Pages/ProfileCheckPage/ProfileCheckPage";
import Profilepage from "./Pages/Profilepage/Profilepage";
import WritePage from "./Pages/WritePage/WritePage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <Routes>
            <Route path="/main" element={<Mainpage />} />
            <Route path="/profile/check" element={<ProfileCheckPage />} />
            <Route path="/profile" element={<Profilepage />} />
            <Route path="/write" element={<WritePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
