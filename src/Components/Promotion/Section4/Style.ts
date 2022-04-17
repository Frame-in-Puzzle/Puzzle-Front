import { css, keyframes } from "@emotion/react";
import { theme } from "../../../Styles/theme";

export const Positioner = css`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f0f8ff;
  overflow: hidden;
`;

export const floating = keyframes`
    from {
     transform: translateY(-50%);
     opacity: 0;
    }
    to{
     transform: translateY(0);
     opacity: 1;

    }
 `;

export const MainTextWrapper = {
  true: css`
    animation-name: ${floating};
    animation-duration: 1.5s;
    animation-duration: leaner;
    animation-direction: alternate;
    animation-fill-mode: forwards;
  `,
  false: css`
    opacity: 0;
  `,
};

export const TextWrapper = css`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 15%;
`;

export const MainText = css`
  font-size: ${theme.fonts.h3};
  font-weight: 800;
  text-align: center;
`;
export const SubText = css`
  font-size: ${theme.fonts.h5};
  text-align: center;
`;

export const ContainerWrapper = css`
  width: 1250px;
  height: 350px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Container = css`
  width: 570px;
  height: 350px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0px 32.3097px 80px #dbeeff,
    inset 0px -8.07741px 10.7699px rgba(255, 255, 255, 0.55),
    inset 0px -21.5398px 26.9247px #f3f3f3;
  border-radius: 20px;
`;
