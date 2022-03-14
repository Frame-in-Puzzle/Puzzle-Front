import React, { useEffect } from "react";
import { postGithubLogin } from "../../Lib/Api/member/member";

const CallbackPage = () => {
  const githubCode = window.location.search.substring(6);
  useEffect(() => {
    postGithubLogin(githubCode).then((res) => console.log(res));
  }, []);

  return <div>콜백 페이지입니다.</div>;
};

export default CallbackPage;
