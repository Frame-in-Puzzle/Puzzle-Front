import { apiClient } from "../apiClient";
import useSWR from "swr";

export const getPost = async () => {
  const { data } = await apiClient.get("/board/all");
  return { data };
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

export const s3ImageUpload = async (file?: string) => {
  const { data } = await apiClient.post("/board/create-url", {
    file: file,
  });
  return { data };
};
