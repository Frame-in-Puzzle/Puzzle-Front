import DropDownList from "./DropDownList";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/DropDownList",
  component: DropDownList,
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
} as ComponentMeta<typeof DropDownList>;

export const DropDown: ComponentStory<typeof DropDownList> = (arg) => {
  return <DropDownList theme={arg.theme} width={arg.width} />;
};
