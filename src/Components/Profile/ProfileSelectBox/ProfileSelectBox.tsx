/** @jsxImportSource @emotion/react */
import React from "react";
import DropDownList from "../../DropDownList/DropDownList";
import * as S from "./Style";
import { FiX } from "react-icons/fi";

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
      <div css={S.LanguageWrapper}>
        <div css={S.Language}>
          <p>Javascript</p>
          <FiX css={S.Icon} />
        </div>
      </div>
      <hr css={S.Line} />
    </div>
  );
};

export default ProfileSelectBox;
