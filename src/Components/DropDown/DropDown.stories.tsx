import DropDown from "./DropDown";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/DropDown",
  component: DropDown,
  argTypes: {
    theme: [
      "Frontend",
      "Backend",
      "AI",
      "Android",
      "iOS",
      "Game",
      "state",
      "purpose",
      "interest",
      "profile",
    ],
    width: { control: { type: "range", min: 200, max: 1000, step: 1 } },
  },
} as ComponentMeta<typeof DropDown>;

export const dropDown: ComponentStory<typeof DropDown> = ({ width, theme }) => (
  <DropDown width={width} theme={theme} />
);
