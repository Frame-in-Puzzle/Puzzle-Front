import React from "react";
import ProfileHeader from "./ProfileHeader";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/ProfileHeader",
  components: ProfileHeader,
} as ComponentMeta<typeof ProfileHeader>;

export const Profileheader: ComponentStory<typeof ProfileHeader> = () => (
  <ProfileHeader />
);
