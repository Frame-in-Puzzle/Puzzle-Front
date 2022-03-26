import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../..";
import Sign from "../../../Components/SigInModal/SiginModal";

interface ModalProps {
  setModalState: Dispatch<SetStateAction<boolean>>;
}

const HeaderNotLoginItem: React.FC<ModalProps> = ({ setModalState }) => {
  return (
    <>
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
    </>
  );
};

export default HeaderNotLoginItem;
