/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Button, DropDown, DropDownList } from "../..";
import { useDecode } from "../../../Hooks/useDecode";
import { getUser } from "../../../Lib/Api/member/member";
import { ProfileWrapper } from "../../../Styles/GlobalStyle";
import * as I from "../../../Assets/index";
import * as S from "./style";
import { useNavigate } from "react-router";
import { useLogin } from "../../../Hooks/useLogin";

const HeaderItem = () => {
  const { sub } = useDecode();
  const navigate = useNavigate();
  const isLogin = useLogin();

  const [imageUrl, setImageUrl] = useState<string>("");

  const [dropState, setDropState] = useState(false);

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
      <div css={ProfileWrapper} onClick={() => changeDrop()}>
        <img src={imageUrl} />
        <div css={S.ImgWrapper}>
          <I.DownArrow onClick={() => changeDrop()} />
        </div>
      </div>
      <div css={S.Dropdown}>
        {dropState && (
          <DropDownList theme="profile" width="160px">
            <li onClick={() => navigate("/profile")}>프로필</li>
            <li onClick={() => navigate(`/profile/${sub}`)}>내 작성글</li>
            <li>로그아웃</li>
          </DropDownList>
        )}
      </div>
    </>
  );
};

export default HeaderItem;
