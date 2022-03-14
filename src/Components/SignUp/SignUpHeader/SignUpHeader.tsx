/** @jsxImportSource @emotion/react */
import React from "react";
import * as I from "../../../Assets/index";
import * as S from "./Style";

const SignUpHeader = () => {
  return (
    <div css={S.Positioner}>
      <div css={S.TitleWrapper}>
        <I.SignUpHeaderImg />
        <div css={S.Title}>에 오신 것을 환영합니다!</div>
      </div>
      <p css={S.Introduction}>기본 정보 등록을 통해서 본인을 소개해주세요.</p>
    </div>
  );
};

export default SignUpHeader;
