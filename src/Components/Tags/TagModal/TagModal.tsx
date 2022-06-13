/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as S from "./Style";
import { Button, DropDown, TagItem } from "../..";
import { FiX } from "react-icons/fi";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  fieldSelected,
  languageSelected,
  purposeSelected,
  stateSelected,
  tagModalState,
} from "../../../Atoms";
import {
  languageList,
  purposeList,
  stateList,
  fieldList,
} from "../../../Lib/Data/List";
import { selected } from "../../../Type/types";

type TagSearch = {
  onSubmit?: () => void;
};

const TagModal: React.FC<TagSearch> = ({ onSubmit }) => {
  const [purposeSelect, setPurposeSelect] = useRecoilState(purposeSelected);
  const [stateSelect, setStateSelect] = useRecoilState(stateSelected);
  const [fieldSelect, setFieldSelect] = useRecoilState(fieldSelected);
  const [languageSelect, setLanguageSelect] = useRecoilState(languageSelected);
  const [currentField, setCurrentField] = useState<selected>({
    name: "전체",
    value: "ALL",
  });
  const [currentLanguage, setCurrentLanguage] = useState<selected>({
    name: "전체",
    value: "ALL",
  });

  const setModalState = useSetRecoilState(tagModalState);

  const handleSelect = (state: selected[], setState: any, select: selected) => {
    if (!state.includes(select)) {
      setState([...state.filter((el) => el.value !== "ALL"), select]);
    }
    if (select.value === "ALL") {
      setState([{ name: "전체", value: "ALL" }]);
      setLanguageSelect([]);
    }
  };

  const closeTagModal = () => {
    setModalState(false);
  };

  const handleReset = () => {
    setPurposeSelect({ name: "선택", value: "choice" });
    setStateSelect({ name: "선택", value: "choice" });
    setFieldSelect([{ name: "전체", value: "ALL" }]);
    setLanguageSelect([]);
    setCurrentField({ name: "전체", value: "ALL" });
    setCurrentLanguage({ name: "전체", value: "ALL" });
  };

  const handleDelete = (state: selected[], setState: any, select: selected) => {
    setState([...state.filter((el) => el !== select)]);
  };

  const returnSelect = (
    state: selected[],
    select: selected,
    currentSelect: selected,
  ) => {
    return state.includes(select)
      ? currentSelect === select
        ? "currentSelect selected"
        : "selected"
      : "";
  };

  const mappingField = (language: selected) => {
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
    } else if (language.name === "전체") {
      return;
    } else {
      return "nothing";
    }
  };

  const mappingLanguageList = (currentField: selected) => {
    switch (currentField.value) {
      case "FRONTEND":
        return languageList.Frontend.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language.name}
          </li>
        ));
      case "BACKEND":
        return languageList.Backend.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language.name}
          </li>
        ));
      case "GAME":
        return languageList.Game.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language.name}
          </li>
        ));
      case "IOS":
        return languageList.iOS.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language.name}
          </li>
        ));
      case "ANDROID":
        return languageList.Android.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleSelect(languageSelect, setLanguageSelect, language);
              setCurrentLanguage(language);
            }}
            className={returnSelect(languageSelect, language, currentLanguage)}
          >
            {language.name}
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
            {language.name}
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

  const escOff = (e: any) => {
    if (e.key === "Escape") {
      setModalState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", escOff);
    return () => {
      window.removeEventListener("keydown", escOff);
    };
  }, []);

  return (
    <div css={S.TagSearch}>
      <div css={S.Positioner}>
        <div css={S.HeaderContainer}>
          <button css={S.Reset} onClick={handleReset}>
            초기화
          </button>
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
                  {purpose.name}
                </li>
              ))}
            </DropDown>
          </div>
          <div css={S.FieldContainer}>
            <div css={S.SelectWrapper}>
              <span css={S.Label}>분야</span>
              <ul css={S.SelectBox}>
                {fieldList.map((field, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      handleSelect(fieldSelect, setFieldSelect, field);
                      setCurrentField(field);
                    }}
                    className={returnSelect(fieldSelect, field, currentField)}
                  >
                    {field.name}
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
                  {state.name}
                </li>
              ))}
            </DropDown>
          </div>
        </div>
        <div css={S.TagContainer}>
          {fieldSelect.map((field, idx) => {
            switch (field.value) {
              case "FRONTEND":
                if (
                  languageList.Frontend.filter((item) =>
                    languageSelect.includes(item),
                  ).length === 0
                ) {
                  return (
                    <TagItem theme="WhiteTag" key={idx}>
                      {field.name}
                      <FiX
                        onClick={() =>
                          handleDelete(fieldSelect, setFieldSelect, field)
                        }
                      />
                    </TagItem>
                  );
                }
                break;
              case "BACKEND":
                if (
                  languageList.Backend.filter((item) =>
                    languageSelect.includes(item),
                  ).length === 0
                ) {
                  return (
                    <TagItem theme="WhiteTag" key={idx}>
                      {field.name} 전체
                      <FiX
                        onClick={() =>
                          handleDelete(fieldSelect, setFieldSelect, field)
                        }
                      />
                    </TagItem>
                  );
                }
                break;
              case "GAME":
                if (
                  languageList.Game.filter((item) =>
                    languageSelect.includes(item),
                  ).length === 0
                ) {
                  return (
                    <TagItem theme="WhiteTag" key={idx}>
                      {field.name} 전체
                      <FiX
                        onClick={() =>
                          handleDelete(fieldSelect, setFieldSelect, field)
                        }
                      />
                    </TagItem>
                  );
                }
                break;
              case "IOS":
                if (
                  languageList.iOS.filter((item) =>
                    languageSelect.includes(item),
                  ).length === 0
                ) {
                  return (
                    <TagItem theme="WhiteTag" key={idx}>
                      {field.name} 전체
                      <FiX
                        onClick={() =>
                          handleDelete(fieldSelect, setFieldSelect, field)
                        }
                      />
                    </TagItem>
                  );
                }
                break;
              case "ANDROID":
                if (
                  languageList.Android.filter((item) =>
                    languageSelect.includes(item),
                  ).length === 0
                ) {
                  return (
                    <TagItem theme="WhiteTag" key={idx}>
                      {field.name} 전체
                      <FiX
                        onClick={() =>
                          handleDelete(fieldSelect, setFieldSelect, field)
                        }
                      />
                    </TagItem>
                  );
                }
                break;
              case "AI":
                if (
                  languageList.AI.filter((item) =>
                    languageSelect.includes(item),
                  ).length === 0
                ) {
                  return (
                    <TagItem theme="WhiteTag" key={idx}>
                      {field.name} 전체
                      <FiX
                        onClick={() =>
                          handleDelete(fieldSelect, setFieldSelect, field)
                        }
                      />
                    </TagItem>
                  );
                }
                break;
              case "ALL":
                return (
                  <TagItem theme="WhiteTag" key={idx}>
                    {field.name}
                  </TagItem>
                );
              default:
                return;
            }
          })}
          {languageSelect.map((language, idx) => (
            <TagItem theme="WhiteTag" key={idx}>
              {mappingField(language)} {language.name}
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
            onClick={onSubmit}
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
