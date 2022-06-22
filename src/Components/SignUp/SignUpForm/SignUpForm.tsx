/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { withdrawalUser } from "../../../Lib/Api/member/member";
import { Button, DropDown, Input, TagItem } from "../..";
import { useDecode } from "../../../Hooks/useDecode";
import { getUser, putUserInformation } from "../../../Lib/Api/member/member";
import { fieldList, languageList } from "../../../Lib/Data/List";
import * as S from "./Style";
import { selected } from "../../../Type/types";
import { toast } from "react-toastify";

interface UserInfo {
  data: {
    name: string;
    bio: string;
    email: string;
    imageUrl: string;
    field: string;
    language: string[];
    url: string;
  };
}

interface purpose {
  name: string;
  value: string;
}

const SignUpForm: React.FC = () => {
  const { sub } = useDecode();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [fieldSelect, setFieldSelect] = useState<string>("선택");
  const [languageSelect, setLanguageSelect] = useState<string[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState<selected>({
    name: "선택",
    value: "선택",
  });
  const [currentField, setCurrentField] = useState<selected>({
    name: "선택",
    value: "선택",
  });

  const navigate = useNavigate();

  const handleSelect = (select: string) => {
    if (!languageSelect.includes(select)) {
      setLanguageSelect([...languageSelect, select]);
    }
  };

  // 태그 삭제 함수
  const handleDelete = (state: string[], setState: any, select: string) => {
    setState([...state.filter((el) => el !== select)]);
  };

  useEffect(() => {
    getUser(sub).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setBio(res.data.bio);
      setImageUrl(res.data.imageUrl);
    });
  }, []);

  const onCancel = () => {
    withdrawalUser();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  const onSubmit = () => {
    if (name === "" || name === null) {
      alert("이름을 입력해주세요..");
      return;
    }
    if (email === "" || email === null) {
      alert("Email을 입력해주세요..");
      return;
    }
    if (bio === "" || bio === null) {
      alert("한 줄 소개 을 입력해주세요..");
      return;
    }
    if (fieldSelect === "선택") {
      alert("분야를 선택해주세요..");
      return;
    }
    if (languageSelect.length === 0) {
      alert("언어를 선택해주세요..");
      return;
    }

    putUserInformation(
      name,
      email,
      imageUrl,
      bio,
      fieldSelect,
      languageSelect,
      `https://github.com/${sub}`,
    );
    navigate("/main");
  };

  const mappingLanguageList = (currentField: string) => {
    switch (currentField) {
      case "FRONTEND":
        return languageList.Frontend.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              setCurrentLanguage(language);
              handleSelect(language.value);
            }}
          >
            {language.name}
          </li>
        ));
      case "BACKEND":
        return languageList.Backend.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              setCurrentLanguage(language);
              handleSelect(language.value);
            }}
          >
            {language.name}
          </li>
        ));
      case "GAME":
        return languageList.Game.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              setCurrentLanguage(language);
              handleSelect(language.value);
            }}
          >
            {language.name}
          </li>
        ));
      case "IOS":
        return languageList.iOS.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              setCurrentLanguage(language);
              handleSelect(language.value);
            }}
          >
            {language.name}
          </li>
        ));
      case "ANDROID":
        return languageList.Android.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              setCurrentLanguage(language);
              handleSelect(language.value);
            }}
          >
            {language.name}
          </li>
        ));
      case "AI":
        return languageList.AI.map((language, idx) => (
          <li
            key={idx}
            onClick={() => {
              setCurrentLanguage(language);
              handleSelect(language.value);
            }}
          >
            {language.name}
          </li>
        ));
      default:
        return <div>세부언어를 확인할 수 있습니다</div>;
    }
  };

  return (
    <div css={S.Positioner}>
      <div css={S.TitleWrapper}>
        <div css={S.Title}>이름</div>
        <Input
          theme="ProfileRegistrationPageInput"
          type="text"
          placeholder="이름을 입력해주세요."
          fontSize="h4"
          fontWeight="500"
          width="430px"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        ></Input>
      </div>
      <div css={S.TitleWrapper}>
        <div css={S.Title}>E-mail</div>
        <Input
          theme="ProfileRegistrationPageInput"
          type="text"
          placeholder="게시글 및 프로필에 보여지는 URL 입니다."
          fontSize="h4"
          fontWeight="500"
          width="1300px"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        ></Input>
      </div>
      <div css={S.TitleWrapper}>
        <div css={S.Title}>한 줄 소개</div>
        <Input
          theme="ProfileRegistrationPageInput"
          type="text"
          placeholder="프로필에서 보여지는 한 줄 소개 입니다."
          fontSize="h4"
          fontWeight="500"
          width="1300px"
          value={bio}
          onChange={(e: any) => setBio(e.target.value)}
        ></Input>
      </div>
      <div css={S.DropDown}>
        <div css={S.Title}>분야</div>
        <DropDown theme="purpose" width="550px" selected={currentField}>
          {fieldList.map((field, idx) => (
            <li
              key={idx}
              onClick={() => {
                setFieldSelect(field.value);
                setCurrentField(field);
                if (fieldSelect !== field.value) setLanguageSelect([]);
              }}
            >
              {field.name}
            </li>
          ))}
        </DropDown>
      </div>
      <div css={S.TitleWrapper}>
        <div css={S.Title}>세부언어</div>
        <DropDown
          theme="purpose"
          width="550px"
          selected={currentLanguage}
          onClick={() => {
            if (fieldSelect === "선택") {
              toast.warning("분야를 먼저 선택해주세요");
            }
          }}
        >
          {mappingLanguageList(fieldSelect)}
        </DropDown>
      </div>

      <div css={S.Tag}>
        {languageSelect.map((language, idx) => (
          <TagItem theme="WhiteTag" key={idx}>
            {language}
            <FiX
              onClick={() =>
                handleDelete(languageSelect, setLanguageSelect, language)
              }
            />
          </TagItem>
        ))}
      </div>

      <div css={S.ButtonWrapper}>
        <Button
          theme="BlackButtonWith5radius"
          fontSize="h4"
          size="Medium"
          isShadow="No"
          fontWeight="600"
          onClick={onSubmit}
        >
          등록
        </Button>
        <Button
          theme="GrayButtonWithWhiteTextGrayHover"
          fontSize="h4"
          size="Medium"
          isShadow="No"
          fontWeight="600"
          onClick={onCancel}
        >
          취소
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
