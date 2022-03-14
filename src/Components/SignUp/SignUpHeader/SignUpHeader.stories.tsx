import SignUpHeader from "./SignUpHeader";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/SignUp",
  components: SignUpHeader,
} as ComponentMeta<typeof SignUpHeader>;

export const signupheader: ComponentStory<typeof SignUpHeader> = () => (
  <SignUpHeader />
);
