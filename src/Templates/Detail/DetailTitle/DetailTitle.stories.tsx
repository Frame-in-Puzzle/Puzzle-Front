import DetailTitle from "./DetailTitle";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const TitleDummy = {
  title: "함께 Puzzle 프로젝트 할 개발자 구해요",
  name: "ImChangGyu",
  date: "2022.1.10",
  tag: ["백엔드", "Spring", "Spring boot", "Go"],
};

export default {
  title: "Templates/Detail/DetailTitle",
  component: DetailTitle,
} as ComponentMeta<typeof DetailTitle>;

export const detailTitle: ComponentStory<typeof DetailTitle> = () => (
  <DetailTitle TitleObj={TitleDummy} />
);
