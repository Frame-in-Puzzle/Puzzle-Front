import { css } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  width: 100%;
  height: 150px;
  padding: 4% 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightContainer = {
  Login: css`
    width: 200px;
    font-size: ${theme.fonts.h5};
    display: flex;
    justify-content: space-between;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
    }
  `,
  NoneLogin: css``,
  Write: css`
    font-size: ${theme.fonts.h5};
    display: flex;
    justify-content: space-between;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
    }
  `,
};

export const ProfileWrapper = css`
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
