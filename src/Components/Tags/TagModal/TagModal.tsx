/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./Style";
import { Button, DropDown } from "../..";
import { FiX } from "react-icons/fi";

const purposeList = ["프로젝트", "대회", "서비스", "스터디"];

const stateList = ["모집중", "모집완료"];

const FieldList = [
  "전체",
  "프론트엔드",
  "백엔드",
  "게임",
  "iOS",
  "Android",
  "AI",
];

const languageList = {
  Frontend: ["Javascript", "Typescript", "React", "Vue", "Next"],
  Backend: ["Java", "Spring", "Spring boot", "Go", "django", "express", "nest"],
  AI: ["Pytorch", "Tensorflow"],
  Android: ["Kotlin"],
  iOS: ["Swift"],
  Game: ["Unity", "C#", "Unreal Engine"],
};

type TagSearch = {
  closeTagModal?: () => void;
};

const TagModal: React.FC<TagSearch> = ({ closeTagModal }) => {
  const [purposeSelect, setPurposeSelect] = useState<string>("선택");
  const [stateSelect, setStateSelect] = useState<string>("선택");
  const [fieldSelect, setFieldSelect] = useState<string[]>(["전체"]);
  const [languageSelect, setLanguageSelect] = useState<string[]>([]);
  const [currentField, setCurrentField] = useState<string>("전체");
  const [currentLanguage, setCurrentLanguage] = useState<string>("전체");
  console.log(languageSelect);

  const handleSelect = (state: string[], setState: any, select: string) => {
    if (state.indexOf(select)) {
      setState([select, ...state.filter((el) => el !== "전체")]);
    }
    if (select === "전체") {
      setState(["전체"]);
      setLanguageSelect([]);
    }
  };

  const returnSelect = (
    state: string | any[],
    select: any,
    currentSelect: any,
  ) => {
    return state.includes(select)
      ? currentSelect === select
        ? "currentSelect selected"
        : "selected"
      : "";
  };

  const mappingLanguageList = (currentField: string) => {
    switch (currentField) {
      case "프론트엔드":
        return languageList.Frontend.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language}
          </li>
        ));
      case "백엔드":
        return languageList.Backend.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language}
          </li>
        ));
      case "게임":
        return languageList.Game.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language}
          </li>
        ));
      case "iOS":
        return languageList.iOS.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language}
          </li>
        ));
      case "Android":
        return languageList.Android.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language}
          </li>
        ));
      case "AI":
        return languageList.AI.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language}
          </li>
        ));
      default:
        return (
          <div css={S.DefaultMessage}>
            분야를 선택하면
            <br />
            세부언어를 확인할 수 있습니다
          </div>
        );
    }
  };

  return (
    <div css={S.TagSearch}>
      <div css={S.Positioner}>
        <div css={S.HeaderContainer}>
          <button css={S.Reset}>초기화</button>
          <span css={S.Title}>태그 조회</span>
          <button css={S.Close} onClick={closeTagModal}>
            <FiX />
          </button>
        </div>
        <div css={S.SelectContainer}>
          <div css={S.Wrapper}>
            <span css={S.Label}>목적</span>
            <DropDown theme="purpose" width="450px" selected={purposeSelect}>
              {purposeList.map((purpose, idx) => (
                <li key={idx} onClick={() => setPurposeSelect(purpose)}>
                  {purpose}
                </li>
              ))}
            </DropDown>
          </div>
          <div css={S.FieldContainer}>
            <div css={S.SelectWrapper}>
              <span css={S.Label}>분야</span>
              <ul css={S.SelectBox}>
                {FieldList.map((field, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      handleSelect(fieldSelect, setFieldSelect, field);
                      setCurrentField(field);
                    }}
                    className={returnSelect(fieldSelect, field, currentField)}
                  >
                    {field}
                  </li>
                ))}
              </ul>
            </div>
            <div css={S.SelectWrapper}>
              <span css={S.Label}>세부언어</span>
              <ul css={S.SelectBox}>{mappingLanguageList(currentField)}</ul>
            </div>
          </div>
          <div>
            <span css={S.Label}>상태</span>
            <DropDown theme="state" width="450px" selected={stateSelect}>
              {stateList.map((state, idx) => (
                <li key={idx} onClick={() => setStateSelect(state)}>
                  {state}
                </li>
              ))}
            </DropDown>
          </div>
        </div>
        <div css={S.TagContainer}></div>
        <div css={S.Button}>
          <Button
            theme="CircleButton"
            size="Custom"
            fontSize="h4"
            fontWeight="400"
            isShadow="No"
            width="100%"
            height="3rem"
            onClick={closeTagModal}
          >
            확인
          </Button>
        </div>
      </div>
      <div css={S.Overlay} onClick={closeTagModal} />
    </div>
  );
};

export default TagModal;
