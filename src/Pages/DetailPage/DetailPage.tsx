/** @jsxImportSource @emotion/react */
import React from "react";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import * as I from "../../Assets/index";
import { Header, Button } from "../../Components";
import {
  DetailTitle,
  DetailContent,
  DetailWriter,
  DetailApply,
} from "../../Templates";

const DetailPage = () => {
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
      <DetailTitle
        TitleObj={{
          title: "함께 PUZZLE 프로젝트 할 개발자 구해요",
          name: "Yuseonii",
          date: "2022.1.10",
          tag: ["백엔드", "Spring", "Spring boot", "Go"],
        }}
      />
      <DetailContent />
      <DetailWriter
        writerObj={{
          image: "https://avatars.githubusercontent.com/u/66630940?v=4",
          name: "ImChangGyu",
          description: "Front-End Developer가 되고싶습니다.",
        }}
      />
      <DetailApply
        apply={3}
        applyObj={[
          {
            Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
            name: "ImChangGyu",
            tag: ["프론트엔드", "TS", "React", "Next"],
            date: "2022.1.10",
          },
          {
            Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
            name: "ImChangGyu",
            tag: ["프론트엔드", "TS", "React", "Next"],
            date: "2022.1.10",
          },
          {
            Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
            name: "ImChangGyu",
            tag: ["프론트엔드", "TS", "React", "Next"],
            date: "2022.1.10",
          },
        ]}
      />
    </>
  );
};

export default DetailPage;
