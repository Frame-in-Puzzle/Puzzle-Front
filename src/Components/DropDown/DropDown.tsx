/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import DropDownList from "../DropDownList/DropDownList";
import * as S from "./Style";
import { useRecoilState } from "recoil";
import { isSelected } from "../../Atoms";

interface DropDownProps {
  //** DropDown의 theme를 정합니다.*/
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
    | "Game";
  /** DropDown의 너비를 설정합니다. */
  width: string | number;
}

const DropDown: React.FC<DropDownProps> = ({ width, theme }) => {
  const [selected, setSelected] = useRecoilState(isSelected);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  console.log(selected);

  return (
    <div css={[{ width }]}>
      <div css={S.DropDownStyle} onClick={toggling}>
        {selected}
      </div>
      {isOpen && <DropDownList width={width} theme={theme} />}
    </div>
  );
};

export default DropDown;
