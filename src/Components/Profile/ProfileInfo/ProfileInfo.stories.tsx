import React from "react";
import ProfileInfo from "./ProfileInfo";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Profile/ProfileInfo",
  components: ProfileInfo,
} as ComponentMeta<typeof ProfileInfo>;

export const profileinfo: ComponentStory<typeof ProfileInfo> = () => (
  <ProfileInfo />
);
