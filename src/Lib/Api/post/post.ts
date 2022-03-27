import { apiClient } from "../apiClient";

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
