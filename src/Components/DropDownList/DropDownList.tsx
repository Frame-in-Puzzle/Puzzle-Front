/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./Style";

const themeData = {
  interest: ["프론트엔드", "백엔드", "AI", "안드로이드", "iOS", "게임"],
  Frontend: ["Javascript", "Typescript", "React", "Vue", "Next"],
  Backend: ["Java", "Spring", "Spring boot", "Go", "django", "express", "nest"],
  AI: ["Pytorch", "Tensorflow"],
  Android: ["Kotlin"],
  iOS: ["Swift"],
  Game: ["Unity", "C#", "Unreal Engine"],
  state: ["모집중", "모집완료"],
  purpose: ["프로젝트", "대회", "서비스", "스터디"],
  profile: ["프로필", "내 작성글", "로그아웃"],
  detail: ["게시물 수정", "게시물 삭제"],
};

interface ListProps {
  /** DropDown List의 종류를 설정합니다. */
  theme:
    | "interest"
    | "state"
    | "purpose"
    | "profile"
    | "Frontend"
    | "Backend"
    | "AI"
    | "Android"
    | "iOS"
    | "Game"
    | "detail";
  /** DropDown List의 너비를 설정합니다. */
  width: string | number;
  children: React.ReactNode;
  onClick?: () => void;
}

const DropDownList: React.FC<ListProps> = ({
  theme,
  width,
  children,
  onClick,
}) => {
  return (
    <div css={[S.ListStyle, { width }, S.themes[theme]]} onClick={onClick}>
      {children}
    </div>
  );
};

export default DropDownList;
