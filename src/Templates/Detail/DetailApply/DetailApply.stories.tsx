import DetailApply from "./DetailApply";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Templates/Detail/DetailApply",
  component: DetailApply,
} as ComponentMeta<typeof DetailApply>;

const Testobj = {
  apply: 3,
  applyObj: [
    {
      Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
      name: "ImChangGyu",
      tag: ["프론트엔드", "TS", "React", "Next"],
      date: "2022.1.10",
    },
    {
      Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
      name: "ImChangGyu",
      tag: ["프론트엔드", "TS", "React", "Next"],
      date: "2022.1.10",
    },
    {
      Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
      name: "ImChangGyu",
      tag: ["프론트엔드", "TS", "React", "Next"],
      date: "2022.1.10",
    },
  ],
};

export const detailApply: ComponentStory<typeof DetailApply> = () => (
  <DetailApply apply={Testobj.apply} applyObj={Testobj.applyObj} />
);
