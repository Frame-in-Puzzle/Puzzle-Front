/** @jsxImportSource @emotion/react */
import { Header, Button } from "../../Components";
import { useState } from "react";
import SigInModal from "../../Components/SigInModal/SiginModal";
import { TagModal } from "../../Components";

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
      <SigInModal modalState={modalState} closeModal={closeModal} />
      <button onClick={() => setTagModalState(true)}>확인</button>
      {tagModalState && <TagModal closeTagModal={closeTagModal} />}
    </>
  );
};
export default TestPage;
