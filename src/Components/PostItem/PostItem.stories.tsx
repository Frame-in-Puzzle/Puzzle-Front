import React from "react";
import PostItem from "./PostItem";
import * as I from "../../Assets/index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/PostItem",
  components: PostItem,
} as ComponentMeta<typeof PostItem>;

const postObj = {
  boardId: 1,
  title: "PUZZLE",
  imageUrl: "",
  status: "모집중",
};

export const postitem: ComponentStory<typeof PostItem> = () => (
  <PostItem
    boardId={postObj.boardId}
    title={postObj.title}
    imageUrl={postObj.imageUrl}
    status={postObj.status}
  />
);
