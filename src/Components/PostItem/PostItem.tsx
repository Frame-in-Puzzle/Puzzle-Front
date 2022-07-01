/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";
import * as I from "../../Assets/index";

type PostProps = {
  boardId: number;
  imageUrl: string;
  status: string;
  title: string;
  ref?: any;
};

const PostItem: React.FC<PostProps> = forwardRef(
  (
    { boardId, imageUrl, status, title },
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
          {imageUrl ? (
            <img css={S.Image} src={imageUrl} />
          ) : (
            <I.DefaultImage css={S.Image} />
          )}

          <p css={S.State}>{status}</p>
        </div>
      </div>
    );
  },
);

export default PostItem;
