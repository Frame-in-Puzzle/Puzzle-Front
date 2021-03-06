/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";

const ToggleButton = () => {
  return (
    <div>
      <div css={S.CheckBoxWrapper}>
        <input css={S.CheckBox} id="checkbox" type="checkbox" />
        <label css={S.CheckBoxLabel} htmlFor="checkbox" />
      </div>
    </div>
  );
};

export default ToggleButton;
