import axios from "axios";
import { baseURL } from "../../Shared/config";
import { refreshToken } from "./refreshToken";

export const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: localStorage.getItem("accessToken") ?? "",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "http://3.39.124.170:8080, https://server.puzzle-frame.me",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,PATCH,PUT,OPTIONS",
  },
});

apiClient.interceptors.request.use(refreshToken);
