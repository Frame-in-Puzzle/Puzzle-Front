import ApplyItem from "./ApplyItem";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const applyObj = {
  Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
  name: "ImChangGyu",
  tag: ["프론트엔드", "TS", "React", "Next"],
  date: "2022.1.10",
};

export default {
  title: "Components/ApplyItem",
  component: ApplyItem,
} as ComponentMeta<typeof ApplyItem>;

export const applyItem: ComponentStory<typeof ApplyItem> = () => (
  <ApplyItem applyObj={applyObj} />
);
