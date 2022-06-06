import React from "react";
import WriteTextForm from "./WriteTextForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Write/WriteTextForm",
  components: WriteTextForm,
} as ComponentMeta<typeof WriteTextForm>;

export const writetextform: ComponentStory<typeof WriteTextForm> = () => (
  <WriteTextForm />
);
