/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../../Assets";

interface HeaderProps {
  theme: "NoneLogin" | "Login" | "Write";
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, theme }) => {
  return (
    <div css={S.Positioner}>
      <I.PuzzleLogo />
      <div css={[S.RightContainer[theme]]}>{children}</div>
    </div>
  );
};

export default Header;
