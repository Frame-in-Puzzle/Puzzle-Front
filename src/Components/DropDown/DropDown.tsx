/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import DropDownList from "../DropDownList/DropDownList";
import * as S from "./Style";
import { useRecoilState } from "recoil";
import { isSelected } from "../../Atoms";
import { DownArrow } from "../../Assets";
import { selected } from "../../Type/types";
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
  children: React.ReactNode;
  selected: selected;
  onClick?: () => void;
}

const DropDown: React.FC<DropDownProps> = ({
  width,
  theme,
  children,
  selected,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div css={[{ width }]} onClick={onClick}>
      <div css={S.DropDownStyle} onClick={toggling}>
        {selected.name}
        <DownArrow />
      </div>
      {isOpen && (
        <DropDownList width={width} theme={theme} onClick={toggling}>
          {children}
        </DropDownList>
      )}
    </div>
  );
};

export default DropDown;
