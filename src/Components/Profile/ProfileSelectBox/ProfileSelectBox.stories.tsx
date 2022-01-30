import React from "react";
import ProfileSelectBox from "./ProfileSelectBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Profile/ProfileSelectBox",
  components: ProfileSelectBox,
} as ComponentMeta<typeof ProfileSelectBox>;

export const profileselectbox: ComponentStory<typeof ProfileSelectBox> = () => (
  <ProfileSelectBox />
);
