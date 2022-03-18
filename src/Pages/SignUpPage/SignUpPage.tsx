/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { SignUpButton, SignUpInput, SignUpHeader } from "../../Components";
import * as S from "./Style";

const SignUpPage = () => {
  const [githubIdChanged, setGithubIdChanged] = useState(false);
  const [emailChanged, setEmailChanged] = useState(false);
  const [bioChanged, setBioChanged] = useState(false);

  return (
    <div css={S.Positioner}>
      <SignUpHeader />
      <SignUpInput
        setGithubIdChanged={setGithubIdChanged}
        setEmailChanged={setEmailChanged}
        setBioChanged={setBioChanged}
      />
      <SignUpButton
        githubIdChanged={githubIdChanged}
        emailChanged={emailChanged}
        bioChanged={bioChanged}
      />
    </div>
  );
};

export default SignUpPage;
