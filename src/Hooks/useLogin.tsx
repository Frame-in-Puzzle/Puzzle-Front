export const useLogin = () => {
  return !!localStorage.getItem("accessToken");
};
