/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../../Components";
import { useDecode } from "../../../Hooks/useDecode";
import { postAttend, getAttendStatus } from "../../../Lib/Api/attend/attend";
import { mutate } from "swr";
import * as S from "./Style";
import { SigninModal } from "../../../Components";
import { toast } from "react-toastify";
import { useLogin } from "../../..//Hooks/useLogin";

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
  const isLogin = useLogin();
  const [modalState, setModalState] = useState<boolean>(false);
  const [attendStatus, setAttendStatus] = useState<string>("CAN");

  useEffect(() => {
    GithubInfo(githubId).then((res) => setUser(res.data));
    getAttendStatus(id).then((res) => setAttendStatus(res?.data));
  }, []);

  const requestAttend = async () => {
    if (sub === "") {
      toast.info("로그인 해야 사용할 수 있어요");
      setModalState(true);
    } else {
      await postAttend(id);
      await mutate(`/attend/board/${id}`);
    }
  };

  const deleteAttend = async () => {};

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <>
      {modalState && <SigninModal closeModal={closeModal} />}
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
          {sub !== githubId &&
            (attendStatus === "CAN" ? (
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
            ))}
        </div>
      </div>
    </>
  );
};

export default DetailWriter;
