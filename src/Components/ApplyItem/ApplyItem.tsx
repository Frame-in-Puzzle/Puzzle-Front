/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { TagItem, Button } from "../";
import { useDecode } from "../../Hooks/useDecode";
import { patchAttend } from "../../Lib/Api/attend/attend";
import { useParams } from "react-router";
import { mutate } from "swr";

type Attend = {
  attendStatus: string;
  githubId: string;
  id: number;
  imageUrl: string;
  languages: string[];
  name: string;
};

interface AttendProps {
  attend: Attend;
  writer: string;
}

const ApplyItem: React.FC<AttendProps> = ({ attend, writer }) => {
  const { sub } = useDecode();
  const { id } = useParams();

  return (
    <div css={S.Positioner}>
      <div css={S.ApplyContainer}>
        <div css={S.InfoContainer}>
          <img src={attend.imageUrl} alt="" css={S.Image} />
          <div css={S.InfoWrapper}>
            <div css={S.Info}>
              <span css={S.Name}>{attend.name}</span>
              <span css={S.Date}>{}</span>
            </div>
            <div>
              {attend.languages.map((item, key) => (
                <TagItem theme="LightGrayTag" key={key}>
                  {item}
                </TagItem>
              ))}
            </div>
          </div>
        </div>
        <div css={S.ButtonWrapper}>
          {sub === writer ? (
            attend.attendStatus === "WAIT" ? (
              <>
                <Button
                  theme="GrayButtonWithWhiteTextGrayHover"
                  size="Small"
                  fontSize="h6"
                  fontWeight="400"
                  isShadow="No"
                  onClick={() => {
                    patchAttend(id, attend.id, "REFUSE");
                    mutate(`/attend/board/${id}`);
                  }}
                >
                  거절
                </Button>
                <Button
                  theme="BlackButtonWith5radius"
                  size="Small"
                  fontSize="h6"
                  fontWeight="400"
                  isShadow="No"
                  onClick={() => {
                    patchAttend(id, attend.id, "ACCEPT");
                    mutate(`/attend/board/${id}`);
                  }}
                >
                  수락
                </Button>
              </>
            ) : attend.attendStatus === "ACCEPT" ? (
              <span>수락되었습니다.</span>
            ) : (
              <span>거절되었습니다.</span>
            )
          ) : (
            ""
          )}
        </div>
      </div>
      <div css={S.Line}></div>
    </div>
  );
};

export default ApplyItem;
