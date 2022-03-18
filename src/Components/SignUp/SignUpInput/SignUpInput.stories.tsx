import SignInput from "./SignUpInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/SignUp",
  components: SignInput,
} as ComponentMeta<typeof SignInput>;

const [githubIdChanged, setGithubIdChanged] = useState(false);
const [emailChanged, setEmailChanged] = useState(false);
const [bioChanged, setBioChanged] = useState(false);

export const signupinput: ComponentStory<typeof SignInput> = () => (
  <SignInput
    setGithubIdChanged={setGithubIdChanged}
    setEmailChanged={setEmailChanged}
    setBioChanged={setBioChanged}
  />
);
