import { apiClient } from "../apiClient";
import useSWR from "swr";

export const postGithubLogin = async (code: string) => {
  const { data } = await apiClient.post("/oauth/login/github", {
    code: code,
  });
  return { data };
};
