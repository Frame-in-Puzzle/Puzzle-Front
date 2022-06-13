/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Button, Header } from "../../Components";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import * as I from "../../Assets";
import {
  DetailTitle,
  DetailContent,
  DetailWriter,
  DetailApply,
} from "../../Templates";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiClient } from "../../Lib/Api/apiClient";
import axios from "axios";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";
import { useLogin } from "../../Hooks/useLogin";
import HeaderNotLoginItem from "../../Components/Common/HeaderNotLoginItem/HeaderNotLoginItem";
import Sign from "../../Components/SigInModal/SiginModal";
import { useRecoilState } from "recoil";
import { GlobalMarkdownValue } from "../../Atoms/AtomContainer";

interface BoardProps {
  data: {
    contents: string;
    fields: string[];
    files: string[];
    githubId: string;
    createdAt: Date;
    id: number;
    languages: string[];
    name: string;
    purpose: string;
    status: string;
    title: string;
  };
}

const DetailPage = () => {
  const params = useParams();
  const { data: board, error: boardError } = useSWR<BoardProps>(
    `/board/${params.id}`,
    apiClient.get,
  );

  const isLogin = useLogin();

  const [modalState, setModalState] = useState(false);

  const [globalMarkdownValue, setGlobalMarkdownValue] =
    useRecoilState<any>(GlobalMarkdownValue);

  const closeModal = (e: Event) => {
    e.preventDefault();
    setModalState(false);
  };

  if (!board) return <div />;
  if (boardError) return <div />;
  return (
    <>
      <Header theme="Login">
        {isLogin ? (
          <HeaderItem />
        ) : (
          <HeaderNotLoginItem setModalState={setModalState} />
        )}
      </Header>
      {modalState && <Sign closeModal={closeModal} />}

      <DetailTitle
        TitleObj={{
          title: board.data.title,
          name: board.data.githubId,
          date: board.data.createdAt,
          tag: board.data.fields,
        }}
      />
      <DetailContent contents={globalMarkdownValue} />
      <DetailWriter name={board.data.name} githubId={board.data.githubId} />
      <DetailApply board_idx={board.data.id} writer={board.data.githubId} />
    </>
  );
};

export default DetailPage;
