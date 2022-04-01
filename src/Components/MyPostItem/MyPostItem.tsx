/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { FiX } from "react-icons/fi";
import { useNavigate, useParams } from "react-router";
import { TagItem } from "..";
import { deletePost } from "../../Lib/Api/post/post";
import { mutate } from "swr";
import { useDecode } from "../../Hooks/useDecode";

type MyPostProps = {
  boardId: number;
  title: string;
  thumbnail: any;
  contents: string;
  fields: string[];
  date: string;
  status: string;
};

const MyPostItem: React.FC<MyPostProps> = ({
  boardId,
  title,
  thumbnail,
  contents,
  fields,
  date,
  status,
}) => {
  const deletepost = async () => {
    await deletePost(boardId);
    await mutate(`/profile/${sub}/board/?page=0`);
  };

  const { sub } = useParams();
  const { sub: id } = useDecode();
  const navigate = useNavigate();

  return (
    <div css={S.Positioner}>
      {sub == id && (
        <FiX
          css={S.Icon}
          onClick={() => {
            deletepost();
          }}
        />
      )}
      <div
        css={S.Container}
        onClick={() => {
          navigate(`/detail/${boardId}`);
        }}
      >
        <div css={S.Image}>{thumbnail}</div>

        <div css={S.rightbox}>
          <span css={S.Title}>{title}</span>
          <p css={S.content}>{contents}</p>
          <div>
            {fields.map((fields, idx) => (
              <TagItem theme="WhiteTag" key={idx}>
                {fields}
              </TagItem>
            ))}
          </div>

          <p css={S.State}>
            {date.slice(0, 10)} · {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPostItem;
