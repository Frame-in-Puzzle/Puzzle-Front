import ApplyItem from "./ApplyItem";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const applyObj = {
  Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
  name: "ImChangGyu",
  tag: ["프론트엔드", "TS", "React", "Next"],
  date: "2022.1.10",
};

type Attend = {
  attendStatus: string;
  githubId: string;
  id: number;
  imageUrl: string;
  languages: string[];
  name: string;
};

const attendObj = {
  attendStatus: "WAIT",
  githubId: "ImChangGyu",
  id: 0,
  imageUrl: "https://avatars.githubusercontent.com/u/66630940?v=4",
  languages: ["TYPESCRIPT", "REACT", "NEXT"],
  name: "임창규",
};

export default {
  title: "Components/ApplyItem",
  component: ApplyItem,
} as ComponentMeta<typeof ApplyItem>;

export const applyItem: ComponentStory<typeof ApplyItem> = () => (
  <ApplyItem attend={attendObj} writer="ImChangGyu" />
);
