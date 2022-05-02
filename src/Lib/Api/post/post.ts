import { apiClient } from "../apiClient";
import { selected } from "../../../Type/types";
import { languageList } from "../../Data/List";

export const getPost = async (page?: number) => {
  try {
    const { data } = await apiClient.get(`/board/all?page=${page}`);
    return data;
  } catch (e: any) {
    alert(e);
  }
};

export const postBoard = async (
  contents: string,
  fieldList: string[],
  languageList: string[],
  purpose: string,
  status: string,
  title: string,
  fileUrlList: any,
) => {
  const { data } = await apiClient.post("/board", {
    contents: contents,
    fieldList: fieldList,
    fileUrlList: fileUrlList,
    languageList: languageList,
    purpose: purpose,
    status: status,
    title: title,
  });
  return { data };
};

export const s3ImageUpload = async (files: File[]) => {
  const { data } = await apiClient.post(
    "/board/create-url",
    { files: files },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return { data };
};

export const deletePost = async (boardId: number) => {
  await apiClient.delete(`board/${boardId}`);
};

export const getTagPost = async (
  field: selected[],
  language: selected[],
  purpose: selected,
  status: selected,
) => {
  const mappingField = field
    .map((item, idx) => {
      switch (item.value) {
        case "FRONTEND":
          if (
            languageList.Frontend.filter((item) => language.includes(item))
              .length === 0
          )
            return `&field=${item.value}_ALL`;
          else return `&field=${item.value}`;
        case "BACKEND":
          if (
            languageList.Backend.filter((item) => language.includes(item))
              .length === 0
          )
            return `&field=${item.value}_ALL`;
          else return `&field=${item.value}`;
        case "GAME":
          if (
            languageList.Game.filter((item) => language.includes(item))
              .length === 0
          )
            return `&field=${item.value}_ALL`;
          else return `&field=${item.value}`;
        case "IOS":
          if (
            languageList.iOS.filter((item) => language.includes(item))
              .length === 0
          )
            return `&field=${item.value}_ALL`;
          else return `&field=${item.value}`;
        case "ANDROID":
          if (
            languageList.Android.filter((item) => language.includes(item))
              .length === 0
          )
            return `&field=${item.value}_ALL`;
          else return `&field=${item.value}`;
        case "AI":
          if (
            languageList.AI.filter((item) => language.includes(item)).length ===
            0
          )
            return `&field=${item.value}_ALL`;
          else return `&field=${item.value}`;
        default:
          return;
      }
    })
    .toString()
    .replaceAll(",", "");
  const mappingLanguage = language
    .map((item, idx) => {
      return `&language=${item.value}`;
    })
    .toString()
    .replaceAll(",", "");

  console.log(
    languageList.Frontend.filter((item) => language.includes(item)).length ===
      0,
  );

  const { data } = await apiClient.get(
    `/board/filter?${mappingField}${mappingLanguage}&purpose=${purpose.value}&status=${status.value}`,
  );
  return { data };
};
