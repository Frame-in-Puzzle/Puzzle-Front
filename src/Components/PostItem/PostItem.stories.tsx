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
  image_url: "",
  status: "모집중",
};

export const postitem: ComponentStory<typeof PostItem> = () => (
  <PostItem
    boardId={postObj.boardId}
    title={postObj.title}
    image_url={postObj.image_url}
    status={postObj.status}
  />
);
