/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "../../../Components";
import { useDecode } from "../../../Hooks/useDecode";
import { postAttend } from "../../../Lib/Api/attend/attend";
import { mutate } from "swr";
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
  const { id } = useParams();
  const [user, setUser] = useState<GithubType>();
  const { sub } = useDecode();

  useEffect(() => {
    GithubInfo(githubId).then((res) => setUser(res.data));
  }, []);

  const requestAttend = async () => {
    await postAttend(id);
    await mutate(`/attend/board/${id}`);
  };

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
          {sub !== githubId ? (
            <Button
              size="Regular"
              fontSize="h5"
              isShadow="No"
              theme="BlackButton"
              fontWeight="400"
              onClick={() => requestAttend()}
            >
              신청하기
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default DetailWriter;
