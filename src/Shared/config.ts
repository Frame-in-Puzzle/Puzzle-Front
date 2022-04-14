export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://3.39.124.170:8080/api"
    : "https://server.puzzle-frame.me/api";

export const apiOauth =
  process.env.NODE_ENV === "development"
    ? "https://github.com/login/oauth/authorize?client_id=8842d57096c248097f16&scope=id,name,email,avatar_url"
    : "https://github.com/login/oauth/authorize?client_id=636c3106cb9ce89440c7&scope=id,name,email,avatar_url";
