/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../../Assets";

const Header: React.FC = () => {
  return (
    <div css={S.Positioner}>
      <I.PuzzleLogo />
      <div css={S.RightContainer}>
        <span>새 글 쓰기</span>
        <div css={S.ProfileWrapper}>
          <img src="https://avatars.githubusercontent.com/u/66630940?v=4" />
          <I.DownArrow />
        </div>
      </div>
    </div>
  );
};

export default Header;
