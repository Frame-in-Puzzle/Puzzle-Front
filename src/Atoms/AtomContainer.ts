import { atom } from "recoil";

export const isSelected = atom<string>({
  key: "isSelected",
  default: "선택",
});

export const isPreview = atom<boolean>({
  key: "isPreviewed",
  default: false,
});

export const purposeSelected = atom<string>({
  key: "purposeSelected",
  default: "전체",
});

export const stateSelected = atom<string>({
  key: "stateSelected",
  default: "전체",
});

export const fieldSelected = atom<string[]>({
  key: "fieldSelected",
  default: ["전체"],
});

export const languageSelected = atom<string[]>({
  key: "languageSelected",
  default: [],
});
