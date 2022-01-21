/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../../Assets";

const Banner = () => {
  return (
    <div css={S.Positioner}>
      <div css={S.TextContainer}>
        <span css={S.BoldText}>
          프로젝트를 게시하고 ,<br /> 나와 맞는 프로젝트를 찾는 가장 쉬운 방법
        </span>
        <div css={S.BottomTextWrapper}>
          <I.PuzzleLogo />
          <p css={S.Text}>과 함께 시작하세요.</p>
        </div>
      </div>
      <I.BannerImg />
    </div>
  );
};

export default Banner;
