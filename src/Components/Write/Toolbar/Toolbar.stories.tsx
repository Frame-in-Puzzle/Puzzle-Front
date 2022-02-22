import React from "react";
import Toolbar from "./Toolbar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Write/Toolbar",
  components: Toolbar,
} as ComponentMeta<typeof Toolbar>;

export const toolbar: ComponentStory<typeof Toolbar> = () => <Toolbar />;
