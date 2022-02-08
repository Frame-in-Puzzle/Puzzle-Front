/** @jsxImportSource @emotion/react */
import React from "react";
import MyPostItem from "../MyPostItem/MyPostItem";
import * as S from "./Style";

export const PostItemObj = [
  {
    id: 1,
    category: "WEB",
    title: "PUZZLE",
    content:
      "가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라. . .",
    state: "모집중",
  },
  {
    id: 2,
    category: "ABC",
    title: "VARI",
    content:
      "가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라. . .",
    state: "모집완료",
  },
  {
    id: 3,
    category: "WEB",
    title: "PUZZLE",
    content:
      "가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라. . .",
    state: "모집중",
  },
  {
    id: 4,
    category: "WEB",
    title: "PUZZLE",
    content:
      "가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라. . .",
    state: "모집완료",
  },
  {
    id: 5,
    category: "WEB",
    title: "PUZZLE",
    content:
      "가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라. . .",
    state: "모집중",
  },
];

const Post = () => {
  return (
    <div>
      <div css={S.Title}>
        <h1>내 작성글</h1>
      </div>
      {PostItemObj.map((item) => (
        <MyPostItem MyPostObj={item} key={item.id} />
      ))}
    </div>
  );
};

export default Post;
