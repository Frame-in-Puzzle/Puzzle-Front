/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import PostItem from "../PostItem/PostItem";
import { apiClient } from "../../Lib/Api/apiClient";
import useSWR from "swr";
import TagSelector from "../../Templates/Tag/TagSelector";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  fieldSelected,
  languageSelected,
  purposeSelected,
  stateSelected,
  tagModalState,
} from "../../Atoms";
import { getTagPost } from "../../Lib/Api/post/post";
import { selected } from "../../Type/types";

type post = {
  boardId: number;
  image_url: string;
  status: string;
  title: string;
};

interface PostProps {
  data: { content: post[] };
}

const Post = () => {
  const { data, error } = useSWR<PostProps>("/board/all", apiClient.get);
  const [contents, setContents] = useState<post[]>([]);
  const [isTagSearched, setIsTagSearched] = useState(false);

  const setModalState = useSetRecoilState(tagModalState);
  const purposeSelect = useRecoilValue(purposeSelected);
  const stateSelect = useRecoilValue(stateSelected);
  const fieldSelect = useRecoilValue(fieldSelected);
  const languageSelect = useRecoilValue(languageSelected);

  const onSubmit = () => {
    if (purposeSelect.name === "선택") {
      alert("목적을 선택해주세요");
    } else if (stateSelect.name === "선택") {
      alert("상태를 선택해주세요");
    } else if (
      JSON.stringify(fieldSelect) === `[{"name":"전체","value":"ALL"}]`
    ) {
      setIsTagSearched(false);
      setModalState(false);
    } else {
      getTagPost(fieldSelect, languageSelect, purposeSelect, stateSelect).then(
        (res) => {
          setContents(res?.data.content);
          setModalState(false);
          setIsTagSearched(true);
        },
      );
    }
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div css={S.Positioner}>
      <TagSelector onSubmit={onSubmit} />
      <div css={S.Container}>
        {isTagSearched
          ? contents.map(({ boardId, image_url, status, title }, idx) => (
              <PostItem
                boardId={boardId}
                image_url={image_url}
                status={status}
                title={title}
                key={idx}
              />
            ))
          : data.data.content.map(
              ({ boardId, image_url, status, title }, idx) => (
                <PostItem
                  boardId={boardId}
                  image_url={image_url}
                  status={status}
                  title={title}
                  key={idx}
                />
              ),
            )}
      </div>
    </div>
  );
};

export default Post;
