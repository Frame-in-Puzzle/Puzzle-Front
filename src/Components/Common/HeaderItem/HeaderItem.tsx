/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Button, DropDownList } from "../..";
import { useDecode } from "../../../Hooks/useDecode";
import { getUser, deleteUsertoken } from "../../../Lib/Api/member/member";
import { ProfileWrapper } from "../../../Styles/GlobalStyle";
import * as I from "../../../Assets/index";
import * as S from "./style";
import { useNavigate } from "react-router";
import useSWR from "swr";
import { apiClient } from "../../../Lib/Api/apiClient";
interface UserInfo {
  data: {
    imageUrl: string;
  };
}

const HeaderItem = () => {
  const { sub } = useDecode();
  const navigate = useNavigate();

  const [dropState, setDropState] = useState(false);

  const deleteuser = () => {
    deleteUsertoken();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  const changeDrop = () => {
    setDropState(!dropState);
  };
  const { data, error } = useSWR<UserInfo>(`/profile/${sub}`, apiClient.get);

  if (!data) return <div />;
  return (
    <>
      <div css={S.ImgWrapper}>
        <div css={S.ButtonWrapper}>
          <Button
            theme="TextButton"
            fontSize="h5"
            fontWeight="400"
            size="Custom"
            isShadow="No"
            onClick={() => navigate("/write")}
          >
            새 글 쓰기
          </Button>
        </div>
        <div css={ProfileWrapper} onClick={() => changeDrop()}>
          <img css={S.DropImg} src={data.data.imageUrl} />

          <I.DownArrow onClick={() => changeDrop()} />
        </div>
      </div>
      <div css={S.Dropdown}>
        {dropState && (
          <DropDownList theme="profile" width="160px">
            <li onClick={() => navigate(`/profile/${sub}`)}>내 퍼즐</li>
            <li onClick={() => navigate("/profilesetting")}>프로필 설정</li>
            <li onClick={() => deleteuser()}>로그아웃</li>
          </DropDownList>
        )}
      </div>
    </>
  );
};

export default HeaderItem;
