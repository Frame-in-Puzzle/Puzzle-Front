/** @jsxImportSource @emotion/react */
import React from "react";
import { Input } from "../../../Components";
import * as S from "./Style";

const SignUpInput = () => {
  return (
    <div css={S.Positioner}>
      <div css={S.TitleWrapper}>
        <div css={S.Title}>이름</div>
        <Input
          theme="ProfileRegistrationPageInput"
          type="text"
          placeholder="이름을 입력해주세요."
          fontSize="h4"
          fontWeight="500"
          width="430px"
        ></Input>
      </div>
      <div css={S.TitleWrapper}>
        <div css={S.Title}>E-mail</div>
        <Input
          theme="ProfileRegistrationPageInput"
          type="text"
          placeholder="게시글 및 프로필에 보여지는 URL 입니다."
          fontSize="h4"
          fontWeight="500"
          width="1300px"
        ></Input>
      </div>
      <div css={S.TitleWrapper}>
        <div css={S.Title}>한 줄 소개</div>
        <Input
          theme="ProfileRegistrationPageInput"
          type="text"
          placeholder="프로필에서 보여지는 한 줄 소개 입니다."
          fontSize="h4"
          fontWeight="500"
          width="1300px"
        ></Input>
      </div>
    </div>
  );
};

export default SignUpInput;
