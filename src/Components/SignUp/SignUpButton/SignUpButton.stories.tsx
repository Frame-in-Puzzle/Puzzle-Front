import SignUpButton from "./SignUpButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/SignUp",
  components: SignUpButton,
} as ComponentMeta<typeof SignUpButton>;

export const signupbutton: ComponentStory<typeof SignUpButton> = () => (
  <SignUpButton />
);
