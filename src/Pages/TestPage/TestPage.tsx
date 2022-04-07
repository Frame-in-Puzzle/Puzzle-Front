/** @jsxImportSource @emotion/react */
import { Header, Button } from "../../Components";
import { useEffect, useState } from "react";
import Sign from "../../Components/SigInModal/SiginModal";
import TagSelector from "../../Templates/Tag/TagSelector";
import HeaderNotLoginItem from "../../Components/Common/HeaderNotLoginItem/HeaderNotLoginItem";
import { useLogin } from "../../Hooks/useLogin";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";

const TestPage = () => {
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
    </>
  );
};
export default TestPage;
