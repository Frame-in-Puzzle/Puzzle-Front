/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { Header } from "../../Components";
import ProfileHeader from "../../Components/Profile/ProfileHeader/ProfileHeader";
import ProfileInfo from "../../Components/Profile/ProfileInfo/ProfileInfo";
import ProfileSelectBox from "../../Components/Profile/ProfileSelectBox/ProfileSelectBox";

const Profilepage = () => {
  return (
    <div css={S.Positioner}>
      <Header />
      <div css={S.ProfileContainer}>
        <ProfileHeader />
        <ProfileInfo />
        <ProfileSelectBox />
      </div>
    </div>
  );
};

export default Profilepage;
