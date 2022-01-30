/** @jsxImportSource @emotion/react */
import React from "react";
import ToggleButton from "../../Common/ToggleButton/ToggleButton";
import * as S from "./Style";

const InfoObj = [
  {
    id: 1,
    SpanText: "URL",
    Link: "https://github.com/JeongTaehwan",
  },
  {
    id: 2,
    SpanText: "이메일 주소",
    Link: "wjdxoghks11222@naver.com",
  },
];

const ProfileInfo = () => {
  return (
    <div css={S.Positioner}>
      <div css={S.Container}>
        {InfoObj.map((info) => (
          <>
            <div css={S.ContentsWrapper}>
              <p css={S.SpanText}>{info.SpanText}</p>
              <p css={S.Link}>{info.Link}</p>
              <p css={S.ModifyText}>수정</p>
            </div>
            <hr css={S.Line} />
          </>
        ))}
        <div css={S.ContentsWrapper}>
          <p css={S.SpanText}>이메일 수신 설정</p>
          <div css={S.ToggleButtonWrapper}>
            <div css={S.ToggleButton}>
              <span className="topSpan">신청알림</span>
              <ToggleButton />
            </div>
            <div css={S.ToggleButton}>
              <span>내 분야 업데이트 소식</span>
              <ToggleButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
