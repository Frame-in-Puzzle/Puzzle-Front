import TagSelector from "./TagSelector";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Templates/Tag/TagSelector",
  component: TagSelector,
} as ComponentMeta<typeof TagSelector>;

export const tagSelector: ComponentStory<typeof TagSelector> = () => (
  <TagSelector onSubmit={function (): void {}} />
);
