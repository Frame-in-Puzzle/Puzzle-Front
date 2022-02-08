import React from "react";
import PostItem from "./PostItem";
import * as I from "../../Assets/index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/PostItem",
  components: PostItem,
} as ComponentMeta<typeof PostItem>;

const postObj = {
  id: 1,
  title: "PUZZLE",
  image: <I.PostItemImg />,
  state: "모집중",
};

export const postitem: ComponentStory<typeof PostItem> = () => (
  <PostItem postObj={postObj} />
);
