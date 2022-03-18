import SignUpButton from "./SignUpButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/SignUp",
  components: SignUpButton,
} as ComponentMeta<typeof SignUpButton>;

const [githubIdChanged, setGithubIdChanged] = useState(false);
const [emailChanged, setEmailChanged] = useState(false);
const [bioChanged, setBioChanged] = useState(false);

export const signupbutton: ComponentStory<typeof SignUpButton> = () => (
  <SignUpButton
    githubIdChanged={githubIdChanged}
    emailChanged={emailChanged}
    bioChanged={bioChanged}
  />
);
