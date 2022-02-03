import React from "react";
import ToggleButton from "./ToggleButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Common",
  components: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

export const togglebutton: ComponentStory<typeof ToggleButton> = () => (
  <ToggleButton />
);
