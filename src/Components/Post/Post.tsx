/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import PostItem from "../PostItem/PostItem";

export const PostItemObj = [
  {
    id: 1,
    title: "PUZZLE",
    image: <I.PostItemImg />,
    state: "모집중",
  },
  {
    id: 2,
    title: "PUZZLE",
    image: <I.PostItemImg />,
    state: "모집중",
  },
  {
    id: 3,
    title: "PUZZLE",
    image: <I.PostItemImg />,
    state: "모집중",
  },
  {
    id: 4,
    title: "PUZZLE",
    image: <I.PostItemImg />,
    state: "모집중",
  },
  {
    id: 5,
    title: "PUZZLE",
    image: <I.PostItemImg />,
    state: "모집중",
  },
  {
    id: 6,
    title: "PUZZLE",
    image: <I.PostItemImg />,
    state: "모집중",
  },
  {
    id: 7,
    title: "PUZZLE",
    image: <I.PostItemImg />,
    state: "모집중",
  },
  {
    id: 8,
    title: "PUZZLE",
    image: <I.PostItemImg />,
    state: "모집중",
  },
];

const Post = () => {
  return (
    <div css={S.Positioner}>
      {PostItemObj.map((item, idx) => (
        <PostItem postObj={item} key={idx} />
      ))}
    </div>
  );
};

export default Post;
