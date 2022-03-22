/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./Style";
import { Button, DropDown, TagItem } from "../..";
import { FiX } from "react-icons/fi";
import { useRecoilState } from "recoil";
import {
  fieldSelected,
  languageSelected,
  purposeSelected,
  stateSelected,
} from "../../../Atoms/AtomContainer";

const purposeList = ["전체", "프로젝트", "대회", "서비스", "스터디"];

const stateList = ["전체", "모집중", "모집완료"];

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
  const [purposeSelect, setPurposeSelect] = useRecoilState(purposeSelected);
  const [stateSelect, setStateSelect] = useRecoilState(stateSelected);
  const [fieldSelect, setFieldSelect] = useRecoilState(fieldSelected);
  const [languageSelect, setLanguageSelect] = useRecoilState(languageSelected);
  const [currentField, setCurrentField] = useState<string>("전체");
  const [currentLanguage, setCurrentLanguage] = useState<string>("전체");
  console.log(fieldSelect);
  console.log(languageSelect);

  const handleSelect = (state: string[], setState: any, select: string) => {
    if (!state.includes(select)) {
      setState([...state.filter((el) => el !== "전체"), select]);
    }
    if (select === "전체") {
      setState(["전체"]);
      setLanguageSelect([]);
    }
  };

  const handleReset = () => {
    setPurposeSelect("전체");
    setStateSelect("전체");
    setFieldSelect(["전체"]);
    setLanguageSelect([]);
    setCurrentField("전체");
    setCurrentLanguage("전체");
  };

  const handleDelete = (state: string[], setState: any, select: string) => {
    setState([...state.filter((el) => el !== select)]);
  };

  const returnSelect = (
    state: string | any[],
    select: string,
    currentSelect: string,
  ) => {
    return state.includes(select)
      ? currentSelect === select
        ? "currentSelect selected"
        : "selected"
      : "";
  };

  const mappingField = (language: string) => {
    if (languageList.Frontend.includes(language)) {
      return "프론트엔드";
    } else if (languageList.Backend.includes(language)) {
      return "백엔드";
    } else if (languageList.Game.includes(language)) {
      return "게임";
    } else if (languageList.iOS.includes(language)) {
      return "iOS";
    } else if (languageList.Android.includes(language)) {
      return "Android";
    } else if (languageList.AI.includes(language)) {
      return "AI";
    }
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
        <div css={S.TagContainer}>
          {languageSelect.map((language, idx) => (
            <TagItem theme="WhiteTag" key={idx}>
              {mappingField(language)} {language}
              <FiX
                onClick={() =>
                  handleDelete(languageSelect, setLanguageSelect, language)
                }
              />
            </TagItem>
          ))}
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
