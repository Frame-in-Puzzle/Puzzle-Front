import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 1200px;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const RightContainer = css`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Image = css`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 80px;
    height: 80px;
  }
`;

export const RightWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  @media (max-width: 1200px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

export const Name = css`
  font-weight: bold;
  font-size: ${theme.fonts.h4};
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1200px) {
    font-size: ${theme.fonts.h5};
  }
`;

export const Description = css`
  font-size: ${theme.fonts.h5};
  @media (max-width: 1200px) {
    font-size: ${theme.fonts.h6};
  }
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

export const Button = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
