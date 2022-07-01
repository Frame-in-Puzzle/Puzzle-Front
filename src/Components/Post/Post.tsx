/** @jsxImportSource @emotion/react */
import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import * as S from "./Style";
import PostItem from "../PostItem/PostItem";
import { apiClient } from "../../Lib/Api/apiClient";
import TagSelector from "../../Templates/Tag/TagSelector";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  fieldSelected,
  languageSelected,
  purposeSelected,
  stateSelected,
  tagModalState,
} from "../../Atoms";
import { getTagPost } from "../../Lib/Api/post/post";
import Loader from "../Common/Loader/Loader";
import useSWR from "swr";
import { disconnect } from "process";

export type post = {
  boardId: number;
  imageUrl: string;
  status: string;
  title: string;
};

export interface PostProps {
  data: { content: post[]; totalPages: number | any };
}

const Post = () => {
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [contents, setContents] = useState<post[]>([]);
  const pageEnd = useRef<HTMLHeadingElement | any>();

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

  const callback = (entries: any) => {
    if (entries[0].isIntersecting) {
      loadMore();
    }
  };

  const observer = new IntersectionObserver(callback, {
    threshold: 1,
    root: null,
    rootMargin: "0px",
  });

  const fetchContents = async (pageNumber: number) => {
    const res = await apiClient.get(`/board/all?page=${pageNumber}`);
    setContents((prev) => [...prev, ...res.data.content]);
    setLoading(true);
    if (pageNumber + 1 > res.data.totalPages) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContents(page);
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
    setLoading(false);
    observer.unobserve(pageEnd.current);
    observer.disconnect();
  };

  useEffect(() => {
    if (loading) {
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  return (
    <div css={S.Positioner}>
      <TagSelector onSubmit={onSubmit} />
      <div css={S.Container}>
        {isTagSearched
          ? contents.map(({ boardId, imageUrl, status, title }, idx) => (
              <PostItem
                boardId={boardId}
                imageUrl={imageUrl}
                status={status}
                title={title}
                key={idx}
                ref={pageEnd}
              />
            ))
          : contents.map(
              ({ boardId, imageUrl, status, title }: post, idx: number) => (
                <PostItem
                  boardId={boardId}
                  imageUrl={imageUrl}
                  status={status}
                  title={title}
                  key={idx}
                  ref={pageEnd}
                />
              ),
            )}
      </div>
    </div>
  );
};

export default Post;
