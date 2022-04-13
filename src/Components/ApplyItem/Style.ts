import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const Positioner = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ApplyContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = css`
  display: flex;
  align-items: center;
`;

export const InfoWrapper = css`
  margin-left: 1.875rem;
`;

export const Image = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Info = css`
  margin-bottom: 0.5rem;
`;

export const Name = css`
  color: #414141;
  font-weight: bold;
  font-size: ${theme.fonts.h5};
`;

export const Date = css`
  color: #a5a5a5;
  font-size: ${theme.fonts.h6};
  margin-left: 1rem;
`;

export const Line = css`
  width: 100%;
  height: 1px;
  background: #dadada;
  margin: 2rem 0;
  @media (max-width: 1200px) {
    margin: 1rem 0;
  }
`;

export const ButtonWrapper = css`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const attend = css`
  color: #b1b1b1;
`;
