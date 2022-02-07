import * as React from "react";
function ProfileImg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={290} height={290} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_938_148)">
        <circle
          cx={145}
          cy={145}
          r={123.5}
          fill="url(#prefix__pattern0)"
          stroke="#fff"
          strokeWidth={3}
        />
      </g>
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0_938_148"
            transform="matrix(.00085 0 0 .00085 0 -.143)"
          />
        </pattern>
        <filter
          id="prefix__filter0_d_938_148"
          x={0}
          y={0}
          width={290}
          height={290}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_938_148"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_938_148"
            result="shape"
          />
        </filter>
        <image
          id="prefix__image0_938_148"
          width={1181}
          height={1519}
        />
      </defs>
    </svg>
  );
}
const MemoProfileImg = React.memo(ProfileImg);
export default MemoProfileImg;