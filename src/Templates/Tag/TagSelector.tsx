/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { TagModal } from "../../Components";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  fieldSelected,
  languageSelected,
  purposeSelected,
  tagModalState,
} from "../../Atoms";
import * as S from "./Style";

interface TagSelectorProps {
  onSubmit: () => void;
}

const TagSelector: React.FC<TagSelectorProps> = ({ onSubmit }) => {
  const [modalState, setModalState] = useRecoilState(tagModalState);
  const languageSelect = useRecoilValue(languageSelected);
  const fieldSelect = useRecoilValue(fieldSelected);
  const purposeSelect = useRecoilValue(purposeSelected);

  return (
    <>
      <div css={S.Positioner} onClick={() => setModalState(true)}>
        <span css={S.Purpose}>{purposeSelect.name}</span>
        <span css={S.Field}>
          {fieldSelect
            .map((field, idx) => {
              return field.name;
            })
            .join(" | ")}
        </span>
        {fieldSelect.includes({ name: "전체", value: "all" }) ? "" : ">"}
        <span css={S.Language}>
          {languageSelect
            .map((language, idx) => {
              return language.name;
            })
            .join(" | ")}
        </span>
      </div>
      {modalState && <TagModal onSubmit={onSubmit} />}
    </>
  );
};

export default TagSelector;
