import React, { Dispatch, SetStateAction, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "../..";
import { modalState } from "../../../Atoms";
import Sign from "../../../Components/SigInModal/SiginModal";

const HeaderNotLoginItem: React.FC = () => {
  const setHeaderModalState = useSetRecoilState(modalState);

  return (
    <>
      <Button
        theme="OutlinedButton"
        fontSize="h5"
        size="Medium"
        isShadow="No"
        fontWeight="400"
        onClick={() => setHeaderModalState(true)}
      >
        로그인
      </Button>
    </>
  );
};

export default HeaderNotLoginItem;
