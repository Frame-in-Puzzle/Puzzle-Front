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
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

export const MainSectionWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainSection = css`
  font-size: ${theme.fonts.h3};
  font-weight: 700;
`;
export const SubText = css`
  font-size: ${theme.fonts.h5};
`;

export const floating = keyframes`
    from {
     transform: translateX(-50%)
    }

    to{
     transform: translateX(0)
    }
    

 `;

export const ManWarpper = {
  true: css`
    animation-name: ${floating};
    animation-duration: 3s;
    animation-duration: leaner;
    animation-direction: alternate;
    animation-fill-mode: forwards;
  `,
  false: css`
    opacity: 0;
  `,
};
