import { useState, useCallback } from "react";
import SigInModal from "./SigInModal";
import SinInModal from "./SigInModal";
import * as S from "./Style";

function App() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <div css={S.Main}>
      <div css={S.Title}>여긴 배경화면 입니다</div>
      {isOpenModal && (
        <SigInModal onClickToggleModal={onClickToggleModal}>
          이곳에 children이 들어갑니다.
        </SigInModal>
      )}
      <button css={S.DialogButton} onClick={onClickToggleModal}>
        Open Modal
      </button>
    </div>
  );
}

export default App;
