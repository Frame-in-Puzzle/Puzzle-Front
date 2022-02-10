import React from "react";
import Input from "./Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Input",
  components: Input,
  argTypes: {
    type: {
      name: "type",
      type: {
        name: "enum",
        value: [
          "text",
          "password",
          "date",
          "month",
          "checkbox",
          "email",
          "file",
          "hidden",
        ],
      },
    },
    theme: {
      name: "theme",
      type: {
        name: "enum",
        value: [
          "ProfileRegistrationPageInput",
          "WritePageInput",
          "ProfileModifyPageInput",
        ],
      },
      defaultValue: "BlackButtonWithShadow",
    },
    fontSize: {
      name: "fontSize",
      type: {
        name: "enum",
        value: ["h6", "h5", "h4", "h3", "h2", "h1"],
      },
    },
    fontWeight: {
      name: "fontWeight",
      type: {
        name: "enum",
        value: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      },
    },
    placeholder: {
      name: "placeholder",
      type: { name: "string", required: false },
      defaultValue: "",
    },
    width: {
      name: "width",
      type: { name: "string", required: false },
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof Input>;

export const input: ComponentStory<typeof Input> = (props) => (
  <Input
    type={props.type}
    placeholder={props.placeholder}
    theme={props.theme}
    fontSize={props.fontSize}
    fontWeight={props.fontWeight}
    width={props.width}
  />
);
