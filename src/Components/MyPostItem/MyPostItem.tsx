/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { FiX } from "react-icons/fi";

type MyPostItem = {
  id: number;
  category: string;
  title: string;
  content: string;
  state: string;
};

interface MyPostProps {
  MyPostObj: MyPostItem;
}

const MyPostItem: React.FC<MyPostProps> = ({ MyPostObj }) => {
  return (
    <div css={S.Positioner}>
      <div css={S.Container}>
        <div css={S.Image}></div>
        <div css={S.rightbox}>
          <FiX css={S.Icon} />
          <p css={S.Category}>{MyPostObj.category}</p>
          <span css={S.Title}>{MyPostObj.title}</span>
          <p css={S.content}>{MyPostObj.content}</p>
          <p css={S.State}>{MyPostObj.state}</p>
        </div>
      </div>
    </div>
  );
};

export default MyPostItem;
