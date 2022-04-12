/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../../Assets/";

const Section2 = () => {
  return (
    <div css={S.Positioner}>
      <div css={S.MainWarpper}>
        <div css={S.ManWarpper}>
          <I.PromotionManImg />
        </div>
        <div css={S.MainSectionWrapper}>
          <div css={S.MainSection}>
            어렵고, 복잡한 <br />
            프로젝트 소개는 <br />
            이제 그만 👋
          </div>
          <div>
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
