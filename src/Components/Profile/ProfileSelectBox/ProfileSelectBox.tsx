/** @jsxImportSource @emotion/react */
import React from "react";
import DropDownList from "../../DropDownList/DropDownList";
import * as S from "./Style";

const ProfileSelectBox = () => {
  return (
    <div css={S.Positioner}>
      <div css={S.DropDownWrapper}>
        <label>분야</label>
        <DropDownList theme="interest" width="647px" />
      </div>
      <div css={S.DropDownWrapper}>
        <label>세부언어</label>
        <DropDownList theme="Frontend" width="647px" />
      </div>
    </div>
  );
};

export default ProfileSelectBox;
