/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as S from "./Style";
import * as I from "../../../Assets";
import { useDecode } from "../../../Hooks/useDecode";
import { getUser } from "../../../Lib/Api/member/member";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { modalState } from "../../../Atoms";
import { SigninModal } from "../../";

interface HeaderProps {
  theme: "NoneLogin" | "Login" | "Write";
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, theme }) => {
  const navigate = useNavigate();
  const [headerModalState, setHeaderModalState] = useRecoilState(modalState);

  const closeModal = (e: any) => {
    e.preventDefault();
    setHeaderModalState(false);
  };

  return (
    <>
      {headerModalState && <SigninModal closeModal={closeModal} />}
      <div css={S.Positioner}>
        <I.PuzzleLogo onClick={() => navigate("/main")}></I.PuzzleLogo>
        <div css={[S.RightContainer[theme]]}>{children}</div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
