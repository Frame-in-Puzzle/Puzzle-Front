import GlobalStyle from "./Styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./Styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Mainpage from "./Pages/Mainpage/Mainpage";
import { ProfileCheckPage } from "./Pages";
import Profilepage from "./Pages/Profilepage/Profilepage";
import PromotionPage from "./Pages/PromotionPage/PromotionPage";
import WritePage from "./Pages/WritePage/WritePage";
import { DetailPage, SignUpPage, CallbackPage } from "./Pages";
import { ToastContainer, toast, Slide } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  return (
    <RecoilRoot>
      <Router>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <ToastContainer
            position={toast.POSITION.TOP_RIGHT}
            transition={Slide}
            autoClose={1500}
          />
          <Routes>
            <Route path="/" element={<PromotionPage />} />
            <Route path="/main" element={<Mainpage />} />
            <Route path="/profile/:sub" element={<ProfileCheckPage />} />
            <Route path="/profile/setting" element={<Profilepage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/callback" element={<CallbackPage />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  );
}

export default App;
