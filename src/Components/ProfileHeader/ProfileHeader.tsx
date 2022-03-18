/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

const ProfileHeader: React.FC = () => {
  return (
    <div css={S.Positioner}>
      <div css={S.Container}>
        <div css={S.ImgWrapper}>
          <I.ProfileImg />
        </div>
        <div css={S.rightbox}>
          <div css={S.TitleWrapper}>
            <p css={S.Name}>Yuseonii</p>
            <FaGithubSquare css={S.Icon} />
            <div css={S.Mail}>
              <a href="mailto:s20063@gsm.hs.kr">
                <ImMail css={S.MailIcon}></ImMail>
              </a>
              <p>yuseonii@naver.com</p>
            </div>
          </div>
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
