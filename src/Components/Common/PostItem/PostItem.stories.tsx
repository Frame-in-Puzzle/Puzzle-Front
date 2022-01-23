import React from "react";
import PostItem from "./PostItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Common",
  components: PostItem,
} as ComponentMeta<typeof PostItem>;

export const activeitem: ComponentStory<typeof PostItem> = () => <PostItem />;
