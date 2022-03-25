/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Header, Button, DropDown, DropDownList } from "../../Components";
import Banner from "../../Components/Common/Banner/Banner";
import Post from "../../Components/Post/Post";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";

const Mainpage = () => {
  return (
    <>
      <Header theme="Login">
        <HeaderItem />
      </Header>
      <Banner />
      <Post />
    </>
  );
};

export default Mainpage;
