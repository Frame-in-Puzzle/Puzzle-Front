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
import { useParams } from "react-router";
import useSWR from "swr";
import { apiClient } from "../../Lib/Api/apiClient";
import axios from "axios";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";

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

  if (!board) return <div />;
  if (boardError) return <div />;
  return (
    <>
      <Header theme="Login">
        <HeaderItem />
      </Header>
      <DetailTitle
        TitleObj={{
          title: board.data.title,
          name: board.data.githubId,
          date: board.data.createdAt,
          tag: board.data.fields,
        }}
      />
      <DetailContent contents={board.data.contents} />
      <DetailWriter name={board.data.name} githubId={board.data.githubId} />
      <DetailApply
        apply={3}
        applyObj={[
          {
            Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
            name: "ImChangGyu",
            tag: ["프론트엔드", "TS", "React", "Next"],
            date: "2022.1.10",
          },
          {
            Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
            name: "ImChangGyu",
            tag: ["프론트엔드", "TS", "React", "Next"],
            date: "2022.1.10",
          },
          {
            Image: "https://avatars.githubusercontent.com/u/66630940?v=4",
            name: "ImChangGyu",
            tag: ["프론트엔드", "TS", "React", "Next"],
            date: "2022.1.10",
          },
        ]}
      />
    </>
  );
};

export default DetailPage;
