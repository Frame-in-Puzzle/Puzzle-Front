/** @jsxImportSource @emotion/react */
import React from "react";
import { SignUpButton, SignUpInput, SignUpHeader } from "../../Components";
import * as S from "./Style";

const SignUpPage = () => {
  return (
    <div css={S.Positioner}>
      <SignUpHeader />
      <SignUpInput />
      <SignUpButton />
    </div>
  );
};

export default SignUpPage;
