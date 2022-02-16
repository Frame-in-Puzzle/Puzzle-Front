import TagItem from "./TagItem";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/tags/tagItem",
  component: TagItem,
  argTypes: {
    theme: {
      name: "theme",
      type: {
        name: "enum",
        value: ["DarkGrayTag", "LightGrayTag"],
      },
    },
    children: {
      name: "children",
      type: {
        name: "string",
      },
      defaultValue: "Tags",
    },
  },
} as ComponentMeta<typeof TagItem>;

export const tagItem: ComponentStory<typeof TagItem> = ({
  theme,
  children,
}) => <TagItem theme={theme}>{children}</TagItem>;
