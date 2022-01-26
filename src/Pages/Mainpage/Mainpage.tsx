/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { Header } from "../../Components";
import Banner from "../../Components/Common/Banner/Banner";
import Post from "../../Components/Post/Post";

const Mainpage = () => {
  return (
    <div css={S.Positioner}>
      <Header />
      <Banner />
      <Post />
    </div>
  );
};

export default Mainpage;
