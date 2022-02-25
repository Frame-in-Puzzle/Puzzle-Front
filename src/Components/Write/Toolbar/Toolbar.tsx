/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import Button from "../../Button/Button";
import * as S from "./Style";
import * as I from "../../../Assets/index";
import { useRecoilState } from "recoil";
import { isPreview } from "../../../Atoms";

export interface ToolbarProps {
  onClick?: Function;
  innerRef?: React.RefObject<HTMLDivElement>;
}

const Toolbar: React.FC<ToolbarProps> = ({ onClick = () => {}, innerRef }) => {
  const [preview, setPreview] = useRecoilState<boolean>(isPreview);

  const MarkdownImg = [
    {
      id: 1,
      image: (
        <I.MarkdownHeader css={S.Markdown} onClick={() => onClick("Header")} />
      ),
    },
    {
      id: 2,
      image: (
        <I.MarkdownBold css={S.Markdown} onClick={() => onClick("Bold")} />
      ),
    },
    {
      id: 3,
      image: (
        <I.MarkdownItalic css={S.Markdown} onClick={() => onClick("Italic")} />
      ),
    },
    {
      id: 4,
      image: (
        <I.MarkdownList css={S.Markdown} onClick={() => onClick("List")} />
      ),
    },
    {
      id: 5,
      image: (
        <I.MarkdownNumberList
          css={S.Markdown}
          onClick={() => onClick("NumberList")}
        />
      ),
    },
    {
      id: 6,
      image: (
        <I.MarkdownCode css={S.Markdown} onClick={() => onClick("Code")} />
      ),
    },
    {
      id: 7,
      image: <I.MarkdownURL css={S.Markdown} onClick={() => onClick("URL")} />,
    },
    {
      id: 8,
      image: (
        <I.MarkdownVerified
          css={S.Markdown}
          onClick={() => onClick("Verified")}
        />
      ),
    },
  ];

  return (
    <div>
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
        <div css={S.MarkdownContainer} ref={innerRef}>
          {MarkdownImg.map((item) => (
            <div css={S.MarkdownWrapper} key={item.id}>
              {item.image}
            </div>
          ))}
        </div>
      </nav>
      <hr css={S.Line} />
    </div>
  );
};

export default Toolbar;
