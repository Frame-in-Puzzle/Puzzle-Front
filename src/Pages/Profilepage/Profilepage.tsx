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

  const [modalState, setModalState] = useState(false);

  const closeModal = (e: Event) => {
    e.preventDefault();
    setModalState(false);
  };

  return (
    <div css={S.Positioner}>
      <Header theme="Login">
        {isLogin ? (
          <HeaderItem />
        ) : (
          <HeaderNotLoginItem setModalState={setModalState} />
        )}
      </Header>
      {modalState && <Sign closeModal={closeModal} />}

      <ProfileSetting />
    </div>
  );
};

export default Profilepage;
