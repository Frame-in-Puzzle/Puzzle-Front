/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import Button from "../../Button/Button";
import * as S from "./Style";
import * as I from "../../../Assets/index";
import { useRemark } from "react-remark";
import Toolbar from "../Toolbar/Toolbar";
import { useRecoilState } from "recoil";
import { isPreview } from "../../../Atoms";

const WriteTextInput = () => {
  const [reactContent, setMarkdownSource] = useRemark();
  const [markdownValue, setMarkdownValue] = useState("");
  const [preview, setPreview] = useRecoilState<boolean>(isPreview);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(markdownValue);
  };

  return (
    <div css={S.Positioner}>
      <div css={S.ContentsContainer}>
        <Toolbar />
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
            ></textarea>
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
