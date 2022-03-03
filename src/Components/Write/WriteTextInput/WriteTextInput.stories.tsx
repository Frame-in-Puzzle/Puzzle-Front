import React from "react";
import WriteTextInput from "./WriteTextInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Write/WriteTextInput",
  components: WriteTextInput,
} as ComponentMeta<typeof WriteTextInput>;

export const wrtietextinput: ComponentStory<typeof WriteTextInput> = () => (
  <WriteTextInput />
);
