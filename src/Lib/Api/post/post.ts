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
