/** @jsxImportSource @emotion/react */
import React from "react";
import { Button } from "../../../Components";
import * as S from "./Style";

type DetailWriter = {
  image: string;
  name: string;
  description: string;
};

interface DetailWriterProps {
  writerObj: DetailWriter;
}

const DetailWriter: React.FC<DetailWriterProps> = ({ writerObj }) => {
  return (
    <>
      <div css={S.Positioner}>
        <div css={S.RightContainer}>
          <img src={writerObj.image} alt="작성자 이미지" css={S.Image} />
          <div css={S.RightWrapper}>
            <span css={S.Name}>{writerObj.name}</span>
            <span css={S.Description}>{writerObj.description}</span>
          </div>
        </div>
        <div css={S.Line}></div>
        <div css={S.Button}>
          <Button
            size="Regular"
            fontSize="h5"
            isShadow="No"
            theme="BlackButton"
            fontWeight="400"
          >
            신청하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default DetailWriter;
