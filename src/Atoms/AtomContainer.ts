import { atom } from "recoil";

export const isSelected = atom<string>({
  key: "isSelected",
  default: "선택",
});
