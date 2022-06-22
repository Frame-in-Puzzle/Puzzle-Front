/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Header, Button, DropDown, DropDownList } from "../../Components";
import Banner from "../../Components/Common/Banner/Banner";
import Post from "../../Components/Post/Post";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";
import { useLogin } from "../../Hooks/useLogin";
import HeaderNotLoginItem from "../../Components/Common/HeaderNotLoginItem/HeaderNotLoginItem";
import Sign from "../../Components/SigInModal/SiginModal";

const Mainpage = () => {
  const isLogin = useLogin();

  const [modalState, setModalState] = useState(false);

  const closeModal = (e: Event) => {
    e.preventDefault();
    setModalState(false);
  };
  return (
    <>
      <Header theme="Login">
        {isLogin ? <HeaderItem /> : <HeaderNotLoginItem />}
      </Header>
      {modalState && <Sign closeModal={closeModal} />}

      <Banner />
      <Post />
    </>
  );
};

export default Mainpage;
