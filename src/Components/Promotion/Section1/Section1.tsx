/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { Button } from "../..";
import * as I from "../../../Assets";

const Section1 = () => {
  return (
    <div css={S.Positioner}>
      <div>
        <div css={S.MainSection}>
          프로젝트를 게시하고 ,<br />
          나와 맞는 프로젝트를 찾는 가장 간단한 방법 <br />
          PUZZLE 과 함께 시작하세요.
        </div>
        <div css={S.ButtonWrapper}>
          <Button
            theme="WhiteButtonWithBlackText"
            fontSize="h5"
            size="Medium"
            isShadow="No"
            fontWeight="600"
          >
            새 글 쓰기
          </Button>
          <Button
            theme="WhiteButtonWithBlackText"
            fontSize="h5"
            size="Medium"
            isShadow="No"
            fontWeight="600"
          >
            프로젝트 탐색
          </Button>
        </div>
      </div>
      <div css={S.ImgWarpper}>
        <I.PromotionImg1 />
      </div>
      <div css={S.RoketWarpper}>
        <I.RoketImg />
      </div>
    </div>
  );
};

export default Section1;
