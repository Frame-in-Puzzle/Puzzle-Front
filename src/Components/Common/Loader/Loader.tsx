import { memo } from "react";
import * as S from "./Style";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div css={S.LoaderWrapper}>
      <ReactLoading type="spin" color="#434343" />
    </div>
  );
};

export default memo(Loader);
