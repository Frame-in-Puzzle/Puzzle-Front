/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import Button from "../../Button/Button";
import * as S from "./Style";
import * as I from "../../../Assets/index";
import { useRemark } from "react-remark";
import { useRecoilState } from "recoil";
import { isPreview } from "../../../Atoms";

const WriteTextInput = () => {
  const [reactContent, setMarkdownSource] = useRemark();
  const [markdownValue, setMarkdownValue] = useState("");
  const [preview, setPreview] = useRecoilState<boolean>(isPreview);

  const setToolbarValue = (markdown: string) => {
    switch (markdown) {
      case "Header":
        setMarkdownValue(`${markdownValue} \n#`);
        break;
      case "Bold":
        setMarkdownValue(`${markdownValue}****`);
        break;
      case "Italic":
        setMarkdownValue(`${markdownValue}******`);
        break;
      case "List":
        setMarkdownValue(`\n - ${markdownValue} \n`);
        break;
      case "NumberList":
        setMarkdownValue(`\n1. ${markdownValue}`);
        break;
      case "Code":
        setMarkdownValue(`\n ${markdownValue + "``````"}`);
        break;
      case "URL":
        setMarkdownValue(`${markdownValue} \n#`);
        break;
      case "Verified":
        setMarkdownValue(`[] ${markdownValue} \n#`);
        break;
      default:
        break;
    }
  };

  const MarkdownImg = [
    {
      id: 1,
      image: (
        <I.MarkdownHeader
          css={S.Markdown}
          onClick={() => setToolbarValue("Header")}
        />
      ),
    },
    {
      id: 2,
      image: (
        <I.MarkdownBold
          css={S.Markdown}
          onClick={() => setToolbarValue("Bold")}
        />
      ),
    },
    {
      id: 3,
      image: (
        <I.MarkdownItalic
          css={S.Markdown}
          onClick={() => setToolbarValue("Italic")}
        />
      ),
    },
    {
      id: 4,
      image: (
        <I.MarkdownList
          css={S.Markdown}
          onClick={() => setToolbarValue("List")}
        />
      ),
    },
    {
      id: 5,
      image: (
        <I.MarkdownNumberList
          css={S.Markdown}
          onClick={() => setToolbarValue("NumberList")}
        />
      ),
    },
    {
      id: 6,
      image: (
        <I.MarkdownCode
          css={S.Markdown}
          onClick={() => setToolbarValue("Code")}
        />
      ),
    },
    {
      id: 7,
      image: (
        <I.MarkdownURL
          css={S.Markdown}
          onClick={() => setToolbarValue("URL")}
        />
      ),
    },
    {
      id: 8,
      image: (
        <I.MarkdownVerified
          css={S.Markdown}
          onClick={() => setToolbarValue("Verified")}
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
              <div css={S.MarkdownWrapper} key={item.id}>
                {item.image}
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
            />
          </div>
        ) : (
          <div css={S.TextArea} className="preview">
            <p>{reactContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WriteTextInput;
