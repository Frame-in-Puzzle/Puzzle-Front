import React from "react";
import WriteInput from "./WriteInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Write/WriteInput",
  components: WriteInput,
} as ComponentMeta<typeof WriteInput>;

export const postitem: ComponentStory<typeof WriteInput> = () => <WriteInput />;
