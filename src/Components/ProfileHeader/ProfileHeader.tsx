/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { useDecode } from "../../Hooks/useDecode";
import { getUser } from "../../Lib/Api/member/member";
import { languageList } from "../../Lib/Data/List";
import { TagItem } from "..";
import { useParams } from "react-router";

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

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [language, setLanguage] = useState<string[]>([]);
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    getUser(sub).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setBio(res.data.bio);
      setImageUrl(res.data.imageUrl);
      setLanguage(res.data.language);
      setUrl(res.data.url);
    });
  }, []);

  return (
    <div css={S.Positioner}>
      <div css={S.Container}>
        <div css={S.ImgWrapper}>
          <img css={S.ImageUrl} src={imageUrl} />
        </div>
        <div css={S.rightbox}>
          <div css={S.TitleWrapper}>
            <p css={S.Name}>{name}</p>
            <a href={url} target="_blank" css={S.Icon}>
              <FaGithubSquare />
            </a>
            <div css={S.Mail}>
              <a href={`mailto:${email}`}>
                <ImMail css={S.MailIcon}></ImMail>
              </a>
              <p>{email}</p>
            </div>
          </div>
          <p css={S.Introduction}>{bio}</p>
          <div css={S.LanguageWrapper}>
            {language.map((language, idx) => (
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
