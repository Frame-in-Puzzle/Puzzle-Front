import React from "react";
import PostItem from "./PostItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/PostItem",
  components: PostItem,
} as ComponentMeta<typeof PostItem>;

export const postitem: ComponentStory<typeof PostItem> = ({ postObj }) => (
  <PostItem postObj={postObj} />
);
