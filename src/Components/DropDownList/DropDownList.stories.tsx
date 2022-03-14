import DropDownList from "./DropDownList";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/DropDown/DropDownList",
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
      "detail",
    ],
    width: { control: { type: "range", min: 200, max: 1000, step: 1 } },
  },
} as ComponentMeta<typeof DropDownList>;

export const DropDown: ComponentStory<typeof DropDownList> = (arg) => {
  return (
    <DropDownList theme={arg.theme} width={arg.width}>
      <li>안녕하세요</li>
    </DropDownList>
  );
};
