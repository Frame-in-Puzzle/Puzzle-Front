import React from "react";
import Post from "./Post";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/PostItem",
  components: Post,
} as ComponentMeta<typeof Post>;

export const post: ComponentStory<typeof Post> = () => <Post />;
