/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";

interface ButtonProps {
  /** 버튼 안의 내용을 의미합니다. */
  children: React.ReactNode;
  /** 버튼의 생김새를 설정합니다. */
  theme:
    | "RedButton"
    | "TextButton"
    | "BlackButton"
    | "CircleButton"
    | "OutlinedButton"
    | "GrayButtonWithWhiteText"
    | "GrayButtonWithBlackText"
    | "GrayTextButton"
    | "DarkGrayTextButton"
    | "LightBlackTextButton"
    | "BlackTextButtonWithUnderline"
    | "WhiteButtonWithBlackText"
    | "BlackButtonWithWhiteText"
    | "GrayButtonWithBlackTextNoHover"
    | "BlackButtonWithWithTextNoHover";
  /** 버튼의 사이즈를 설정합니다. */
  size: "Big" | "Medium" | "Regular" | "Small" | "Custom";
  /** 버튼의 폰트사이즈를 설정합니다. */
  fontSize: "h6" | "h5" | "h4" | "h3" | "h2" | "h1";
  /** 버튼의  font-weight를 설정합니다. */
  fontWeight:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  /** 버튼을 클릭했을 때 호출할 함수입니다. */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 Box-Shadow 속성의 유무를 설정합니다. */
  isShadow: "Yes" | "No";
  /** 버튼을 비활성화를 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 버튼의 높이를 임의로 설정합니다. */
  height?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  theme,
  size,
  fontSize,
  fontWeight,
  children,
  onClick,
  isShadow,
  disabled,
  width,
  height,
}) => {
  return (
    <button
      css={[
        S.ButtonStyle,
        S.themes[theme],
        S.sizes[size],
        S.fontSizes[fontSize],
        S.shadow[isShadow],
        S.fontWeight[fontWeight],
        { width, height },
      ]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
