import axios from "axios";
import { baseURL } from "../../Shared/config";
import { refreshToken } from "./refreshToken";

export const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: localStorage.getItem("accessToken") ?? "",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,PATCH,PUT,OPTIONS",
  },
});

apiClient.interceptors.request.use(refreshToken);
