/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../Assets";
import { FiX } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";

interface ModalProps {
  closeModal: (e: any) => void;
}

const SigInModal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div css={S.Positioner}>
      <div css={S.Overay} onClick={(e) => closeModal(e)} />
      <div css={S.Container}>
        <div css={S.ModalHeader}>
          <div css={S.ModalHeaderItem}>
            <I.SigninModalImg />
            <FiX css={S.Icon} onClick={(e) => closeModal(e)} />
          </div>
        </div>
        <div css={S.Content}>
          <h1>PUZZLE 에 오신 것을 환영합니다!</h1>
          <a href={process.env.REACT_APP_OAUTH_URL} css={S.GithubContent}>
            <FaGithubSquare css={S.GithubIcon} />
            <h2>Github 로그인</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

{
  /* <S.Overay onClick={closeModal(e)} />
<S.ModalHeader>
  <I.SigninModalImg />
  <button onClick={closeModal(e)}>
  </button>
</S.ModalHeader>
<h1>PUZZLE 에 오신 것을 환영합니다!</h1>
<FaGithubSquare css={S.Icon} /> */
}

export default SigInModal;
