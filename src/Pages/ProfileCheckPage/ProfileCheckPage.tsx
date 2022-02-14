/** @jsxImportSource @emotion/react */
import { Header, Button } from "../../Components";
import { ProfileCheckHeader } from "../../Components";
import * as I from "../../Assets";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import { MyPost } from "../../Components";
import * as S from "./Style";

const ProfileCheckPage = () => {
  return (
    <>
      <Header theme="Login">
        <Button
          theme="TextButton"
          fontSize="h5"
          fontWeight="400"
          size="Custom"
          isShadow="No"
        >
          새 글 쓰기
        </Button>
        <div css={ProfileWrapper}>
          <img src="https://avatars.githubusercontent.com/u/66630940?v=4" />
          <I.DownArrow />
        </div>
      </Header>
      <div css={S.Positioner}>
        <ProfileCheckHeader />
        <MyPost />
      </div>
    </>
  );
};
export default ProfileCheckPage;
