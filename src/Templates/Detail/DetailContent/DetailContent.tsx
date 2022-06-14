/** @jsxImportSource @emotion/react */
import React from "react";
import { Remark } from "react-remark";
import * as S from "./Style";

type ContentType = {
  contents: string;
};

const DetailContent: React.FC<ContentType> = ({ contents }) => {
  return (
    <div css={S.Positioner}>
      <Remark>{contents}</Remark>
    </div>
  );
};

export default DetailContent;
