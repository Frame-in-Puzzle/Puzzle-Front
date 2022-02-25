import React from "react";
import MyPost from "./MyPost";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/MyPostItem",
  components: MyPost,
} as ComponentMeta<typeof MyPost>;

export const mypost: ComponentStory<typeof MyPost> = () => <MyPost />;
