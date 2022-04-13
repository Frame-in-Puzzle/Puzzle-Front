import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 1200px;
  margin: 5% auto;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const TitleContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = css`
  font-size: ${theme.fonts.h2};
  word-break: break-all;
  width: 95%;
`;

export const Name = css`
  font-weight: bold;
  font-size: ${theme.fonts.h5};
`;

export const Date = css`
  font-size: ${theme.fonts.h5};
`;

export const Separate = css`
  font-weight: bold;
  font-size: ${theme.fonts.h5};
  margin: 0 7px;
`;

export const TagContainer = css`
  margin-top: 15px;
`;

export const ListStyle = css`
  padding: 20px 22px;
  width: 160px;
  font-size: ${theme.fonts.h5};
  border: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  list-style: none;
  border-radius: 10px;
  align-items: center;
  position: absolute;
  top: 70px;
  right: -68px;
  li {
    margin-top: 15px;
    cursor: pointer;
  }
  li:nth-of-type(1) {
    margin: 0;
  }
`;

export const List = css`
  list-style: none;
  width: 15%;
  display: flex;
  justify-content: space-between;
  li {
    color: #acacac;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: flex-start;
    li:nth-of-type(2) {
      margin-left: 1rem;
    }
  }
`;
