/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { rightbox } from "../MyPostItem/Style";
import { FaGithubSquare } from "react-icons/fa";

const ProfileHeader: React.FC = () => {
  return (
    <div css={S.Positioner}>
      <div css={S.Container}>
        <div css={S.ImgWrapper}>
          <I.ProfileImg />
        </div>
        <div css={S.rightbox}>
          <FaGithubSquare css={S.Icon} />
          <p css={S.Name}>Yuseonii</p>
          <p css={S.Introduction}>Figma를 이용하여 디자인을 할 수 있습니다.</p>
          <div css={S.LanguageWrapper}>
            <div css={S.Language}>JavaScript</div>
            <div css={S.Language}>C</div>
            <div css={S.Language}>Swift</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
