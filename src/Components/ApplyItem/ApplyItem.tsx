/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { TagItem, Button } from "../";

type ApplyItem = {
  Image: string;
  name: string;
  date: string;
  tag: string[];
};

interface ApplyItemProps {
  applyObj: ApplyItem;
}

const ApplyItem: React.FC<ApplyItemProps> = ({ applyObj }) => {
  return (
    <div css={S.Positioner}>
      <div css={S.ApplyContainer}>
        <div css={S.InfoContainer}>
          <img src={applyObj.Image} alt="" css={S.Image} />
          <div css={S.InfoWrapper}>
            <div css={S.Info}>
              <span css={S.Name}>{applyObj.name}</span>
              <span css={S.Date}>{applyObj.date}</span>
            </div>
            <div>
              {applyObj.tag.map((item, key) => (
                <TagItem theme="LightGrayTag" key={key}>
                  {item}
                </TagItem>
              ))}
            </div>
          </div>
        </div>
        <div css={S.ButtonWrapper}>
          <Button
            theme="GrayButtonWithWhiteTextGrayHover"
            size="Small"
            fontSize="h6"
            fontWeight="400"
            isShadow="No"
          >
            거절
          </Button>
          <Button
            theme="BlackButtonWith5radius"
            size="Small"
            fontSize="h6"
            fontWeight="400"
            isShadow="No"
          >
            수락
          </Button>
        </div>
      </div>
      <div css={S.Line}></div>
    </div>
  );
};

export default ApplyItem;
