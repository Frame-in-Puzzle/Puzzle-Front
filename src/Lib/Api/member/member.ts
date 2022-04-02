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

export const deleteUsertoken = async () => {
  await apiClient.delete("/user/delete");
};
