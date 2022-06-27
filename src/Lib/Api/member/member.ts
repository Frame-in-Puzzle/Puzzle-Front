import { apiClient } from "../apiClient";
import useSWR from "swr";

export const postGithubLogin = async (code: string) => {
  const { data } = await apiClient.post("/oauth/login/github", {
    code: code,
  });
  apiClient.defaults.headers.common["authorization"] = data.accessToken;
  return { data };
};

export const getUser = async (sub: string | undefined) => {
  const { data } = await apiClient.get(`/profile/${sub}`);
  return { data };
};

export const putUserInformation = async (
  name: string,
  email: string,
  imageUrl: string,
  bio: string,
  field: string,
  languages: string[],
  url: string,
) => {
  const { data } = await apiClient.put("/user/registration", {
    name: name,
    email: email,
    imageUrl: imageUrl,
    bio: bio,
    field: field,
    languages: languages,
    url: url,
  });
  return { data };
};

export const putUserProfile = async (
  name: string,
  email: string,
  bio: string,
  field: string,
  languages: string[],
) => {
  const { data } = await apiClient.put("/profile/update", {
    name: name,
    email: email,
    bio: bio,
    field: field,
    languages: languages,
  });
  return { data };
};

export const putimgUpdate = async (files: string) => {
  const formData = new FormData();
  formData.append("file", files);
  const data = await apiClient.put("/profile/image/update", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return { data };
};

export const logoutUser = async () => {
  await apiClient.delete("/user/logout");
};

export const withdrawalUser = async () => {
  await apiClient.delete("/user/delete");
};
