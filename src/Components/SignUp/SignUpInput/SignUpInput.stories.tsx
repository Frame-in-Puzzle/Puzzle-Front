import SignInput from "./SignUpInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/SignUp",
  components: SignInput,
} as ComponentMeta<typeof SignInput>;

export const signupinput: ComponentStory<typeof SignInput> = () => (
  <SignInput />
);
