/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
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

interface ToolbarProps {
  onClick?: Function;
}

const WriteTextInput: React.FC<ToolbarProps> = ({ onClick = () => {} }) => {
  const [markdownSource, setMarkdownSource] = useRemark();
  const [markdownValue, setMarkdownValue] = useState("");
  const [preview, setPreview] = useRecoilState<boolean>(isPreview);
  const innerRef: any = useRef(null);

  useBeforeunload((e: any) => {
    e.preventDefault();
  });

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

  const onToolbarClicked = (markdown: string) => {
    switch (markdown) {
      case "heading":
        innerRef.current.focus();
        innerRef.current.value += "#";
        break;
      case "bold":
        innerRef.current.focus();
        innerRef.current.value += "** **";
        break;
      case "italic":
        innerRef.current.focus();
        innerRef.current.value += "*** ***";
        break;
      case "list":
        innerRef.current.focus();
        innerRef.current.value += "-";
        break;
      case "numberlist":
        innerRef.current.focus();
        innerRef.current.value += "1.";
        break;
      case "code":
        innerRef.current.focus();
        innerRef.current.value += "` `";
        break;
      case "link":
        innerRef.current.focus();
        innerRef.current.value += "[]()";
        break;
      case "checkbox":
        innerRef.current.focus();
        innerRef.current.value += "[]";
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(markdownValue);
  };

  return (
    <div css={S.Positioner}>
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
              cols={40}
              rows={5}
              ref={innerRef}
            />
          </div>
        ) : (
          <div css={S.TextArea} className="preview">
            {markdownSource}
          </div>
        )}
      </div>
    </div>
  );
};

export default WriteTextInput;
