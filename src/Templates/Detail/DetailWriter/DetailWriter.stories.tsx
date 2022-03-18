import DetailWriter from "./DetailWriter";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const writerObj = {
  image: "https://avatars.githubusercontent.com/u/66630940?v=4",
  name: "ImChangGyu",
  description: "Front-End Developer가 되고싶습니다.",
};

export default {
  title: "Templates/Detail/DetailWriter",
  component: DetailWriter,
} as ComponentMeta<typeof DetailWriter>;

export const detailWriter: ComponentStory<typeof DetailWriter> = () => (
  <DetailWriter name="ImChangGyu" githubId="ImChangGyu" />
);
