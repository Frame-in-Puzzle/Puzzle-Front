/** @jsxImportSource @emotion/react */
import { Button } from "../../../Components";
import * as S from "./Style";

const SignUpButton = () => {
  return (
    <div css={S.Positioner}>
      <Button
        theme="BlackButtonWith5radius"
        fontSize="h4"
        size="Medium"
        isShadow="No"
        fontWeight="600"
      >
        등록
      </Button>
      <Button
        theme="GrayButtonWithWhiteTextGrayHover"
        fontSize="h4"
        size="Medium"
        isShadow="No"
        fontWeight="600"
      >
        취소
      </Button>
    </div>
  );
};

export default SignUpButton;
