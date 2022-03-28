/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import PostItem from "../PostItem/PostItem";
import { apiClient } from "../../Lib/Api/apiClient";
import useSWR from "swr";

type post = {
  boardId: number;
  image_url: string;
  status: string;
  title: string;
};

interface PostProps {
  data: { content: post[] };
}

const Post = () => {
  const { data, error } = useSWR<PostProps>("/board/all", apiClient.get);
  console.log(data?.data.content);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div css={S.Positioner}>
      {data.data.content.map(({ boardId, image_url, status, title }, idx) => (
        <PostItem
          boardId={boardId}
          image_url={image_url}
          status={status}
          title={title}
          key={idx}
        />
      ))}
    </div>
  );
};

export default Post;
