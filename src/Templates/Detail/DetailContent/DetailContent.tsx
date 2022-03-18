/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";

type ContentType = {
  contents: string;
};

const DetailContent: React.FC<ContentType> = ({ contents }) => {
  return <div css={S.Positioner}>{contents}</div>;
};

export default DetailContent;
