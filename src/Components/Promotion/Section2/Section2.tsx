/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import * as S from "./Style";
import * as I from "../../../Assets/";
import { useTargetOnScreen } from "../../../Hooks/useTargetOnScreen";

const Section2 = () => {
  const { containerRef, isVisible } = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div css={S.Positioner} ref={containerRef}>
      <div css={S.MainWarpper}>
        <div css={S.ManWarpper[isVisible]}>
          <I.PromotionManImg />
        </div>
        <div css={S.MainSectionWrapper}>
          <div css={S.MainSection}>
            어렵고, 복잡한 <br />
            프로젝트 소개는 <br />
            이제 그만 👋
          </div>
          <div css={S.SubText}>
            프로젝트 진행 상황에 대해 자세하게 알 수 있으며,
            <br />
            기능명세서를 통해서 프로젝트에 대한 이해도를 높일 수 있어요 !
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
