/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Input } from "../../../Components";
import { useDecode } from "../../../Hooks/useDecode";
import { apiClient } from "../../../Lib/Api/apiClient";
import * as S from "./Style";

interface UserInfo {
  data: { bio: string; email: string };
}

interface Props {
  setGithubIdChanged: React.Dispatch<React.SetStateAction<boolean>>;
  setEmailChanged: React.Dispatch<React.SetStateAction<boolean>>;
  setBioChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpInput: React.FC<Props> = ({
  setGithubIdChanged,
  setEmailChanged,
  setBioChanged,
}) => {
  const { sub } = useDecode();
  // const { data, error } = useSWR<UserInfo>(
  //   `https://api.github.com/users/${sub}`,
  //   axios.get,
  // );
  const { data, error } = useSWR<UserInfo>(`/profile/${sub}`, apiClient.get);
  console.log(data);

  const [githubid, setGithubid] = useState(sub);
  const [email, setEmail] = useState(data?.data.email);
  const [bio, setBio] = useState(data?.data.bio);

  useEffect(() => {
    if (githubid) setGithubIdChanged(true);
    if (githubid === "") setGithubIdChanged(false);
    if (email) setEmailChanged(true);
    if (email === "") setEmailChanged(false);
    if (bio) setBioChanged(true);
    if (bio === "") setBioChanged(false);
  }, [githubid, email, bio]);

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
          value={sub}
          onChange={(e: any) => setGithubid(e.target.value)}
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
          value={data?.data.email}
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
          value={data?.data.bio}
          onChange={(e: any) => setBio(e.target.value)}
        ></Input>
      </div>
    </div>
  );
};

export default SignUpInput;
