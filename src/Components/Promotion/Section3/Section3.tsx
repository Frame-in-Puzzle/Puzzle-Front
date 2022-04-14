/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import * as I from "../../../Assets/index";

function Section3() {
  return (
    <div css={S.Positioner}>
      <div>
        <div css={S.MainText}>
          쉽고, 간편하게 <br />
          나와 맞는 프로젝트 팀원을 <br />
          만나보세요!
        </div>
        <div>
          신청한 사람들을 수락,거절 할 수 있고,
          <br />
          신청자는 프로젝트 신청 현황을 확인할 수 있습니다.
        </div>
      </div>
      <div css={S.ImgWrapper}>
        <I.BackImg1 css={S.Img1} />
        <I.BackImg2 css={S.Img2} />
        <img src="img/BackImg3.png" alt="" css={S.Img3} />
        <I.BackImg4 css={S.Img4} />
      </div>
    </div>
  );
}

export default Section3;
