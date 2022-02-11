/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from "react";
import * as S from "./Style";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function SigInModal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <div css={S.Backdrop}>
      <dialog css={S.DialogBox}>{children}</dialog>
      <div
        css={S.ModalContainer}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </div>
  );
}

export default SigInModal;
