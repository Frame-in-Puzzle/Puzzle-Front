/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "../../../Components";
import * as S from "./Style";

type DetailWriter = {
  name: string;
  githubId: string;
};

type GithubType = {
  avatar_url: string;
  bio: string;
};

const GithubInfo = async (githubId: string | undefined) => {
  const user = await axios.get(`https://api.github.com/users/${githubId}`);
  return user;
};

const DetailWriter: React.FC<DetailWriter> = ({ name, githubId }) => {
  const [user, setUser] = useState<GithubType>();
  useEffect(() => {
    GithubInfo(githubId).then((res) => setUser(res.data));
  }, []);

  return (
    <>
      <div css={S.Positioner}>
        <div css={S.RightContainer}>
          <img src={user?.avatar_url} alt="작성자 이미지" css={S.Image} />
          <div css={S.RightWrapper}>
            <span css={S.Name}>{name}</span>
            <span css={S.Description}>{user?.bio}</span>
          </div>
        </div>
        <div css={S.Line}></div>
        <div css={S.Button}>
          <Button
            size="Regular"
            fontSize="h5"
            isShadow="No"
            theme="BlackButton"
            fontWeight="400"
          >
            신청하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default DetailWriter;
