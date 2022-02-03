import { css } from "@emotion/react";
import { theme } from "../../Styles/theme";

export const ButtonStyle = css`
  outline: none;
  border: none;
  cursor: pointer;
`;

export const themes = {
  BlackButtonWithShadow: css`
    background: #000000;
    border-radius: 10px;
    color: #ffffff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    &:hover {
      background: #b2b2b2;
    }
  `,
  RedButton: css`
    background: #ec8080;
    border-radius: 10px;
    color: #ffffff;
    &:hover {
      background: #f2a6a6;
    }
  `,
  TextButton: css`
    background: #ffffff;
    color: #000000;
    &:hover {
      color: #8c8c8c;
    }
  `,
  BlackButton: css`
    color: #ffffff;
    background: #000000;
    border-radius: 10px;
    &:hover {
      background: #b2b2b2;
    }
  `,
  CircleButton: css`
    background: #000000;
    color: #ffffff;
    border-radius: 50px;
  `,
  OutlinedButton: css`
    background: #ffffff;
    color: #000000;
    border: 2px solid #000000;
    border-radius: 10px;
    &:hover {
      background: #000000;
      color: #ffffff;
    }
  `,
  GrayButtonWithWhiteText: css`
    color: #ffffff;
    background: #c6c6c6;
    border-radius: 5px;
    &:hover {
      background: #000000;
    }
  `,
  GrayButtonWithGrayText: css`
    color: #ffffff;
    background: #ececec;
    border-radius: 5px;
  `,
  GrayButtonWithBlackText: css`
    color: #535353;
    background: #e3e3e3;
    border-radius: 5px;
    &:hover {
      background: #4f4f4f;
      color: #ffffff;
    }
  `,
  GrayButtonWithBlackTextShadow: css`
    color: #000000;
    background: #e3e3e3;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
    &:hover {
      background: #4f4f4f;
      color: #ffffff;
    }
  `,
  BlackButtonWithBlackTextShadow: css`
    color: #ffffff;
    background: #000000;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
    &:hover {
      background: #b2b2b2;
    }
  `,
  GrayTextButton: css`
    color: #717171;
    background: #ffffff;
    border-radius: 10px;
    &:hover {
      background: #f7f7f7;
    }
  `,
  DarkGrayTextButton: css`
    background: #ffffff;
    color: #858585;
    &:hover {
      color: #000000;
    }
  `,
  LightBlackTextButton: css`
    color: #414141;
    background: #ffffff;
    &:hover {
      color: #959595;
    }
  `,
  BlackTextButtonWithUnderline: css`
    color: #000000;
    background: #ffffff;
    border-bottom: 1px solid #000000;
    &:hover {
      color: #c2c2c2;
      border-bottom: 1px solid #c2c2c2;
    }
  `,
};

//export const themes = {
//   Enroll: css`
//     background: #000000;
//     border-radius: 10px;
//     color: #ffffff;
//     font-size: ${theme.fonts.h4};
//     &:hover {
//       background: #b2b2b2;
//     }
//   `,
//   Write: css`
//     background: #000000;
//     border-radius: 10px;
//     color: #ffffff;
//     font-size: ${theme.fonts.h4};
//     &:hover {
//       background: #b2b2b2;
//     }
//   `,
//   Join: css`
//     background: #000000;
//     border-radius: 10px;
//     color: #ffffff;
//     font-size: ${theme.fonts.h5};
//     &:hover {
//       background: #b2b2b2;
//     }
//   `,
//   Accept: css`
//     background: #000000;
//     border-radius: 10px;
//     color: #ffffff;
//     font-size: ${theme.fonts.h4};
//   `,
//   Check: css`
//     width: 500px;
//     height: 60px;
//     font-size: ${theme.fonts.h4};
//     background: #000000;
//     color: #ffffff;
//     border-radius: 50px;
//   `,
//   Withdrawal: css`
//     color: #ffffff;
//     font-size: ${theme.fonts.h5};
//     background: #ec8080;
//     border-radius: 5px;
//     width: 135px;
//     height: 46px;
//     &:hover {
//       background: #f2a6a6;
//     }
//   `,
//   Login: css`
//     background: #ffffff;
//     color: #000000;
//     border: 2px solid #000000;
//     font-size: ${theme.fonts.h5};
//     border-radius: 10px;
//     &:hover {
//       background: #000000;
//       color: #ffffff;
//     }
//   `,
//   ImageUpload: css`
//     width: 209px;
//     height: 50px;
//     color: #ffffff;
//     background: #000000;
//     font-size: ${theme.fonts.h5};
//     border-radius: 10px;
//     &:hover {
//       background: #7c7c7c;
//     }
//   `,
//   ImageDelete: css`
//     width: 209px;
//     height: 50px;
//     color: #717171;
//     background: #ffffff;
//     border-radius: 10px;
//     font-size: ${theme.fonts.h5};
//     &:hover {
//       background: #f7f7f7;
//     }
//   `,
//   Cancel: css`
//     color: #000000;
//     background: #e3e3e3;
//     border-radius: 10px;
//     font-size: ${theme.fonts.h4};
//     &:hover {
//       background: #4f4f4f;
//       color: #ffffff;
//     }
//   `,
//   JoinCancel: css`
//     color: #ffffff;
//     background: #c6c6c6;
//     border-radius: 5px;
//     font-size: ${theme.fonts.h5};
//     &:hover {
//       background: #000000;
//     }
//   `,
//   NewWrite: css``,
//   Reset: css``,
//   Edit: css``,
//   WriteEdit: css``,
//   WriteDelete: css``,
// };

export const sizes = {
  Big: css`
    ${theme.buttons.Big}
  `,
  Medium: css`
    ${theme.buttons.Medium}
  `,
  Regular: css`
    ${theme.buttons.Regular}
  `,
  Small: css`
    ${theme.buttons.Small}
  `,
  Custom: css``,
};

export const fontSizes = {
  h6: css`
    font-size: ${theme.fonts.h6};
  `,
  h5: css`
    font-size: ${theme.fonts.h5};
  `,
  h4: css`
    font-size: ${theme.fonts.h4};
  `,
  h3: css`
    font-size: ${theme.fonts.h3};
  `,
  h2: css`
    font-size: ${theme.fonts.h2};
  `,
  h1: css`
    font-size: ${theme.fonts.h1};
  `,
};
