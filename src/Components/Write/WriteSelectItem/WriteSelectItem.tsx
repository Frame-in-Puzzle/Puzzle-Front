/** @jsxImportSource @emotion/react */
import React from "react";
import TagSelector from "../../../Templates/Tag/TagSelector";
import DropDownList from "../../DropDownList/DropDownList";
import * as S from "./Style";

const WriteSelectItem = () => {
  return (
    <div css={S.Positioner}>
      <label css={S.Text}>
        <p>프로젝트 :</p>
      </label>
      <TagSelector />
    </div>
  );
};

export default WriteSelectItem;
