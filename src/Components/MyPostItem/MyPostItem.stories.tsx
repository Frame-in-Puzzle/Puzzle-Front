import React from "react";
import MyPostItem from "./MyPostItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/MyPostItem",
  components: MyPostItem,
} as ComponentMeta<typeof MyPostItem>;

const MyPostObj = {
  id: 1,
  category: "WEB",
  title: "PUZZLE",
  content:
    "가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ가아ㅓ라어랑러아ㅓㄹ나어래저머햐ㅐㅓㅇ랴ㅐㅓ야ㅐ",
  state: "모집중",
};

export const mypostitem: ComponentStory<typeof MyPostItem> = ({
  MyPostObj,
}) => <MyPostItem MyPostObj={MyPostObj} />;
