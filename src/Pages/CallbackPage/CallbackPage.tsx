import React, { useEffect } from "react";
import { postGithubLogin } from "../../Lib/Api/member/member";
import { useNavigate } from "react-router";

const CallbackPage = () => {
  const navigate = useNavigate();
  const githubCode = window.location.search.substring(6);
  useEffect(() => {
    postGithubLogin(githubCode).then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      if (res.data.isFirstVisited) {
        navigate("/signup");
        window.location.reload();
      } else {
        navigate("/main");
        window.location.reload();
      }
    });
  }, []);

  return <div></div>;
};

export default CallbackPage;
