import React from "react";
import MyPostItem from "./MyPostItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/MyPostItem",
  components: MyPostItem,
} as ComponentMeta<typeof MyPostItem>;

export const mypostitem: ComponentStory<typeof MyPostItem> = () => (
  <MyPostItem />
);
