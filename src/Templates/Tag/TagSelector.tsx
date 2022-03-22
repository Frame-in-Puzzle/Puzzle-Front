/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { TagModal } from "../../Components";
import { useRecoilValue } from "recoil";
import { fieldSelected, languageSelected, purposeSelected } from "../../Atoms";
import * as S from "./Style";

const TagSelector = () => {
  const [tagModalState, setTagModalState] = useState(false);
  const languageSelect = useRecoilValue(languageSelected);
  const fieldSelect = useRecoilValue(fieldSelected);
  const purposeSelect = useRecoilValue(purposeSelected);

  const closeTagModal = () => {
    setTagModalState(false);
  };

  return (
    <>
      <div css={S.Positioner} onClick={() => setTagModalState(true)}>
        <span css={S.Purpose}>{purposeSelect}</span>
        <span css={S.Field}>{fieldSelect.join(" | ")}</span>
        {fieldSelect.includes("전체") ? "" : ">"}
        <span css={S.Language}>{languageSelect.join(" | ")}</span>
      </div>
      {tagModalState && <TagModal closeTagModal={closeTagModal} />}
    </>
  );
};

export default TagSelector;
