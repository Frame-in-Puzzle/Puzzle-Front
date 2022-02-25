import DetailContent from "./DetailContent";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Templates/Detail/DetailContent",
  component: DetailContent,
} as ComponentMeta<typeof DetailContent>;

export const detailContent: ComponentStory<typeof DetailContent> = () => (
  <DetailContent />
);
