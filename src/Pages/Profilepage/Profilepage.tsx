/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { Header, Button } from "../../Components";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import { ProfileSetting } from "../../Components";
import Sign from "../../Components/SigInModal/SiginModal";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";
import HeaderNotLoginItem from "../../Components/Common/HeaderNotLoginItem/HeaderNotLoginItem";
import { useLogin } from "../../Hooks/useLogin";

const Profilepage = () => {
  const isLogin = useLogin();

  return (
    <div css={S.Positioner}>
      <Header theme="Login">
        {isLogin ? <HeaderItem /> : <HeaderNotLoginItem />}
      </Header>
      <ProfileSetting />
    </div>
  );
};

export default Profilepage;
