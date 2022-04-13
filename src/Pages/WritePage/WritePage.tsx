/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import * as I from "../../Assets/index";
import { Header } from "../../Components";
import Input from "../../Components/Input/Input";
import WriteSelectItem from "../../Components/Write/WriteSelectItem/WriteSelectItem";
import WriteTextForm from "../../Components/Write/WriteTextForm/WriteTextForm";
import Button from "../../Components/Button/Button";
import { ProfileWrapper } from "../../Styles/GlobalStyle";
import HeaderItem from "../../Components/Common/HeaderItem/HeaderItem";

const WritePage = () => {
  return (
    <>
      <Header theme="Write">
        <HeaderItem />
      </Header>
      <div css={S.Container}>
        <WriteTextForm />
      </div>
    </>
  );
};

export default WritePage;
