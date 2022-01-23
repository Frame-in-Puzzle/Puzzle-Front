import React from "react";
import ActiveItem from "./ActiveItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Common",
  components: ActiveItem,
} as ComponentMeta<typeof ActiveItem>;

export const activeitem: ComponentStory<typeof ActiveItem> = () => (
  <ActiveItem />
);
