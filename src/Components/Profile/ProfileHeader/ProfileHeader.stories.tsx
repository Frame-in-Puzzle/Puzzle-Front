import React from "react";
import ProfileHeader from "./ProfileHeader";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Profile/ProfileHeader",
  components: ProfileHeader,
} as ComponentMeta<typeof ProfileHeader>;

export const profileHeader: ComponentStory<typeof ProfileHeader> = () => (
  <ProfileHeader />
);
