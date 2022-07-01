/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import * as S from "./Style";
import { BiHeading, BiBold, BiItalic, BiImageAdd } from "react-icons/bi";
import { AiOutlineUnorderedList, AiOutlineOrderedList } from "react-icons/ai";
import { useRemark } from "react-remark";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useBeforeunload } from "react-beforeunload";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import TagSelector from "../../Templates/Tag/TagSelector";
import axios from "axios";
import { baseURL } from "../../Shared/config";
import { getDetailPost, postBoard, putPost } from "../../Lib/Api/post/post";
import {
  fieldSelected,
  isPreview,
  languageSelected,
  purposeSelected,
  stateSelected,
  tagModalState,
} from "../../Atoms";
import PreviewModal from "./Modal/PreviewModal";
import {
  isIntroduce,
  postTitle,
  previewModalValue,
} from "../../Atoms/AtomContainer";
import queryString from "query-string";
import { apiClient } from "../../Lib/Api/apiClient";
import useSWR from "swr";
import {
  allLanguageList,
  fieldList,
  languageList,
  purposeList,
  stateList,
} from "../../Lib/Data/List";
import { toast } from "react-toastify";

type queryType = {
  id: string;
};

const WriteTextForm: React.FC = () => {
  const [markdownSource, setMarkdownSource] = useRemark();
  const [markdownValue, setMarkdownValue] = useState("");
  const [title, setTitle] = useRecoilState(postTitle);
  const [imageValue, setImageValue] = useState<string[]>([]);
  const [previewModalState, setPreviewModalState] = useRecoilState(isIntroduce);
  const [preview, setPreview] = useRecoilState<boolean>(isPreview);
  const navigate = useNavigate();
  const imageRef = useRef<HTMLInputElement>(null);
  const innerRef: any = useRef(null);
  const [purposeSelect, setPurposeSelect] = useRecoilState(purposeSelected);
  const [stateSelect, setStateSelect] = useRecoilState(stateSelected);
  const [fieldSelect, setFieldSelect] = useRecoilState(fieldSelected);
  const [languageSelect, setLanguageSelect] = useRecoilState(languageSelected);
  const [modalState, setModalState] = useRecoilState(tagModalState);
  const [introduce, setIntroduce] = useRecoilState(previewModalValue);
  const setPreviewModal = useSetRecoilState(isIntroduce);
  const FieldArr: any = fieldSelect.map((item) => {
    return item.value;
  });
  const LanguageArr: any = languageSelect.map((item) => {
    return item.value;
  });
  const query = queryString.parse(window.location.search);

  useEffect(() => {
    if (Object.keys(query).length !== 0) {
      getDetailPost(query.id).then((res) => {
        setTitle(res?.data.title);
        setMarkdownSource(res?.data.contents);
        setMarkdownValue(res?.data.contents);
        setIntroduce(res?.data.introduce);
        setPurposeSelect(
          purposeList.find((currVal) => currVal.value === res?.data.purpose)!,
        );
        setStateSelect(
          stateList.find((currVal) => currVal.value === res?.data.status)!,
        );
        setImageValue(res?.data.files);
        setLanguageSelect(modifyLanguage(res?.data.languages));
        setFieldSelect(modifyField(res?.data.fields));
      });
    } else {
      setFieldSelect([{ name: "전체", value: "ALL" }]);
      setLanguageSelect([]);
      setPurposeSelect({ name: "선택", value: "choice" });
      setStateSelect({ name: "선택", value: "choice" });
      setIntroduce("");
      setTitle("");
      setIntroduce("");
      setPreviewModal(false);
    }
  }, []);

  const modifyField = (select: string[]) => {
    return select.map(
      (item, index) => fieldList.find((currVal) => currVal.value === item)!,
    );
  };

  const modifyLanguage = (select: string[]) => {
    return select.map(
      (item, index) =>
        allLanguageList.find((currVal) => currVal.value === item)!,
    );
  };

  const onLoadFile = async (e: any) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    await axios.post(`${baseURL}/board/create-url`, formData).then((res) => {
      setImageValue([...imageValue, res.data]);
      innerRef.current.focus();
      innerRef.current.value += `\n![](${res.data})\n`;
      setMarkdownValue(markdownValue + `\n![](${res.data})`);
      setMarkdownSource(markdownValue + `\n![](${res.data})`);
    });
  };

  const onModalSubmit = () => {
    setPurposeSelect(purposeSelect);
    setStateSelect(stateSelect);
    setFieldSelect(fieldSelect);
    setLanguageSelect(languageSelect);
    setModalState(false);
  };

  const onToolbarClicked = (markdown: string) => {
    switch (markdown) {
      case "heading":
        innerRef.current.focus();
        innerRef.current.value += "\n# ";
        setMarkdownValue(markdownValue + "\n# ");
        setMarkdownSource(markdownValue + "\n# ");
        break;
      case "bold":
        innerRef.current.focus();
        innerRef.current.value += "\n** ** ";
        setMarkdownValue(markdownValue + "\n** ** ");
        setMarkdownSource(markdownValue + "\n** ** ");
        break;
      case "italic":
        innerRef.current.focus();
        innerRef.current.value += "\n*** *** ";
        setMarkdownValue(markdownValue + "\n*** *** ");
        setMarkdownSource(markdownValue + "\n*** *** ");
        break;
      case "list":
        innerRef.current.focus();
        innerRef.current.value += `\n- `;
        setMarkdownValue(markdownValue + `\n- `);
        setMarkdownSource(markdownValue + `\n- `);
        break;
      case "numberlist":
        innerRef.current.focus();
        innerRef.current.value += "\n1. ";
        setMarkdownValue(markdownValue + "\n1. ");
        setMarkdownSource(markdownValue + "\n1. ");
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    // 이미지 아이콘 클릭시
    imageRef.current?.click();
  };

  useBeforeunload((e: any) => {
    // 새로고침 시
    e.preventDefault();
  });

  const handleSubmit = (e: any) => {
    // textarea
    e.preventDefault();
  };

  const handlePost = () => {
    if (title === "" || null) {
      toast.error("이름을 입력해주세요");
    } else if (markdownValue === "" || null) {
      toast.error("내용을 입력해주세요.");
    } else if (fieldSelect === []) {
      toast.error("분야를 선택해주세요.");
    } else if (languageSelect === []) {
      toast.error("언어를 선택해주세요.");
    } else if (purposeSelect.name === "선택") {
      toast.error("목적을 선택해주세요.");
    } else if (stateSelect.name === "선택") {
      toast.error("상태를 선택해주세요.");
    } else if (introduce === "") {
      toast.error("소개 글을 작성해주세요.");
    } else if (Object.keys(query).length === 0) {
      postBoard(
        markdownValue,
        FieldArr,
        introduce,
        LanguageArr,
        purposeSelect.value,
        stateSelect.value,
        title,
        imageValue,
      ).then(() => {
        toast.success("등록되었어요.");
        setFieldSelect([{ name: "전체", value: "ALL" }]);
        setLanguageSelect([]);
        setPurposeSelect({ name: "선택", value: "choice" });
        setStateSelect({ name: "선택", value: "choice" });
        setIntroduce("");
        setTitle("");
        setIntroduce("");
        setPreviewModal(false);
        navigate("/main");
      });
    } else {
      putPost(
        markdownValue,
        fieldSelect.map((item) => {
          return item.value;
        }),
        imageValue,
        introduce,
        languageSelect.map((item) => {
          return item.value;
        }),
        purposeSelect.value,
        stateSelect.value,
        title,
        query.id,
      ).then(() => {
        setFieldSelect([{ name: "전체", value: "ALL" }]);
        setLanguageSelect([]);
        setPurposeSelect({ name: "선택", value: "choice" });
        setStateSelect({ name: "선택", value: "choice" });
        setIntroduce("");
        setTitle("");
        setIntroduce("");
        setPreviewModal(false);
        navigate("/main");
      });
    }
  };

  const MarkdownImg = [
    {
      id: "Heading",
      icon: (
        <BiHeading
          css={S.Markdown}
          onClick={() => onToolbarClicked("heading")}
        />
      ),
    },
    {
      id: "Bold",
      icon: (
        <BiBold css={S.Markdown} onClick={() => onToolbarClicked("bold")} />
      ),
    },
    {
      id: "Italic",
      icon: (
        <BiItalic css={S.Markdown} onClick={() => onToolbarClicked("italic")} />
      ),
    },
    {
      id: "List",
      icon: (
        <AiOutlineUnorderedList
          css={S.Markdown}
          onClick={() => onToolbarClicked("list")}
        />
      ),
    },
    {
      id: "NumberList",
      icon: (
        <AiOutlineOrderedList
          css={S.Markdown}
          onClick={() => onToolbarClicked("numberlist")}
        />
      ),
    },
    {
      id: "Link",
      icon: (
        <>
          <input
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            onChange={onLoadFile}
            css={S.FileIconInput}
            ref={imageRef}
          />
          <button onClick={handleClick} css={S.FileIconButton}>
            <BiImageAdd css={S.Markdown} />
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <div css={S.Positioner}>
        <Input
          type="text"
          theme="WritePageInput"
          fontSize="h1"
          placeholder="프로젝트 이름을 입력하세요"
          fontWeight="600"
          width="100%"
          onChange={(currentTarget) => {
            setTitle(currentTarget.target.value);
          }}
          value={title}
        />
        <div css={S.CheckProjectContainer}>
          <p>프로젝트 : </p>
          <TagSelector
            onSubmit={() => {
              onModalSubmit();
            }}
          />
        </div>
        <div css={S.ContentsContainer}>
          <nav css={S.NavigationBar}>
            <div css={S.NavButtonWrapper}>
              <Button
                children="Write"
                theme={
                  preview === false
                    ? "BlackButtonWithWhiteText"
                    : "WhiteButtonWithBlackText"
                }
                isShadow="Yes"
                size="Small"
                fontSize="h6"
                fontWeight="600"
                onClick={() => setPreview(false)}
              />
              <Button
                children="Preview"
                theme={
                  preview === false
                    ? "WhiteButtonWithBlackText"
                    : "BlackButtonWithWhiteText"
                }
                isShadow="Yes"
                size="Small"
                fontSize="h6"
                fontWeight="600"
                onClick={() => setPreview(true)}
              />
            </div>
            <div css={S.MarkdownWrapper}>
              {MarkdownImg.map((item) => (
                <div>
                  <div onClick={() => item.id}>{item.icon}</div>
                </div>
              ))}
            </div>
          </nav>
          <hr css={S.Line} />
          {preview === false ? (
            <div onSubmit={handleSubmit}>
              <textarea
                css={S.TextArea}
                onChange={({ currentTarget }) => {
                  setMarkdownSource(currentTarget.value);
                  setMarkdownValue(currentTarget.value);
                }}
                value={markdownValue}
                ref={innerRef}
              />
            </div>
          ) : (
            <div css={S.PreviewWrapper}>
              <div css={S.PreviewArea} className="preview">
                {markdownSource}
              </div>
            </div>
          )}
          <div css={S.ButtonWrapper}>
            <Button
              theme="GrayButtonWithBlackTextNoHover"
              children="취소"
              size="Regular"
              fontSize="h5"
              fontWeight="400"
              isShadow="No"
              onClick={() => navigate("/main")}
            />
            <Button
              theme="BlackButtonWithWithTextNoHover"
              children="글 등록"
              size="Regular"
              fontSize="h5"
              fontWeight="600"
              isShadow="No"
              onClick={() => {
                setPreviewModalState(true);
              }}
            />
          </div>
        </div>
      </div>
      {previewModalState && <PreviewModal onSubmit={handlePost} />}
    </>
  );
};

export default WriteTextForm;
