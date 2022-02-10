import React from "react";
import WriteSelectItem from "./WriteSelectItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Write/WriteSelectItem",
  components: WriteSelectItem,
} as ComponentMeta<typeof WriteSelectItem>;

export const postitem: ComponentStory<typeof WriteSelectItem> = () => (
  <WriteSelectItem />
);
