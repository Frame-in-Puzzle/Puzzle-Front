import SignUpForm from "./SignUpForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/SignUp",
  components: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

export const signupform: ComponentStory<typeof SignUpForm> = () => (
  <SignUpForm />
);
