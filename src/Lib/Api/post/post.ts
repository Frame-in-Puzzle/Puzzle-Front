import { apiClient } from "../apiClient";
import useSWR from "swr";

export const getPost = async () => {
  const { data } = await apiClient.get("/board/all");
  return { data };
};
