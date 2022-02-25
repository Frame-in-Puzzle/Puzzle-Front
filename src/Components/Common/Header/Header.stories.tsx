import React from "react";
import Header from "./Header";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Common/Header",
  components: Header,
  argTypes: {
    theme: {
      name: "theme",
      type: { name: "enum", value: ["Login", "NoneLogin", "Write"] },
      defaultValue: "Login",
    },
  },
} as ComponentMeta<typeof Header>;

export const header: ComponentStory<typeof Header> = ({ children, theme }) => (
  <Header theme={theme}>{children}</Header>
);
