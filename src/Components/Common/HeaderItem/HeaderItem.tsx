/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Button, DropDownList } from "../..";
import { useDecode } from "../../../Hooks/useDecode";
import { getUser, deleteUsertoken } from "../../../Lib/Api/member/member";
import { ProfileWrapper } from "../../../Styles/GlobalStyle";
import * as I from "../../../Assets/index";
import * as S from "./style";
import { useNavigate } from "react-router";

const HeaderItem = () => {
  const { sub } = useDecode();
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState<string>("");

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

  useEffect(() => {
    getUser(sub).then((res) => {
      setImageUrl(res.data.imageUrl);
    });
  }, []);
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
          <img css={S.DropImg} src={imageUrl} />

          <I.DownArrow onClick={() => changeDrop()} />
        </div>
      </div>
      <div css={S.Dropdown}>
        {dropState && (
          <DropDownList theme="profile" width="160px">
            <li onClick={() => navigate("/profile")}>프로필</li>
            <li onClick={() => navigate(`/profile/${sub}`)}>내 작성글</li>
            <li onClick={() => deleteuser()}>로그아웃</li>
          </DropDownList>
        )}
      </div>
    </>
  );
};

export default HeaderItem;
