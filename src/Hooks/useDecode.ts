import { useLogin } from "./useLogin";
import jwt from "jwt-decode";

type user = {
  sub: string;
  iat: number;
  exp: number;
  auth: [];
};

export const useDecode = () => {
  const isLogin = useLogin();
  const accesstoken: string = localStorage.getItem("accessToken") ?? "";
  const { sub, iat, exp, auth }: user = isLogin
    ? jwt(accesstoken)
    : { sub: "", iat: 0, exp: 0, auth: [] };

  return { sub, iat, exp, auth };
};
