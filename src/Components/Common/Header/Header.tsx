/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../../Assets";
import { Button } from "../..";

interface HeaderProps {
  theme: "Login" | "NoneLogin" | "Write";
}

const returnHeader = (theme: string) => {
  if (theme === "Login") {
    return (
      <>
        <Button
          theme="TextButton"
          fontSize="h5"
          fontWeight="400"
          size="Custom"
          isShadow="No"
        >
          새 글 쓰기
        </Button>
        <div css={S.ProfileWrapper}>
          <img src="https://avatars.githubusercontent.com/u/66630940?v=4" />
          <I.DownArrow />
        </div>
      </>
    );
  } else if (theme === "NoneLogin") {
    return (
      <Button
        theme="OutlinedButton"
        fontSize="h5"
        size="Medium"
        isShadow="No"
        fontWeight="400"
      >
        로그인
      </Button>
    );
  } else if (theme === "Write") {
    return (
      <>
        <div css={S.ProfileWrapper}>
          <img src="https://avatars.githubusercontent.com/u/66630940?v=4" />
          <I.DownArrow />
        </div>
      </>
    );
  }
};

const Header: React.FC<HeaderProps> = ({ theme }) => {
  return (
    <div css={S.Positioner}>
      <I.PuzzleLogo />
      <div css={[S.RightContainer[theme]]}>{returnHeader(theme)}</div>
    </div>
  );
};

export default Header;
