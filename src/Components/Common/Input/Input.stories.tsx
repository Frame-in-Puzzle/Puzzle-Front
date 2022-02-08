import React from "react";
import Input from "./Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Common/Input",
  components: Input,
} as ComponentMeta<typeof Input>;

export const input: ComponentStory<typeof Input> = () => <Input />;
