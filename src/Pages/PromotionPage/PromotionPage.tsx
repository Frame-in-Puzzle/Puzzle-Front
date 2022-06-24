/** @jsxImportSource @emotion/react */
import { Header, Button } from "../../Components";
import { useEffect, useState } from "react";
import Sign from "../../Components/SigInModal/SiginModal";
import HeaderNotLoginItem from "../../Components/Common/HeaderNotLoginItem/HeaderNotLoginItem";
import { useLogin } from "../../Hooks/useLogin";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";
import { Section1, Section2, Section3, Section4 } from "../../Components/index";

const PromotionPage = () => {
  const isLogin = useLogin();

  return (
    <>
      <Header theme="NoneLogin">
        {isLogin ? <HeaderItem /> : <HeaderNotLoginItem />}
      </Header>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};
export default PromotionPage;
