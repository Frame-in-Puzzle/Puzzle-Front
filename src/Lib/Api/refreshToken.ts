import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../../Shared/config";
import { useDecode } from "../../Hooks/useDecode";
import { useLogin } from "../../Hooks/useLogin";
import { apiClient } from "./apiClient";
import jwt from "jwt-decode";

type user = {
  sub: string;
  exp: number;
};

export const refreshToken = async (config: AxiosRequestConfig) => {
  const accessToken = localStorage.getItem("accessToken") ?? "";
  const { sub, exp }: user = !!localStorage.getItem("accessToken")
    ? jwt(accessToken)
    : { sub: "", exp: 999999999999 };
  const nowDate = new Date().getTime() / 1000;

  if (exp < nowDate) {
    const { data } = await axios.get(
      `${baseURL}/token/reissue?githubId=${sub}`,
      {
        headers: {
          RefreshToken: localStorage.getItem("refreshToken") ?? "",
          Authorization: "",
        },
      },
    );

    apiClient.defaults.headers.common["authorization"] = data.AccessToken;
    apiClient.defaults.headers.common["RefreshToken"] = data.RefreshToken;

    localStorage.setItem("accessToken", data.AccessToken);
    localStorage.setItem("refreshToken", data.RefreshToken);
  }

  return config;
};
