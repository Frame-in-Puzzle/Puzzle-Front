/** @jsxImportSource @emotion/react */
import React from "react";
import Button from "../../Button/Button";
import * as S from "./Style";
import * as I from "../../../Assets/index";

const MarkdownImg = [
  {
    id: 1,
    image: <I.MarkdownHeader />,
  },
  {
    id: 2,
    image: <I.MarkdownBold />,
  },
  {
    id: 3,
    image: <I.MarkdownItalic />,
  },
  {
    id: 4,
    image: <I.MarkdownList />,
  },
  {
    id: 5,
    image: <I.MarkdownNumberList />,
  },
  {
    id: 6,
    image: <I.MarkdownCode />,
  },
  {
    id: 7,
    image: <I.MarkdownURL />,
  },
  {
    id: 8,
    image: <I.MarkdownVerified />,
  },
];

const WriteTextInput = () => {
  return (
    <div css={S.Positioner}>
      <div css={S.ContentsContainer}>
        <nav css={S.NavigationBar}>
          <Button
            children="Write"
            theme="BlackButtonWithWhiteText"
            isShadow="Yes"
            size="Small"
            fontSize="h6"
            fontWeight="600"
          />
          <Button
            children="Preview"
            theme="WhiteButtonWithBlackText"
            isShadow="Yes"
            size="Small"
            fontSize="h6"
            fontWeight="600"
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
        <textarea css={S.TextArea} />
      </div>
    </div>
  );
};

export default WriteTextInput;
