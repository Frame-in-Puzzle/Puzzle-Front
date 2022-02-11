/** @jsxImportSource @emotion/react */
import React from "react";
import { Header } from "../../Components";
import Banner from "../../Components/Common/Banner/Banner";
import Post from "../../Components/Post/Post";

const Mainpage = () => {
  return (
    <>
      <Header theme="Login" />
      <Banner />
      <Post />
    </>
  );
};

export default Mainpage;
