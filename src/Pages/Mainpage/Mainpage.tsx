/** @jsxImportSource @emotion/react */
import React from "react";
import { Header, Button } from "../../Components";
import Banner from "../../Components/Common/Banner/Banner";
import Post from "../../Components/Post/Post";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import * as I from "../../Assets/index";

const Mainpage = () => {
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
      <Banner />
      <Post />
    </>
  );
};

export default Mainpage;
