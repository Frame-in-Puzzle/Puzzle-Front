/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { Button } from "../..";
import * as I from "../../../Assets";
import { useTargetOnScreen } from "../../../Hooks/useTargetOnScreen";
import { useNavigate } from "react-router";

const Section1 = () => {
  const { containerRef, isVisible } = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  const navigate = useNavigate();

  return (
    <div css={S.Positioner} ref={containerRef}>
      <div css={S.MainWarpper}>
        <div css={S.MainSectionWrapper}>
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
              onClick={() => navigate("/write")}
            >
              새 글 쓰기
            </Button>
            <Button
              theme="WhiteButtonWithBlackText"
              fontSize="h5"
              size="Medium"
              isShadow="No"
              fontWeight="600"
              onClick={() => navigate("/main")}
            >
              프로젝트 탐색
            </Button>
          </div>
        </div>
        <I.PromotionImg1 />
        <div css={S.RoketWarpper[isVisible]}>
          <I.RoketImg />
        </div>
      </div>
    </div>
  );
};

export default Section1;
