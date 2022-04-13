/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as S from "./Style";
import * as I from "../../../Assets";
import { useDecode } from "../../../Hooks/useDecode";
import { getUser } from "../../../Lib/Api/member/member";
import { useNavigate } from "react-router";

interface HeaderProps {
  theme: "NoneLogin" | "Login" | "Write";
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, theme }) => {
  const navigate = useNavigate();

  return (
    <div css={S.Positioner}>
      <I.PuzzleLogo onClick={() => navigate("/main")}></I.PuzzleLogo>
      <div css={[S.RightContainer[theme]]}>{children}</div>
    </div>
  );
};

export default Header;
