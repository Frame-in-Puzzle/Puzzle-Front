/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Button, Input } from "../..";
import { useDecode } from "../../../Hooks/useDecode";
import { apiClient } from "../../../Lib/Api/apiClient";
import { getUser, putUserInformation } from "../../../Lib/Api/member/member";
import * as S from "./Style";

interface UserInfo {
  data: { name: string; bio: string; email: string };
}

const SignUpForm: React.FC = () => {
  const { sub } = useDecode();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();

  useEffect(() => {
    getUser(sub).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setBio(res.data.bio);
      console.log(res.data.name);
    });
  }, []);

  const onSubmit = () => {
    if (name === "") {
      alert("이름을 입력해주세요..");
      return;
    }
    if (email === null || email === "") {
      alert("Email을 입력해주세요..");
      return;
    }
    if (bio === "" || bio === null) {
      alert("한 줄 소개 을 입력해주세요..");
      return;
    }
    // putUserInformation(name, email, bio, field, language, url);
  };

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
          value={name}
          onChange={(e: any) => setName(e.target.value)}
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
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
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
          value={bio}
          onChange={(e: any) => setBio(e.target.value)}
        ></Input>
      </div>

      <div css={S.ButtonWrapper}>
        <Button
          theme="BlackButtonWith5radius"
          fontSize="h4"
          size="Medium"
          isShadow="No"
          fontWeight="600"
          onClick={onSubmit}
        >
          등록
        </Button>
        <Button
          theme="GrayButtonWithWhiteTextGrayHover"
          fontSize="h4"
          size="Medium"
          isShadow="No"
          fontWeight="600"
        >
          취소
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
