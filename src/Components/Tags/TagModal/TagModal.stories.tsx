import TagModal from "./TagModal";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/tags/TagModal",
  component: TagModal,
} as ComponentMeta<typeof TagModal>;

export const tagModal: ComponentStory<typeof TagModal> = () => <TagModal />;
