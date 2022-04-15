import React from "react";
import Post from "./Post";
import { ComponentStory, ComponentMeta } from "@storybook/react";

interface post {
  boardId: number;
  image_url: string;
  status: string;
  title: string;
  page?: number | any;
  posts: post[];
}

export default {
  title: "Components/PostItem",
  components: Post,
} as ComponentMeta<typeof Post>;

export const post: ComponentStory<typeof Post> = () => <Post />;
