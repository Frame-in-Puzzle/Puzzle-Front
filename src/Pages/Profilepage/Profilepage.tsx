/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { Header, Button } from "../../Components";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import ProfileHeader from "../../Components/Profile/ProfileHeader/ProfileHeader";
import ProfileInfo from "../../Components/Profile/ProfileInfo/ProfileInfo";
import ProfileSelectBox from "../../Components/Profile/ProfileSelectBox/ProfileSelectBox";
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

      <ProfileHeader />
      <ProfileInfo />
      <ProfileSelectBox />
      <div css={S.BottomTextContainer}>
        <div css={S.TextButtonWrapper}>
          <label css={S.Text}>회원 탈퇴</label>
          <button css={S.Button}>회원 탈퇴</button>
        </div>
        <p css={S.WarningMessage}>
          탈퇴 시 작성하신 게시글 및 신청이 모두 삭제되며 복구되지 않습니다.
        </p>
      </div>
    </div>
  );
};

export default Profilepage;
