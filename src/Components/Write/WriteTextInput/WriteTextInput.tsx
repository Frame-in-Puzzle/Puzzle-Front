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

  const onClicked = (markdown: string) => {
    switch (markdown) {
      case "heading":
        innerRef.current.focus();
        innerRef.current.selectionStart = "#";
        break;
      case "bold":
        innerRef.current.focus();
        innerRef.current.value = "** **";
        break;
      case "italic":
        innerRef.current.focus();
        innerRef.current.value = "*** ***";
        break;
      case "list":
        innerRef.current.focus();
        innerRef.current.value = "-";
        break;
      case "numberlist":
        innerRef.current.focus();
        innerRef.current.value = "1.";
        break;
      case "code":
        innerRef.current.focus();
        innerRef.current.value = "` `";
        break;
      case "link":
        innerRef.current.focus();
        innerRef.current.value = "[]()";
        break;
      case "checkbox":
        innerRef.current.focus();
        innerRef.current.value = "[]";
        break;
      default:
        break;
    }
  };

  const MarkdownImg = [
    {
      id: "Heading",
      image: (
        <BiHeading css={S.Markdown} onClick={() => onClicked("heading")} />
      ),
    },
    {
      id: "Bold",
      image: <BiBold css={S.Markdown} onClick={() => onClicked("bold")} />,
    },
    {
      id: "Italic",
      image: <BiItalic css={S.Markdown} onClick={() => onClicked("italic")} />,
    },
    {
      id: "List",
      image: (
        <AiOutlineUnorderedList
          css={S.Markdown}
          onClick={() => onClicked("list")}
        />
      ),
    },
    {
      id: "NumberList",
      image: (
        <AiOutlineOrderedList
          css={S.Markdown}
          onClick={() => onClicked("numberlist")}
        />
      ),
    },
    {
      id: "Code",
      image: <BsCodeSlash css={S.Markdown} onClick={() => onClicked("code")} />,
    },
    {
      id: "Link",
      image: <FiLink2 css={S.Markdown} onClick={() => onClicked("link")} />,
    },
    {
      id: "CheckBox",
      image: (
        <BiCheckboxChecked
          css={S.Markdown}
          onClick={() => onClicked("checkbox")}
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
                  {item.image}
                </div>
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
