/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { Header, Button } from "../../Components";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import ProfileHeader from "../../Components/Profile/ProfileHeader/ProfileHeader";
import ProfileInfo from "../../Components/Profile/ProfileInfo/ProfileInfo";
import ProfileSelectBox from "../../Components/Profile/ProfileSelectBox/ProfileSelectBox";
import { HeaderContainer } from "../../Components/Tags/TagModal/Style";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";

const Profilepage = () => {
  return (
    <div css={S.Positioner}>
      <Header theme="Login">
        <HeaderItem />
      </Header>
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
