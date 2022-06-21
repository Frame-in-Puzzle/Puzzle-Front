/** @jsxImportSource @emotion/react */
import { Header, Button } from "../../Components";
import { ProfileCheckHeader } from "../../Components";
import * as I from "../../Assets";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import { MyPost } from "../../Components";
import * as S from "./Style";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";
import { useLogin } from "../../Hooks/useLogin";
import { useState } from "react";
import HeaderNotLoginItem from "../../Components/Common/HeaderNotLoginItem/HeaderNotLoginItem";
import Sign from "../../Components/SigInModal/SiginModal";

const ProfileCheckPage = () => {
  const isLogin = useLogin();
  return (
    <>
      <Header theme="Login">
        {isLogin ? <HeaderItem /> : <HeaderNotLoginItem />}
      </Header>
      <div css={S.Positioner}>
        <ProfileCheckHeader />
        <MyPost />
      </div>
    </>
  );
};
export default ProfileCheckPage;
