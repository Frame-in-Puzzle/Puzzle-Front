/** @jsxImportSource @emotion/react */
import { Header, Button } from "../../Components";
import { useEffect, useState } from "react";
import Sign from "../../Components/SigInModal/SiginModal";
import HeaderNotLoginItem from "../../Components/Common/HeaderNotLoginItem/HeaderNotLoginItem";
import { useLogin } from "../../Hooks/useLogin";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";
import { Section1, Section2, Section3 } from "../../Components/index";
import * as S from "./Style";

const PromotionPage = () => {
  const isLogin = useLogin();

  const [modalState, setModalState] = useState(false);

  const closeModal = (e: Event) => {
    e.preventDefault();
    setModalState(false);
  };

  return (
    <>
      <Header theme="NoneLogin">
        {isLogin ? (
          <HeaderItem />
        ) : (
          <HeaderNotLoginItem setModalState={setModalState} />
        )}
      </Header>
      {modalState && <Sign closeModal={closeModal} />}

      <div css={S.parent}>
        <Section1 css={S.child} />
        <Section2 css={S.child} />
        <Section3 css={S.child} />
      </div>
    </>
  );
};
export default PromotionPage;
