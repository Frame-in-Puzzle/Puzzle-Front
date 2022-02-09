/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";

interface InputProps {
  /** Input의 type을 설정합니다. */
  type:
    | "text"
    | "password"
    | "date"
    | "month"
    | "checkbox"
    | "email"
    | "file"
    | "hidden";
  /** Input의 종류를 설정합니다. */
  theme:
    | "ProfileRegistrationPageInput"
    | "WritePageInput"
    | "ProfileModifyPageInput";
  /** Input의 placehoder값을 설정합니다 */
  placeholder?: string;
  /** Input의 폰트사이즈를 설정합니다. */
  fontSize: "h6" | "h5" | "h4" | "h3" | "h2" | "h1";
}

const Input: React.FC<InputProps> = ({
  theme,
  type,
  placeholder,
  fontSize,
}) => {
  return (
    <input
      css={[S.Themes[theme], S.fontSizes[fontSize]]}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
