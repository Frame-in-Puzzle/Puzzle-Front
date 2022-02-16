/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { ApplyItem } from "../../../Components";

type DetailApply = {
  Image: string;
  name: string;
  tag: string[];
  date: string;
};

interface DetailApplyProps {
  apply: number;
  applyObj: DetailApply[];
}

const DetailApply: React.FC<DetailApplyProps> = ({ apply, applyObj }) => {
  return (
    <div css={S.Positioner}>
      <div css={S.ApplyContainer}>
        <span css={S.Apply}>{apply}개의 신청</span>
        <span css={S.ApplyDescription}>
          수락 또는 거절 후 취소가 불가합니다.
        </span>
      </div>
      <div>
        {applyObj.map((item, key) => (
          <ApplyItem applyObj={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default DetailApply;
