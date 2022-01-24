/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { FiX } from "react-icons/fi";

const MyPostItem: React.FC = () => {
  return (
    <div css={S.Positioner}>
      <div css={S.Container}>
        <div css={S.Image}></div>

        <div css={S.rightbox}>
          <FiX css={S.Icon} />
          <p css={S.Category}>Project</p>
          <span css={S.Title}>PUZZLE</span>
          <p css={S.content}>
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라. .
            .
          </p>
          <p css={S.State}>모집중</p>
        </div>
      </div>
    </div>
  );
};

export default MyPostItem;
