/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import Button from "../../Button/Button";
import * as S from "./Style";
import { BiHeading, BiBold, BiItalic, BiCheckboxChecked } from "react-icons/bi";
import { AiOutlineUnorderedList, AiOutlineOrderedList } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import { useRemark } from "react-remark";
import { useRecoilState } from "recoil";
import { isPreview } from "../../../Atoms";
import { useBeforeunload } from "react-beforeunload";
import { postBoard } from "../../../Lib/Api/post/post";
import Input from "../../Input/Input";
import WriteSelectItem from "../WriteSelectItem/WriteSelectItem";
import { useNavigate } from "react-router-dom";

interface WriteProps {
  onClick?: Function;
  data?: {
    contents: string;
    fieldList: ["BACKEND", "FRONTEND"];
    fileUrlList: any;
    languageList: ["SPRING", "REACT"];
    purpose: ["프로젝트", "대회", "서비스", "스터디"];
    status: ["모집중", "모집완료"];
    title: string;
  };
}

const handleDragEnter = (e: any) => {
  e.preventDefault();
  e.stopPropagation();
};
const handleDragLeave = (e: any) => {
  e.preventDefault();
  e.stopPropagation();
};
const handleDragOver = (e: any) => {
  e.preventDefault();
  e.stopPropagation();
};
const handleDrop = (e: any) => {
  e.preventDefault();
  e.stopPropagation();
};

const WriteTextForm: React.FC<WriteProps> = ({ onClick = () => {} }) => {
  const [markdownSource, setMarkdownSource] = useRemark();
  const [markdownValue, setMarkdownValue] = useState("");
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useRecoilState<boolean>(isPreview);
  const innerRef: any = useRef(null);
  const navigate = useNavigate();

  useBeforeunload((e: any) => {
    e.preventDefault();
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handlePost = () => {
    postBoard(
      markdownValue,
      ["BACKEND", "FRONTEND"],
      ["SPRING", "REACT"],
      "PROJECT",
      "RECRUITMENT",
      title,
      [],
    ).then(() => {
      alert("글이 등록되었어요");
      navigate("/main");
    });
  };

  const onToolbarClicked = (markdown: string) => {
    switch (markdown) {
      case "heading":
        innerRef.current.focus();
        innerRef.current.value += "# ";
        break;
      case "bold":
        innerRef.current.focus();
        innerRef.current.value += "** ** ";
        break;
      case "italic":
        innerRef.current.focus();
        innerRef.current.value += "*** *** ";
        break;
      case "list":
        innerRef.current.focus();
        innerRef.current.value += "- ";
        break;
      case "numberlist":
        innerRef.current.focus();
        innerRef.current.value += "1. ";
        break;
      case "code":
        innerRef.current.focus();
        innerRef.current.value += "` ` ";
        break;
      case "link":
        innerRef.current.focus();
        innerRef.current.value += "![]() ";
        break;
      case "checkbox":
        innerRef.current.focus();
        innerRef.current.value += "[] ";
        break;
      default:
        break;
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
      id: "Code",
      icon: (
        <BsCodeSlash
          css={S.Markdown}
          onClick={() => onToolbarClicked("code")}
        />
      ),
    },
    {
      id: "Link",
      icon: (
        <FiLink2 css={S.Markdown} onClick={() => onToolbarClicked("link")} />
      ),
    },
    {
      id: "CheckBox",
      icon: (
        <BiCheckboxChecked
          css={S.Markdown}
          onClick={() => onToolbarClicked("checkbox")}
        />
      ),
    },
  ];

  return (
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
      <WriteSelectItem />
      <div css={S.ContentsContainer}>
        <nav css={S.NavigationBar}>
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
          <div css={S.MarkdownContainer}>
            {MarkdownImg.map((item) => (
              <div css={S.ToolbarBlock}>
                <div css={S.ToolbarItem} onClick={() => onClick(item.id)}>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </nav>
        <hr css={S.Line} />
        {preview === false ? (
          <div
            onSubmit={handleSubmit}
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => handleDragOver(e)}
            onDragEnter={(e) => handleDragEnter(e)}
            onDragLeave={(e) => handleDragLeave(e)}
          >
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
          <div css={S.TextArea} className="preview">
            {markdownSource}
          </div>
        )}
      </div>
      <div css={S.ButtonContainer}>
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
          onClick={() => handlePost()}
        />
      </div>
    </div>
  );
};

export default WriteTextForm;
