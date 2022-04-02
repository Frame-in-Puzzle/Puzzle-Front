/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { ApplyItem } from "../../../Components";
import useSWR from "swr";
import { apiClient } from "../../../Lib/Api/apiClient";

interface attendProps {
  data: [
    {
      attendStatus: string;
      githubId: string;
      id: number;
      imageUrl: string;
      languages: string[];
      name: string;
    },
  ];
}

interface DetailApplyProps {
  board_idx: number;
  writer: string;
}

const DetailApply: React.FC<DetailApplyProps> = ({ board_idx, writer }) => {
  const { data: attend, error: attendError } = useSWR<attendProps>(
    `/attend/board/${board_idx}`,
    apiClient.get,
  );

  if (!attend) return <div />;
  if (attendError) return <div />;
  return (
    <div css={S.Positioner}>
      <div css={S.ApplyContainer}>
        <span css={S.Apply}>{attend.data.length}개의 신청</span>
        <span css={S.ApplyDescription}>
          수락 또는 거절 후 취소가 불가합니다.
        </span>
      </div>
      <div>
        {attend.data.map((attend, idx) => (
          <ApplyItem attend={attend} writer={writer} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default DetailApply;
