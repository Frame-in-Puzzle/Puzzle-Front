/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";

type PostProps = {
  boardId: number;
  image_url: string;
  status: string;
  title: string;
  ref?: any;
};

const PostItem: React.FC<PostProps> = forwardRef(
  (
    { boardId, image_url, status, title },
    ref: React.LegacyRef<HTMLDivElement>,
  ) => {
    const navigate = useNavigate();
    return (
      <div
        css={S.Positioner}
        onClick={() => {
          navigate(`/detail/${boardId}`);
        }}
        ref={ref}
      >
        <div css={S.Container}>
          <span css={S.Title}>{title}</span>
          <img css={S.Image} src={image_url} />
          <p css={S.State}>{status}</p>
        </div>
      </div>
    );
  },
);

export default PostItem;
