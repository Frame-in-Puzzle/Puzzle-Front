/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { Header } from "../../Components";
import Input from "../../Components/Input/Input";
import WriteSelectItem from "../../Components/Write/WriteSelectItem/WriteSelectItem";
import WriteTextInput from "../../Components/Write/WriteTextInput/WriteTextInput";
import Button from "../../Components/Button/Button";
import { ProfileWrapper } from "../../Styles/GlobalStyle";

const WritePage = () => {
  return (
    <>
      <Header theme="Write">
        <div css={ProfileWrapper}>
          <img src="https://avatars.githubusercontent.com/u/66630940?v=4" />
          <I.DownArrow />
        </div>
      </Header>
      <div css={S.Container}>
        <div css={S.Input}>
          <Input
            type="text"
            theme="WritePageInput"
            fontSize="h1"
            placeholder="프로젝트 이름을 입력하세요"
            fontWeight="600"
            width="100%"
          />
        </div>
        <WriteSelectItem />
        <WriteTextInput />
        <div css={S.ButtonContainer}>
          <Button
            theme="GrayButtonWithBlackTextNoHover"
            children="취소"
            size="Regular"
            fontSize="h5"
            fontWeight="400"
            isShadow="No"
          />
          <Button
            theme="BlackButtonWithWithTextNoHover"
            children="글 등록"
            size="Regular"
            fontSize="h5"
            fontWeight="600"
            isShadow="No"
          />
        </div>
      </div>
    </>
  );
};

export default WritePage;
