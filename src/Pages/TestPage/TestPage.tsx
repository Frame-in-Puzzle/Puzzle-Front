/** @jsxImportSource @emotion/react */
import { Header, Button } from "../../Components";
import { useEffect, useState } from "react";
import Sign from "../../Components/SigInModal/SiginModal";
import TagSelector from "../../Templates/Tag/TagSelector";

const TestPage = () => {
  const [modalState, setModalState] = useState(false);
  const [tagModalState, setTagModalState] = useState(false);

  const closeModal = (e: Event) => {
    e.preventDefault();
    setModalState(false);
  };

  const closeTagModal = () => {
    setTagModalState(false);
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
          onClick={() => setModalState(true)}
        >
          로그인
        </Button>
      </Header>
      <TagSelector />
      {modalState && <Sign closeModal={closeModal} />}
    </>
  );
};
export default TestPage;
