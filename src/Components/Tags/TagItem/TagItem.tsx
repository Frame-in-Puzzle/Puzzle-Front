/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";

type TagProps = {
  children: React.ReactNode;
  theme: "DarkGrayTag" | "LightGrayTag";
};

const TagItem: React.FC<TagProps> = ({ children, theme }) => {
  return <div css={[S.Tag, S.themes[theme]]}>{children}</div>;
};

export default TagItem;
