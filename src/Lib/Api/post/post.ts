import { apiClient } from "../apiClient";
import { selected } from "../../../Type/types";
import { languageList } from "../../Data/List";
import { toast } from "react-toastify";
import { ParsedQuery } from "query-string";

export const getPost = async (page?: number) => {
  try {
    const { data } = await apiClient.get(`/board/all?page=${page}`);
    return data;
  } catch (e: any) {
    alert(e);
  }
};

export const getDetailPost = async (
  boardId: string | (string | null)[] | null,
) => {
  try {
    const { data } = await apiClient.get(`/board/${boardId}`);
    return { data };
  } catch (e) {}
};

export const postBoard = async (
  contents: string,
  fieldList: string[] | string,
  introduce: string,
  languageList: string[] | string,
  purpose: string,
  status: string,
  title: string,
  fileUrlList?: string[],
) => {
  const { data } = await apiClient.post("/board", {
    contents: contents,
    fieldList: fieldList,
    fileUrlList: fileUrlList,
    introduce: introduce,
    languageList: languageList,
    purpose: purpose,
    status: status,
    title: title,
  });
  return { data };
};

export const putPost = async (
  contents: string,
  fieldList: string[],
  fileUrlList: string[],
  introduce: string,
  languageList: string[],
  purpose: string,
  status: string,
  title: string,
  id: string | (string | null)[] | null,
) => {
  try {
    const { data } = await apiClient.put(`/board/${id}`, {
      contents: contents,
      fieldList: fieldList,
      fileUrlList: fileUrlList,
      introduce: introduce,
      languageList: languageList,
      purpose: purpose,
      status: status,
      title: title,
    });
    toast.success("글이 수정되었어요.");
    return { data };
  } catch (e) {}
};

export const deletePost = async (boardId: string | undefined) => {
  try {
    await apiClient.delete(`/board/${boardId}`);
    toast.success("게시글이 삭제 되었어요");
  } catch (e) {
    toast.error("게시글 삭제에 실패했어요");
  }
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
