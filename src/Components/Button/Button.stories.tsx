import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    theme: {
      name: "theme",
      type: {
        name: "enum",
        value: [
          "RedButton",
          "TextButton",
          "BlackButton",
          "CircleButton",
          "OutlinedButton",
          "GrayButtonWithWhiteText",
          "GrayButtonWithBlackText",
          "GrayTextButton",
          "DarkGrayTextButton",
          "LightBlackTextButton",
          "BlackTextButtonWithUnderline",
        ],
      },
      defaultValue: "BlackButtonWithShadow",
    },
    disabled: {
      name: "disabled",
      type: { name: "boolean" },
      defaultValue: false,
    },
    size: {
      name: "size",
      type: {
        name: "enum",
        value: ["Big", "Medium", "Regular", "Small", "Custom"],
      },
      defaultValue: "Regular",
    },
    fontSize: {
      name: "fontSize",
      type: {
        name: "enum",
        value: ["h6", "h5", "h4", "h3", "h2", "h1"],
      },
    },
    isShadow: {
      name: "isShadow",
      type: {
        name: "enum",
        value: ["Yes", "No"],
      },
      defaultValue: "No",
    },
    children: {
      name: "children",
      type: { name: "string", required: false },
      defaultValue: "Button",
    },
    width: {
      name: "width",
      type: { name: "string", required: false },
      defaultValue: "",
    },
    height: {
      name: "height",
      type: { name: "string", required: false },
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof Button>;

export const vbutton: ComponentStory<typeof Button> = ({
  theme,
  disabled,
  fontSize,
  size,
  children,
  width,
  height,
  isShadow,
}) => (
  <Button
    theme={theme}
    size={size}
    fontSize={fontSize}
    disabled={disabled}
    width={width}
    height={height}
    isShadow={isShadow}
  >
    {children}
  </Button>
);
