import React from "react";
import MyPostItem from "./MyPostItem";
import * as I from "../../Assets/index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/MyPostItem",
  components: MyPostItem,
} as ComponentMeta<typeof MyPostItem>;

const MyPostObj = {
  boardId: 1,
  title: "PUZZLE",
  thumbnail: "",
  contents: "123456789abcdefghijklmnop",
  field: ["fron-end", "fron-end"],
  date: "2022.05.09",
  status: "모집중",
};

export const mypostitem: ComponentStory<typeof MyPostItem> = () => (
  <MyPostItem
    boardId={MyPostObj.boardId}
    title={MyPostObj.title}
    thumbnail={MyPostObj.thumbnail}
    contents={MyPostObj.contents}
    fields={MyPostObj.field}
    date={MyPostObj.date}
    status={MyPostObj.status}
  />
);
