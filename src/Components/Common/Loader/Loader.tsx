import { memo } from "react";
import * as S from "./Style";
import ReactLoading from "react-loading";

const Loader = (ref: any) => {
  return (
    <div css={S.LoaderWrapper} ref={ref}>
      <ReactLoading type="spin" color="#434343" />
    </div>
  );
};

export default memo(Loader);
