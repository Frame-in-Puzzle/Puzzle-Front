/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import * as S from "./Style";
import { BiHeading, BiBold, BiItalic, BiCheckboxChecked } from "react-icons/bi";
import { AiOutlineUnorderedList, AiOutlineOrderedList } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import { useRemark } from "react-remark";
import { useRecoilState } from "recoil";
import { isPreview } from "../../Atoms";
import { useBeforeunload } from "react-beforeunload";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import TagSelector from "../../Templates/Tag/TagSelector";
import axios, { AxiosResponse } from "axios";
import { baseURL } from "../../Shared/config";

interface WriteProps {
  onClick?: Function;
  data?: {
    contents: string;
    fieldList: string[];
    fileUrlList: any;
    languageList: string[];
    purpose: string[];
    status: string[];
    title: string;
  };
}

const WriteTextForm: React.FC<WriteProps> = ({ onClick = () => {} }) => {
  const [markdownSource, setMarkdownSource] = useRemark();
  const [markdownValue, setMarkdownValue] = useState("");
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useRecoilState<boolean>(isPreview);
  const navigate = useNavigate();
  const imageRef = useRef<HTMLInputElement>(null);
  const innerRef: any = useRef(null);

  const onLoadFile = async (e: any) => {
    const formData = new FormData();
    formData.append("files", e.target.files[0]);
    await axios.post(`${baseURL}/board/create-url`, formData).then((res) => {
      innerRef.current.focus();
      innerRef.current.value += `![](${res.data})`;
      setMarkdownValue(markdownValue + `![](${res.data})`);
      setMarkdownSource(markdownValue + `![](${res.data})`);
    });
  };

  const onToolbarClicked = (markdown: string) => {
    switch (markdown) {
      case "heading":
        innerRef.current.focus();
        innerRef.current.value += "# ";
        setMarkdownValue(markdownValue + "# ");
        setMarkdownSource(markdownValue + "# ");
        break;
      case "bold":
        innerRef.current.focus();
        innerRef.current.value += "** ** ";
        setMarkdownValue(markdownValue + "** ** ");
        setMarkdownSource(markdownValue + "** ** ");
        break;
      case "italic":
        innerRef.current.focus();
        innerRef.current.value += "*** *** ";
        setMarkdownValue(markdownValue + "*** *** ");
        setMarkdownSource(markdownValue + "*** *** ");
        break;
      case "list":
        innerRef.current.focus();
        innerRef.current.value += "- ";
        setMarkdownValue(markdownValue + "- ");
        setMarkdownSource(markdownValue + "- ");
        break;
      case "numberlist":
        innerRef.current.focus();
        innerRef.current.value += "1. ";
        setMarkdownValue(markdownValue + "1. ");
        setMarkdownSource(markdownValue + "1. ");
        break;
      case "code":
        innerRef.current.focus();
        innerRef.current.value += "` ` ";
        setMarkdownValue(markdownValue + "` ` ");
        setMarkdownSource(markdownValue + "` ` ");
        break;
      case "checkbox":
        innerRef.current.focus();
        innerRef.current.value += "- [ ] ";
        setMarkdownValue(markdownValue + "- [ ] ");
        setMarkdownSource(markdownValue + "- [ ] ");
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
      alert("제목을 입력해주세요.");
    } else if (markdownValue === "" || null) {
      alert("내용을 입력해주세요.");
    } else {
      console.log("ㅋㅋ");
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
        <>
          <input
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            onChange={onLoadFile}
            css={S.FileIconInput}
            ref={imageRef}
          />
          <button onClick={handleClick} css={S.FileIconButton}>
            <FiLink2 css={S.Markdown} />
          </button>
        </>
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
      <div css={S.CheckProjectContainer}>
        <p>프로젝트 : </p>
        <TagSelector onSubmit={function (): void {}} />
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
              <div css={S.ToolbarBlock}>
                <div onClick={() => onClick(item.id)}>{item.icon}</div>
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
          <div css={S.PreviewArea} className="preview">
            {markdownSource}
          </div>
        )}
      </div>
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
            handlePost();
          }}
        />
      </div>
    </div>
  );
};

export default WriteTextForm;
