/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../../Components";
import { useDecode } from "../../../Hooks/useDecode";
import {
  postAttend,
  getAttendStatus,
  deleteAttend,
} from "../../../Lib/Api/attend/attend";
import useSWR, { mutate } from "swr";
import * as S from "./Style";
import { SigninModal } from "../../../Components";
import { toast } from "react-toastify";
import { apiClient } from "../../../Lib/Api/apiClient";
import { useNavigate } from "react-router-dom";

type DetailWriter = {
  name: string;
  githubId: string;
};

type GithubType = {
  avatar_url: string;
  bio: string;
};
type StatusType = {
  data: "CAN" | "CANT" | "CANT_CANCEL";
};

const GithubInfo = async (githubId: string | undefined) => {
  const user = await axios.get(`https://api.github.com/users/${githubId}`);
  return user;
};

const DetailWriter: React.FC<DetailWriter> = ({ name, githubId }) => {
  const { id } = useParams();
  const [user, setUser] = useState<GithubType>();
  const { sub } = useDecode();
  const [modalState, setModalState] = useState<boolean>(false);
  const { data: attendStatus, error } = useSWR<StatusType>(
    `/attend/status/board/${id}`,
    apiClient.get,
  );
  const navigate = useNavigate();

  useEffect(() => {
    GithubInfo(githubId).then((res) => setUser(res.data));
  }, []);

  const requestAttend = async () => {
    if (sub === "") {
      toast.info("로그인 해야 사용할 수 있어요");
      setModalState(true);
    } else {
      await postAttend(id);
      await mutate(`/attend/board/${id}`);
      await mutate(`/attend/status/board/${id}`);
    }
  };

  const cancelAttend = async () => {
    if (window.confirm("정말 취소하시겠어요?")) {
      await deleteAttend(id);
      await mutate(`/attend/board/${id}`);
      await mutate(`/attend/status/board/${id}`);
    }
  };

  const closeModal = () => {
    setModalState(false);
  };

  if (!attendStatus) return <div />;
  return (
    <>
      {modalState && <SigninModal closeModal={closeModal} />}
      <div css={S.Positioner}>
        <div css={S.RightContainer}>
          <img
            src={user?.avatar_url}
            alt="작성자 이미지"
            css={S.Image}
            onClick={() => {
              navigate(`/profile/${githubId}`);
            }}
          />
          <div css={S.RightWrapper}>
            <Link to={`/profile/${githubId}`} css={S.Name}>
              {name}
            </Link>
            <span css={S.Description}>{user?.bio}</span>
          </div>
        </div>
        <div css={S.Line}></div>
        <div css={S.Button}>
          {sub !== githubId &&
            (attendStatus.data === "CAN" ? (
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
              attendStatus.data === "CANT_CANCEL" && (
                <Button
                  size="Regular"
                  fontSize="h5"
                  isShadow="No"
                  theme="BlackButton"
                  fontWeight="400"
                  onClick={() => cancelAttend()}
                >
                  신청취소
                </Button>
              )
            ))}
        </div>
      </div>
    </>
  );
};

export default DetailWriter;
