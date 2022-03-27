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

  const [modalState, setModalState] = useState(false);

  const closeModal = (e: Event) => {
    e.preventDefault();
    setModalState(false);
  };
  return (
    <>
      <Header theme="Login">
        {isLogin ? (
          <HeaderItem />
        ) : (
          <HeaderNotLoginItem setModalState={setModalState} />
        )}
      </Header>
      {modalState && <Sign closeModal={closeModal} />}

      <div css={S.Positioner}>
        <ProfileCheckHeader />
        <MyPost />
      </div>
    </>
  );
};
export default ProfileCheckPage;
