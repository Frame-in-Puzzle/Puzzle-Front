/** @jsxImportSource @emotion/react */
import { Header } from "../../Components";
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import MyPost from "../../Components/MyPost/MyPost";
import * as S from "./Style";

const ProfileCheckPage = () => {
  return (
    <>
      <Header theme="Login" />
      <div css={S.Positioner}>
        <ProfileHeader />
        <MyPost />
      </div>
    </>
  );
};
export default ProfileCheckPage;
