import { apiClient } from "../apiClient";
import useSWR from "swr";

export const getPost = async () => {
  try {
    const { data } = await apiClient.get("/board/all");
    return { data };
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
