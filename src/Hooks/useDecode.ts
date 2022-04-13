import jwt from "jwt-decode";

type user = {
  sub: string;
  iat: number;
  exp: number;
  auth: [];
};

export const useDecode = () => {
  const accesstoken: string = localStorage.getItem("accessToken") ?? "";
  const { sub, iat, exp, auth }: user = jwt(accesstoken);

  return { sub, iat, exp, auth };
};
