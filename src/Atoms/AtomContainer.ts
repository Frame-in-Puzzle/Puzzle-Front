import { atom } from "recoil";
import { selected } from "../Type/types";

type post = {
  boardId: number;
  image_url: string;
  status: string;
  title: string;
};

export const isSelected = atom<string>({
  key: "isSelected",
  default: "선택",
});

export const postTitle = atom<string>({
  key: "postTitle",
  default: "",
});

export const previewModalValue = atom<string>({
  key: "previewModalValue",
  default: "",
});

export const isPreview = atom<boolean>({
  key: "isPreviewed",
  default: false,
});

export const isIntroduce = atom<boolean>({
  key: "isIntroduce",
  default: false,
});

export const tagModalState = atom<boolean>({
  key: "tagModalState",
  default: false,
});

export const purposeSelected = atom<selected>({
  key: "purposeSelected",
  default: { name: "선택", value: "choice" },
});

export const stateSelected = atom<selected>({
  key: "stateSelected",
  default: { name: "선택", value: "choice" },
});

export const fieldSelected = atom<selected[]>({
  key: "fieldSelected",
  default: [{ name: "전체", value: "ALL" }],
});

export const languageSelected = atom<selected[]>({
  key: "languageSelected",
  default: [],
});

export const isLoading = atom<boolean>({
  key: "isLoading",
  default: false,
});

export const isPaging = atom<number>({
  key: "isPaging",
  default: 0,
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});
