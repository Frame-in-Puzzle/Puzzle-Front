/** @jsxImportSource @emotion/react */
import { Button } from "../../../Components";
import * as S from "./Style";

interface Props {
  githubIdChanged: boolean;
  emailChanged: boolean;
  bioChanged: boolean;
}

const SignUpButton: React.FC<Props> = ({
  githubIdChanged,
  emailChanged,
  bioChanged,
}) => {
  const onSubmit = () => {
    if (!githubIdChanged) {
      alert("이름을 입력해주세요..");

      return;
    }
    if (!emailChanged) {
      alert("Email을 입력해주세요..");
      return;
    }
    if (!bioChanged) {
      alert("한 줄 소개 을 입력해주세요..");
      return;
    }
  };

  return (
    <div css={S.Positioner}>
      <Button
        theme="BlackButtonWith5radius"
        fontSize="h4"
        size="Medium"
        isShadow="No"
        fontWeight="600"
        onClick={onSubmit}
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
