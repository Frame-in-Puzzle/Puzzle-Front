/** @jsxImportSource @emotion/react */
import { useTargetOnScreen } from "../../../Hooks/useTargetOnScreen";
import * as S from "./Style";

function Section4() {
  const { containerRef, isVisible } = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
    <div css={S.Positioner} ref={containerRef}>
      <div css={S.MainTextWrapper[isVisible]}>
        <div css={S.MainText}>PUZZLE 를 왜 사용해야 할까요?</div>
        <div css={S.SubText}>
          프로젝트를 전시하고 나와 맞는 새로운 프로젝트를 찾아볼 수 있어요.
        </div>
      </div>
      <div css={S.ContainerWrapper}>
        <div css={S.Container}>
          <div css={S.TextWrapper}>
            <div css={S.MainText}>SIMPLE</div>
            <div css={S.SubText}>
              복잡한 프로젝트 설명은 이제 그만!
              <br /> 간편하게 정리해서 프로젝트를 소개해요.
            </div>
          </div>
        </div>
        <div css={S.Container}>
          <div css={S.TextWrapper}>
            <div css={S.MainText}>COMVENIENT</div>
            <div css={S.SubText}>
              새로운 팀원, 참여하고 싶은 프로젝트를
              <br />
              빠르게 찾아볼 수 있어요
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
