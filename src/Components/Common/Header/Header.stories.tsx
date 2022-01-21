import React from "react";
import Header from "./Header";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Common/Header",
  components: Header,
} as ComponentMeta<typeof Header>;

export const header: ComponentStory<typeof Header> = () => <Header />;
