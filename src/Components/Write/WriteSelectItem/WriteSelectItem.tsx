/** @jsxImportSource @emotion/react */
import React from "react";
import DropDownList from "../../DropDownList/DropDownList";
import * as S from "./Style";

const WriteSelectItem = () => {
  return (
    <div css={S.Positioner}>
      <label css={S.Text}>프로젝트 : </label>
      <DropDownList theme="purpose" width="766px" />
    </div>
  );
};

export default WriteSelectItem;
