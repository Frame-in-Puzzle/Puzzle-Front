/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { useNavigate } from "react-router";

type PostProps = {
  boardId: number;
  image_url: string;
  status: string;
  title: string;
};

const PostItem: React.FC<PostProps> = ({
  boardId,
  image_url,
  status,
  title,
}) => {
  const navigate = useNavigate();
  return (
    <div
      css={S.Positioner}
      onClick={() => {
        navigate(`/detail/${boardId}`);
      }}
    >
      <div css={S.Container}>
        <span css={S.Title}>{title}</span>
        <img css={S.Image} src={image_url} />
        <p css={S.State}>{status}</p>
      </div>
    </div>
  );
};

export default PostItem;
