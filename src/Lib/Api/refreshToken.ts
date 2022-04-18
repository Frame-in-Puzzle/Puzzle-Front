import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../../Shared/config";
import { useDecode } from "../../Hooks/useDecode";
import { useLogin } from "../../Hooks/useLogin";
import { apiClient } from "./apiClient";
import jwt from "jwt-decode";

type user = {
  exp: number;
};

export const refreshToken = async (config: AxiosRequestConfig) => {
  const accessToken = localStorage.getItem("accessToken") ?? "";
  const { exp }: user = !!localStorage.getItem("accessToken")
    ? jwt(accessToken)
    : { exp: 999999999999 };
  const nowDate = new Date().getTime() / 1000;

  if (exp < nowDate) {
    const { data } = await axios.get(`${baseURL}/token/reissue`, {
      headers: {
        RefreshToken: localStorage.getItem("refreshToken") ?? "",
        Authorization: "",
      },
    });

    apiClient.defaults.headers.common["authorization"] = data.accessToken;

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  }

  return config;
};
