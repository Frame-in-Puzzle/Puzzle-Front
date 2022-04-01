/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { useDecode } from "../../Hooks/useDecode";
import { languageList } from "../../Lib/Data/List";
import { TagItem } from "..";
import { useParams } from "react-router";
import useSWR from "swr";
import { apiClient } from "../../Lib/Api/apiClient";

interface UserInfo {
  data: {
    name: string;
    bio: string;
    email: string;
    imageUrl: string;
    field: string;
    language: string[];
    url: string;
  };
}

const ProfileHeader: React.FC = () => {
  const { sub } = useParams();

  const { data, error } = useSWR<UserInfo>(`/profile/${sub}`, apiClient.get);

  if (!data) return <div></div>;
  return (
    <div css={S.Positioner}>
      <div css={S.Container}>
        <div css={S.ImgWrapper}>
          <img css={S.ImageUrl} src={data.data.imageUrl} />
        </div>
        <div css={S.rightbox}>
          <div css={S.TitleWrapper}>
            <p css={S.Name}>{data.data.name}</p>
            <a href={data.data.url} target="_blank" css={S.Icon}>
              <FaGithubSquare />
            </a>
            <div css={S.Mail}>
              <a href={`mailto:${data.data.email}`}>
                <ImMail css={S.MailIcon}></ImMail>
              </a>
              <p>{data.data.email}</p>
            </div>
          </div>
          <p css={S.Introduction}>{data.data.bio}</p>
          <div css={S.LanguageWrapper}>
            {data.data.language.map((language, idx) => (
              <TagItem theme="WhiteTag" key={idx}>
                {language}
              </TagItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
