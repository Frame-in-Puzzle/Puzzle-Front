/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as S from "./Style";
import { Button } from "../..";
import { FiX } from "react-icons/fi";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isPreviewModal } from "../../../Atoms/AtomContainer";

type TagSearch = {
  onSubmit?: () => void;
};

const PreviewModal: React.FC<TagSearch> = ({ onSubmit }) => {
  const setPreviewModalState = useSetRecoilState(isPreviewModal);

  const closePreviewModal = () => {
    setPreviewModalState(false);
  };

  const handleReset = () => {};

  return (
    <div css={S.PreviewModalWrapper}>
      <div css={S.Positioner}>
        <div css={S.HeaderContainer}>
          <button css={S.Reset} onClick={handleReset}>
            초기화
          </button>
          <span css={S.Title}>포스트 미리보기</span>
          <button css={S.Close} onClick={closePreviewModal}>
            <FiX />
          </button>
        </div>
        <div css={S.ContentsContainer}>
          <textarea
            css={S.TextArea}
            placeholder="당신의 포스트를 짧게 소개해주세요."
          />
        </div>
        <div css={S.Button}>
          <Button
            theme="CircleButton"
            size="Custom"
            fontSize="h4"
            fontWeight="400"
            isShadow="No"
            width="100%"
            height="3rem"
            onClick={onSubmit}
          >
            글 등록
          </Button>
        </div>
      </div>
      <div css={S.Overlay} onClick={closePreviewModal} />
    </div>
  );
};

export default PreviewModal;
