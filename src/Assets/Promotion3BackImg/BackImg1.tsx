import * as React from "react";

function BackImg1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={526} height={496} fill="none" {...props}>
      <g filter="url(#prefix__filter0_dii_1912_62)">
        <rect
          x={33}
          y={21}
          width={460}
          height={430}
          rx={11.336}
          fill="#E9F3E0"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_dii_1912_62"
          x={0.503}
          y={0.712}
          width={524.993}
          height={494.993}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={2.267}
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1912_62"
          />
          <feOffset dy={12.209} />
          <feGaussianBlur stdDeviation={15.115} />
          <feColorMatrix values="0 0 0 0 0.533333 0 0 0 0 0.670588 0 0 0 0 0.427451 0 0 0 0.3 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1912_62"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1912_62"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-8.139} />
          <feGaussianBlur stdDeviation={5.087} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.270588 0 0 0 0 0.470588 0 0 0 0 0.113725 0 0 0 0.2 0" />
          <feBlend in2="shape" result="effect2_innerShadow_1912_62" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-3.052} />
          <feGaussianBlur stdDeviation={2.035} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
          <feBlend
            in2="effect2_innerShadow_1912_62"
            result="effect3_innerShadow_1912_62"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoBackImg1 = React.memo(BackImg1);
export default MemoBackImg1;
