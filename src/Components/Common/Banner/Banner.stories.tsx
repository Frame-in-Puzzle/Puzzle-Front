import React from "react";
import Banner from "./Banner";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Common/Banner",
  components: Banner,
} as ComponentMeta<typeof Banner>;

export const banner: ComponentStory<typeof Banner> = () => <Banner />;
