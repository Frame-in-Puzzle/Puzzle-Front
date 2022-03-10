/** @jsxImportSource @emotion/react */
import { Header, Button } from "../../Components";
import { useState } from "react";
import SignInModal from "../../Components/SigInModal/SiginModal";

const TestPage = () => {
  const [modalState, setModalState] = useState(false);

  const closeModal = (e: Event) => {
    e.preventDefault();
    setModalState(false);
  };
  return (
    <>
      <Header theme="NoneLogin">
        <Button
          theme="OutlinedButton"
          fontSize="h5"
          size="Medium"
          isShadow="No"
          fontWeight="400"
          onClick={(closeModal) => setModalState(true)}
        >
          로그인
        </Button>
      </Header>
      {modalState && <SignInModal closeModal={closeModal} />}
    </>
  );
};
export default TestPage;
