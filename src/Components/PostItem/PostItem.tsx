/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";

type postItem = {
  id: number;
  title: string;
  image: any;
  state: string;
};

interface PostProps {
  postObj: postItem;
}

const PostItem: React.FC<PostProps> = ({ postObj }) => {
  return (
    <div css={S.Positioner}>
      <div css={S.Container}>
        <span css={S.Title}>{postObj.title}</span>
        <span css={S.Image}>{postObj.image}</span>
        <p css={S.State}>{postObj.state}</p>
      </div>
    </div>
  );
};

export default PostItem;
