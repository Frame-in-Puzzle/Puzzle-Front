/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { SignUpForm, SignUpHeader } from "../../Components";
import * as S from "./Style";

const SignUpPage = () => {
  return (
    <div css={S.Positioner}>
      <SignUpHeader />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
