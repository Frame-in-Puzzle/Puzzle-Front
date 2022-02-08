/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../../Assets/index";

const WriteInput = () => {
  return (
    <input
      type="text"
      placeholder="프로젝트 이름을 입력하세요"
      autoComplete="off"
      required
      css={S.Input}
    />
  );
};

export default WriteInput;
