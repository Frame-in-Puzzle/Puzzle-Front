/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../../Assets";

type activeItem = {
  id: number;
  title: string;
  image: any;
  state: string;
};

interface ActiveProps {
  activeObj: activeItem;
}

const MainpageItem: React.FC<ActiveProps> = ({ activeObj }) => {
  return (
    <div css={S.Positioner}>
      <div css={S.Container}>
        <span css={S.Title}>PUZZLE</span>
        <span css={S.Image}>
          <I.ActiveItemImg />
        </span>
        <p css={S.State}>모집중</p>
      </div>
    </div>
  );
};

export default MainpageItem;
