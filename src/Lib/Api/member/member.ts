import { apiClient } from "../apiClient";
import useSWR from "swr";

export const postGithubLogin = async (code: string) => {
  const { data } = await apiClient.post("/oauth/login/github", {
    code: code,
  });
  return { data };
};

export const getUser = async (sub: string) => {
  const { data } = await apiClient.get(`/profile/${sub}`);
  return { data };
};

export const putUserInformation = async (
  name: string,
  email: string,
  imageUrl: string,
  bio: string,
  field: string[],
  language: string[],
  url: string,
) => {
  const { data } = await apiClient.put("/user/registration", {
    name: name,
    email: email,
    imageUrl: imageUrl,
    bio: bio,
    field: field,
    language: language,
    url: url,
  });
  return { data };
};
