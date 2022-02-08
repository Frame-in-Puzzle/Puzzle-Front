/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../../Assets/index";

const ProfileHeader = () => {
  return (
    <div css={S.Positioner}>
      <p css={S.MainText}>프로필</p>
      <hr css={S.Line} />
      <I.Edit css={S.EditImage} />
      <div css={S.ItemContainer}>
        <div css={S.ImageWrapper}>
          <img src="https://avatars.githubusercontent.com/u/66630940?v=4" />
          <div css={S.ButtonWrapper}>
            <button css={S.UploadBtn}>이미지 업로드</button>
            <button css={S.DeleteBtn}>이미지 제거</button>
          </div>
        </div>
        <hr css={S.VerticalLine} />
        <div css={S.TextWrapper}>
          <p css={S.Name}>임창규</p>
          <p css={S.Description}>반갑다 난 창규다.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
