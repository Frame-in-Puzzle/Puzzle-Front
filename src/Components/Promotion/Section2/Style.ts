import { css, keyframes } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffeed;
  overflow: hidden;
`;

export const MainWarpper = css`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  margin-right: 10%;
`;

export const MainSectionWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainSection = css`
  display: flex;
  align-items: center;
  font-size: ${theme.fonts.h4};
  font-weight: 700;
`;

export const floating = keyframes`
    from {
     transform: translateX(-50%)
    }

    to{
     transform: translateX(0)
    }
 `;

export const ManWarpper = css`
  animation-name: ${floating};
  animation-duration: 2s;
  animation-duration: leaner;
  animation-direction: alternate;
  animation-fill-mode: forwards;
`;
