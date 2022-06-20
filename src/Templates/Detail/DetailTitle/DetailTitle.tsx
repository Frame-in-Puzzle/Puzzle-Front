/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./Style";
import * as I from "../../../Assets";
import { DropDownList, TagItem } from "../../../Components";
import { useDecode } from "../../../Hooks/useDecode";
import { Link } from "react-router-dom";

type Title = {
  title: string;
  name: string;
  date: Date;
  tag: string[];
};

interface TitleProps {
  TitleObj: Title;
}

const DetailTitle: React.FC<TitleProps> = ({ TitleObj }) => {
  const { sub } = useDecode();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div css={S.Positioner}>
      <div css={S.TitleContainer}>
        <h1 css={S.Title}>{TitleObj.title}</h1>
        {sub === TitleObj.name && (
          <ul css={S.List}>
            <li>게시물 수정</li>
            <li>게시물 삭제</li>
          </ul>
        )}
      </div>
      <div>
        <Link to={`/profile/${TitleObj.name}`} css={S.Name}>
          {TitleObj.name}
        </Link>
        <span css={S.Separate}>·</span>
        <span css={S.Date}>
          {TitleObj.date.toString().substring(0, 10).replace(/[*-]/g, ".")}
        </span>
      </div>
      <div css={S.TagContainer}>
        {TitleObj.tag.map((item, idx) => (
          <TagItem theme="LightGrayTag" key={idx}>
            {item}
          </TagItem>
        ))}
      </div>
    </div>
  );
};

export default DetailTitle;
