/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./Style";
import { useSetRecoilState } from "recoil";
import { isSelected } from "../../Atoms";

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
}

const DropDownList: React.FC<ListProps> = ({ theme, width }) => {
  const setSelected = useSetRecoilState(isSelected);

  const mappingDropDownList = () => {
    switch (theme) {
      case "Frontend":
        return themeData.Frontend.map((data, idx) => (
          <li onClick={() => setSelected(data)} key={idx}>
            {data}
          </li>
        ));
      case "Backend":
        return themeData.Backend.map((data, idx) => (
          <li onClick={() => setSelected(data)} key={idx}>
            {data}
          </li>
        ));
      case "AI":
        return themeData.AI.map((data, idx) => (
          <li onClick={() => setSelected(data)} key={idx}>
            {data}
          </li>
        ));
      case "Android":
        return themeData.Android.map((data, idx) => (
          <li onClick={() => setSelected(data)} key={idx}>
            {data}
          </li>
        ));
      case "iOS":
        return themeData.iOS.map((data, idx) => <li key={idx}>{data}</li>);
      case "Game":
        return themeData.Game.map((data, idx) => (
          <li onClick={() => setSelected(data)} key={idx}>
            {data}
          </li>
        ));
      case "interest":
        return themeData.interest.map((data, idx) => (
          <li onClick={() => setSelected(data)} key={idx}>
            {data}
          </li>
        ));
      case "state":
        return themeData.state.map((data, idx) => (
          <li onClick={() => setSelected(data)} key={idx}>
            {data}
          </li>
        ));
      case "purpose":
        return themeData.purpose.map((data, idx) => (
          <li onClick={() => setSelected(data)} key={idx}>
            {data}
          </li>
        ));
      case "profile":
        return themeData.profile.map((data, idx) => (
          <li onClick={() => setSelected(data)} key={idx}>
            {data}
          </li>
        ));
      case "detail":
        return themeData.detail.map((data, idx) => (
          <li onClick={() => setSelected(data)} key={idx}>
            {data}
          </li>
        ));
      default:
        return <li>선택</li>;
    }
  };

  return (
    <div css={[S.ListStyle, { width }, S.themes[theme]]}>
      {mappingDropDownList()}
    </div>
  );
};

export default DropDownList;
