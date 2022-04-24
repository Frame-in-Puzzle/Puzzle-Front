/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as S from "./Style";
import * as I from "../../../Assets/index";
import { Button, DropDown, Input, TagItem } from "../..";
import {
  getUser,
  putUserProfile,
  withdrawalUser,
} from "../../../Lib/Api/member/member";
import { useDecode } from "../../../Hooks/useDecode";
import { fieldList, languageList } from "../../../Lib/Data/List";
import { useNavigate } from "react-router";
import { selected } from "../../../Type/types";
import { FiX } from "react-icons/fi";
import { on } from "cluster";

interface UserInfo {
  data: {
    name: string;
    bio: string;
    email: string;
    imageUrl: string;
    field: string;
    language: string[];
  };
}
const ProfileHeader = () => {
  const { sub } = useDecode();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [fileImage, setFileImage] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [fieldSelect, setFieldSelect] = useState<string>("선택");
  const [languageSelect, setLanguageSelect] = useState<string[]>([]);
  const [currentField, setCurrentField] = useState<selected>({
    name: "선택",
    value: "선택",
  });
  const [currentLanguage, setCurrentLanguage] = useState<selected>({
    name: "선택",
    value: "선택",
  });

  const navigate = useNavigate();

  const onLoadImg = (e: any) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSelect = (select: string) => {
    if (!languageSelect.includes(select)) {
      setLanguageSelect([...languageSelect, select]);
    }
  };

  // 태그 삭제 함수
  const handleDelete = (state: string[], setState: any, select: string) => {
    setState([...state.filter((el) => el !== select)]);
  };
  console.log(languageSelect);

  const fieldData = (field: string) => {
    return JSON.parse(
      JSON.stringify(fieldList.filter((item, idx) => item.value === field))
        .replace("[", "")
        .replace("]", ""),
    );
  };

  useEffect(() => {
    getUser(sub).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setBio(res.data.bio);
      setImageUrl(res.data.imageUrl);
      setCurrentField(fieldData(res.data.field));
      setLanguageSelect(res.data.language);
    });
  }, []);

  const onSubmit = () => {
    putUserProfile(name, email, imageUrl, bio, fieldSelect, languageSelect);
  };

  const onWithdrawal = () => {
    withdrawalUser();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
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
      <p css={S.MainText}>프로필</p>
      <hr css={S.Line} />
      <div css={S.ItemContainer}>
        <div css={S.ImageWrapper}>
          <img src={fileImage ? fileImage : imageUrl} />
          <div css={S.ImageBtn}>
            <input type="file" accept="image/*" onChange={onLoadImg}></input>
          </div>
        </div>
        <hr css={S.VerticalLine} />
        <div css={S.TextWrapper}>
          <Input
            theme="ProfileRegistrationPageInput"
            type="text"
            placeholder="이름"
            fontSize="h4"
            fontWeight="500"
            width="200px"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          ></Input>
          <div>
            <textarea
              css={S.textarea}
              value={bio}
              onChange={(e: any) => setBio(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <div css={S.EmailInput}>
        <div css={S.Title}>이메일 주소</div>
        <Input
          theme="ProfileRegistrationPageInput"
          type="text"
          placeholder="게시글 및 프로필에 보여지는 URL 입니다."
          fontSize="h4"
          fontWeight="500"
          width="575px"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        ></Input>
      </div>
      <hr css={S.Line} />
      <div css={S.FiledWrapper}>
        <div css={S.Title}>관심분야</div>
        <DropDown theme="purpose" width="650px" selected={currentField}>
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
      <div css={S.Language}>
        <div css={S.Title}>세부언어</div>
        <DropDown theme="purpose" width="650px" selected={currentLanguage}>
          {mappingLanguageList(currentField.value)}
        </DropDown>
      </div>
      <div css={S.tag}>
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
      <hr css={S.Line} />
      <div css={S.ButtonWrapper}>
        <Button
          theme="BlackButtonWithWithTextNoHover"
          fontSize="h5"
          size="Medium"
          isShadow="No"
          fontWeight="600"
          onClick={onSubmit}
        >
          업데이트
        </Button>
        <Button
          theme="RedButton"
          fontSize="h5"
          size="Medium"
          isShadow="No"
          fontWeight="600"
          onClick={onWithdrawal}
        >
          회원탈퇴
        </Button>
      </div>
      <p css={S.Text}>
        탈퇴 시 작성하신 게시글 및 신청이 모두 삭제되며 복구되지 않습니다.
      </p>
    </div>
  );
};

export default ProfileHeader;
