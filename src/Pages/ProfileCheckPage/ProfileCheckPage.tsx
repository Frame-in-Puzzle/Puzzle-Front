/** @jsxImportSource @emotion/react */
import { Header, Button } from "../../Components";
import { ProfileCheckHeader } from "../../Components";
import * as I from "../../Assets";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import { MyPost } from "../../Components";
import * as S from "./Style";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";

const ProfileCheckPage = () => {
  return (
    <>
      <Header theme="Login">
        <HeaderItem />
      </Header>
      <div css={S.Positioner}>
        <ProfileCheckHeader />
        <MyPost />
      </div>
    </>
  );
};
export default ProfileCheckPage;
