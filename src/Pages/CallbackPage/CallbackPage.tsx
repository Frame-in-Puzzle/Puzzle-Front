import React, { useEffect } from "react";
import { postGithubLogin } from "../../Lib/Api/member/member";
import { useNavigate } from "react-router-dom";

const CallbackPage = () => {
  const navigate = useNavigate();
  const githubCode = window.location.search.substring(6);
  useEffect(() => {
    postGithubLogin(githubCode).then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      if (res.data.isFirstVisited) {
        navigate("/signup");
      } else {
        navigate("/main");
      }
    });
  }, []);

  return <div></div>;
};

export default CallbackPage;
